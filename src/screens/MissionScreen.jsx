import React from 'react';
import PageLayout from '../components/PageLayout';
import { Flag } from 'lucide-react';

export default function MissionScreen() {
  return (
    <PageLayout title="Misión">
      <div className="card-web" style={{ background: 'white', padding: '50px', borderRadius: '25px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', maxWidth: '600px', margin: '0 auto' }}>
        <Flag size={50} color="#d32f2f" style={{ marginBottom: '20px' }} />
        <p style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: '1.8' }}>
          Proveer a los centros fitness una plataforma tecnológica integral que centralice su administración y potencie la experiencia deportiva de sus miembros a través de la innovación digital.
        </p>
      </div>
    </PageLayout>
  );
}
