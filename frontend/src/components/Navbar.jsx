export default function Navbar(){
    return (
        <nav className="flex justify-between items-center w-full p-6 bg-transparent">
            <div className="text-2xl font-bold text-brand-pale drop-shadow-[0_0_8px_rgba(112,145,230,0.8)]">
                AI TRANSLATOR TOOL
            </div>
            <div className="flex space-x-6">
            <a href="https://x.com/AbhitekSingh" target="_blank" rel="noopener noreferrer" className="text-brand-pale hover:text-blue-300 transition-colors duration-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">X</a>
            <a href="https://www.linkedin.com/in/abhitek-singh-99bb93257/" target="_blank" rel="noopener noreferrer" className="text-brand-pale hover:text-blue-300 transition-colors duration-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">LinkedIn</a>
            <a href="https://github.com/abhiteksingh" target="_blank" rel="noopener noreferrer" className="text-brand-pale hover:text-blue-300 transition-colors duration-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">Github</a>
    </div>
        </nav>
    );
}