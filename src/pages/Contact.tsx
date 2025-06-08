
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | devXplosion</title>
        <meta name="description" content="Get in touch with devXplosion. Let's discuss your next web development project and transform your digital presence." />
      </Helmet>
      
      <div className="min-h-screen bg-dark">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
            }}
          />
          <div className="absolute inset-0 bg-dark/80"></div>
          
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-6 animate-fade-in-up">
              Get in <span className="text-neon-cyan">Touch</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 font-roboto max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Ready to transform your digital presence? Let's start the conversation.
            </p>
          </div>
        </section>

        <div className="pt-0">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
