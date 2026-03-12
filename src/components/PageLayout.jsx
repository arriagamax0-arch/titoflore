import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, MessageCircle, MapPin } from 'lucide-react';
import './PageLayout.css';

export default function PageLayout({ children, title }) {
  return (
    <div className="layout-wrapper">
      <nav className="navbar">
        <Link to="/" className="nav-logo">
          HYPER<span className="red-text">PANCHITO</span>GYM
        </Link>
        <div className="nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/mision">Misión</Link>
          <Link to="/vision">Visión</Link>
          <Link to="/valores">Valores</Link>
          <Link to="/objetivo">Objetivo</Link>
          <Link to="/meta">Meta</Link>
          <Link to="/documentacion">Documentación</Link>
          <Link to="/canvas">Modelo Canvas</Link>
        </div>
      </nav>

      <main className="main-content">
        {title && <h1 className="page-header">{title}</h1>}
        <div className="children-container">{children}</div>
      </main>

      <footer className="footer">
        <div className="footer-line"></div>
        <p className="footer-title">EQUIPO DE TRABAJO</p>
        <ul className="team-names">
          <li>Perez Nava Juan Carlos</li>
          <li>Perez Media Francisco</li>
          <li>Hernandez Cervantes Miguel Angel</li>
          <li>Arriaga Mora Maximiliano</li>
        </ul>

        <div className="social-box">
          <a href="https://www.facebook.com/profile.php?id=61587855404372" target="_blank" rel="noreferrer" className="social-link fb">
            <Facebook size={20} /> Facebook
          </a>
          <a href="https://wa.me/527201994057" target="_blank" rel="noreferrer" className="social-link wa">
            <MessageCircle size={20} /> WhatsApp
          </a>
        </div>

        <div className="location">
          <MapPin size={16} color="#D32F2F" />
          <span>Colonia Lomas de San Juan, Capulhuac de Mirafuentes, CP: 52700</span>
        </div>
        <p className="copy">© 2026 HyperPanchitoGym</p>
      </footer>
    </div>
  );
}