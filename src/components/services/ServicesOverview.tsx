
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, RefreshCw, Palette, Code, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesOverview = () => {
  const [activeService, setActiveService] = useState(0);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const servicesRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: RefreshCw,
      title: 'Website Redesign',
      subtitle: 'Revitalize Your Digital Presence',
      description: 'Transform your outdated website into a modern, high-performing digital powerhouse that drives results.',
      features: [
        'Complete UX/UI overhaul',
        'Performance optimization',
        'Mobile-first responsive design',
        'SEO enhancement',
        'Conversion rate optimization'
      ],
      process: [
        { step: 'Audit', description: 'Comprehensive analysis of current site' },
        { step: 'Strategy', description: 'Develop redesign roadmap' },
        { step: 'Design', description: 'Create stunning new interface' },
        { step: 'Develop', description: 'Build with latest technologies' },
        { step: 'Launch', description: 'Deploy and optimize' }
      ],
      cta: 'Get Redesign Quote - ₹9,999',
      color: 'neon-cyan',
      link: '/services/redesign'
    },
    {
      icon: Palette,
      title: 'Web Design',
      subtitle: 'Crafting Digital Masterpieces',
      description: 'Create stunning, responsive websites that perfectly capture your brand essence and engage your audience.',
      features: [
        'Custom visual identity',
        'User-centered design',
        'Interactive prototypes',
        'Cross-platform compatibility',
        'Brand consistency'
      ],
      process: [
        { step: 'Research', description: 'Understanding your audience and goals' },
        { step: 'Concept', description: 'Initial design explorations' },
        { step: 'Design', description: 'High-fidelity mockups' },
        { step: 'Prototype', description: 'Interactive demonstrations' },
        { step: 'Refine', description: 'Perfect every detail' }
      ],
      cta: 'Start Design Project - ₹9,999',
      color: 'neon-magenta',
      link: '/services/design'
    },
    {
      icon: Code,
      title: 'Web Development',
      subtitle: 'Building Scalable Solutions',
      description: 'Develop fast, secure, and scalable web applications using cutting-edge technologies and best practices.',
      features: [
        'Custom functionality',
        'API integrations',
        'Database optimization',
        'Security implementation',
        'Performance monitoring'
      ],
      process: [
        { step: 'Planning', description: 'Technical architecture design' },
        { step: 'Development', description: 'Clean, scalable coding' },
        { step: 'Testing', description: 'Rigorous quality assurance' },
        { step: 'Integration', description: 'System connections' },
        { step: 'Deployment', description: 'Launch and maintenance' }
      ],
      cta: 'Get Development Quote - ₹9,999',
      color: 'neon-purple',
      link: '/services/development'
    },
    {
      icon: Users,
      title: 'UI/UX Design',
      subtitle: 'Designing Intuitive Experiences',
      description: 'Create user interfaces that delight and user experiences that convert through research-driven design.',
      features: [
        'User research & testing',
        'Information architecture',
        'Wireframing & prototyping',
        'Usability optimization',
        'Accessibility compliance'
      ],
      process: [
        { step: 'Research', description: 'User behavior analysis' },
        { step: 'Architecture', description: 'Information structure' },
        { step: 'Wireframes', description: 'Layout foundations' },
        { step: 'Prototype', description: 'Interactive testing' },
        { step: 'Iterate', description: 'Continuous improvement' }
      ],
      cta: 'Enhance Your UX - ₹9,999',
      color: 'neon-cyan',
      link: '/services/ux-design'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-service') || '0');
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = servicesRef.current?.querySelectorAll('[data-service]');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-7xl mx-auto">
        {/* Services Grid */}
        <div ref={servicesRef} className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <Card
                key={index}
                data-service={index}
                className={`group cursor-pointer bg-dark/80 backdrop-blur-md border-${service.color}/20 hover:border-${service.color}/40 transition-all duration-500 transform hover:scale-105 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} h-full`}
                onClick={() => setActiveService(index)}
              >
                <CardHeader className="relative overflow-hidden">
                  <div className={`w-16 h-16 bg-${service.color}/10 rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow-pulse`}>
                    <Icon className={`w-8 h-8 text-${service.color}`} />
                  </div>
                  
                  <CardTitle className="text-2xl font-montserrat font-bold text-white group-hover:text-neon-cyan transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  
                  <CardDescription className={`text-${service.color} font-roboto font-medium text-lg`}>
                    {service.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-gray-300 font-roboto leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div>
                    <h4 className="text-white font-montserrat font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-300 font-roboto flex items-center">
                          <div className={`w-2 h-2 bg-${service.color} rounded-full mr-3 animate-glow-pulse`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Process Preview */}
                  <div>
                    <h4 className="text-white font-montserrat font-semibold mb-3">Our Process:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.process.map((step, idx) => (
                        <span 
                          key={idx}
                          className={`px-3 py-1 bg-${service.color}/10 text-${service.color} rounded-full text-sm font-roboto`}
                        >
                          {step.step}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link to={service.link}>
                    <Button 
                      className={`w-full bg-gradient-to-r from-${service.color} to-neon-magenta text-dark font-roboto font-semibold hover:shadow-lg hover:shadow-${service.color}/25 transition-all duration-300 group-hover:scale-105`}
                    >
                      {service.cta}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-dark/60 backdrop-blur-md border border-neon-cyan/20 rounded-lg p-12 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <h3 className="text-3xl font-montserrat font-bold text-white mb-4">
            Ready to Transform Your Digital Presence?
          </h3>
          <p className="text-xl text-gray-300 font-roboto mb-8 max-w-3xl mx-auto">
            Let's discuss your project and create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-neon-cyan to-neon-magenta text-dark font-roboto font-semibold px-8 py-4 text-lg hover:shadow-xl hover:shadow-neon-cyan/30 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark font-roboto font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
