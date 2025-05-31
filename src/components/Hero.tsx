
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ShuffleHero } from '@/components/ui/shuffle-grid';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  const fullText = "Transforming Ideas into Digital Masterpieces";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      // Start blinking cursor after text is complete
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      return () => clearInterval(cursorInterval);
    }
  }, [currentIndex, fullText]);

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center bg-dark relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-neon-purple/10"></div>
        
        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-neon-cyan/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-neon-magenta/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-neon-purple/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Headline with Typewriter Effect */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-6 leading-tight">
            <span className="inline-block">
              {displayedText}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-roboto font-light text-gray-300 mb-8 opacity-0 animate-fade-in-up" style={{animationDelay: '3s', animationFillMode: 'forwards'}}>
            Your Partner in{' '}
            <span className="text-neon-cyan font-medium">Web Design</span>,{' '}
            <span className="text-neon-magenta font-medium">Development</span>, and{' '}
            <span className="text-neon-purple font-medium">UI/UX Excellence</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up" style={{animationDelay: '4s', animationFillMode: 'forwards'}}>
            <Link to="/portfolio">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-neon-cyan to-neon-magenta text-dark font-roboto font-semibold px-8 py-4 text-lg hover:shadow-xl hover:shadow-neon-cyan/30 transition-all duration-300 transform hover:scale-105 group"
              >
                Discover Our Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark font-roboto font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </Button>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up" style={{animationDelay: '5s', animationFillMode: 'forwards'}}>
            <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
              <div className="w-1 h-3 bg-neon-cyan rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Shuffle Hero Section */}
      <section className="py-20 bg-gradient-to-b from-dark to-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-magenta/5"></div>
        
        <div className="relative z-10">
          <ShuffleHero />
        </div>
      </section>
    </>
  );
};

export default Hero;
