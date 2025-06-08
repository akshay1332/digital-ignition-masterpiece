
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServicesOverview from '@/components/services/ServicesOverview';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | devXplosion</title>
        <meta name="description" content="Comprehensive web design, development, and digital solutions. Transform your business with our expert services." />
      </Helmet>
      
      <div className="min-h-screen bg-dark">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
            }}
          />
          <div className="absolute inset-0 bg-dark/80"></div>
          
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-6 animate-fade-in-up">
              Our <span className="text-neon-cyan">Services</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 font-roboto max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              From concept to launch, we provide comprehensive digital solutions that transform your business
            </p>
          </div>
        </section>

        <div className="pt-0">
          <ServicesOverview />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Services;
