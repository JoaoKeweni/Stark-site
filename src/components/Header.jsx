import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(10, 19, 33, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 5%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* STARK Logo textual simulation based on reference */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
             <h1 style={{ fontSize: '28px', fontWeight: 900, margin: 0, letterSpacing: '2px', lineHeight: 1 }} className="gradient-text">STARK</h1>
             <span style={{ fontSize: '10px', color: '#00E5FF', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 600 }}>Software para Seguradoras</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '30px' }} className="desktop-nav">
          <a href="#solucoes" style={{ color: '#E2E8F0', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#00E5FF'} onMouseOut={e=>e.target.style.color='#E2E8F0'}>Soluções</a>
          <a href="#sobre" style={{ color: '#E2E8F0', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#00E5FF'} onMouseOut={e=>e.target.style.color='#E2E8F0'}>Vantagens</a>
          <a href="#depoimentos" style={{ color: '#E2E8F0', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#00E5FF'} onMouseOut={e=>e.target.style.color='#E2E8F0'}>Depoimentos</a>
        </nav>

        <div className="header-cta" style={{ display: 'flex', gap: '15px' }}>
          <a href="#agendar" className="btn-secondary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>Login</a>
          <a href="#agendar" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>Agendar Demonstração</a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
