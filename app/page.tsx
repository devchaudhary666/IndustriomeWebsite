'use client'

import { useState } from 'react';
import Head from 'next/head';
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
      <Head>
        <title>Industriome Technologies - AI-Native IIoT Platform for Smart Manufacturing</title>
        <meta name="description" content="Industriome Technologies - AI-native IIoT platform for smart manufacturing. Connect your factory floor to intelligent insights with flexible deployment, fast implementation, and affordable pricing for manufacturers." />
        <meta name="keywords" content="IIoT platform, industrial IoT, smart manufacturing, manufacturing intelligence, predictive maintenance, Industry 4.0, manufacturing analytics, production monitoring, AI manufacturing, factory automation" />
        <meta name="author" content="Industriome Technologies" />
        
        <meta property="og:title" content="Industriome Technologies - The Genome of Manufacturing" />
        <meta property="og:description" content="Smart Manufacturing Made Simple. AI-native IIoT platform that connects your equipment to deliver real-time insights. Deploy in weeks, not months." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.industriometech.com" />
        <meta property="og:image" content="https://www.industriometech.com/images/og-image.jpg" />
        <meta property="og:site_name" content="Industriome Technologies" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Industriome Technologies - Smart Manufacturing Platform" />
        <meta name="twitter:description" content="AI-native IIoT platform for manufacturers. Real-time monitoring, predictive maintenance, and intelligent insights." />
        <meta name="twitter:image" content="https://www.industriometech.com/images/twitter-card.jpg" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        
        <link rel="canonical" href="https://www.industriometech.com" />
        <link rel="icon" href="/favicon.ico" />
        
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
      </Head>

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