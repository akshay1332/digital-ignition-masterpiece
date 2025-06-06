
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', message: '', phone: '' });
      setIsSubmitting(false);
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
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-white mb-6">
            Ready to Ignite Your <span className="text-neon-cyan">Digital Presence</span>?
          </h2>
          <p className="text-xl font-roboto text-gray-300 max-w-3xl mx-auto">
            Let's discuss your project and create something extraordinary together. Get in touch today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8">
            <h3 className="text-2xl font-montserrat font-bold text-white mb-6">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-roboto font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-neon-cyan focus:ring-neon-cyan/20"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-roboto font-medium text-gray-300 mb-2">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-neon-cyan focus:ring-neon-cyan/20"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-roboto font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-neon-cyan focus:ring-neon-cyan/20"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-roboto font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-neon-cyan focus:ring-neon-cyan/20 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-neon-cyan to-neon-magenta text-dark font-roboto font-semibold py-3 hover:shadow-lg hover:shadow-neon-cyan/25 transition-all duration-300 transform hover:scale-105 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-montserrat font-bold text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-lg font-roboto text-gray-300 mb-8">
                Have a question or want to work together? We'd love to hear from you. 
                Reach out and let's start building something amazing.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-neon-cyan/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan to-neon-magenta rounded-lg flex items-center justify-center mr-4 group-hover:animate-glow-pulse">
                      <IconComponent className="w-6 h-6 text-dark" />
                    </div>
                    <div>
                      <h4 className="text-sm font-roboto font-medium text-neon-cyan uppercase tracking-wider">
                        {info.title}
                      </h4>
                      <p className="text-white font-roboto text-lg group-hover:text-neon-cyan transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Additional CTA */}
            <div className="bg-gradient-to-r from-neon-purple/20 to-neon-magenta/20 rounded-xl p-6 border border-neon-purple/30">
              <h4 className="text-xl font-montserrat font-bold text-white mb-3">
                Ready for a Free Consultation?
              </h4>
              <p className="text-gray-300 font-roboto mb-4">
                Schedule a 30-minute discovery call to discuss your project goals and how we can help.
              </p>
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-neon-purple to-neon-magenta text-white font-roboto font-semibold">
                  Schedule Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
