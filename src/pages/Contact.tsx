import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Calendar, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [consultationForm, setConsultationForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    projectDetails: ''
  });
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmittingConsultation, setIsSubmittingConsultation] = useState(false);
  const [isSubmittingInquiry, setIsSubmittingInquiry] = useState(false);
  const { toast } = useToast();

  const handleConsultationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setConsultationForm({
      ...consultationForm,
      [e.target.name]: e.target.value
    });
  };

  const handleInquiryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setInquiryForm({
      ...inquiryForm,
      [e.target.name]: e.target.value
    });
  };

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingConsultation(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Consultation Scheduled!",
        description: "We'll contact you shortly to confirm the details.",
      });
      setConsultationForm({ name: '', email: '', phone: '', service: '', projectDetails: '' });
      setIsSubmittingConsultation(false);
    }, 1000);
  };

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingInquiry(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setInquiryForm({ name: '', email: '', phone: '', subject: '', message: '' });
      setIsSubmittingInquiry(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "akshayrajput2616@gmail.com",
      link: "mailto:akshayrajput2616@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 96538 14628",
      link: "tel:+919653814628"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India",
      link: "#"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Web Development Services | devXplosion</title>
        <meta name="description" content="Contact devXplosion for web development, design, and UX services. Schedule a free consultation to discuss your project." />
        <meta name="keywords" content="contact web developers, hire web designers, UX consultation, web development services" />
        <meta property="og:title" content="Contact Us | Web Development Services | devXplosion" />
        <meta property="og:description" content="Contact devXplosion for web development, design, and UX services." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://devxplosion.com/contact" />
      </Helmet>
      
      <div className="min-h-screen bg-dark">
        <Navigation />
        
        <div className="pt-16">
          {/* Hero Section */}
          <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-eco-green/10"></div>
            
            <div className="max-w-7xl mx-auto relative z-10 text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-4 md:mb-6">
                Get in <span className="text-eco-green">Touch</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-roboto max-w-4xl mx-auto mb-8 md:mb-12">
                Ready to transform your digital presence? Let's discuss your project and create something extraordinary together.
              </p>
            </div>
          </section>

          {/* Contact Forms Section */}
          <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
                
                {/* Schedule Free Consultation Form */}
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md rounded-2xl border border-eco-green/30 p-6 md:p-8">
                  <div className="text-center mb-6 md:mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-eco-green to-eco-dark rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-dark" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-montserrat font-bold text-white mb-4">
                      Schedule Free Consultation
                    </h3>
                    <p className="text-sm md:text-base text-gray-300 font-roboto">
                      Book a 30-minute discovery call to discuss your project goals.
                    </p>
                  </div>

                  <form onSubmit={handleConsultationSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-roboto font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          type="text"
                          required
                          value={consultationForm.name}
                          onChange={handleConsultationChange}
                          className="bg-gray-900/90 border-gray-600 text-white placeholder-gray-400 focus:border-eco-green focus:ring-eco-green/20 h-12"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-roboto font-medium text-gray-300 mb-2">
                          Email *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          required
                          value={consultationForm.email}
                          onChange={handleConsultationChange}
                          className="bg-gray-900/90 border-gray-600 text-white placeholder-gray-400 focus:border-eco-green focus:ring-eco-green/20 h-12"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-roboto font-medium text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          value={consultationForm.phone}
                          onChange={handleConsultationChange}
                          className="bg-gray-900/90 border-gray-600 text-white placeholder-gray-400 focus:border-eco-green focus:ring-eco-green/20 h-12"
                          placeholder="Your phone number"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-roboto font-medium text-gray-300 mb-2">
                          Service Interest *
                        </label>
                        <select
                          name="service"
                          required
                          value={consultationForm.service}
                          onChange={handleConsultationChange}
                          className="w-full h-12 bg-gray-900/90 border border-gray-600 text-white focus:border-eco-green focus:ring-eco-green/20 rounded-md px-3 py-2"
                        >
                          <option value="">Select a service</option>
                          <option value="web-design">Web Design</option>
                          <option value="web-development">Web Development</option>
                          <option value="website-redesign">Website Redesign</option>
                          <option value="ui-ux-design">UI/UX Design</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-roboto font-medium text-gray-300 mb-2">
                        Project Details
                      </label>
                      <textarea
                        name="projectDetails"
                        value={consultationForm.projectDetails}
                        onChange={handleConsultationChange}
                        rows={4}
                        className="w-full bg-gray-900/90 border border-gray-600 text-white placeholder-gray-400 focus:border-eco-green focus:ring-eco-green/20 rounded-md px-3 py-2 resize-none"
                        placeholder="Brief description of your project..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmittingConsultation}
                      className="w-full bg-gradient-to-r from-eco-green to-eco-dark text-dark font-roboto font-semibold py-4 hover:shadow-lg hover:shadow-eco-green/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                    >
                      {isSubmittingConsultation ? 'Scheduling...' : 'Schedule Free Consultation'}
                    </Button>
                  </form>
                </div>

                {/* General Inquiry Form */}
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md rounded-2xl border border-eco-green/30 p-6 md:p-8">
                  <div className="text-center mb-6 md:mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-eco-green to-eco-dark rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-8 h-8 text-dark" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-montserrat font-bold text-white mb-4">
                      General Inquiry
                    </h3>
                    <p className="text-sm md:text-base text-gray-300 font-roboto">
                      Have questions? Send us a message and we'll get back to you.
                    </p>
                  </div>

                  <form onSubmit={handleInquirySubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-roboto font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          type="text"
                          required
                          value={inquiryForm.name}
                          onChange={handleInquiryChange}
                          className="bg-gray-900/90 border-gray-600 text-white placeholder-gray-400 focus:border-eco-green focus:ring-eco-green/20 h-12"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-roboto font-medium text-gray-300 mb-2">
                          Email *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          required
                          value={inquiryForm.email}
                          onChange={handleInquiryChange}
                          className="bg-gray-900/90 border-gray-600 text-white placeholder-gray-400 focus:border-eco-green focus:ring-eco-green/20 h-12"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-roboto font-medium text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          value={inquiryForm.phone}
                          onChange={handleInquiryChange}
                          className="bg-gray-900/90 border-gray-600 text-white placeholder-gray-400 focus:border-eco-green focus:ring-eco-green/20 h-12"
                          placeholder="Your phone number"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-roboto font-medium text-gray-300 mb-2">
                          Subject *
                        </label>
                        <select
                          name="subject"
                          required
                          value={inquiryForm.subject}
                          onChange={handleInquiryChange}
                          className="w-full h-12 bg-gray-900/90 border border-gray-600 text-white focus:border-eco-green focus:ring-eco-green/20 rounded-md px-3 py-2"
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Question</option>
                          <option value="pricing">Pricing Information</option>
                          <option value="support">Technical Support</option>
                          <option value="partnership">Partnership Opportunity</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-roboto font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        value={inquiryForm.message}
                        onChange={handleInquiryChange}
                        rows={5}
                        className="w-full bg-gray-900/90 border border-gray-600 text-white placeholder-gray-400 focus:border-eco-green focus:ring-eco-green/20 rounded-md px-3 py-2 resize-none"
                        placeholder="Your message..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmittingInquiry}
                      className="w-full bg-gradient-to-r from-eco-green to-eco-dark text-dark font-roboto font-semibold py-4 hover:shadow-lg hover:shadow-eco-green/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                    >
                      {isSubmittingInquiry ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information Section */}
          <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-dark">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold text-white mb-4 md:mb-6">
                  Contact <span className="text-eco-green">Information</span>
                </h2>
                <p className="text-lg md:text-xl font-roboto text-gray-300 max-w-3xl mx-auto">
                  Reach out to us through the following channels. We are eager to assist you with your digital needs.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-eco-green/50 transition-all duration-300 group"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-eco-green to-eco-dark rounded-full flex items-center justify-center mb-4 group-hover:animate-glow-pulse">
                        <IconComponent className="w-8 h-8 text-dark" />
                      </div>
                      <h4 className="text-sm font-roboto font-medium text-eco-green uppercase tracking-wider mb-2">
                        {info.title}
                      </h4>
                      <p className="text-white font-roboto text-lg group-hover:text-eco-green transition-colors duration-300 text-center">
                        {info.value}
                      </p>
                    </a>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default Contact;
