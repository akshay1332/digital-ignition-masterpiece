
import React from 'react';
import { ArrowRight, CheckCircle, Monitor, Code, Palette, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  description: string;
  hero: {
    headline: string;
    subheadline: string;
  };
  process: {
    title: string;
    description: string;
    deliverables: string[];
  }[];
  pricing: {
    name: string;
    price: string;
    description: string;
    features: string[];
    popular: boolean;
  }[];
  cta: {
    headline: string;
    description: string;
  };
  color: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({
  title,
  subtitle,
  description,
  hero,
  process,
  pricing,
  cta,
  color
}) => {
  const getIcon = (index: number) => {
    const icons = [Monitor, Code, Palette, Users];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="w-8 h-8" />;
  };

  return (
    <>
      <Helmet>
        <title>{title} | devXplosion</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${title.toLowerCase()}, web development, digital solutions`} />
        <meta property="og:title" content={`${title} | devXplosion`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
      </Helmet>
      
      {/* Hero Section with Background Image */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-dark/80"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="mb-6">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-roboto font-medium bg-${color}/10 text-${color} border border-${color}/20`}>
              {subtitle}
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-6 animate-fade-in-up">
            {hero.headline}
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 font-roboto max-w-4xl mx-auto mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            {hero.subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Button 
              size="lg"
              className={`bg-gradient-to-r from-${color} to-neon-magenta text-dark font-roboto font-semibold px-8 py-4 text-lg hover:shadow-xl hover:shadow-${color}/30 transition-all duration-300 transform hover:scale-105`}
            >
              Start Your Digital Evolution
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className={`border-2 border-${color} text-${color} hover:bg-${color} hover:text-dark font-roboto font-semibold px-8 py-4 text-lg transition-all duration-300`}
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section - Step by Step */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-white mb-6">
              Our <span className={`text-${color}`}>Process</span>
            </h2>
            <p className="text-xl text-gray-300 font-roboto max-w-3xl mx-auto">
              We follow a proven step-by-step methodology to deliver exceptional results
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center gap-8">
                {/* Step Number */}
                <div className={`flex-shrink-0 w-20 h-20 bg-${color}/10 border-2 border-${color} rounded-full flex items-center justify-center`}>
                  <span className={`text-2xl font-montserrat font-bold text-${color}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                
                {/* Step Content */}
                <Card className={`flex-1 bg-dark/80 backdrop-blur-md border-${color}/20 hover:border-${color}/60 transition-all duration-500`}>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 bg-${color}/10 rounded-lg flex items-center justify-center`}>
                        {getIcon(index)}
                      </div>
                      <CardTitle className="text-2xl font-montserrat font-bold text-white">
                        Step {index + 1}: {step.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 font-roboto mb-6 text-lg leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div>
                      <h4 className="text-white font-montserrat font-semibold mb-3">Deliverables:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {step.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 mr-3 text-eco-green flex-shrink-0" />
                            <span className="font-roboto">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark via-dark to-neon-purple/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-white mb-6">
              Simple <span className={`text-${color}`}>Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 font-roboto max-w-3xl mx-auto">
              Transparent pricing with no hidden costs. Choose the package that fits your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative bg-dark/90 backdrop-blur-md transition-all duration-500 hover:scale-105 ${
                  plan.popular 
                    ? `border-2 border-${color} shadow-xl shadow-${color}/20` 
                    : `border border-${color}/20 hover:border-${color}/60`
                }`}
              >
                {plan.popular && (
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-${color} to-neon-magenta text-dark px-6 py-2 rounded-full text-sm font-roboto font-semibold`}>
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-montserrat font-bold text-white mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="mb-4">
                    <span className={`text-4xl font-montserrat font-bold text-${color}`}>
                      {plan.price}
                    </span>
                    {plan.price !== 'Custom' && (
                      <span className="text-gray-400 font-roboto ml-1">/project</span>
                    )}
                  </div>
                  <p className="text-gray-300 font-roboto">
                    {plan.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <CheckCircle className="w-5 h-5 mr-3 text-eco-green flex-shrink-0 mt-0.5" />
                        <span className="font-roboto">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular
                        ? `bg-gradient-to-r from-${color} to-neon-magenta text-dark hover:shadow-lg hover:shadow-${color}/25`
                        : `border-2 border-${color} text-${color} hover:bg-${color} hover:text-dark`
                    } font-roboto font-semibold transition-all duration-300`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className={`max-w-4xl mx-auto text-center bg-gradient-to-br from-${color}/10 to-transparent border border-${color}/20 rounded-xl p-12`}>
          <h3 className="text-4xl font-montserrat font-bold text-white mb-6">
            {cta.headline}
          </h3>
          <p className="text-xl text-gray-300 font-roboto mb-8 leading-relaxed">
            {cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className={`bg-gradient-to-r from-${color} to-neon-magenta text-dark font-roboto font-semibold px-8 py-4 text-lg hover:shadow-xl hover:shadow-${color}/30 transition-all duration-300 transform hover:scale-105`}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className={`border-2 border-${color} text-${color} hover:bg-${color} hover:text-dark font-roboto font-semibold px-8 py-4 text-lg transition-all duration-300`}
            >
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
