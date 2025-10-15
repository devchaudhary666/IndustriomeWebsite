'use client'

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Plug, Database, Brain, Factory, Zap, Gauge, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated particle background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(20, 184, 166, 0.4)';
        ctx.fill();

        particles.forEach((particle2, j) => {
          if (i === j) return;
          const dx = particle.x - particle2.x;
          const dy = particle.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.strokeStyle = `rgba(30, 58, 138, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const whatWeDo = [
    {
      icon: Plug,
      title: 'Connect Equipment',
      description: 'Seamlessly integrate with your existing machinery—no disruption to production',
    },
    {
      icon: Database,
      title: 'Collect Data',
      description: 'Automatically gather real-time information from across your factory floor',
    },
    {
      icon: Brain,
      title: 'Get Insights',
      description: 'AI-powered recommendations to optimize operations and boost productivity',
    },
  ];

  const whoItsFor = [
    {
      icon: Factory,
      title: 'Manufacturing Modernization',
      description: 'For facilities looking to digitalize operations without the complexity of traditional systems',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Zap,
      title: 'Simple Solutions',
      description: 'For teams tired of complicated, expensive systems that take months to deploy',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: Gauge,
      title: 'Fast Decisions',
      description: 'For companies wanting real-time information to make smarter, faster choices',
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  const trustSignals = [
    {
      icon: CheckCircle2,
      text: 'Built by Manufacturing Experts',
    },
    {
      icon: CheckCircle2,
      text: 'Deploy in Weeks',
    },
    {
      icon: CheckCircle2,
      text: 'Works with Existing Equipment',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#14b8a6]">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1e3a8a]/20" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl lg:text-7xl mb-6 tracking-tight font-bold text-white">
              Smart Manufacturing Made Simple
            </h1>
            
            <p className="text-xl lg:text-2xl mb-10 text-blue-50 max-w-3xl mx-auto">
              Connect your factory floor to intelligent insights—no complexity, no long deployments
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                style={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  padding: '1.5rem 2rem',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  borderRadius: '0.5rem',
                  border: '2px solid white',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <span style={{ color: 'white' }}>Get Started</span>
                <ArrowRight size={20} style={{ color: 'white' }} />
              </button>
              
              <button
                onClick={() => onNavigate('contact')}
                style={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  padding: '1.5rem 2rem',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  borderRadius: '0.5rem',
                  border: '2px solid white',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <span style={{ color: 'white' }}>Talk to Us</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl mb-6 text-[#1e3a8a] font-bold">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industriome connects your manufacturing equipment to give you real-time visibility and AI-powered recommendations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {whatWeDo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#14b8a6] flex items-center justify-center">
                    <Icon size={48} className="text-white" style={{ color: 'white' }} />
                  </div>
                  <h3 className="text-2xl mb-4 text-[#1e3a8a] font-semibold">{item.title}</h3>
                  <p className="text-gray-600 text-lg">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl mb-6 text-[#1e3a8a] font-bold">Who It's For</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whoItsFor.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-[#14b8a6] bg-white">
                    <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                      <Icon size={32} className="text-white" style={{ color: 'white' }} />
                    </div>
                    <h3 className="text-2xl mb-4 text-[#1e3a8a] font-semibold">{item.title}</h3>
                    <p className="text-gray-600 text-lg">{item.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-16 bg-white border-y">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 max-w-5xl mx-auto">
            {trustSignals.map((signal, index) => {
              const Icon = signal.icon;
              return (
                <motion.div
                  key={signal.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#14b8a6] to-[#0d9488] flex items-center justify-center flex-shrink-0">
                    <Icon size={24} className="text-white" style={{ color: 'white' }} />
                  </div>
                  <span className="text-lg text-[#1e3a8a] font-medium">{signal.text}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#1e3a8a] to-[#14b8a6]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl lg:text-5xl mb-6 font-bold text-white">
              Ready to Transform Your Manufacturing?
            </h2>
            <p className="text-xl mb-10 text-blue-50">
              Schedule a consultation with our team to see how Industriome can work for you
            </p>

            <button
              onClick={() => onNavigate('contact')}
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '1.5rem 3rem',
                fontSize: '1.125rem',
                fontWeight: '600',
                borderRadius: '0.5rem',
                border: '2px solid white',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <span style={{ color: 'white' }}>Schedule a Consultation</span>
              <ArrowRight size={20} style={{ color: 'white' }} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}