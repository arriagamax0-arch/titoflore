import React from 'react';
import PageLayout from '../components/PageLayout';
import { FileText, Download, AlertCircle } from 'lucide-react';

export default function DocumentacionScreen() {
  // Cuando tengas el PDF, lo guardas en la carpeta 'public' con el nombre 'documento.pdf'
  const rutaArchivo = "/documento.pdf"; 
  const archivoExiste = true; // Cambia a 'true' cuando ya hayas guardado el archivo

  return (
    <PageLayout title="DOCUMENTACIÓN">
      <div style={styles.card}>
        <div style={styles.iconContainer}>
          <FileText size={50} color="#D32F2F" />
        </div>
        
        <h3 style={styles.fileName}>Carta de Usuario</h3>
        
        {archivoExiste ? (
          <>
            <p style={styles.info}>Puedes previsualizar el documento aquí debajo o descargarlo directamente.</p>
            <div style={styles.previewBox}>
              <iframe 
                src={rutaArchivo} 
                title="Documentación" 
                style={styles.iframe}
              />
            </div>
            <div style={styles.buttonGroup}>
              <a href={rutaArchivo} download className="btn-download" style={styles.btnDownload}>
                <Download size={20} /> Descargar PDF
              </a>
            </div>
          </>
        ) : (
          <div style={styles.placeholder}>
            <AlertCircle size={40} color="#A0AEC0" />
            <p style={styles.placeholderText}>
              El documento se encuentra en proceso de carga. <br />
              Vuelve a consultar esta sección más tarde.
            </p>
          </div>
        )}
      </div>
    </PageLayout>
  );
}

const styles = {
  card: { backgroundColor: 'white', padding: '40px', borderRadius: '25px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', maxWidth: '900px', width: '95%', margin: '0 auto', textAlign: 'center' },
  iconContainer: { marginBottom: '20px' },
  fileName: { fontSize: '1.5rem', fontWeight: 'bold', color: '#1A202C', marginBottom: '10px' },
  info: { color: '#718096', marginBottom: '30px' },
  previewBox: { width: '100%', height: '500px', backgroundColor: '#F7FAFC', borderRadius: '15px', overflow: 'hidden', border: '1px solid #E2E8F0', marginBottom: '25px' },
  iframe: { width: '100%', height: '100%', border: 'none' },
  buttonGroup: { display: 'flex', justifyContent: 'center' },
  btnDownload: { display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#D32F2F', color: 'white', padding: '12px 25px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold' },
  placeholder: { padding: '60px 20px', backgroundColor: '#F7FAFC', borderRadius: '15px', border: '2px dashed #E2E8F0' },
  placeholderText: { color: '#A0AEC0', marginTop: '15px', lineHeight: '1.5' }
};