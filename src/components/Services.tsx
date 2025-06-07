import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Code, LayoutDashboard, BarChartBig, Brush } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Web Development",
      description: "Crafting dynamic and scalable web solutions tailored to your unique business needs.",
      icon: Code,
      features: [
        "Custom Web Applications",
        "E-commerce Solutions",
        "API Development",
        "Database Design",
        "Responsive Design"
      ],
      href: "/services/development"
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences that drive conversions and customer satisfaction.",
      icon: Brush,
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing",
        "Interaction Design"
      ],
      href: "/services/ux-design"
    },
    {
      title: "Website Redesign",
      description: "Revitalizing your online presence with a modern design and improved functionality.",
      icon: LayoutDashboard,
      features: [
        "Content Audit",
        "Information Architecture",
        "Visual Refresh",
        "Performance Optimization",
        "SEO Enhancement"
      ],
      href: "/services/redesign"
    },
    {
      title: "Data Analytics",
      description: "Transforming raw data into actionable insights to drive strategic decision-making.",
      icon: BarChartBig,
      features: [
        "Data Collection & Analysis",
        "Custom Reporting Dashboards",
        "Predictive Modeling",
        "A/B Testing",
        "Data Visualization"
      ],
      href: "/services/analytics"
    }
  ];

  // Add scroll to top function for navigation
  const handleLearnMore = (href: string) => {
    window.scrollTo(0, 0);
    // The Link component will handle the navigation
  };

  return (
    <section id="services" className="py-12 md:py-20 bg-gradient-to-b from-dark to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold text-white mb-4 md:mb-6">
            Our <span className="text-eco-green">Services</span>
          </h2>
          <p className="text-lg md:text-xl font-roboto text-gray-300 max-w-3xl mx-auto">
            Transform your digital presence with our comprehensive web solutions designed to drive growth and engagement.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 md:p-8 hover:border-eco-green/50 transition-all duration-500 transform hover:scale-105 ${
                  index === activeService ? 'border-eco-green/70 shadow-lg shadow-eco-green/20' : ''
                }`}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(0)}
              >
                {/* Icon */}
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-eco-green to-eco-dark rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:animate-glow-pulse">
                  <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-dark" />
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-montserrat font-bold text-white mb-3 md:mb-4 group-hover:text-eco-green transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-sm md:text-base font-roboto text-gray-300 mb-4 md:mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Pricing */}
                <div className="mb-4 md:mb-6">
                  <span className="text-xl md:text-2xl font-montserrat font-bold text-eco-green">
                    ₹9,999
                  </span>
                  <span className="text-sm text-gray-400 ml-2">starting</span>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6 md:mb-8">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs md:text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-eco-green rounded-full mr-2 md:mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link 
                  to={service.href}
                  onClick={() => handleLearnMore(service.href)}
                  className="block"
                >
                  <Button className="w-full bg-gradient-to-r from-eco-green to-eco-dark text-dark font-roboto font-semibold hover:shadow-lg hover:shadow-eco-green/25 transition-all duration-300 group/btn">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </Link>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-eco-green/5 to-eco-dark/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-eco-green/10 to-eco-dark/10 rounded-2xl p-6 md:p-8 border border-eco-green/20">
          <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-white mb-4">
            Ready to Transform Your Digital Presence?
          </h3>
          <p className="text-base md:text-lg font-roboto text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
            Get a free consultation and discover how our services can elevate your business to new heights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-eco-green to-eco-dark text-dark font-roboto font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg hover:shadow-xl hover:shadow-eco-green/30 transition-all duration-300 transform hover:scale-105"
              >
                Free Consultation
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-eco-green text-eco-green hover:bg-eco-green hover:text-dark font-roboto font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg transition-all duration-300"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
