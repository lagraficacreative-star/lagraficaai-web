import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const LegalNotice = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ background: '#fff', minHeight: '100vh', padding: '6rem 2rem' }}>
            <Helmet>
                <title>Aviso Legal | LaGráfica AI</title>
                <meta name="robots" content="noindex, follow" />
            </Helmet>
            <div className="container" style={{ maxWidth: '800px' }}>
                <Link to="/" style={{
                    textDecoration: 'none',
                    color: '#666',
                    fontSize: '0.9rem',
                    marginBottom: '3rem',
                    display: 'inline-block',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                }}>
                    ← Volver a Inicio
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '-0.02em',
                        marginBottom: '3rem',
                        color: '#000'
                    }}>
                        Aviso Legal
                    </h1>

                    <div style={{ color: '#333', lineHeight: '1.8', fontSize: '1.2rem' }}>
                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.7rem', marginBottom: '1rem', color: '#000' }}>1. Información Legal</h2>
                            <p>
                                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE), se exponen los datos identificativos de la empresa:
                            </p>
                            <ul style={{ marginTop: '1rem', listStyle: 'none', padding: 0 }}>
                                <li><strong>Titular:</strong> LAGRAFICA CREATIVE EXPERIENCE S.L.</li>
                                <li><strong>NIF:</strong> B25826603</li>
                                <li><strong>Domicilio Social:</strong> Manuel Gaya i Tomas, 11, 25001 Lleida</li>
                                <li><strong>Email:</strong> <a href="mailto:ai@lagrafica.com" style={{ color: '#FF3C4B', textDecoration: 'none' }}>ai@lagrafica.com</a></li>
                                <li><strong>Datos Registrales:</strong> Inscrita en el Registro Mercantil de Lleida, al tomo 1.506, folio 169, sección 8, hoja número L-30.396, inscripción 1a. Escritura pública otorgada ante el Notario de Lleida D. Luís Prados Ramos, en fecha 24 de mayo de 2017 y número de protocolo 855.</li>
                            </ul>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.7rem', marginBottom: '1rem', color: '#000' }}>2. Propiedad Intelectual</h2>
                            <p>
                                El código fuente, los diseños gráficos, las imágenes, las fotografías, los sonidos, las animaciones, el software, los textos, así como la información y los contenidos que se recogen en el presente sitio web están protegidos por la legislación española sobre los derechos de propiedad intelectual e industrial a favor de <strong>LAGRAFICA CREATIVE EXPERIENCE S.L.</strong>
                            </p>
                            <p style={{ marginTop: '1rem' }}>
                                No se permite la reproducción y/o publicación, total o parcial, del sitio web, ni su tratamiento informático, su distribución, su difusión, ni su modificación, transformación o descompilación, ni demás derechos reconocidos legalmente a su titular, sin el permiso previo y por escrito del mismo.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.7rem', marginBottom: '1rem', color: '#000' }}>3. Limitación de Responsabilidad</h2>
                            <p>
                                El titular no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.7rem', marginBottom: '1rem', color: '#000' }}>4. Legislación Aplicable y Jurisdicción</h2>
                            <p>
                                Con carácter general las relaciones entre <strong>LAGRAFICA CREATIVE EXPERIENCE S.L.</strong> con los usuarios de sus servicios telemáticos, presentes en esta web, se encuentran sometidas a la legislación y jurisdicción españolas, concretamente a los tribunales de Lleida.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default LegalNotice;
