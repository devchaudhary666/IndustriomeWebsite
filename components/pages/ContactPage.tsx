'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Calendar } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import { toast } from 'sonner';

export function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    employees: '',
    message: '',
    demoPreference: false,
  });
const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbwqqLnxOBnYMt_P84jLX7Y1iuktfa3ZcKhsFKwZNJ3-6VWk126angCIjAD78QzmrP8aKA/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        industry: formData.industry,
        employees: formData.employees,
        message: formData.message,
      }),
    });

    toast.success('Thank you! We will be in touch within 24 hours.');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phone: '',
      industry: '',
      employees: '',
      message: '',
      demoPreference: false,
    });

  } catch (error) {
    toast.error('Something went wrong. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'shobhit.sharma@industriometech.com',
      link: 'mailto:shobhit.sharma@industriometech.com',
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      value: 'Dehradun, Uttarakhand, India',
      link: null,
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 96346 84196',
      link: 'tel:+919634684196',
    },
  ];

  const demoFeatures = [
    'Live platform walkthrough (30 minutes)',
    'Customized use case demonstration',
    'ROI calculation for your facility',
    'Technical architecture overview',
    'Integration options discussion',
    'Pricing and deployment timeline',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-6xl mb-6">
              Let's Transform Your Manufacturing Together
            </h1>
            <p className="text-xl text-slate-300">
              Schedule a demo, ask questions, or discuss your specific requirements. We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card className="p-8 lg:p-10">
                <h2 className="text-3xl mb-6">Request a Demo</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Work Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john.smith@company.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    
                    
                      <div>
                        <Label htmlFor="industry">Industry Type *</Label>
                        <Input
                          id="industry"
                          required
                          value={formData.industry}
                          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                          placeholder="e.g., Automotive, Pharmaceutical"
                        />
                      </div>

                        <div>
                          <Label htmlFor="employees">Number of Employees *</Label>
                          <Input
                            id="employees"
                            required
                            value={formData.employees}
                            onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                            placeholder="e.g., 50-100"
                          />
                        </div>
                      
                    
                  </div>

                  <div>
                    <Label htmlFor="message">Tell us about your requirements</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="What challenges are you looking to solve?"
                      rows={4}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="demo"
                      checked={formData.demoPreference}
                      onCheckedChange={(checked) => 
                        setFormData({ ...formData, demoPreference: checked as boolean })
                      }
                    />
                    <label
                      htmlFor="demo"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
                    size="lg"
                  >
                    Submit 
                    <Send className="ml-2" size={20} />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our Privacy Policy. We respect your data and will never share it with third parties.
                  </p>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info & Demo Details */}
            <div className="space-y-8">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card className="p-8">
                  <h3 className="text-2xl mb-6">Get in Touch</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info) => {
                      const Icon = info.icon;
                      return (
                        <div key={info.title} className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon size={24} className="text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">{info.title}</p>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="hover:text-blue-600 transition-colors"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p>{info.value}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Card>
              </motion.div>

              {/* What to Expect in Demo */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Calendar size={32} className="text-blue-600" />
                    <h3 className="text-2xl">What to Expect in Your Demo</h3>
                  </div>
                  <ul className="space-y-3">
                    {demoFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-600 to-teal-600 mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <p className="text-sm">
                      <strong>Duration:</strong> 30-45 minutes<br />
                      <strong>Format:</strong> Video call with screen sharing<br />
                      <strong>Follow-up:</strong> Detailed proposal within 48 hours
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Office Location */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="p-8">
                  <h3 className="text-2xl mb-4">Office Location</h3>
                  <div className="bg-slate-100 rounded-lg p-6 mb-4">
                    <p className="mb-2">
                      <strong>Industriome Technologies</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Dehradun, Uttarakhand, India
                    </p>
                  </div>
                  
                  <div className="flex gap-4 pt-4 border-t">
                    <a
                      href="#"
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
                      aria-label="Twitter"
                    >
                      <svg className="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-red-100 hover:bg-red-200 transition-colors"
                      aria-label="YouTube"
                    >
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-4">Ready to See Industriome in Action?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join the growing number of manufacturers transforming their operations with our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Schedule Demo
            </Button>
            <a
              href="mailto:shobhit.sharma@industriometech.com"
              className="inline-flex items-center justify-center h-10 px-6 border-2 border-white text-white rounded-md hover:bg-white/10 transition-colors"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}