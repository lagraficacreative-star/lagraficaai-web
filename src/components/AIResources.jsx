import React from 'react';
import { motion } from 'framer-motion';

const AIResources = () => {
    const resources = [
        {
            title: '🤖 AI Agents',
            description: 'Agentes de inteligencia artificial capaces de responder a clientes, automatizar tareas y gestionar conversaciones en web, WhatsApp o chat.',
            buttonLabel: 'Solicitar acceso'
        },
        {
            title: '🌐 AI Website Builder',
            description: 'Herramientas para generar páginas web completas utilizando inteligencia artificial en cuestión de minutos.',
            buttonLabel: 'Probar pronto'
        },
        {
            title: '🎨 Generadores creativos',
            description: 'Plataformas para generar imágenes, diseños y contenido visual con inteligencia artificial.',
            examples: ['Generación de imágenes', 'Creación de contenido', 'Ideas creativas']
        },
        {
            title: '⚙️ Automatización con IA',
            description: 'Soluciones que permiten automatizar procesos de negocio, atención al cliente o generación de contenido mediante inteligencia artificial.'
        }
    ];

    return (
        <section className="section" style={{ background: 'var(--color-bg)', padding: '6rem 0', position: 'relative' }}>
            <div className="container" style={{ padding: '0 1.5rem', maxWidth: '1400px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '1000px', margin: '0 auto 4rem auto' }}>
                        <h2 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(1.5rem, 6vw, 2.5rem)',
                            lineHeight: 1.1,
                            marginBottom: '1.5rem',
                            color: 'var(--color-text)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            fontWeight: 700,
                        }}>
                            Recursos de Inteligencia Artificial
                        </h2>
                        <p style={{
                            color: 'var(--color-text)',
                            fontSize: '1.1rem',
                            opacity: 0.8,
                            lineHeight: 1.6,
                            marginBottom: '1rem'
                        }}>
                            En este apartado reunimos herramientas y plataformas basadas en inteligencia artificial que utilizamos para crear proyectos digitales, automatizar procesos y desarrollar soluciones innovadoras para empresas.
                        </p>
                        <p style={{
                            color: 'var(--color-text)',
                            fontSize: '1.1rem',
                            opacity: 0.8,
                            lineHeight: 1.6
                        }}>
                            Aquí encontrarás recursos para generar contenido, crear webs con IA, desarrollar agentes inteligentes y explorar nuevas posibilidades de la inteligencia artificial aplicadas al diseño, el marketing y los negocios.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem',
                    }}>
                        {resources.map((resource, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    background: '#FF3C4B',
                                    padding: '2.5rem',
                                    border: 'none',
                                    color: '#ffffff',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.06)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.02)';
                                }}
                            >
                                <h3 style={{
                                    color: '#ffffff',
                                    fontSize: '1.5rem',
                                    fontWeight: 700,
                                    marginBottom: '1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    {resource.title}
                                </h3>
                                <p style={{
                                    color: '#ffffff',
                                    opacity: 0.9,
                                    lineHeight: 1.6,
                                    marginBottom: '1.5rem',
                                    flexGrow: 1
                                }}>
                                    {resource.description}
                                </p>
                                
                                {resource.examples && (
                                    <div style={{ marginBottom: '1.5rem', flexGrow: 1 }}>
                                        <p style={{ color: '#ffffff', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Ejemplos:</p>
                                        <ul style={{ paddingLeft: '1.2rem', color: '#ffffff', opacity: 0.9, fontSize: '0.95rem' }}>
                                            {resource.examples.map((ex, i) => (
                                                <li key={i} style={{ marginBottom: '0.3rem' }}>{ex}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {resource.buttonLabel && (
                                    <div style={{ marginTop: 'auto' }}>
                                        <button style={{
                                            padding: '0.8rem 1.5rem',
                                            background: 'transparent',
                                            border: '1px solid #ffffff',
                                            color: '#ffffff',
                                            fontWeight: 600,
                                            fontSize: '0.9rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            cursor: 'pointer',
                                            width: '100%',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = '#ffffff';
                                            e.currentTarget.style.color = '#FF3C4B';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'transparent';
                                            e.currentTarget.style.color = '#ffffff';
                                        }}>
                                            {resource.buttonLabel}
                                        </button>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AIResources;
