import React from 'react';
import PageLayout from '../components/PageLayout';
import { Shield, Zap, Users, Heart, Star, Award } from 'lucide-react';

export default function ValoresScreen() {
  const vals = [
    { n: 'DISCIPLINA', i: <Zap color="#d32f2f" size={32} /> },
    { n: 'RESPETO', i: <Users color="#d32f2f" size={32} /> },
    { n: 'COMPROMISO', i: <Shield color="#d32f2f" size={32} /> },
    { n: 'PASIÓN', i: <Heart color="#d32f2f" size={32} /> },
    { n: 'EXCELENCIA', i: <Star color="#d32f2f" size={32} /> },
    { n: 'LEALTAD', i: <Award color="#d32f2f" size={32} /> }
  ];

  return (
    <PageLayout title="VALORES">
      <div style={styles.gridContainer}>
        {vals.map((v, i) => (
          <div key={i} style={styles.valueCard}>
            <div style={styles.iconBox}>{v.i}</div>
            <h3 style={styles.valueTitle}>{v.n}</h3>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

const styles = {
  gridContainer: {
    display: 'grid',
    // Esta es la clave: 3 columnas de igual tamaño
    gridTemplateColumns: 'repeat(3, 1fr)', 
    gap: '20px',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px'
  },
  valueCard: {
    background: 'white',
    padding: '40px 20px',
    borderRadius: '15px',
    textAlign: 'center',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s ease'
  },
  iconBox: {
    marginBottom: '15px'
  },
  valueTitle: {
    fontSize: '1.1rem',
    fontWeight: '800',
    color: '#1A202C',
    letterSpacing: '1px'
  }
};