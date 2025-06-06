import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BookingSystem from '@/components/BookingSystem';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@devxplosion.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 98765 43210',
      description: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Mumbai, India',
      description: 'Schedule an appointment'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Schedule Free Consultation | devXplosion</title>
        <meta name="description" content="Contact devXplosion for professional web development, design, and UX services. Book your free consultation today!" />
        <meta name="keywords" content="contact web developer, free consultation, web design consultation, get quote, web development services contact" />
        <meta property="og:title" content="Contact Us | Schedule Free Consultation | devXplosion" />
        <meta property="og:description" content="Contact devXplosion for professional web development and design services. Free consultation available!" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://devxplosion.com/contact" />
      </Helmet>
      
      <div className="min-h-screen bg-dark">
        <Navigation />
        
        <div className="pt-16">
          {/* Hero Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-eco-green/10"></div>
            
            <div className="max-w-7xl mx-auto relative z-10 text-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-6 animate-fade-in-up">
                Let's <span className="text-eco-green">Connect</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 font-roboto max-w-4xl mx-auto mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Ready to transform your digital presence? Book your <span className="text-eco-green font-semibold">FREE consultation</span> or get in touch with our team.
              </p>
            </div>
          </section>

          {/* Contact Info Cards */}
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card 
                      key={index}
                      className="bg-dark/80 backdrop-blur-md border-eco-green/20 hover:border-eco-green/60 transition-all duration-300 text-center group"
                    >
                      <CardHeader>
                        <div className="w-16 h-16 bg-eco-green/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:animate-glow-pulse">
                          <Icon className="w-8 h-8 text-eco-green" />
                        </div>
                        <CardTitle className="text-xl font-montserrat font-bold text-white">
                          {info.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-lg font-roboto text-eco-green mb-2">
                          {info.details}
                        </p>
                        <CardDescription className="text-gray-300 font-roboto">
                          {info.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Main Contact Section with Tabs */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <Tabs defaultValue="booking" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8 bg-dark/60 border border-eco-green/20">
                  <TabsTrigger 
                    value="booking" 
                    className="text-white data-[state=active]:bg-eco-green data-[state=active]:text-dark font-roboto"
                  >
                    Schedule Free Consultation
                  </TabsTrigger>
                  <TabsTrigger 
                    value="contact" 
                    className="text-white data-[state=active]:bg-eco-green data-[state=active]:text-dark font-roboto"
                  >
                    General Inquiry
                  </TabsTrigger>
                </TabsList>

                {/* Booking System Tab */}
                <TabsContent value="booking">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-montserrat font-bold text-white mb-4">
                      Book Your <span className="text-eco-green">Free Consultation</span>
                    </h2>
                    <p className="text-lg text-gray-300 font-roboto max-w-2xl mx-auto">
                      Get expert advice, project assessment, and strategic recommendations - completely free!
                    </p>
                  </div>
                  <BookingSystem />
                </TabsContent>

                {/* Contact Form Tab */}
                <TabsContent value="contact">
                  <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <div>
                      <h2 className="text-3xl font-montserrat font-bold text-white mb-8">
                        General <span className="text-eco-green">Inquiry</span>
                      </h2>
                      
                      <Card className="bg-dark/80 backdrop-blur-md border-eco-green/20">
                        <CardContent className="p-8">
                          <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-white font-roboto mb-2">Name *</label>
                                <Input
                                  value={formData.name}
                                  onChange={(e) => handleInputChange('name', e.target.value)}
                                  className="bg-dark/60 border-eco-green/20 text-white placeholder-gray-400 focus:border-eco-green"
                                  placeholder="Your full name"
                                  required
                                />
                              </div>
                              <div>
                                <label className="block text-white font-roboto mb-2">Email *</label>
                                <Input
                                  type="email"
                                  value={formData.email}
                                  onChange={(e) => handleInputChange('email', e.target.value)}
                                  className="bg-dark/60 border-eco-green/20 text-white placeholder-gray-400 focus:border-eco-green"
                                  placeholder="your@email.com"
                                  required
                                />
                              </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-white font-roboto mb-2">Phone</label>
                                <Input
                                  value={formData.phone}
                                  onChange={(e) => handleInputChange('phone', e.target.value)}
                                  className="bg-dark/60 border-eco-green/20 text-white placeholder-gray-400 focus:border-eco-green"
                                  placeholder="+1 (555) 123-4567"
                                />
                              </div>
                              <div>
                                <label className="block text-white font-roboto mb-2">Service Needed *</label>
                                <Select onValueChange={(value) => handleInputChange('service', value)} required>
                                  <SelectTrigger className="bg-dark/60 border-eco-green/20 text-white focus:border-eco-green">
                                    <SelectValue placeholder="Select a service" />
                                  </SelectTrigger>
                                  <SelectContent className="bg-dark border-eco-green/20">
                                    <SelectItem value="redesign">Website Redesign</SelectItem>
                                    <SelectItem value="design">Web Design</SelectItem>
                                    <SelectItem value="development">Web Development</SelectItem>
                                    <SelectItem value="ux">UI/UX Design</SelectItem>
                                    <SelectItem value="consultation">Consultation</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>

                            <div>
                              <label className="block text-white font-roboto mb-2">Budget Range</label>
                              <Select onValueChange={(value) => handleInputChange('budget', value)}>
                                <SelectTrigger className="bg-dark/60 border-eco-green/20 text-white focus:border-eco-green">
                                  <SelectValue placeholder="Select budget range" />
                                </SelectTrigger>
                                <SelectContent className="bg-dark border-eco-green/20">
                                  <SelectItem value="free">Free Consultation</SelectItem>
                                  <SelectItem value="under-10k">Under ₹10,000</SelectItem>
                                  <SelectItem value="10k-25k">₹10,000 - ₹25,000</SelectItem>
                                  <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                                  <SelectItem value="50k-plus">₹50,000+</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div>
                              <label className="block text-white font-roboto mb-2">Project Description *</label>
                              <Textarea
                                value={formData.message}
                                onChange={(e) => handleInputChange('message', e.target.value)}
                                className="bg-dark/60 border-eco-green/20 text-white placeholder-gray-400 focus:border-eco-green min-h-[120px]"
                                placeholder="Tell us about your project, goals, and timeline..."
                                required
                              />
                            </div>

                            <Button 
                              type="submit"
                              className="w-full bg-gradient-to-r from-eco-green to-eco-magenta text-dark font-roboto font-semibold py-3 text-lg hover:shadow-xl hover:shadow-eco-green/30 transition-all duration-300 transform hover:scale-105"
                            >
                              Send Message
                              <Send className="ml-2 h-5 w-5" />
                            </Button>
                          </form>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Additional Info */}
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-montserrat font-bold text-white mb-6">
                          Why Choose <span className="text-eco-green">devXplosion</span>?
                        </h3>
                        <div className="space-y-4">
                          {[
                            'Free consultation and project assessment',
                            'Transparent pricing starting at ₹9,999',
                            'Dedicated project manager for seamless communication',
                            'Agile development process with regular updates',
                            'Post-launch support and maintenance',
                            '100% satisfaction guarantee'
                          ].map((benefit, index) => (
                            <div key={index} className="flex items-center">
                              <div className="w-2 h-2 bg-eco-green rounded-full mr-3 animate-glow-pulse"></div>
                              <span className="text-gray-300 font-roboto">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Card className="bg-dark/60 backdrop-blur-md border-eco-magenta/20">
                        <CardHeader>
                          <CardTitle className="text-xl font-montserrat font-bold text-white flex items-center">
                            <Calendar className="w-5 h-5 mr-2 text-eco-magenta" />
                            Schedule a Free Consultation
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-300 font-roboto mb-4">
                            Book a 30-minute consultation to discuss your project requirements and get expert recommendations.
                          </p>
                          <Button 
                            variant="outline"
                            className="w-full border-2 border-eco-magenta text-eco-magenta hover:bg-eco-magenta hover:text-dark font-roboto font-semibold transition-all duration-300"
                          >
                            Book Consultation
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="bg-dark/60 backdrop-blur-md border-eco-purple/20">
                        <CardHeader>
                          <CardTitle className="text-xl font-montserrat font-bold text-white">
                            Quick Response Time
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-300 font-roboto">
                            We typically respond to all inquiries within 2-4 hours during business hours. 
                            For urgent projects, call us directly for immediate assistance.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default Contact;
