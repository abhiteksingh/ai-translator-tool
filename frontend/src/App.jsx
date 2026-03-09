import React, { useState } from 'react';
import Navbar from './components/Navbar';

function App(){
    const [inputText, setInputText] = useState('');
    const [language, setLanguage] = useState('Spanish');
    const [translatedText, setTranslatedText] = useState('');
    const [keyMeanings, setKeyMeanings] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleTranslation = async () => {
        if(!inputText.trim()) return;

        setIsLoading(true);
        setTranslatedText("");
        setKeyMeanings([]);

        try {
            const response= await fetch("http://localhost:8000/api/translate",{
                method:'POST',
                headers : {
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify({
                    text:inputText,
                    language:language,
                }),
            });

            if(!response.ok){
                throw new Error('Network Response Was Not Ok');
            }

            const data=await response.json();

            setTranslatedText(data.translated_text);
            setKeyMeanings(data.key_meanings);
        }
        catch(error){
            console.error("Error correcting text:",error);
            setTranslatedText("An error occurred while connecting to the AI. Is the server running?");
        }
        finally{
            setIsLoading(false);
        }
    }

    return (
        <div className="relative min-h-screen bg-neutral-950 text-neutral-200 overflow-hidden">
            <div className='relative z-10'>
                <Navbar/>
                <main className='flex p-8 min-h-[80vh] items-center px-28 py-23 gap-x-18'>
                    
                    {/* INPUT CARD */}
                    <div className="w-full h-[650px] bg-neutral-900 border border-neutral-800 p-12 rounded-3xl shadow-2xl relative z-10">
                        <label className="text-neutral-500 text-xs font-black uppercase tracking-widest mb-3 block"> Input Text </label>
                        <div className='relative group'>
                            <textarea
                                className="w-full h-80 bg-black border border-neutral-800 rounded-xl p-4 text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:border-emerald-500/50 transition-colors mb-3 resize-none"
                                placeholder="Paste your draft here..."
                                value={inputText}
                                onChange={(e)=> setInputText(e.target.value)}
                            />
                        </div>
                        
                        <div className="w-full border-t border-neutral-800 my-8"></div>
                        
                        <div className='flex flex-row items-end gap-6 w-full'>
                            <div className="flex-1">
                                <label className="text-neutral-500 text-xs font-black uppercase tracking-widest mb-3 block"> Language </label>
                                <select 
                                    className="w-full bg-black border border-neutral-800 rounded-lg p-3 text-sm text-neutral-200 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 cursor-pointer hover:bg-neutral-950 transition-all"
                                    value={language}
                                    onChange={(e)=> setLanguage(e.target.value)}
                                >
                                    <option className="bg-neutral-900 text-neutral-200" value="Hindi">Hindi</option>
                                    <option className="bg-neutral-900 text-neutral-200" value="French">French</option>
                                    <option className="bg-neutral-900 text-neutral-200" value="German">German</option>
                                    <option className="bg-neutral-900 text-neutral-200" value="Spanish">Spanish</option>
                                    <option className="bg-neutral-900 text-neutral-200" value="Japanese">Japanese</option>
                                </select>
                            </div>
                            <button 
                                onClick={handleTranslation} 
                                disabled={isLoading} 
                                className='bg-emerald-500 hover:bg-emerald-400 disabled:bg-neutral-700 disabled:text-neutral-500 text-black font-black px-10 py-3 rounded-xl transition-all shadow-lg shadow-emerald-500/10 tracking-widest hover:scale-105 active:scale-95'
                            >
                                {isLoading ? "Thinking..." : "Translate"}
                            </button>
                        </div>
                    </div>

                    {/* OUTPUT CARD */}
                    <div className="w-full h-[650px] bg-neutral-900 border border-neutral-800 p-12 rounded-3xl shadow-2xl relative z-10">
                        <label className="text-neutral-500 text-xs font-black uppercase tracking-widest mb-3 block"> Translated Text </label>
                        <div className={`w-full h-80 bg-black border border-neutral-800 rounded-xl p-4 text-neutral-200 focus:outline-none mb-3 overflow-y-auto ${!translatedText ? 'text-neutral-500' : ''}`}> 
                            {translatedText ? translatedText : 'Your translated text will appear here...'}
                        </div>
                        
                        {keyMeanings.length > 0 && (
                            <div className="w-full border-t border-neutral-800 mt-12 pt-10">
                                <span className='text-neutral-500 text-xs font-black uppercase tracking-widest mb-3 block'> Key Meanings </span>
                                <div className='flex flex-wrap gap-2'>
                                    {keyMeanings.map((meaning, index) => (
                                        <span key={index} className='bg-emerald-950 text-emerald-400 text-[11px] font-bold px-3 py-1.5 rounded-lg border border-emerald-800/50'> 
                                            {meaning} 
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;