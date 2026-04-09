import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="agendar" className="section-padding" style={{ position: 'relative', marginTop: '50px' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel"
          style={{ 
            padding: '80px 40px', 
            textAlign: 'center', 
            position: 'relative', 
            overflow: 'hidden',
            background: 'linear-gradient(145deg, rgba(10, 19, 33, 0.9) 0%, rgba(0, 85, 255, 0.1) 100%)'
          }}
        >
          {/* Neon Glow Behind */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(0, 229, 255, 0.2) 0%, transparent 70%)', zIndex: 0 }} />

          <div style={{ position: 'relative', zIndex: 10, maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Pronto para faturar <span className="gradient-text">muito mais?</span></h2>
            <p style={{ color: '#94A3B8', fontSize: '1.2rem', marginBottom: '40px' }}>
              Traga sua equipe comercial para o Stark e transforme a maneira como sua associação vende proteção veicular.
            </p>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }} onSubmit={(e) => { e.preventDefault(); alert('Em um ambiente de produção, isto enviará seus dados para o CRM Stark.'); }}>
               <div style={{ display: 'flex', gap: '15px' }}>
                  <input type="text" placeholder="Nome Completo" required style={{ flex: 1, padding: '16px 20px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.3)', color: '#fff', fontSize: '1rem', outline: 'none' }} />
                  <input type="text" placeholder="Associação" required style={{ flex: 1, padding: '16px 20px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.3)', color: '#fff', fontSize: '1rem', outline: 'none' }} />
               </div>
               <div style={{ display: 'flex', gap: '15px' }}>
                  <input type="email" placeholder="E-mail Comercial" required style={{ flex: 1, padding: '16px 20px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.3)', color: '#fff', fontSize: '1rem', outline: 'none' }} />
                  <input type="tel" placeholder="Telefone / WhatsApp" required style={{ flex: 1, padding: '16px 20px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.3)', color: '#fff', fontSize: '1rem', outline: 'none' }} />
               </div>
               <button type="submit" className="btn-primary" style={{ padding: '18px', fontSize: '1.1rem', marginTop: '10px' }}>
                 Agendar uma apresentação <ArrowRight size={20} />
               </button>
            </form>
            <p style={{ marginTop: '20px', fontSize: '0.85rem', color: '#64748b' }}>Sua demonstração exclusiva será agendada conforme a disponibilidade no funil.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
