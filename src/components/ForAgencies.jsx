import React from 'react';
import { motion } from 'framer-motion';

const ForAgencies = () => {
    return (
        <section className="section" style={{ background: 'var(--color-surface)', padding: '6rem 0' }}>
            <div className="container" style={{ padding: '0 1.5rem' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'center'
                }} className="responsive-grid">

                    <motion.div
                            initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ fontSize: 'clamp(1.5rem, 8vw, 2.5rem)', lineHeight: 1.1, marginBottom: '2rem', color: 'var(--color-text)', textTransform: 'uppercase' }}>
                            Partner para <br />
                            <span style={{
                                background: 'var(--gradient-main)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>agencias y marketing</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{
                            padding: '1.5rem 0',
                            borderLeft: window.innerWidth < 768 ? 'none' : '1px solid rgba(0,0,0,0.1)',
                            borderTop: window.innerWidth < 768 ? '1px solid rgba(0,0,0,0.1)' : 'none',
                            marginTop: window.innerWidth < 768 ? '1.5rem' : '0'
                        }}
                    >
                        <ul style={{ listStyle: 'none', space: 'y-4' }}>
                            {[
                                "No competimos con agencias.",
                                "Actuamos como partner tecnológico y creativo.",
                                "Proporcionamos herramientas, producción y soporte.",
                                "Más capacidad sin aumentar estructura.",
                                "Más margen, menos fricción."
                            ].map((item, i) => (
                                <li key={i} style={{
                                    marginBottom: '1.5rem',
                                    fontSize: '1.1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: 'var(--color-text)'
                                }}>
                                    <span style={{
                                        width: '6px',
                                        height: '6px',
                                        background: 'var(--color-primary)',
                                        borderRadius: '0',
                                        marginRight: '1rem',
                                        flexShrink: 0
                                    }} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>
            </div>
            <style>{`
        @media (max-width: 768px) {
          .responsive-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
        </section>
    );
};

export default ForAgencies;
