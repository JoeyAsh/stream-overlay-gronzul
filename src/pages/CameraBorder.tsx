import {motion} from 'framer-motion';
import React from 'react';
import {colors} from "../utils/ColorConstants.ts";


const CameraBorder: React.FC = () => {
    return (
        <div className="fixed inset-0 pointer-events-none">
            {/* Main Border Frame */}
            <div className="absolute inset-0 p-4">
                {/* Outer Glow Effect */}
                <motion.div
                    animate={{
                        opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 rounded-3xl"
                    style={{
                        boxShadow: `0 0 40px ${colors.orange}, inset 0 0 40px ${colors.orange}`,
                    }}
                />

                {/* Solid Border */}
                <div
                    className="absolute inset-0 rounded-3xl border-4"
                    style={{borderColor: colors.orange}}
                />

                {/* Inner Border */}
                <div
                    className="absolute inset-2 rounded-3xl border-2"
                    style={{borderColor: `${colors.accent}80`}}
                />

                {/* Animated Shine Effect - Top Left to Bottom Right */}
                <motion.div
                    animate={{
                        x: ['-100%', '200%'],
                        y: ['-100%', '200%'],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 2
                    }}
                    className="absolute top-0 left-0 w-32 h-32 rounded-full blur-2xl"
                    style={{
                        background: `radial-gradient(circle, ${colors.orange}ff 0%, ${colors.orange}00 70%)`,
                    }}
                />

                {/* Corner Accents */}
                {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((corner) => {
                    const positions = {
                        'top-left': 'top-2 left-2',
                        'top-right': 'top-2 right-2',
                        'bottom-left': 'bottom-2 left-2',
                        'bottom-right': 'bottom-2 right-2'
                    };

                    return (
                        <motion.div
                            key={corner}
                            animate={{
                                opacity: [0.6, 1, 0.6],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: corner.includes('right') ? 0.5 : 0
                            }}
                            className={`absolute ${positions[corner as keyof typeof positions]} w-8 h-8`}
                        >
                            <div
                                className="w-full h-full"
                                style={{
                                    background: colors.orange,
                                    clipPath: corner.startsWith('top-left')
                                        ? 'polygon(0 0, 100% 0, 0 100%)'
                                        : corner.startsWith('top-right')
                                            ? 'polygon(100% 0, 100% 100%, 0 0)'
                                            : corner.startsWith('bottom-left')
                                                ? 'polygon(0 0, 0 100%, 100% 100%)'
                                                : 'polygon(100% 0, 100% 100%, 0 100%)'
                                }}
                            />
                        </motion.div>
                    );
                })}

                {/* Rotating Shine Ring */}
                <motion.div
                    animate={{rotate: 360}}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute inset-0 rounded-3xl"
                    style={{
                        background: `conic-gradient(from 0deg, transparent 0deg, ${colors.orange}80 20deg, transparent 40deg)`,
                    }}
                />
            </div>
        </div>
    );
};

export default CameraBorder;
