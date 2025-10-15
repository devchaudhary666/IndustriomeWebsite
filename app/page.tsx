'use client'

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/components/pages/HomePage';
import { ContactPage } from '@/components/pages/ContactPage';
import { Toaster } from '@/components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style jsx global>{`
        * {
          color: #000000 !important;
        }
        body {
          color: #000000 !important;
          background: white !important;
        }
        h1, h2, h3, h4, h5, h6, p, span, div, label, a {
          color: #000000 !important;
        }
        input, textarea, select {
          color: #000000 !important;
          background: white !important;
          border: 1px solid #d1d5db !important;
          padding: 0.5rem 0.75rem !important;
        }
        input::placeholder, textarea::placeholder {
          color: #6b7280 !important;
        }
        
        /* FIX: Gradient backgrounds keep white text */
        .bg-gradient-to-r, 
        .bg-gradient-to-r *, 
        .bg-gradient-to-br, 
        .bg-gradient-to-br *,
        section.bg-gradient-to-br *,
        section.bg-gradient-to-r * {
          color: white !important;
        }
        
        /* FIX: Buttons on gradient backgrounds */
        .bg-gradient-to-br button,
        .bg-gradient-to-br button *,
        section[class*="gradient"] button,
        section[class*="gradient"] button * {
          color: inherit !important;
        }
        
        /* FIX: White buttons have dark text */
        button.bg-white,
        button.bg-white * {
          color: #1e3a8a !important;
        }
        
        /* FIX: Outline buttons have white text */
        button[class*="outline"],
        button[class*="outline"] * {
          color: white !important;
        }
        
        header, header * {
          color: white !important;
        }
        footer, footer * {
          color: #d1d5db !important;
        }
      `}</style>

      <div className="min-h-screen flex flex-col">
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        
        <main className="flex-1">
          {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
          {currentPage === 'contact' && <ContactPage />}
        </main>

        <Footer onNavigate={handleNavigate} />
      </div>

      <Toaster />
    </>
  );
}