import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ background: '#fff', minHeight: '100vh', padding: '6rem 2rem' }}>
            <Helmet>
                <title>Política de Privacidad | LaGráfica AI</title>
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
                        Política de Privacidad
                    </h1>

                    <div style={{ color: '#333', lineHeight: '1.8', fontSize: '1.2rem' }}>
                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.7rem', marginBottom: '1rem', color: '#000' }}>1. Responsable del Tratamiento</h2>
                            <p>
                                <strong>LAGRAFICA CREATIVE EXPERIENCE S.L.</strong>, con NIF B25826603 y domicilio en Manuel Gaya i Tomas, 11, 25001 Lleida, informa a los usuarios del sitio web sobre su política respecto del tratamiento y protección de los datos de carácter personal de los usuarios que puedan ser recabados por el formulario de contacto de este sitio web.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.7rem', marginBottom: '1rem', color: '#000' }}>2. Finalidad del Tratamiento</h2>
                            <p>
                                La recogida y tratamiento de datos personales tiene como finalidad exclusiva la gestión de las consultas, solicitudes o información administrativa requerida por el usuario a través del formulario de contacto. Los datos proporcionados se conservarán mientras no se solicite su supresión por el interesado.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.7rem', marginBottom: '1rem', color: '#000' }}>3. Legitimación</h2>
                            <p>
                                El tratamiento de sus datos se realiza con la base jurídica del consentimiento del interesado al completar y enviar el formulario de contacto de nuestra web.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.7rem', marginBottom: '1rem', color: '#000' }}>4. Destinatarios</h2>
                            <p>
                                No se cederán datos a terceros, salvo obligación legal o que sea estrictamente necesario para la prestación del servicio solicitado (por ejemplo, proveedores de servicios tecnológicos).
                            </p>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.7rem', marginBottom: '1rem', color: '#000' }}>5. Derechos de los Usuarios</h2>
                            <p>
                                Cualquier persona tiene derecho a obtener confirmación sobre si estamos tratando datos personales que les conciernan, o no. Las personas interesadas tienen derecho a:
                            </p>
                            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                                <li>Acceder a sus datos personales.</li>
                                <li>Solicitar la rectificación de los datos inexactos.</li>
                                <li>Solicitar su supresión cuando los datos ya no sean necesarios para los fines que fueron recogidos.</li>
                                <li>Solicitar la limitación de su tratamiento.</li>
                                <li>Oponerse al tratamiento de sus datos.</li>
                            </ul>
                            <p style={{ marginTop: '1rem' }}>
                                Para ejercer estos derechos, puede dirigir una comunicación por escrito al domicilio social de la empresa o enviar un correo electrónico a <a href="mailto:ai@lagrafica.com" style={{ color: '#FF3C4B', textDecoration: 'none' }}>ai@lagrafica.com</a>, adjuntando en ambos casos una copia de su DNI.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
