import React from 'react';
import PageLayout from '../components/PageLayout';
import { Trophy, TrendingUp, Star } from 'lucide-react';

export default function MetaScreen() {
  const metas = [
    {
   
      titulo: '',
      desc: 'Lanzar el Producto Mínimo Viable (MVP) de Gym Pro en un plazo de 6 meses, logrando la implementación exitosa y facturación activa en al menos 5 gimnasios locales, y alcanzando un mínimo de 500 usuarios finales utilizando la app móvil para sus entrenamientos.',
      icono: <Trophy size={40} color="#D32F2F" />
    },
   
  ];

  return (
    <PageLayout title="META">
      <div style={styles.grid}>
        {metas.map((meta) => (
          <div key={meta.id} style={styles.card}>
            <div style={styles.numberContainer}>
              <span style={styles.number}>{meta.id}</span>
            </div>
            <div style={styles.iconBox}>
              {meta.icono}
            </div>
            <h3 style={styles.cardTitle}>{meta.titulo}</h3>
            <p style={styles.cardDesc}>{meta.desc}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

// Estilos rápidos integrados (puedes moverlos a CSS si prefieres)
const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '20px'
  },
  card: {
    backgroundColor: '#1A202C',
    padding: '40px 30px',
    borderRadius: '25px',
    textAlign: 'center',
    position: 'relative',
    transition: 'transform 0.3s ease',
    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
    borderBottom: '5px solid #D32F2F'
  },
  numberContainer: {
    position: 'absolute',
    top: '20px',
    right: '30px'
  }, // <--- REVISA QUE ESTA COMA ESTÉ AQUÍ
  number: {
    fontSize: '3rem',
    fontWeight: '900',
    color: 'rgba(211, 47, 47, 0.2)'
  }, // <--- REVISA QUE ESTA COMA ESTÉ AQUÍ
  iconBox: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center'
  },
  cardTitle: {
    color: 'white',
    fontSize: '1.5rem',
    marginBottom: '15px',
    fontWeight: 'bold'
  },
  cardDesc: {
    color: '#A0AEC0',
    fontSize: '1rem',
    lineHeight: '1.6'
  }
};