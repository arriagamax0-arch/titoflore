import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importación de pantallas
import HomeScreen from './screens/HomeScreen';
import MissionScreen from './screens/MissionScreen';
import VisionScreen from './screens/VisionScreen';
import ValoresScreen from './screens/ValoresScreen';
import ObjetivoScreen from './screens/ObjetivoScreen';
import MetaScreen from './screens/MetaScreen';
import DocumentacionScreen from './screens/DocumentacionScreen';
import CanvasScreen from './screens/CanvasScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/mision" element={<MissionScreen />} />
        <Route path="/vision" element={<VisionScreen />} />
        <Route path="/valores" element={<ValoresScreen />} />
        <Route path="/objetivo" element={<ObjetivoScreen />} />
        <Route path="/meta" element={<MetaScreen />} />
        <Route path="/documentacion" element={<DocumentacionScreen />} />
        <Route path="/canvas" element={<CanvasScreen />} />
      </Routes>
    </Router>
  );
}

export default App;