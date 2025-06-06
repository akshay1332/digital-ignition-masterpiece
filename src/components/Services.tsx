import { motion } from 'framer-motion';
import { Monitor, Smartphone, Search, Palette, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Website Redesign',
      description: 'Transform your existing website with modern design principles and enhanced user experience.',
      features: ['Modern UI/UX', 'Mobile Responsive', 'Performance Optimization', 'SEO Enhancement'],
      price: '₹9,999',
      popular: false
    },
    {
      icon: Palette,
      title: 'Web Design',
      description: 'Create stunning, user-friendly websites that captivate your audience and drive conversions.',
      features: ['Custom Design', 'Brand Integration', 'User Research', 'Wireframing'],
      price: '₹9,999',
      popular: true
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Build robust, scalable web applications with cutting-edge technologies and best practices.',
      features: ['Full-Stack Development', 'API Integration', 'Database Design', 'Security Implementation'],
      price: '₹9,999',
      popular: false
    },
    {
      icon: Smartphone,
      title: 'UI/UX Design',
      description: 'Design intuitive interfaces that provide exceptional user experiences across all devices.',
      features: ['User Interface Design', 'User Experience Research', 'Prototyping', 'Usability Testing'],
      price: '₹9,999',
      popular: false
    },
    {
      icon: Search,
      title: 'Free Consultation',
      description: 'Get expert advice and project assessment to kickstart your digital transformation journey.',
      features: ['Project Assessment', 'Strategy Planning', 'Technology Recommendations', 'Timeline Planning'],
      price: 'FREE',
      popular: true
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Boost your website speed and performance for better user experience and SEO rankings.',
      features: ['Speed Optimization', 'SEO Improvement', 'Core Web Vitals', 'Analytics Setup'],
      price: '₹9,999',
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-dark to-gray-900 relative overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-white mb-6">
          Our <span className="text-eco-green">Services</span>
        </h2>
        <p className="text-xl font-roboto text-gray-300 max-w-3xl mx-auto">
          We offer comprehensive digital solutions to transform your business and create exceptional online experiences.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group ${
                service.popular ? 'lg:scale-105' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-eco-green to-eco-medium text-dark px-4 py-1 rounded-full text-sm font-roboto font-medium z-10">
                  Most Popular
                </div>
              )}
              
              <div className={`h-full p-8 rounded-2xl border transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl ${
                service.popular 
                  ? 'bg-gradient-to-br from-eco-light/10 to-eco-green/10 border-eco-green/50 shadow-lg shadow-eco-green/20' 
                  : 'bg-gray-800/50 border-gray-700 hover:border-eco-green/50'
              } backdrop-blur-sm`}>
                {/* Card Background */}
                <div className="h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-eco-green/50 transition-all duration-300 overflow-hidden">
                  {/* Glowing Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-eco-green/20 to-eco-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-sm"></div>
                  
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-eco-green to-eco-dark rounded-xl flex items-center justify-center group-hover:animate-glow-pulse">
                        <Icon className="w-8 h-8 text-dark" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-montserrat font-bold text-white mb-4 group-hover:text-eco-green transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 font-roboto mb-6 flex-grow">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 font-roboto">
                          <div className="w-2 h-2 bg-eco-green rounded-full mr-3 group-hover:animate-glow-pulse"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Price */}
                    <div className="mb-6">
                      <div className={`text-3xl font-montserrat font-bold mb-2 ${
                        service.price === 'FREE' ? 'text-eco-green' : 'text-white'
                      }`}>
                        {service.price}
                      </div>
                      {service.price !== 'FREE' && (
                        <p className="text-gray-400 font-roboto text-sm">Starting price for basic package</p>
                      )}
                    </div>

                    {/* CTA Button */}
                    <Link to={service.price === 'FREE' ? '/contact' : `/services/${service.title.toLowerCase().replace(/\s+/g, '-').replace('/', '-')}`}>
                      <Button 
                        className={`w-full font-roboto font-semibold transition-all duration-300 ${
                          service.popular
                            ? 'bg-gradient-to-r from-eco-green to-eco-medium text-dark hover:shadow-xl hover:shadow-eco-green/30'
                            : 'bg-gradient-to-r from-eco-medium to-eco-dark text-dark hover:shadow-lg hover:shadow-eco-medium/25'
                        } transform group-hover:scale-105`}
                      >
                        {service.price === 'FREE' ? 'Book Free Consultation' : 'Get Started'}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <Link to="/services">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-eco-medium to-eco-dark text-dark font-roboto font-semibold px-8 py-4 text-lg hover:shadow-xl hover:shadow-eco-green/30 transition-all duration-300 transform hover:scale-105"
          >
            View All Services
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Services;
