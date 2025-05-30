
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServicesOverview from '@/components/services/ServicesOverview';

const Services = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Navigation />
      <div className="pt-16">
        <ServicesOverview />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
