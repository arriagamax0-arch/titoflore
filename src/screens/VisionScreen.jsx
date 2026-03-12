import React from 'react';
import PageLayout from '../components/PageLayout';
import { Eye } from 'lucide-react';

export default function VisionScreen() {
  return (
    <PageLayout title="VISIÓN">
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.iconCircle}>
            <Eye size={50} color="white" />
          </div>
         
          <p style={styles.text}>
           Convertirnos en el estándar digital líder para la gestión de gimnasios en la región, transformando la manera en que los centros deportivos operan y la forma en que las personas interactúan con sus propios objetivos físicos atreves de nuestra app.
          </p>
          <div style={styles.decorativeBar} />
        </div>
      </div>
    </PageLayout>
  );
}

const styles = {
  container: { display: 'flex', justifyContent: 'center', padding: '20px' },
  card: {
    backgroundColor: 'white',
    padding: '60px 40px',
    borderRadius: '30px',
    maxWidth: '700px',
    textAlign: 'center',
    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
    position: 'relative',
    overflow: 'hidden'
  },
  iconCircle: {
    backgroundColor: '#1976D2', // Azul para diferenciar de la misión
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 30px',
    boxShadow: '0 10px 20px rgba(25, 118, 210, 0.3)'
  },
  subtitle: { color: '#1A202C', fontSize: '1.8rem', marginBottom: '20px', fontWeight: '800' },
  text: { fontSize: '1.2rem', color: '#4A5568', lineHeight: '1.8', margin: '0' },
  decorativeBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '8px',
    backgroundColor: '#1976D2'
  }
}