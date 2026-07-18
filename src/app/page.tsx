'use client';

import React, { useState, useEffect } from 'react';
import MandalikaHero from './components/MandalikaHero';
import ServiceCard from './components/ServiceCard';
import MapCalculator from './components/MapCalculator';
import GuidebookReader from './components/GuidebookReader';
import MemberForm from './components/MemberForm';
import DriverSection from './components/DriverSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

export default function Home() {
  const [selectedService, setSelectedService] = useState<'antar-jemput' | 'jastip' | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  // Navigation Links
  const navLinks = [
    { id: 'dashboard', label: 'Beranda' },
    { id: 'layanan', label: 'Layanan' },
    { id: 'mekanisme', label: 'Mekanisme' },
    { id: 'gabung-grup', label: 'Gabung Grup' },
    { id: 'mitra-driver', label: 'Mitra Driver' },
    { id: 'tentang-kami', label: 'Tentang Kami' },
  ];

  // Scroll spy setup
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['dashboard', 'layanan', 'mekanisme', 'gabung-grup', 'mitra-driver', 'tentang-kami'];
      let current = 'dashboard';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Jika bagian atas section berada dekat atau di atas batas viewport atas
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Navbar / Header */}
      <header className="main-header">
        <div className="container navbar-container">
          <a href="#" className="logo">
            <img src="/assets/logo.png" alt="MINTA.PERGI Logo" className="logo-img" />
            <span className="logo-text">MINTA.<span className="accent">PERGI</span></span>
          </a>
          
          <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={(e) => handleNavLinkClick(e, link.id)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="nav-actions">
            <a 
              href="#layanan" 
              className="btn btn-gold btn-sm btn-nav"
              onClick={(e) => handleNavLinkClick(e, 'layanan')}
            >
              Pesan Sekarang
            </a>
            
            <button 
              className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`} 
              onClick={toggleMobileMenu}
              aria-label="Open menu"
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Sections */}
      <main>
        <MandalikaHero />
        
        <ServiceCard 
          selectedService={selectedService} 
          onSelectService={setSelectedService} 
        />
        
        {selectedService && (
          <section className="calculator-section" style={{ paddingBottom: '100px' }}>
            <div className="container">
              <MapCalculator selectedService={selectedService} />
            </div>
          </section>
        )}
        
        <GuidebookReader />
        
        <MemberForm />
        
        <DriverSection />
        
        <AboutSection />
      </main>

      <Footer />
    </>
  );
}
