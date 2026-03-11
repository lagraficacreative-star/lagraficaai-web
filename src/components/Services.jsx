import React from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        id: '01',
        title: 'PENSAMOS',
        subtitle: 'ESTRATEGIA Y DIRECCIÓN',
        description: 'Definimos la estrategia, la marca y la dirección creativa de cada proyecto. Combinamos visión y tecnología para tomar decisiones más precisas. La inteligencia artificial nos ayuda a analizar y optimizar cada paso. Sin estrategia no hay crecimiento.',
        color: '#ff00ff', // Neon Pink
        image: '/images/pensamosIA.png'
    },
    {
        id: '02',
        title: 'CREAMOS',
        subtitle: 'PRODUCCIÓN Y CONTENIDO',
        description: 'Desarrollamos diseño, motion, imágenes, páginas web y vídeos publicitarios con IA. Producción ágil, adaptable y coherente con la identidad de marca. Cada pieza responde a un objetivo claro. Creatividad enfocada a resultados.',
        color: '#00ffff', // Neon Cyan
        image: '/images/creamos.jpg'
    },
    {
        id: '03',
        title: 'AUTOMATIZAMOS',
        subtitle: 'TECNOLOGÍA Y EFICIENCIA',
        description: 'Diseñamos automatizaciones, agentes IA y aplicaciones propias. Optimizamos procesos y creamos sistemas que mejoran la eficiencia. Integramos la inteligencia artificial en el trabajo real. Tecnología convertida en ventaja competitiva.',
        color: '#ffdd00', // Neon Yellow
        image: '/images/automatizamos.jpg'
    }
];

const Services = () => {
    return (
        <section className="section" style={{ background: 'var(--color-bg)', padding: '0 0 4rem 0' }}>

            <div className="container" style={{ padding: '4rem 1.5rem 0 1.5rem' }}>
                {/* Header content for Services Section */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.5rem, 3.5vw, 3rem)',
                        color: '#FF3C4B',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        fontWeight: 700
                    }}>
                        SERVICIOS
                    </h2>
                </div>

                {/* Main "Card" container with corner markers effect */}
                <div style={{
                    position: 'relative',
                    background: '#ffffff', // White background as requested
                    padding: '2rem',
                    marginBottom: '0'
                }}>
                    {/* Corner markers */}
                    <div style={{ position: 'absolute', top: 0, left: 0, width: 20, height: 20, borderTop: '2px solid #999', borderLeft: '2px solid #999' }} />
                    <div style={{ position: 'absolute', top: 0, right: 0, width: 20, height: 20, borderTop: '2px solid #999', borderRight: '2px solid #999' }} />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, width: 20, height: 20, borderBottom: '2px solid #999', borderLeft: '2px solid #999' }} />
                    <div style={{ position: 'absolute', bottom: 0, right: 0, width: 20, height: 20, borderBottom: '2px solid #999', borderRight: '2px solid #999' }} />

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                        gap: '2rem'
                    }}>
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                style={{ display: 'flex', flexDirection: 'column' }}
                            >
                                {/* Number and Line */}
                                <div style={{ marginBottom: '1rem' }}>
                                    {/* Colored line above number */}
                                    <div style={{ width: '30px', height: '4px', background: service.color, marginBottom: '0.5rem' }} />
                                    <span style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1 }}>{service.id}</span>
                                </div>

                                {/* Image Placeholder */}
                                {service.image && (
                                    <div style={{
                                        width: '100%',
                                        aspectRatio: '1/1',
                                        background: '#ccc',
                                        marginBottom: '1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#fff',
                                        fontSize: '0.8rem',
                                        overflow: 'hidden'
                                    }}>
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                )}

                                {/* Text */}
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.3rem', color: service.color, wordBreak: 'break-word' }}>
                                        {service.title}
                                    </h3>
                                    <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#444', marginBottom: '0.5rem' }}>
                                        {service.subtitle}
                                    </p>
                                    <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.5' }}>
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;
