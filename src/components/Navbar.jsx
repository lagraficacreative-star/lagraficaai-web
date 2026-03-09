import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsMenuOpen(false); // Close mobile menu if open
        if (location.pathname !== '/') {
            navigate('/#' + id);
            return;
        }
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { name: 'Inicio', id: 'inicio' },
        { name: 'Servicios', id: 'servicios' },
        { name: 'Soluciones', id: 'soluciones' },
        { name: 'Portfolio', id: 'portfolio' },
        { name: 'Agencias', id: 'agencias' },
        { name: 'Contacto', id: 'contacto' }
    ];

    const menuColor = isScrolled || isMenuOpen ? '#000' : '#fff';

    return (
        <>
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                padding: isScrolled ? '1rem 1.5rem' : '1.5rem 1.5rem',
                transition: 'all 0.3s ease',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.05)' : 'none'
            }}>
                <Link to="/" onClick={() => scrollToSection('inicio')} style={{ display: 'flex', alignItems: 'center', zIndex: 1001 }}>
                    <img
                        src="/images/logolagraficaAIblanc.png"
                        alt="La Gráfica AI"
                        style={{
                            height: (isScrolled || isMenuOpen) ? '30px' : '40px',
                            width: 'auto',
                            transition: 'height 0.3s ease',
                            filter: (isScrolled || isMenuOpen) ? 'invert(1)' : 'none'
                        }}
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="nav-desktop">
                    {navLinks.map(link => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: menuColor,
                                fontSize: '0.8rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                cursor: 'pointer',
                                opacity: 0.8,
                                transition: 'all 0.2s ease',
                                padding: '0.5rem 0'
                            }}
                            onMouseEnter={e => e.target.style.opacity = 1}
                            onMouseLeave={e => e.target.style.opacity = 0.8}
                        >
                            {link.name}
                        </button>
                    ))}
                </div>

                {/* Hamburger Button */}
                <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span style={{
                        transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
                        background: menuColor
                    }} />
                    <span style={{
                        opacity: isMenuOpen ? 0 : 1,
                        background: menuColor
                    }} />
                    <span style={{
                        transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none',
                        background: menuColor
                    }} />
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                {navLinks.map(link => (
                    <button
                        key={link.id}
                        onClick={() => scrollToSection(link.id)}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#000',
                            fontSize: '1.2rem',
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            cursor: 'pointer'
                        }}
                    >
                        {link.name}
                    </button>
                ))}
            </div>
        </>
    );
};

export default Navbar;
