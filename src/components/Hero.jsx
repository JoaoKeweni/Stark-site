import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ShieldCheck, Zap, BarChart } from 'lucide-react';

const Hero = () => {
  return (
    <section style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      position: 'relative',
      paddingTop: '80px',
      overflow: 'hidden'
    }}>
      {/* Background glow effects */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0, 229, 255, 0.15) 0%, rgba(5, 11, 20, 0) 70%)', zIndex: 0 }} className="floating" />
      <div style={{ position: 'absolute', bottom: '10%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0, 85, 255, 0.1) 0%, rgba(5, 11, 20, 0) 70%)', zIndex: 0 }} />

      <div className="container" style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
        
        {/* Left Column - Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div style={{ display: 'inline-block', padding: '6px 14px', background: 'rgba(0, 229, 255, 0.1)', borderRadius: '20px', border: '1px solid rgba(0, 229, 255, 0.2)', marginBottom: '20px' }}>
            <span style={{ color: '#00E5FF', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} /> O CRM Nº1 para Associações
            </span>
          </div>
          
          <h1 style={{ fontSize: '3.5rem', marginBottom: '24px', letterSpacing: '-1px' }}>
            A Máquina de Vendas Definitiva para <br/>
            <span className="gradient-text">Proteção Veicular</span>.
          </h1>
          
          <p style={{ fontSize: '1.1rem', color: '#94A3B8', marginBottom: '40px', maxWidth: '90%' }}>
            Automatize o envio de cotações regionais, centralize suas vistorias antifraude e feche adesões 100% online com nosso split de pagamentos automático.
          </p>
          
          <div style={{ display: 'flex', gap: '20px' }}>
             <a href="#agendar" className="btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
               Assine o Stark <ArrowRight size={20} />
             </a>
             <a href="#apresentacao" className="btn-secondary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
               <Play size={20} /> Ver Demonstração
             </a>
          </div>

          <div style={{ display: 'flex', gap: '30px', marginTop: '50px' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
               <div style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}><Zap size={20} color="#00E5FF" /></div>
               <div>
                  <h4 style={{ margin: 0, fontSize: '1rem' }}>+300%</h4>
                  <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Aumento em Adesões</span>
               </div>
             </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
               <div style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}><BarChart size={20} color="#0055FF" /></div>
               <div>
                  <h4 style={{ margin: 0, fontSize: '1rem' }}>Tempo Real</h4>
                  <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Dashboard de Vendas</span>
               </div>
             </div>
          </div>
        </motion.div>

        {/* Right Column - Visual Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="floating"
          style={{ position: 'relative' }}
        >
          <div className="glass-panel" style={{ padding: '20px', position: 'relative', zIndex: 2 }}>
             {/* Mocking a SaaS Dashboard */}
             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EF4444' }}/>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F59E0B' }}/>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981' }}/>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>app.starksuite.com.br</div>
             </div>

             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '20px' }}>
                {[1,2,3].map(i => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '8px' }}>
                     <div style={{ width: '30px', height: '30px', background: 'rgba(0,229,255,0.1)', borderRadius: '6px', marginBottom: '10px' }} />
                     <div style={{ width: '80%', height: '8px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px', marginBottom: '6px' }} />
                     <div style={{ width: '50%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }} />
                  </div>
                ))}
             </div>

             <div style={{ width: '100%', height: '150px', background: 'linear-gradient(180deg, rgba(0, 85, 255, 0.2) 0%, rgba(0, 85, 255, 0) 100%)', borderRadius: '8px', border: '1px solid rgba(0, 85, 255, 0.3)', position: 'relative', overflow: 'hidden' }}>
                 {/* Chart Graph Mock */}
                 <svg width="100%" height="100%" viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path d="M0,150 L0,80 Q50,110 100,60 T250,50 T350,90 T500,20 L500,150 Z" fill="rgba(0,229,255,0.1)" />
                    <path d="M0,80 Q50,110 100,60 T250,50 T350,90 T500,20" fill="none" stroke="#00E5FF" strokeWidth="3" />
                 </svg>
             </div>
          </div>
          
          {/* Floating UI Elements */}
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 4 }}
            className="glass-panel" 
            style={{ position: 'absolute', top: '10%', right: '-30px', padding: '15px', zIndex: 3, display: 'flex', alignItems: 'center', gap: '15px' }}
          >
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <ShieldCheck size={20} color="#fff" />
            </div>
            <div>
               <h5 style={{ margin: 0 }}>Cotação Aprovada</h5>
               <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Há 2 minutos</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
