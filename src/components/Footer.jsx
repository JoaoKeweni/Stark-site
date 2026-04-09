import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: '#03060c', padding: '60px 5% 30px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px', marginBottom: '40px' }}>
        
        <div style={{ maxWidth: '300px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
             <h1 style={{ fontSize: '24px', fontWeight: 900, margin: 0, letterSpacing: '2px', lineHeight: 1 }} className="gradient-text">STARK</h1>
             <span style={{ fontSize: '9px', color: '#00E5FF', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 600 }}>Software para Seguradoras</span>
          </div>
          <p style={{ color: '#64748b', fontSize: '0.9rem' }}>O CRM #1 construído do absoluto zero para atender gestores de associações de proteção veicular no Brasil inteiro.</p>
        </div>

        <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
           <div>
              <h4 style={{ color: '#fff', marginBottom: '15px' }}>Produto</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                 <li><a href="#" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem' }}>Agendar Apresentação</a></li>
                 <li><a href="#solucoes" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem' }}>Vistoria e Split</a></li>
                 <li><a href="#" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem' }}>Motor de Cotações</a></li>
              </ul>
           </div>
           <div>
              <h4 style={{ color: '#fff', marginBottom: '15px' }}>Companhia</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                 <li><a href="#" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem' }}>Termos de Uso</a></li>
                 <li><a href="#" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem' }}>Segurança de Dados</a></li>
                 <li><a href="#" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem' }}>Login Corretor</a></li>
              </ul>
           </div>
        </div>
      </div>
      
      <div className="container" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#64748b', fontSize: '0.85rem' }}>
         <span>© {new Date().getFullYear()} Stark Suite. Todos os direitos reservados.</span>
         <span>CNPJ Fantasia / Construído por Agilidade</span>
      </div>
    </footer>
  );
};

export default Footer;
