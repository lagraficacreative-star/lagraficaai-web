import React from 'react';
import { motion } from 'framer-motion';

const CustomSolutions = () => {
    return (
        <section className="section" style={{
            position: 'relative',
            overflow: 'hidden',
            background: '#FF3C4B',
            padding: '4rem 0' // Reduced vertical padding
        }}>

            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                bottom: '-20%',
                right: '-10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(0,0,0,0.03) 0%, rgba(255,255,255,0) 70%)',
                borderRadius: '0',
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ padding: '4rem 2rem' }}>
                <motion.div
                    className="glass-panel"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{
                        padding: '2rem',
                        textAlign: 'center',
                        background: '#ffffff', // Clean white background to match Services
                        border: '1px solid rgba(0,0,0,0.05)',
                        borderBottom: '4px solid #FF3C4B', // Banner Red
                        borderRadius: '0',
                        width: '100%',
                        position: 'relative'
                    }}
                >
                    {/* Corner markers to match Services section */}
                    <div style={{ position: 'absolute', top: -1, left: -1, width: 20, height: 20, borderTop: '2px solid #999', borderLeft: '2px solid #999' }} />
                    <div style={{ position: 'absolute', top: -1, right: -1, width: 20, height: 20, borderTop: '2px solid #999', borderRight: '2px solid #999' }} />
                    <div style={{ position: 'absolute', bottom: -1, left: -1, width: 20, height: 20, borderBottom: '2px solid #999', borderLeft: '2px solid #999' }} />
                    <div style={{ position: 'absolute', bottom: -1, right: -1, width: 20, height: 20, borderBottom: '2px solid #999', borderRight: '2px solid #999' }} />

                    <span style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9rem',
                        letterSpacing: '0.1em',
                        color: 'var(--color-text-muted)',
                        marginBottom: '1.5rem',
                        display: 'block'
                    }}>ESCALABILIDAD Y CONTROL</span>

                    <h2 style={{
                        fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', // Smaller title
                        marginBottom: '0.5rem',
                        color: 'var(--color-text)'
                    }}>SOLUCIONES A MEDIDA</h2>

                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--color-text-muted)',
                        marginBottom: '2rem',
                        fontWeight: 500
                    }}>
                        Pídenos una prueba de una auditoria de Inteligencia artificial
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // Desktop will naturally fit 4 in a row if container allows
                        gap: '1rem',
                        marginTop: '4rem',
                        textAlign: 'left'
                    }}>
                        {[
                            { t: "Sistemas Personalizados", d: "Según estructura y necesidades.", color: '#ccff00' },   // Neon Yellow
                            { t: "Automatización", d: "Herramientas internas y apps privadas.", color: '#00ff41' },        // Neon Green
                            { t: "IA Entrenada", d: "Adaptada a cada contexto.", color: '#ff5f1f' },                       // Neon Orange
                            { t: "Evolución", d: "Tecnología diseñada para crecer.", color: '#00f0ff' }                    // Neon Blue/Cyan
                        ].map((item, i) => (
                            <div key={i} style={{
                                background: item.color,
                                padding: '1.25rem',
                                borderRadius: '0',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                color: '#000', // Dark text for contrast on neon
                                height: '100%' // Ensure equal height
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div>
                                    <h4 style={{
                                        fontSize: '1.2rem',
                                        marginBottom: '0.5rem',
                                        fontWeight: 700,
                                        lineHeight: 1.2,
                                        wordBreak: 'break-word'
                                    }}>{item.t}</h4>
                                    <p style={{
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        opacity: 0.9,
                                        lineHeight: 1.3
                                    }}>{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CustomSolutions;
