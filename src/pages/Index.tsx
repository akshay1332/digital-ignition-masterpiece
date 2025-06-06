
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import StickyPortfolio from '@/components/StickyPortfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Navigation />
      <Hero />
      <Services />
      <StickyPortfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
