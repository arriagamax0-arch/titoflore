import React from 'react';
import PageLayout from '../components/PageLayout';
import { Target, CheckCircle } from 'lucide-react';

export default function ObjetivoScreen() {
  const puntosClave = [
    "Planes de entrenamiento 100% personalizados.",
    "Seguimiento nutricional y de progreso físico.",
    "Ambiente motivador y libre de prejuicios."
  ];

  return (
    <PageLayout title="OBJETIVO">
      <div style={objStyles.container}>
        <div style={objStyles.mainCard}>
          <Target size={60} color="#D32F2F" />
          <p style={objStyles.mainText}>
            Desarrollar un sistema de gestión híbrido (plataforma web y aplicación móvil) que automatice los procesos operativos del gimnasio y mejore la retención de sus clientes mediante un seguimiento personalizado.
          </p>
          
          <div style={objStyles.list}>
            {puntosClave.map((punto, index) => (
              <div key={index} style={objStyles.listItem}>
                <CheckCircle size={20} color="#25D366" />
                <span style={objStyles.listText}>{punto}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

const objStyles = {
  container: { display: 'flex', justifyContent: 'center', padding: '20px' },
  mainCard: {
    backgroundColor: 'white',
    padding: '50px',
    borderRadius: '25px',
    maxWidth: '650px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
    borderLeft: '10px solid #D32F2F'
  },
  mainText: {
    fontSize: '1.3rem',
    color: '#2D3748',
    textAlign: 'center',
    lineHeight: '1.7',
    margin: '25px 0',
    fontWeight: '500'
  },
  list: { width: '100%', marginTop: '20px' },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    padding: '10px',
    backgroundColor: '#F7FAFC',
    borderRadius: '10px'
  },
  listText: { marginLeft: '15px', color: '#4A5568', fontWeight: '600' }
};