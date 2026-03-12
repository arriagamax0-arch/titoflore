import React from 'react';
import PageLayout from '../components/PageLayout';

export default function HomeScreen() {
  return (
    <PageLayout>
      <div style={{ height: '400px', background: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48) center/cover', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '20px', color: 'white' }}>
        <div style={{ background: 'rgba(0,0,0,0.6)', padding: '40px', borderRadius: '15px' }}>
          <h2 style={{ fontSize: '3rem' }}>SUPÉRATE CADA DÍA</h2>
          <p>Toda la administración de tu gimnasio, en una sola plataforma.</p>
        </div>
      </div>
    </PageLayout>
  );
}
