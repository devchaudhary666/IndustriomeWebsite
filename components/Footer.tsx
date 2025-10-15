import { Linkedin, Twitter, Youtube, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import Image from 'next/image';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'Home', href: 'home' },
        { name: 'Contact', href: 'contact' },
      ],
    },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image src="/logo.png" alt="Industriome Logo" width={32} height={32} className="object-contain" />
              </div>
              <div className="text-white">Industriome</div>
            </div>
            <p className="text-sm mb-4">
              Enterprise-grade IIoT intelligence for SME manufacturers. Shop floor to cloud in weeks, not quarters.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-2">
              <p className="text-sm">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => onNavigate(link.href)}
                      className="text-sm hover:text-teal-400 transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
            <p>© 2025 Industriome Technologies. All rights reserved.</p>
            <div className="flex gap-4">
              <button className="hover:text-teal-400 transition-colors">Privacy Policy</button>
              <button className="hover:text-teal-400 transition-colors">Terms of Service</button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-teal-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors">
              <Youtube size={20} />
            </a>
            <a href="mailto:shobhit.sharma@industriometech.com" className="hover:text-teal-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>ISO 27001 Certified | SOC 2 Type II | GDPR Compliant | Made in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}