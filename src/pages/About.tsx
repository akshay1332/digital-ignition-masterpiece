
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CompanyTimeline from '@/components/about/CompanyTimeline';
import MissionValues from '@/components/about/MissionValues';
import Team from '@/components/about/Team';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | devXplosion</title>
        <meta name="description" content="Learn about devXplosion's mission, values, and the talented team behind our innovative web solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-dark">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
            }}
          />
          <div className="absolute inset-0 bg-dark/80"></div>
          
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-6 animate-fade-in-up">
              About <span className="text-neon-cyan">devXplosion</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 font-roboto max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              We're passionate innovators transforming ideas into exceptional digital experiences
            </p>
          </div>
        </section>

        <div className="pt-0">
          <CompanyTimeline />
          <MissionValues />
          <Team />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
