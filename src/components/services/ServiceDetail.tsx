import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { WebDesign, WebDevelopment, WebsiteRedesign, UiUxDesign } from 'lucide-react';

interface ServiceDetailProps {
  service: {
    title: string;
    description: string;
    features: {
      title: string;
      description: string;
      icon: React.ComponentType<any>;
    }[];
    href: string;
  };
}

const ServiceDetail = ({ service }: ServiceDetailProps) => {
  const [selectedPackage, setSelectedPackage] = useState('basic');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    timeline: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // such as sending the data to a server.
    console.log('Form Data:', formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      timeline: '',
      budget: '',
      message: ''
    });
    alert('Form submitted!'); // Replace with a more user-friendly notification
  };

  return (
    <div className="min-h-screen bg-dark">
      <Navigation />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-eco-green/10"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-8 md:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-4 md:mb-6">
                {service.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-roboto max-w-4xl mx-auto mb-6 md:mb-8">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-eco-green to-eco-dark text-dark font-roboto font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg hover:shadow-xl hover:shadow-eco-green/30 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Digital Evolution
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-eco-green text-eco-green hover:bg-eco-green hover:text-dark font-roboto font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg transition-all duration-300"
                >
                  Schedule Free Consultation
                </Button>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="bg-gradient-to-r from-eco-green/10 to-eco-dark/10 rounded-2xl p-6 md:p-8 border border-eco-green/20 mb-8 md:mb-16">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-white mb-4">
                  Starting at ₹9,999
                </h3>
                <p className="text-base md:text-lg text-gray-300 font-roboto">
                  Professional {service.title.toLowerCase()} services with free consultation
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {service.features.map((feature, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-eco-green/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-eco-green to-eco-dark rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-dark" />
                  </div>
                  <h4 className="text-lg md:text-xl font-montserrat font-semibold text-white mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-sm md:text-base text-gray-300 font-roboto">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-gray-900 to-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold text-white mb-4 md:mb-6">
                Get Started Today
              </h2>
              <p className="text-base md:text-xl font-roboto text-gray-300 max-w-3xl mx-auto">
                Ready to transform your digital presence? Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-roboto font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-gray-900/80 border-gray-600 text-white placeholder-gray-400 focus:border-eco-green focus:ring-eco-green/20 h-12"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-roboto font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-900/80 border-gray-600 text-white placeholder-gray-400 focus:border-eco-green focus:ring-eco-green/20 h-12"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-roboto font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-gray-900/80 border-gray-600 text-white placeholder-gray-400 focus:border-eco-green focus:ring-eco-green/20 h-12"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-roboto font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-gray-900/80 border-gray-600 text-white placeholder-gray-400 focus:border-eco-green focus:ring-eco-green/20 h-12"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-roboto font-medium text-gray-300 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full h-12 bg-gray-900/80 border border-gray-600 text-white placeholder-gray-400 focus:border-eco-green focus:ring-eco-green/20 rounded-md px-3 py-2"
                    >
                      <option value="">Select project type</option>
                      <option value="new-website">New Website</option>
                      <option value="redesign">Website Redesign</option>
                      <option value="web-app">Web Application</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-roboto font-medium text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full h-12 bg-gray-900/80 border border-gray-600 text-white placeholder-gray-400 focus:border-eco-green focus:ring-eco-green/20 rounded-md px-3 py-2"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-25k">Under ₹25,000</option>
                      <option value="25k-50k">₹25,000 - ₹50,000</option>
                      <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                      <option value="100k-plus">₹1,00,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-roboto font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-gray-900/80 border border-gray-600 text-white placeholder-gray-400 focus:border-eco-green focus:ring-eco-green/20 rounded-md px-3 py-2 resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-eco-green to-eco-dark text-dark font-roboto font-semibold py-4 text-lg hover:shadow-lg hover:shadow-eco-green/25 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Digital Evolution
                </Button>
              </form>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;
