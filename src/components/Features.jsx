import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Receipt, FileSignature, ShieldAlert, CreditCard, Send } from 'lucide-react';

const coreFeatures = [
  {
    icon: <LayoutDashboard size={32} color="#00E5FF" />,
    title: "Kanban Específico (CRM)",
    desc: "Organize seu processo comercial com um funil de vendas formatado para proteção veicular. Veja exatamente a jornada dos leads: Cotações -> Vistoria -> Venda."
  },
  {
    icon: <Receipt size={32} color="#0055FF" />,
    title: "Motor de Preço Regionalizado",
    desc: "Nossas propostas sofrem mutação baseada na cidade do cliente. O serviço aplica o custo do modelo FIPE em 1 minuto sem intervenção."
  },
  {
    icon: <FileSignature size={32} color="#00E5FF" />,
    title: "Compilação de Cotações em PDF",
    desc: "Gere cotações White-label na hora. Compare planos Bronze, Prata e Ouro dinamicamente e dispare pelo WhatsApp do seu lead."
  },
  {
    icon: <ShieldAlert size={32} color="#0055FF" />,
    title: "Vistoria Antifraude Integrada",
    desc: "Orquestramos serviços como o App Visto. A imagem 360° e geolocalizações são atestadas pelo Stark antes de seguir o funil."
  },
  {
    icon: <CreditCard size={32} color="#00E5FF" />,
    title: "Split Automático de Pagamento",
    desc: "Feche adesões 100% online no cartão de crédito/PIX. A taxa do vendedor vai pronta pra conta dele, e a tarifa transacional pra Associação."
  },
  {
    icon: <Send size={32} color="#0055FF" />,
    title: "Automações e Alertas",
    desc: "Identifica se o lead esfriou e se o tempo ocioso excedeu. O seu vendedor é cobrado para fechar o negócio no momento certo."
  }
];

const Features = () => {
  return (
    <section id="solucoes" className="section-padding" style={{ position: 'relative', zIndex: 5 }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '700px', margin: '0 auto 80px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Uma verdadeira máquina <br/> <span className="gradient-text-alt">para sua associação.</span></h2>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem' }}>
            Construímos um ecossistema moldado na sua realidade de vendas. Nada de gambiarras em planilhas.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {coreFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 229, 255, 0.1)' }}
              className="glass-panel"
              style={{ padding: '40px 30px', transition: 'all 0.3s ease' }}
            >
              <div style={{ marginBottom: '20px', display: 'inline-block', padding: '15px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>{feature.title}</h3>
              <p style={{ color: '#94A3B8', lineHeight: 1.6, fontSize: '0.95rem' }}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
