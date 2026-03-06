import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppWidget = () => {
    // INFO: Cambia este número por tu número de WhatsApp real (incluyendo el código de país, ej: 34600000000)
    const phoneNumber = "34639087024";
    const defaultMessage = "Hola LaGráfica AI, me gustaría recibir más información sobre vuestros servicios de Inteligencia Artificial.";

    const [isOpen, setIsOpen] = useState(false);
    const [userMessage, setUserMessage] = useState("");

    const handleSendMessage = (e) => {
        e.preventDefault();
        const textToSend = userMessage.trim() || defaultMessage;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textToSend)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
        setIsOpen(false);
        setUserMessage("");
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end'
        }}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            marginBottom: '20px',
                            background: '#fff',
                            borderRadius: '16px',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                            width: '320px',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            fontFamily: 'Inter, sans-serif'
                        }}
                    >
                        {/* Header */}
                        <div style={{
                            background: '#095e54',
                            padding: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            color: '#fff'
                        }}>
                            <div style={{
                                width: '45px',
                                height: '45px',
                                background: '#fff',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '2px',
                                position: 'relative'
                            }}>
                                <img src="/favicon.png" alt="LaGráfica AI" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} onError={(e) => { e.target.style.display = 'none' }} />
                                {/* Fallback if no favicon.png exists */}
                                <span style={{ position: 'absolute', color: '#095e54', fontWeight: 'bold', fontSize: '1.2rem', zIndex: -1 }}>G</span>
                            </div>
                            <div>
                                <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>LaGráfica AI</h3>
                                <p style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>Típicamente responde al instante</p>
                            </div>
                        </div>

                        {/* Body / Chat Area */}
                        <div style={{
                            background: '#e5ddd5',
                            padding: '20px',
                            position: 'relative',
                            minHeight: '180px'
                        }}>
                            {/* "WhatsApp pattern" background approximation */}
                            <div style={{
                                position: 'absolute',
                                top: 0, left: 0, right: 0, bottom: 0,
                                opacity: 0.05,
                                backgroundImage: 'url("https://web.whatsapp.com/img/bg-chat-tile-dark_a4be512e7195b6b733d9110b408f075d.png")',
                                backgroundSize: 'contain'
                            }}></div>

                            {/* Chat Bubble */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                style={{
                                    background: '#fff',
                                    padding: '12px 16px',
                                    borderRadius: '0 12px 12px 12px',
                                    maxWidth: '85%',
                                    position: 'relative',
                                    color: '#333',
                                    fontSize: '0.95rem',
                                    boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                                }}
                            >
                                <p style={{ margin: 0, lineHeight: 1.4 }}>
                                    ¡Hola! 👋🏻 ¿En qué podemos ayudarte para potenciar tu marca con Inteligencia Artificial?
                                </p>
                                <span style={{
                                    display: 'block',
                                    textAlign: 'right',
                                    fontSize: '0.7rem',
                                    color: '#999',
                                    marginTop: '5px'
                                }}>
                                    Ahora
                                </span>
                            </motion.div>
                        </div>

                        {/* Footer / Send Form */}
                        <form
                            onSubmit={handleSendMessage}
                            style={{
                                padding: '15px',
                                background: '#f0f0f0',
                                display: 'flex',
                                gap: '10px',
                                alignItems: 'center'
                            }}
                        >
                            <input
                                type="text"
                                placeholder="Escribe un mensaje..."
                                value={userMessage}
                                onChange={(e) => setUserMessage(e.target.value)}
                                style={{
                                    flex: 1,
                                    padding: '12px 15px',
                                    borderRadius: '24px',
                                    border: 'none',
                                    outline: 'none',
                                    fontSize: '0.95rem',
                                    background: '#fff',
                                    color: '#333'
                                }}
                            />
                            <button
                                type="submit"
                                style={{
                                    width: '45px',
                                    height: '45px',
                                    borderRadius: '50%',
                                    background: '#095e54',
                                    color: '#fff',
                                    border: 'none',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    transition: 'background 0.2s',
                                    flexShrink: 0
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = '#075e54'}
                                onMouseLeave={(e) => e.currentTarget.style.background = '#095e54'}
                                title="Enviar mensaje"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateX(-2px) translateY(1px)' }}>
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={!isOpen ? {
                    boxShadow: [
                        "0 0 0 0px rgba(37, 211, 102, 0.4)",
                        "0 0 0 15px rgba(37, 211, 102, 0)"
                    ]
                } : { boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}
                transition={{
                    boxShadow: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeOut"
                    }
                }}
                style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: isOpen ? '#333' : '#25D366',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: 'none',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    cursor: 'pointer',
                    position: 'relative',
                    zIndex: 10
                }}
            >
                {isOpen ? (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                ) : (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.394 0 12.03c0 2.122.554 4.197 1.607 6.048L0 24l6.117-1.605a11.845 11.845 0 005.925 1.585h.005c6.635 0 12.032-5.396 12.035-12.032a11.8 11.8 0 00-3.417-8.241"
                            fill="#fff"
                        />
                    </svg>
                )}
            </motion.button>
        </div>
    );
};

export default WhatsAppWidget;
