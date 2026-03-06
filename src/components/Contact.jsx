import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        proyecto: '',
        mensaje: '',
        privacy: false
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch("https://formspree.io/f/xqeykzbk", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus({ type: 'success', message: '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.' });
                setFormData({ nombre: '', email: '', proyecto: '', mensaje: '', privacy: false });
            } else {
                const errorData = await response.json();
                const errorMessage = errorData.error || 'Error del servidor.';
                console.error("Formspree Error:", errorData);
                setStatus({
                    type: 'error',
                    message: `Error al enviar: ${errorMessage}. Revisa si el formulario está verificado en Formspree.`
                });
            }
        } catch (error) {
            console.error(error);
            setStatus({ type: 'error', message: 'Error de conexión. Asegúrate de que el enlace de Formspree es correcto.' });
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setStatus({ type: '', message: '' }), 5000);
        }
    };

    return (
        <section style={{
            borderTop: 'none',
            paddingTop: '8rem',
            paddingBottom: '8rem',
            background: '#FF3C4B'
        }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    alignItems: 'start'
                }}>
                    {/* Left Column: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            marginBottom: '1.5rem',
                            color: '#fff',
                            textTransform: 'uppercase',
                            fontWeight: 800,
                            letterSpacing: '-0.02em',
                            textAlign: 'left'
                        }}>
                            CONTACTO
                        </h2>
                        <p style={{
                            fontSize: '1.4rem',
                            color: 'rgba(255,255,255,0.9)',
                            marginBottom: '4rem',
                            fontWeight: 500,
                            lineHeight: 1.4,
                            textAlign: 'left'
                        }}>
                            Cuéntanos tu proyecto y te diremos cómo integrar la inteligencia artificial en tu estrategia creativa.
                        </p>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '3rem',
                            textAlign: 'left'
                        }}>
                            <div>
                                <h4 style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>DIRECCIÓN</h4>
                                <p style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 500, lineHeight: 1.4 }}>
                                    Manuel Gaia i Tomas, 11 baixos<br />
                                    25001 Lleida
                                </p>
                            </div>
                            <div>
                                <h4 style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>EMAIL</h4>
                                <a href="mailto:ai@lagrafica.com" style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 500, textDecoration: 'none' }}>ai@lagrafica.com</a>
                            </div>
                            <div>
                                <h4 style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>TELÉFONO</h4>
                                <a href="tel:973216363" style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 500, textDecoration: 'none' }}>973 21 63 63</a>
                            </div>
                            <div>
                                <h4 style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>SÍGUENOS</h4>
                                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'flex-start' }}>
                                    <a href="https://instagram.com/lagrafica.ai" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                    </a>
                                    <a href="https://tiktok.com/@lagrafica.ai" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                                    </a>
                                    <a href="https://youtube.com/@laGràficaAI" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                                            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        style={{
                            display: 'grid',
                            gap: '1.5rem',
                            background: 'rgba(255,255,255,0.05)',
                            padding: '3rem',
                            borderRadius: '20px',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', fontWeight: 800, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.05em' }}>NOMBRE</label>
                            <input
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                placeholder="Tu nombre"
                                required
                                style={{
                                    padding: '1.2rem',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    borderRadius: '8px',
                                    fontSize: '1.1rem',
                                    background: 'rgba(255,255,255,0.1)',
                                    color: '#fff',
                                    outline: 'none'
                                }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', fontWeight: 800, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.05em' }}>EMAIL</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="tu@email.com"
                                required
                                style={{
                                    padding: '1.2rem',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    borderRadius: '8px',
                                    fontSize: '1.1rem',
                                    background: 'rgba(255,255,255,0.1)',
                                    color: '#fff',
                                    outline: 'none'
                                }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', fontWeight: 800, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.05em' }}>EMPRESA / PROYECTO</label>
                            <input
                                type="text"
                                name="proyecto"
                                value={formData.proyecto}
                                onChange={handleChange}
                                placeholder="Tu empresa o proyecto"
                                style={{
                                    padding: '1.2rem',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    borderRadius: '8px',
                                    fontSize: '1.1rem',
                                    background: 'rgba(255,255,255,0.1)',
                                    color: '#fff',
                                    outline: 'none'
                                }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', fontWeight: 800, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.05em' }}>MENSAJE</label>
                            <textarea
                                name="mensaje"
                                value={formData.mensaje}
                                onChange={handleChange}
                                placeholder="Cuéntanos más detalles..."
                                rows="4"
                                required
                                style={{
                                    padding: '1.2rem',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    borderRadius: '8px',
                                    fontSize: '1.1rem',
                                    background: 'rgba(255,255,255,0.1)',
                                    color: '#fff',
                                    outline: 'none',
                                    resize: 'vertical'
                                }}></textarea>
                        </div>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.5rem',
                            marginTop: '1rem',
                            flexWrap: 'wrap'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <input
                                    type="checkbox"
                                    id="privacy-contact"
                                    name="privacy"
                                    checked={formData.privacy}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        cursor: 'pointer',
                                        accentColor: '#fff'
                                    }}
                                />
                                <label htmlFor="privacy-contact" style={{
                                    fontSize: '0.85rem',
                                    color: 'rgba(255,255,255,0.8)',
                                    cursor: 'pointer',
                                    fontWeight: 500
                                }}>
                                    Acepto la <Link to="/politica-privacidad" style={{ color: '#fff', textDecoration: 'underline' }}>política de privacidad</Link>
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                style={{
                                    flex: '1',
                                    minWidth: '200px',
                                    padding: '1.3rem 2.5rem',
                                    background: '#fff',
                                    color: '#FF3C4B',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontSize: '1.1rem',
                                    fontWeight: 800,
                                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                    opacity: isSubmitting ? 0.7 : 1,
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}
                                onMouseEnter={(e) => {
                                    if (!isSubmitting) {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                                }}
                            >
                                {isSubmitting ? 'Enviando...' : 'Enviar mensaje →'}
                            </button>
                        </div>

                        {status.message && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    marginTop: '1rem',
                                    background: status.type === 'success' ? 'rgba(76, 175, 80, 0.2)' : 'rgba(244, 67, 54, 0.2)',
                                    color: '#fff',
                                    border: `1px solid ${status.type === 'success' ? '#4CAF50' : '#F44336'}`,
                                    textAlign: 'center',
                                    fontWeight: 600
                                }}
                            >
                                {status.message}
                            </motion.div>
                        )}
                    </motion.form>
                </div>

                {/* Footer */}
                <div style={{
                    marginTop: '8rem',
                    borderTop: '1px solid rgba(255,255,255,0.2)',
                    paddingTop: '3rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.7)'
                }}>
                    <p>© 2026 lagrafica.ai - Todos los derechos reservados.</p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <Link to="/politica-privacidad" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontWeight: 500 }}>Política de Privacidad</Link>
                        <Link to="/aviso-legal" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontWeight: 500 }}>Aviso Legal</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
