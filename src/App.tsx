import {AnimatePresence, motion} from 'framer-motion';
import {Timer} from 'lucide-react';
import React, {useState} from 'react';
import logo from './assets/Logo.png'

// Farben basierend auf deinem Logo
const colors = {
    orange: '#FF8A00',
    darkBg: '#0F0F0F',
    accent: '#FF4D00'
};

type Scene = 'STARTING' | 'PAUSE' | 'ENDING' | 'CHATTING';

const StreamOverlay: React.FC = () => {
    const [scene, setScene] = useState<Scene>('STARTING');

    // Text-Mapping für die Szenen
    const content = {
        STARTING: "Gleich geht's los...",
        PAUSE: "Kurze Pause",
        ENDING: "Vielen Dank fürs Zuschauen!",
        CHATTING: "Just Chatting"
    };

    return (
        <div className="fixed inset-0 bg-[#0a0a0a] text-white overflow-hidden font-sans">

            {/* Animierter Hintergrund-Glow */}
            <motion.div
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1]
                }}
                transition={{duration: 8, repeat: Infinity}}
                className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px]"
                style={{backgroundColor: colors.orange}}
            />

            {/* Haupt-Rahmen (Orange Border-Effekt) */}
            <div className="absolute inset-8 border-2 border-orange-500/30 rounded-lg pointer-events-none">
                <div className="absolute inset-0 border border-orange-500/10 m-2"/>
            </div>

            {/* Content-Bereich */}
            <div className="flex flex-col items-center justify-center h-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={scene}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -20}}
                        className="text-center"
                    >
                        {/* Platzhalter für dein Logo */}
                        <div className="mb-8 relative">
                            <motion.div
                                animate={{rotate: 360}}
                                transition={{duration: 20, repeat: Infinity, ease: "linear"}}
                                className="absolute inset-0 blur-2xl opacity-20 bg-orange-500 rounded-full"
                            />
                            <img src={logo} alt="Logo" className="w-64 h-64 relative z-10"/>
                        </div>

                        <h1 className="text-7xl font-black uppercase tracking-tighter italic italic-shadow">
                            {content[scene]}
                        </h1>

                        {/* Dynamische Elemente je nach Szene */}
                        {scene === 'STARTING' && (
                            <div className="mt-6 flex items-center gap-4 text-2xl font-mono text-orange-400">
                                <Timer size={32}/>
                                <span>STARTET IN 04:59</span>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Footer / Socials Bar */}
            <div className="absolute bottom-16 left-0 w-full flex justify-around items-center px-20">
                <div className="flex gap-10 text-xl font-bold italic">
                    <span className="text-orange-500">TWITCH.TV/GRONZUL</span>
                    <span className="text-orange-500">YOUTUBE.COM/@GRONZUL</span>
                </div>
                <div className="bg-orange-600 px-6 py-2 -skew-x-12">
                    <span className="block skew-x-12 font-bold">LATEST FOLLOWER: GAMER123</span>
                </div>
            </div>

            {/* Nur für Testzwecke: Szenen-Switcher (im OBS ausblenden!) */}
            <div className="absolute top-4 right-4 flex gap-2 opacity-20 hover:opacity-100 transition-opacity">
                {(['STARTING', 'PAUSE', 'ENDING', 'CHATTING'] as Scene[]).map(s => (
                    <button key={s} onClick={() => setScene(s)} className="bg-white text-black text-xs p-1 rounded">
                        {s}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default StreamOverlay;