import { motion } from 'framer-motion';
import React from 'react';

const colors = {
    orange: '#FF8A00',
    darkBg: '#0F0F0F',
    accent: '#FF4D00'
};

const CameraBorder: React.FC = () => {
    return (
        <div className="fixed inset-0 pointer-events-none">
            <div className="absolute inset-0 p-4">
                {/* Base Border */}
                <div
                    className="absolute inset-0 rounded-3xl border-4"
                    style={{ borderColor: `${colors.orange}40` }}
                />

                {/* Animated Gradient Border - walks around */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute inset-0 rounded-3xl"
                    style={{
                        background: `conic-gradient(
                            from 0deg,
                            transparent 0deg,
                            transparent 60deg,
                            ${colors.orange} 90deg,
                            ${colors.accent} 100deg,
                            ${colors.orange} 110deg,
                            transparent 140deg,
                            transparent 360deg
                        )`,
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        maskComposite: 'exclude',
                        padding: '4px'
                    }}
                />

                {/* Outer Glow that follows the shine */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute inset-0 rounded-3xl"
                    style={{
                        background: `conic-gradient(
                            from 0deg,
                            transparent 0deg,
                            transparent 70deg,
                            ${colors.orange}80 90deg,
                            ${colors.orange}ff 100deg,
                            ${colors.orange}80 110deg,
                            transparent 130deg,
                            transparent 360deg
                        )`,
                        filter: 'blur(20px)',
                    }}
                />

                {/* Corner Accents */}
                {[
                    { corner: 'top-left', clip: 'polygon(0 0, 100% 0, 0 100%)', pos: 'top-2 left-2' },
                    { corner: 'top-right', clip: 'polygon(100% 0, 100% 100%, 0 0)', pos: 'top-2 right-2' },
                    { corner: 'bottom-left', clip: 'polygon(0 0, 0 100%, 100% 100%)', pos: 'bottom-2 left-2' },
                    { corner: 'bottom-right', clip: 'polygon(100% 0, 100% 100%, 0 100%)', pos: 'bottom-2 right-2' }
                ].map(({ corner, clip, pos }, idx) => (
                    <motion.div
                        key={corner}
                        animate={{
                            opacity: [0.6, 1, 0.6],
                            scale: [1, 1.15, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: idx * 0.3
                        }}
                        className={`absolute ${pos} w-8 h-8`}
                    >
                        <div
                            className="w-full h-full"
                            style={{
                                background: colors.orange,
                                clipPath: clip
                            }}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CameraBorder;
