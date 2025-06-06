import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface ServiceDetailProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    hero: {
      headline: string;
      subheadline: string;
    };
    process: Array<{
      title: string;
      description: string;
      deliverables: string[];
    }>;
    pricing: Array<{
      name: string;
      price: string;
      description: string;
      features: string[];
      popular: boolean;
    }>;
    cta: {
      primary: string;
      secondary: string;
    };
    color: string;
  };
}

const ServiceDetail = ({ data }: ServiceDetailProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const processRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section') || '';
            setVisibleSections(prev => [...prev, sectionId]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!processRef.current) return;
      
      const steps = processRef.current.querySelectorAll('[data-step]');
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      steps.forEach((step, index) => {
        const rect = step.getBoundingClientRect();
        const isInView = rect.top < windowHeight * 0.6 && rect.bottom > windowHeight * 0.4;
        
        if (isInView) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated pricing data with Indian rupees
  const updatedPricing = [
    {
      name: 'Basic Package',
      price: '₹9,999',
      description: 'Perfect for small businesses and startups',
      features: [
        'Professional design',
        'Responsive layout',
        'Basic functionality',
        'Mobile optimization',
        '30 days support'
      ],
      popular: false
    },
    {
      name: 'Standard Package',
      price: '₹9,999',
      description: 'Comprehensive solution for growing businesses',
      features: [
        'Advanced design',
        'Custom functionality',
        'Performance optimization',
        'SEO optimization',
        '60 days support',
        'Analytics integration'
      ],
      popular: true
    },
    {
      name: 'Premium Package',
      price: '₹9,999',
      description: 'Full-featured solution with premium support',
      features: [
        'Premium design',
        'Advanced integrations',
        'Priority support',
        'Custom features',
        '90 days support',
        'Ongoing maintenance'
      ],
      popular: false
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section 
        data-section="hero"
        className={`py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${visibleSections.includes('hero') ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-neon-purple/10"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-6">
            {data.hero.headline.split('.').map((part, index) => (
              <span key={index}>
                {index === 0 && <span className={`text-${data.color}`}>{part}.</span>}
                {index === 1 && <span className="text-neon-magenta">{part}.</span>}
                {index === 2 && <span className="text-neon-purple">{part}.</span>}
                {index > 2 && part}
              </span>
            ))}
          </h1>
          
          <p className="text-2xl text-gray-300 font-roboto max-w-4xl mx-auto mb-8">
            {data.hero.subheadline}
          </p>
          
          <p className="text-lg text-gray-400 font-roboto max-w-3xl mx-auto mb-12">
            {data.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" onClick={scrollToTop}>
              <Button 
                size="lg" 
                className={`bg-gradient-to-r from-${data.color} to-neon-magenta text-dark font-roboto font-semibold px-8 py-4 text-lg hover:shadow-xl hover:shadow-${data.color}/30 transition-all duration-300 transform hover:scale-105`}
              >
                {data.cta.primary}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/contact" onClick={scrollToTop}>
              <Button 
                variant="outline" 
                size="lg"
                className={`border-2 border-${data.color} text-${data.color} hover:bg-${data.color} hover:text-dark font-roboto font-semibold px-8 py-4 text-lg transition-all duration-300`}
              >
                {data.cta.secondary}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section 
        data-section="process"
        ref={processRef}
        className={`py-20 px-4 sm:px-6 lg:px-8 relative ${visibleSections.includes('process') ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-white mb-6">
              Our <span className={`text-${data.color}`}>Process</span>
            </h2>
            <p className="text-xl text-gray-300 font-roboto max-w-3xl mx-auto">
              A proven methodology that ensures exceptional results and seamless project delivery.
            </p>
          </div>

          <div className="space-y-16">
            {data.process.map((step, index) => (
              <div 
                key={index}
                data-step={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className={`w-24 h-24 rounded-full border-4 border-${data.color} bg-dark flex items-center justify-center ${activeStep === index ? 'animate-glow-pulse' : ''}`}>
                    <span className={`text-3xl font-montserrat font-bold text-${data.color}`}>
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl font-montserrat font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-300 font-roboto leading-relaxed mb-6">
                    {step.description}
                  </p>
                  
                  {/* Deliverables */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    {step.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-center">
                        <Check className={`w-5 h-5 text-${data.color} mr-3 flex-shrink-0`} />
                        <span className="text-gray-300 font-roboto">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section 
        data-section="pricing"
        className={`py-20 px-4 sm:px-6 lg:px-8 relative ${visibleSections.includes('pricing') ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-neon-purple/5 to-dark"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-white mb-6">
              Pricing <span className={`text-${data.color}`}>Plans</span>
            </h2>
            <p className="text-xl text-gray-300 font-roboto max-w-3xl mx-auto">
              Choose the perfect package for your project. All plans include our commitment to excellence and post-launch support.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {updatedPricing.map((plan, index) => (
              <Card 
                key={index}
                className={`relative bg-dark/80 backdrop-blur-md border-2 transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? `border-${data.color} shadow-lg shadow-${data.color}/25` 
                    : `border-${data.color}/20 hover:border-${data.color}/40`
                }`}
              >
                {plan.popular && (
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-${data.color} text-dark px-6 py-2 rounded-full font-roboto font-semibold`}>
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-montserrat font-bold text-white mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className={`text-4xl font-montserrat font-bold text-${data.color} mb-4`}>
                    {plan.price}
                  </div>
                  <CardDescription className="text-gray-300 font-roboto">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 font-roboto">
                        <Check className={`w-5 h-5 text-${data.color} mr-3 flex-shrink-0`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact" onClick={scrollToTop}>
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? `bg-gradient-to-r from-${data.color} to-neon-magenta text-dark` 
                          : `border-2 border-${data.color} text-${data.color} hover:bg-${data.color} hover:text-dark`
                      } font-roboto font-semibold transition-all duration-300`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-300 font-roboto mb-6">
              Need a custom solution? Let's discuss your specific requirements.
            </p>
            <Link to="/contact" onClick={scrollToTop}>
              <Button 
                size="lg"
                variant="outline"
                className={`border-2 border-eco-green text-eco-green hover:bg-eco-green hover:text-dark font-roboto font-semibold px-8 py-4 text-lg transition-all duration-300`}
              >
                Schedule Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
