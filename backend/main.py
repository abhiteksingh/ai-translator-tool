import os;
from langchain_groq import ChatGroq
from fastapi import FastAPI , HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel , Field
from typing import List
from dotenv import load_dotenv
from langchain_core.prompts import ChatPromptTemplate

load_dotenv()

app=FastAPI(title='AI Translator App')

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TranslationRequest(BaseModel):
        text:str
        language:str

class TranslationResponse(BaseModel):
        translated_text : str = Field(description="The accurate, naturally flowing translation of the input text into the requested target language. Maintain the original tone.")
        key_meanings: List[str] = Field(description="A list of 3 to 5 key vocabulary definitions, grammatical insights, or cultural nuances extracted from the translation. Format each as a short, concise phrase (e.g., 'Bonjour - Used for formal greetings')")

llm = ChatGroq(model='llama-3.3-70b-versatile',temperature=0.5)

structured_llm = llm.with_structured_output(TranslationResponse)

system_prompt= """ You are an expert polyglot and linguistic analyst. 
Your task is to translate the user's input text into the requested target language while perfectly preserving the original tone, context, and intent.

After translating, you must extract 3 to 5 "key meanings" from the translation. These should highlight important vocabulary words, grammatical structures, or cultural nuances that would help someone understand the language better. Format each meaning as a short, concise phrase.

CRITICAL INSTRUCTIONS:
1. You must respond ONLY with raw, valid JSON. 
2. Do not include any conversational filler, pleasantries, or markdown formatting blocks (e.g., do not wrap the output in ```json ... ```).
3. The JSON must strictly adhere to this exact schema:
{{
  "translated_text": "The full translated string here",
  "key_meanings": ["Phrase 1 - Meaning", "Phrase 2 - Meaning", "Phrase 3 - Meaning"]
}} """

prompt_template = ChatPromptTemplate.from_messages([
        ("system",system_prompt),
        ("user", "Translate the following text into {language}. Here is my draft:\n\n{text}")
])

chain = prompt_template | structured_llm 

@app.post("/api/translate",response_model=TranslationResponse)
async def translate_text(request:TranslationRequest):
        try:
                print(f"Incoming request: {request.text[:20]} ... Language:{request.language}")
                result=chain.invoke({
                        "text":request.text,
                        "language":request.language
                })
                return result
        except Exception as e:
                print(f"Error processing text : {e}")
                raise HTTPException(status_code=500,detail=str(e))
        