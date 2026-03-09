import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const [filter, setFilter] = useState('Publicidad');

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Portfolio items with their respective categories
    const projects = [
        // PUBLICIDAD
        { id: 49, title: 'Campaña Boí Taüll', category: 'Publicidad', image: '/images/campanias/campanyapublicitar.png', video: '/images/campanias/BOI_TAULL_CAT MAIN 2023 1080x1080 SUBTITULOS.mov' },
        { id: 1, title: 'Campañas Publicitarias lagrafica.ai', category: 'Publicidad', image: '/images/campanias/campanyapublicitar.png' },
        { id: 7, title: 'Campaña Arids Daniel', category: 'Publicidad', image: '/images/campanias/campanyapublicitar.png', video: '/images/campanias/aridsdaniel.mp4' },
        { id: 34, title: 'Meteocat Stories - Empresas', category: 'Publicidad', image: '/images/campanias/campanyapublicitar.png', video: '/images/campanias/METEOCAT_Empreses_Stories.mp4' },
        { id: 35, title: 'Meteocat Stories - Genérica', category: 'Publicidad', image: '/images/campanias/campanyapublicitar.png', video: '/images/campanias/METEOCAT_Generica_Stories.mp4' },
        { id: 36, title: 'Meteocat Stories - Turismo', category: 'Publicidad', image: '/images/campanias/campanyapublicitar.png', video: '/images/campanias/METEOCAT_Turisme_Stories.mp4' },
        { id: 37, title: 'Campaña King Kong', category: 'Publicidad', image: '/images/campanias/campanyapublicitar.png', video: '/images/campanias/No esperis que King Kong et posi a prova!.mp4' },
        { id: 38, title: 'Estació Provença Vinil', category: 'Publicidad', image: '/images/campanias/estacio_provenca_vinil_003.jpg' },
        { id: 39, title: 'Preinscripción FP', category: 'Publicidad', image: '/images/campanias/preinscripcio_fp_1080.jpg' },
        { id: 40, title: 'Campaña Vision AI', category: 'Publicidad', image: '/images/campanias/KbJGU_ns.jpg' },
        { id: 41, title: 'Atmosphere Study lagrafica.ai', category: 'Publicidad', image: '/images/campanias/atmosphere_study_01.png' },

        // BRANDING
        { id: 42, title: 'Identidad de Marca Lleida', category: 'Branding', image: '/images/branding/Website Mockup.png' },
        { id: 43, title: 'Lleida en Verd Logo', category: 'Branding', image: '/images/branding/identidad_marca_lleida_01.png', video: '/images/branding/lleida_en_verdlogo.mp4' },
        { id: 44, title: 'Captura Identidad 01', category: 'Branding', image: '/images/branding/identidad_marca_lleida_02.png' },
        { id: 45, title: 'Captura Identidad 02', category: 'Branding', image: '/images/branding/identidad_marca_lleida_01.png' },
        { id: 46, title: 'Captura Identidad 03', category: 'Branding', image: '/images/branding/identidad_marca_lleida_03.png' },
        { id: 47, title: 'Captura Identidad 04', category: 'Branding', image: '/images/branding/identidad_marca_lleida_04.png' },
        { id: 48, title: 'Captura Identidad 05', category: 'Branding', image: '/images/branding/identidad_marca_lleida_05.png' },

        // MOTION GRAPHICS
        { id: 50, title: 'Motion Reel 2026', category: 'Motion graphics', image: '/images/portadamotions.jpg', video: '/images/motiongrafics/motions.mp4' },
        { id: 51, title: 'Cubo Rubik Motion', category: 'Motion graphics', image: '/images/portadamotions.jpg', video: '/images/motiongrafics/cuborubik.mp4' },
        { id: 29, title: 'Exploración Motion 01', category: 'Motion graphics', image: '/images/portadamotions.jpg', video: '/images/motiongrafics/202602241418.mp4' },
        { id: 8, title: 'Exploración Motion 02', category: 'Motion graphics', image: '/images/portadamotions.jpg', video: '/images/motiongrafics/202602250644.mp4' },
        { id: 9, title: 'Exploración Motion 03', category: 'Motion graphics', image: '/images/portadamotions.jpg', video: '/images/motiongrafics/motion4.mp4' },
        { id: 10, title: 'Exploración Motion 04', category: 'Motion graphics', image: '/images/portadamotions.jpg', video: '/images/motiongrafics/motions2.mp4' },
        { id: 11, title: 'Exploración Motion 05', category: 'Motion graphics', image: '/images/portadamotions.jpg', video: '/images/motiongrafics/motions3.mp4' },
        { id: 12, title: 'Exploración Motion 06', category: 'Motion graphics', image: '/images/portadamotions.jpg', video: '/images/motiongrafics/motions5.mp4' },

        // VIDEOS
        { id: 13, title: 'La Seu Vella - Nadal', category: 'Videos', image: '/images/app-gamma.png', video: 'https://www.youtube.com/embed/HSdQ3KVa2pY?autoplay=1&mute=1&loop=1&playlist=HSdQ3KVa2pY&controls=0&rel=0' },

        // FOTOGRAFIA CREATIVA
        { id: 15, title: 'Luz Vibrante lagrafica.ai', category: 'Fotografia creativa', image: '/images/fotografia_creativa/vibrant_woman.jpg' },
        { id: 16, title: 'Estudio de Perspectiva IA', category: 'Fotografia creativa', image: '/images/fotografia_creativa/high_angle_woman.jpg' },
        { id: 17, title: 'Geometric Pop Art', category: 'Fotografia creativa', image: '/images/fotografia_creativa/Geometric Pop Art Face Swap.png' },
        { id: 18, title: 'Pop Portrait lagrafica.ai', category: 'Fotografia creativa', image: '/images/fotografia_creativa/Geometric Pop Art Portrait.png' },
        { id: 19, title: 'Desert Dolphin lagrafica.ai', category: 'Fotografia creativa', image: '/images/fotografia_creativa/Gigantic Desert Dolphin.png' },
        { id: 20, title: 'High Graphic Portrait', category: 'Fotografia creativa', image: '/images/fotografia_creativa/High Graphic Portrait.png' },
        { id: 21, title: 'Geometric Paint Study', category: 'Fotografia creativa', image: '/images/fotografia_creativa/Light Gray Geometric Paint.png' },
        { id: 22, title: 'Visible Eye Study', category: 'Fotografia creativa', image: '/images/fotografia_creativa/Visible Eye In Frame.png' },
        { id: 23, title: 'Captura Fotográfica 01', category: 'Fotografia creativa', image: '/images/fotografia_creativa/Captura de pantalla 2026-02-24 a les 13.58.34.png' },
        { id: 24, title: 'Captura Fotográfica 02', category: 'Fotografia creativa', image: '/images/fotografia_creativa/Captura de pantalla 2026-02-24 a les 13.58.42.png' },
        { id: 25, title: 'Tall Waterfall Study', category: 'Fotografia creativa', image: '/images/fotografia_creativa/Distant Tall Waterfall.png' },
        { id: 26, title: 'Arctic Forest Vision', category: 'Fotografia creativa', image: '/images/fotografia_creativa/Gigantic Penguins and Seals in Forest.png' },
        { id: 27, title: 'Coral Sculpture lagrafica.ai', category: 'Fotografia creativa', image: '/images/fotografia_creativa/Luminous Coral Sculpture.png' },
        { id: 28, title: 'Christmas Vision', category: 'Fotografia creativa', image: '/images/fotografia_creativa/ojosnavidad.jpg' },

        // AUTOMATIZACIÓN
        { id: 60, title: 'Automatización Flujo 01', category: 'Automatización', image: '/images/automatizamos.jpg', video: '/images/automatizaciones/automatizacion_01.mp4' },
        { id: 61, title: 'Automatización Flujo 02', category: 'Automatización', image: '/images/automatizamos.jpg', video: '/images/automatizaciones/automatizacion_02.mp4' },
        { id: 62, title: 'Automatización Flujo 03', category: 'Automatización', image: '/images/automatizamos.jpg', video: '/images/automatizaciones/automatizacion_03.mp4' },
        { id: 63, title: 'Automatización Flujo 04', category: 'Automatización', image: '/images/automatizamos.jpg', video: '/images/automatizaciones/automatizacion_04.mp4' },
    ];

    const categories = ['Publicidad', 'Branding', 'Motion graphics', 'Videos', 'Fotografia creativa', 'Automatización'];

    const filteredProjects = projects.filter(p => p.category === filter);

    return (
        <div style={{ background: '#fff', minHeight: '100vh', padding: '4rem 2rem' }}>
            <div className="container" style={{ paddingTop: '2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <Link to="/" style={{
                        textDecoration: 'none',
                        color: '#666',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em'
                    }}>
                        ← Volver a Inicio
                    </Link>
                </div>
                {/* Header Section - Simplified to just categories */}
                <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                    {/* Category Filter Menu - Clean Text Style */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1.5rem',
                        rowGap: '1rem',
                        flexWrap: 'wrap',
                        marginBottom: '4rem'
                    }}>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                style={{
                                    padding: '0.2rem 0',
                                    background: 'transparent',
                                    color: filter === cat ? '#FF3C4B' : '#888',
                                    border: 'none',
                                    borderBottom: filter === cat ? '2px solid #FF3C4B' : '2px solid transparent',
                                    fontSize: '0.95rem',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.08em',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Portfolio Grid - True Masonry/Pinterest Style */}
                <div className="masonry-grid">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="masonry-item"
                                style={{ cursor: 'pointer' }}
                            >
                                <div style={{
                                    border: '1px solid #e0e0e0', // Very fine gray border
                                    background: '#fff',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <div style={{
                                        background: '#f8f8f8',
                                        overflow: 'hidden',
                                        borderRadius: '0',
                                        position: 'relative',
                                        borderBottom: '1px solid #e0e0e0' // Separator
                                    }}>
                                        {project.video ? (
                                            project.video.includes('youtube.com') ? (
                                                <div style={{ width: '100%', height: '100%', aspectRatio: '16/9', position: 'relative' }}>
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
                                                            pointerEvents: 'none'
                                                        }}
                                                    ></iframe>
                                                </div>
                                            ) : (
                                                <video
                                                    src={project.video}
                                                    poster={project.image}
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    style={{
                                                        width: '100%',
                                                        height: 'auto',
                                                        display: 'block',
                                                        transition: 'transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)'
                                                    }}
                                                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                                />
                                            )
                                        ) : (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                    display: 'block',
                                                    transition: 'transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)'
                                                }}
                                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                            />
                                        )}
                                    </div>
                                    <div style={{ padding: '1rem' }}>
                                        <p style={{
                                            color: '#FF3C4B',
                                            fontSize: '0.9rem',
                                            fontWeight: 700,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            margin: 0
                                        }}>
                                            {project.category}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Bottom Intro Text Section */}
                <div style={{ marginTop: '10rem', maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
                    <h2 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.2rem, 3.5vw, 2.4rem)',
                        fontWeight: 800,
                        lineHeight: 1.1,
                        marginBottom: '2rem',
                        textTransform: 'uppercase',
                        letterSpacing: '-0.02em',
                        color: '#000'
                    }}>
                        Construyendo el futuro de lo digital
                    </h2>
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <p style={{
                            fontSize: 'clamp(1.1rem, 2vw, 1.6rem)',
                            lineHeight: 1.4,
                            color: '#333',
                            marginBottom: '2rem',
                            fontWeight: 500
                        }}>
                            Somos un grupo de diseñadores, desarrolladores y creativos apasionados con crear experiencias de inteligencia artificial excepcionales.
                        </p>
                        <p style={{
                            fontSize: 'clamp(1rem, 1.5vw, 1.3rem)',
                            lineHeight: 1.7,
                            color: '#666',
                            fontWeight: 400
                        }}>
                            Cada proyecto es una oportunidad para crear experiencias de imagen, diseño, creatividad, marketing, páginas web y apps impulsadas por inteligencia artificial.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
