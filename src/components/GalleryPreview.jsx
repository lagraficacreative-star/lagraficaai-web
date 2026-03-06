import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Sample data - referencing the same images as Portfolio
const previewProjects = [
    { id: 49, title: 'Publicidad', category: 'Publicidad', image: '/images/campanias/campanyapublicitar.png' },
    { id: 42, title: 'Branding', category: 'Branding', image: '/images/branding/Website Mockup.png' },
    { id: 50, title: 'Motion Graphics', category: 'Motion graphics', image: '/images/portadamotions.jpg', video: 'https://www.youtube.com/embed/Qob90gRlGU0?autoplay=1&mute=1&loop=1&playlist=Qob90gRlGU0&controls=0&rel=0' },
    { id: 13, title: 'Videos', category: 'Videos', image: '/images/app-gamma.png', video: 'https://www.youtube.com/embed/HSdQ3KVa2pY?autoplay=1&mute=1&loop=1&playlist=HSdQ3KVa2pY&controls=0&rel=0' },
    { id: 20, title: 'Fotografia Creativa', category: 'Fotografia creativa', image: '/images/Fotografia creativa/High Graphic Portrait.png' },
    { id: 60, title: 'Automatización', category: 'Automatización', image: '/images/automatizamos.jpg' },
];

const GalleryPreview = () => {
    return (
        <section className="section" style={{ background: '#1a1a1a', padding: '6rem 2rem', textAlign: 'center' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.5rem, 3.5vw, 3rem)',
                        color: '#FF3C4B',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        fontWeight: 700,
                        marginBottom: '4rem'
                    }}>
                        PORTFOLIO
                    </h2>

                    {/* Gallery Container with Corner Markers */}
                    <div style={{ position: 'relative', padding: '2rem 0' }}>
                        {/* Corner markers */}
                        <div style={{ position: 'absolute', top: -1, left: -1, width: 20, height: 20, borderTop: '2px solid #555', borderLeft: '2px solid #555' }} />
                        <div style={{ position: 'absolute', top: -1, right: -1, width: 20, height: 20, borderTop: '2px solid #555', borderRight: '2px solid #555' }} />
                        <div style={{ position: 'absolute', bottom: -1, left: -1, width: 20, height: 20, borderBottom: '2px solid #555', borderLeft: '2px solid #555' }} />
                        <div style={{ position: 'absolute', bottom: -1, right: -1, width: 20, height: 20, borderBottom: '2px solid #555', borderRight: '2px solid #555' }} />

                        {/* Gallery Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: '2.5rem',
                            marginBottom: '4rem',
                            textAlign: 'left',
                            padding: '1rem'
                        }}>
                            {previewProjects.map((project, index) => (
                                <Link key={project.id} to="/projects" style={{ textDecoration: 'none' }}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <div style={{
                                            border: '1px solid #333', // Darker border for cards on dark background
                                            padding: '0',
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}>
                                            <div style={{
                                                aspectRatio: '4/3',
                                                background: '#f0f0f0',
                                                overflow: 'hidden',
                                                borderRadius: '0',
                                                borderBottom: '1px solid #e0e0e0' // Separator line
                                            }}>
                                                {project.video ? (
                                                    project.video.includes('youtube.com') ? (
                                                        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                                                            <iframe
                                                                src={project.video}
                                                                title={project.title}
                                                                frameBorder="0"
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-view"
                                                                style={{
                                                                    position: 'absolute',
                                                                    top: 0,
                                                                    left: 0,
                                                                    width: '100%',
                                                                    height: '100%',
                                                                    pointerEvents: 'none' // To allow clicking the Link
                                                                }}
                                                            ></iframe>
                                                        </div>
                                                    ) : (
                                                        <video
                                                            src={project.video}
                                                            autoPlay
                                                            loop
                                                            muted
                                                            playsInline
                                                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                                            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                                        />
                                                    )
                                                ) : (
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                                    />
                                                )}
                                            </div>
                                            <div style={{ padding: '1rem', background: '#fff' }}>
                                                <p style={{
                                                    color: '#FF3C4B',
                                                    fontSize: '1.4rem',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.05em',
                                                    fontWeight: 900,
                                                    margin: 0
                                                }}>
                                                    {project.category}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link to="/projects" style={{ textDecoration: 'none' }}>
                        <button style={{
                            padding: '1rem 3rem',
                            background: '#FF3C4B',
                            color: '#fff',
                            borderRadius: '0',
                            fontWeight: 700,
                            fontSize: '1.1rem',
                            border: 'none',
                            cursor: 'pointer',
                            textTransform: 'uppercase',
                            transition: 'transform 0.3s ease, boxShadow 0.3s ease',
                            boxShadow: '0 4px 15px rgba(255, 60, 75, 0.2)'
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-3px)';
                                e.target.style.boxShadow = '0 8px 20px rgba(255, 60, 75, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 4px 15px rgba(255, 60, 75, 0.2)';
                            }}
                        >
                            Ver Portfolio Completo
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default GalleryPreview;
