import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <>
            {/* 1. Main Visual Section ("The Slider") */}
        <section className="hero-section" style={{
            position: 'relative',
            overflow: 'hidden',
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#FF3C4B'
        }}>
            <motion.div
                animate={{
                    scale: [1, 1.05, 1]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/images/menu-button.png)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    zIndex: 0
                }}
            />
            {/* Minimal overlay if needed for text readability */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0,0,0,0.1)',
                zIndex: 1
            }} />

            {/* Content on top */}
            <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', marginTop: '6rem' }}>
                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        color: '#fff',
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', // Increased size
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em',
                        lineHeight: 1.1,
                        margin: '0 0 1.5rem 0',
                        maxWidth: '1200px'
                    }}>
                    Construyendo el futuro de lo digital
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ maxWidth: '900px', margin: '0 auto' }}
                >
                    <p style={{
                        color: '#fff',
                        fontSize: 'clamp(1.2rem, 2.2vw, 1.5rem)', // Increased size
                        lineHeight: 1.4,
                        marginBottom: '1.2rem',
                        fontWeight: 600
                    }}>
                        Somos un grupo de diseñadores, desarrolladores y creativos apasionados con crear experiencias de inteligencia artificial excepcionales.
                    </p>
                    <p style={{
                        color: 'rgba(255,255,255,0.9)',
                        fontSize: 'clamp(1.1rem, 1.8vw, 1.25rem)', // Increased size
                        lineHeight: 1.6,
                        fontWeight: 400
                    }}>
                        Cada proyecto es una oportunidad para crear experiencias de imagen, diseño, creatividad, marketing, páginas web y apps impulsadas por inteligencia artificial.
                    </p>
                </motion.div>
            </div>
        </section>
        <style>{`
            .hero-section {
                min-height: 60vh;
            }
            @media (min-width: 768px) {
                .hero-section {
                    min-height: 80vh;
                }
            }
        `}</style>
        </>
    );
};

export default Hero;
