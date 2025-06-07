
import React from 'react';
import { ArrowRight, CheckCircle, Monitor, Code, Palette, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
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
      
      <div className="min-h-screen bg-dark">
        <Navigation />
        
        <div className="pt-16">
          {/* Hero Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-neon-purple/10"></div>
            
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

          {/* Process Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-white mb-6">
                  Our <span className={`text-${color}`}>Process</span>
                </h2>
                <p className="text-xl text-gray-300 font-roboto max-w-3xl mx-auto">
                  We follow a proven methodology to deliver exceptional results
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {process.map((step, index) => (
                  <Card key={index} className={`bg-dark/80 backdrop-blur-md border-${color}/20 hover:border-${color}/60 transition-all duration-500 group`}>
                    <CardHeader className="text-center pb-4">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${color}/10 text-${color} mb-4 mx-auto group-hover:bg-${color}/20 transition-all duration-300`}>
                        {getIcon(index)}
                      </div>
                      <CardTitle className="text-xl font-montserrat font-bold text-white group-hover:text-neon-cyan transition-colors duration-300">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-gray-300 font-roboto mb-4">
                        {step.description}
                      </p>
                      <div className="space-y-2">
                        {step.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 mr-2 text-eco-green" />
                            <span className="font-roboto">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-white mb-6">
                  Simple <span className={`text-${color}`}>Pricing</span>
                </h2>
                <p className="text-xl text-gray-300 font-roboto max-w-3xl mx-auto">
                  Transparent pricing with no hidden costs
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {pricing.map((plan, index) => (
                  <Card 
                    key={index} 
                    className={`relative bg-dark/80 backdrop-blur-md transition-all duration-500 hover:scale-105 ${
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
                          ₹9,999
                        </span>
                        <span className="text-gray-400 font-roboto ml-1">/project</span>
                      </div>
                      <p className="text-gray-300 font-roboto">
                        {plan.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 mr-3 text-eco-green" />
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
                        Start Your Digital Evolution
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className={`max-w-4xl mx-auto text-center bg-dark/60 backdrop-blur-md border border-${color}/20 rounded-lg p-12`}>
              <h3 className="text-3xl font-montserrat font-bold text-white mb-4">
                {cta.headline}
              </h3>
              <p className="text-xl text-gray-300 font-roboto mb-8">
                {cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  Schedule Free Consultation
                </Button>
              </div>
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default ServiceDetail;
