import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <>
            {/* 1. Main Visual Section ("The Slider") */}
            <section className="hero-visual" style={{
                position: 'relative',
                overflow: 'hidden',
                minHeight: '40vh', // Reduced height for initial slider
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#FF3C4B'
            }}>
                <motion.div
                    animate={{
                        scale: [1, 1.02, 1]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(/images/slider-banner.png)',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        zIndex: 0
                    }}
                />
            </section>
        </>
    );
};

export default Hero;
