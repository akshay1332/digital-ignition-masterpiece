
import { useState } from 'react';
import { Monitor, Palette, Code, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Monitor,
      title: "Website Redesign",
      description: "Revitalize your online presence with modern, high-performing designs that convert visitors into customers.",
      features: ["UX Audit", "Modern Design", "Performance Optimization", "Mobile-First Approach"],
      link: "/services/redesign"
    },
    {
      icon: Palette,
      title: "Web Design",
      description: "Crafting stunning, responsive websites tailored to your brand identity and business objectives.",
      features: ["Custom Design", "Brand Integration", "Responsive Layout", "Visual Storytelling"],
      link: "/services/design"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Building fast, secure, and scalable web solutions using cutting-edge technologies and best practices.",
      features: ["Custom Development", "Performance Optimization", "Security Focus", "Scalable Architecture"],
      link: "/services/development"
    },
    {
      icon: Smartphone,
      title: "UI/UX Design",
      description: "Designing intuitive interfaces that delight users and drive engagement through thoughtful user experience.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
      link: "/services/ux-design"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-dark to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-white mb-6">
            Our <span className="text-neon-cyan">Services</span>
          </h2>
          <p className="text-xl font-roboto text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to transform your business and create exceptional online experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`relative group cursor-pointer transition-all duration-500 transform ${
                  hoveredCard === index ? 'scale-105' : 'hover:scale-105'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Background */}
                <div className="h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-neon-cyan/50 transition-all duration-300 overflow-hidden">
                  {/* Glowing Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-magenta/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-sm"></div>
                  
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan to-neon-magenta rounded-xl flex items-center justify-center group-hover:animate-glow-pulse">
                        <IconComponent className="w-8 h-8 text-dark" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-montserrat font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 font-roboto mb-6 flex-grow">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link to={service.link}>
                      <Button 
                        variant="outline" 
                        className="w-full border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan hover:text-dark transition-all duration-300"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link to="/services">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-neon-magenta to-neon-purple text-white font-roboto font-semibold px-8 py-4 text-lg hover:shadow-xl hover:shadow-neon-magenta/30 transition-all duration-300 transform hover:scale-105"
            >
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
