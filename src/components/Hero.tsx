
import { HeroSection } from '@/components/ui/dynamic-hero';
import { Link } from 'react-router-dom';

const Hero = () => {
  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'services', label: 'Services', href: '/services' },
    { id: 'portfolio', label: 'Portfolio', href: '/portfolio' },
    { id: 'contact', label: 'Contact', href: '/contact' },
  ];

  return (
    <HeroSection
      heading="Transforming Ideas into Digital Masterpieces"
      tagline="Your Partner in Web Design, Development, and UI/UX Excellence"
      buttonText="Discover Our Work"
      imageUrl="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      videoUrl="https://www.w3schools.com/html/mov_bbb.mp4"
      navItems={navItems}
    />
  );
};

export default Hero;
