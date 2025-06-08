
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StickyPortfolio from '@/components/StickyPortfolio';
import { Helmet } from 'react-helmet-async';

const PortfolioPage = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | devXplosion</title>
        <meta name="description" content="Explore our portfolio of stunning websites and digital solutions. See how we transform businesses through innovative design." />
      </Helmet>
      
      <div className="min-h-screen bg-dark">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
            }}
          />
          <div className="absolute inset-0 bg-dark/80"></div>
          
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-6 animate-fade-in-up">
              Our <span className="text-neon-magenta">Portfolio</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 font-roboto max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Discover the digital masterpieces we've crafted for our clients
            </p>
          </div>
        </section>

        <div className="pt-0">
          <StickyPortfolio />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PortfolioPage;
