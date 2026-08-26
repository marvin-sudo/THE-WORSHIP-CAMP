/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SchedulePage from './pages/SchedulePage';
import VenuePage from './pages/VenuePage';
import SpeakersPage from './pages/SpeakersPage';
import GalleryPage from './pages/GalleryPage';
import RegisterPage from './pages/RegisterPage';
import ContactFAQPage from './pages/ContactFAQPage';

import RegistrationModal from './components/RegistrationModal';
import LocationModal from './components/LocationModal';
import GalleryModal from './components/GalleryModal';

export default function App() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [activeGalleryPhotoId, setActiveGalleryPhotoId] = useState<number | null>(null);

  const handleOpenRegister = () => {
    setIsRegisterModalOpen(true);
  };

  const handleCloseRegister = () => {
    setIsRegisterModalOpen(false);
  };

  const handleOpenMap = () => {
    setIsMapModalOpen(true);
  };

  const handleCloseMap = () => {
    setIsMapModalOpen(false);
  };

  const handlePhotoClick = (id: number) => {
    setActiveGalleryPhotoId(id);
  };

  const handleCloseGallery = () => {
    setActiveGalleryPhotoId(null);
  };

  return (
    <ErrorBoundary>
      <HashRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-[#f8faff] text-gray-900 flex flex-col font-sans selection:bg-[#d4af37] selection:text-white">
          {/* Top Navbar */}
          <Navbar onRegisterClick={handleOpenRegister} />

          {/* Dynamic Route Pages */}
          <main className="flex-1">
            <Routes>
              <Route 
                path="/" 
                element={
                  <HomePage 
                    onRegisterClick={handleOpenRegister}
                    onOpenMap={handleOpenMap}
                    onPhotoClick={handlePhotoClick}
                  />
                } 
              />
              <Route 
                path="/about" 
                element={<AboutPage onRegisterClick={handleOpenRegister} />} 
              />
              <Route 
                path="/schedule" 
                element={<SchedulePage />} 
              />
              <Route 
                path="/venue" 
                element={<VenuePage />} 
              />
              <Route 
                path="/ministers" 
                element={<SpeakersPage />} 
              />
              <Route 
                path="/speakers" 
                element={<Navigate to="/ministers" replace />} 
              />
              <Route 
                path="/gallery" 
                element={<GalleryPage onPhotoClick={handlePhotoClick} />} 
              />
              <Route 
                path="/register" 
                element={<RegisterPage />} 
              />
              <Route 
                path="/contact" 
                element={<ContactFAQPage />} 
              />
              <Route 
                path="/faq" 
                element={<Navigate to="/contact" replace />} 
              />
              <Route 
                path="*" 
                element={<Navigate to="/" replace />} 
              />
            </Routes>
          </main>

          {/* Global Footer */}
          <Footer onRegisterClick={handleOpenRegister} />

          {/* Interactive Global Registration Modal */}
          <RegistrationModal 
            isOpen={isRegisterModalOpen} 
            onClose={handleCloseRegister} 
          />

          {/* Interactive Location & Directions Modal */}
          <LocationModal 
            isOpen={isMapModalOpen} 
            onClose={handleCloseMap} 
          />

          {/* Photo Lightbox Modal */}
          <GalleryModal
            activePhotoId={activeGalleryPhotoId}
            onClose={handleCloseGallery}
            onSelectPhoto={handlePhotoClick}
          />
        </div>
      </HashRouter>
    </ErrorBoundary>
  );
}
