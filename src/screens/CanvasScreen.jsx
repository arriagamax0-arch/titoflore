import React from 'react';
import PageLayout from '../components/PageLayout';
import { LayoutDashboard, Download, Maximize, AlertCircle } from 'lucide-react';

export default function CanvasScreen() {
  // Ajustes del archivo
  const nombreArchivo = "modelo-canvas.pdf"; // Nombre del archivo en tu carpeta 'public'
  const rutaArchivo = `/${nombreArchivo}`; 
  const archivoListo = true; // CAMBIA A 'true' cuando subas el archivo a public/

  return (
    <PageLayout title="MODELO BUSINESS CANVAS">
      <div style={styles.container}>
        <div style={styles.infoBox}>
          <LayoutDashboard size={40} color="#D32F2F" />
          <p style={styles.lead}>
            Visualiza la estructura estratégica de la <b>HyperPanchito App</b>: socios clave, 
            actividades, recursos y nuestra propuesta de valor tecnológica.
          </p>
        </div>

        {archivoListo ? (
          <div style={styles.canvasContainer}>
            <div style={styles.canvasHeader}>
              <span style={styles.tag}>Vista Previa Oficial</span>
              <a href={rutaArchivo} download style={styles.btnDownload}>
                <Download size={18} /> Descargar PDF
              </a>
            </div>
            
            <div style={styles.viewerWrapper}>
              <iframe 
                src={rutaArchivo} 
                title="Business Model Canvas" 
                style={styles.iframe}
              />
            </div>
          </div>
        ) : (
          <div style={styles.placeholderCard}>
            <AlertCircle size={50} color="#CBD5E0" />
            <h3>Lienzo en preparación</h3>
            <p>Sube el archivo <b>"{nombreArchivo}"</b> a la carpeta <b>public/</b> para visualizarlo aquí.</p>
          </div>
        )}
      </div>
    </PageLayout>
  );
}

const styles = {
  container: { maxWidth: '1200px', margin: '0 auto', padding: '0 20px' },
  infoBox: { textAlign: 'center', marginBottom: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' },
  lead: { fontSize: '1.2rem', color: '#4A5568', maxWidth: '800px', lineHeight: '1.6' },
  canvasContainer: { backgroundColor: 'white', borderRadius: '20px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', overflow: 'hidden' },
  canvasHeader: { padding: '15px 25px', backgroundColor: '#1A202C', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  tag: { color: 'white', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' },
  btnDownload: { backgroundColor: '#D32F2F', color: 'white', textDecoration: 'none', padding: '8px 16px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' },
  viewerWrapper: { width: '100%', height: '750px', backgroundColor: '#F7FAFC' },
  iframe: { width: '100%', height: '100%', border: 'none' },
  placeholderCard: { padding: '100px 20px', backgroundColor: 'white', borderRadius: '20px', textAlign: 'center', border: '3px dashed #E2E8F0', color: '#A0AEC0' }
};