import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import ScrollToTop from './ScrollToTop';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Website Redesign', href: '/services/redesign' },
        { name: 'Web Design', href: '/services/design' },
        { name: 'Web Development', href: '/services/development' },
        { name: 'UI/UX Design', href: '/services/ux-design' }
      ]
    },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      <ScrollToTop />
      <nav className="fixed top-0 left-0 w-full z-50 bg-dark/90 backdrop-blur-md border-b border-eco-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="group">
                <h2 className="text-xl md:text-2xl font-montserrat font-bold text-white group-hover:text-eco-green transition-colors duration-300">
                  dev<span className="text-eco-green">X</span>plosion
                </h2>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList className="space-x-2 lg:space-x-4">
                  {navItems.map((item) => (
                    <NavigationMenuItem key={item.name}>
                      {item.dropdown ? (
                        <>
                          <NavigationMenuTrigger className={`bg-transparent text-white hover:text-eco-green transition-colors duration-300 px-2 lg:px-3 py-2 text-sm font-roboto font-medium ${isActive(item.href) ? 'text-eco-green' : ''}`}>
                            {item.name}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <div className="w-[280px] md:w-[300px] p-4 bg-dark/95 border border-eco-green/20 rounded-lg">
                              {item.dropdown.map((dropdownItem) => (
                                <NavigationMenuLink key={dropdownItem.name} asChild>
                                  <Link
                                    to={dropdownItem.href}
                                    className={`block px-3 py-2 text-white hover:text-eco-green transition-colors duration-300 rounded text-sm ${isActive(dropdownItem.href) ? 'text-eco-green bg-eco-green/10' : ''}`}
                                  >
                                    {dropdownItem.name}
                                  </Link>
                                </NavigationMenuLink>
                              ))}
                            </div>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className={`text-white hover:text-eco-green transition-colors duration-300 px-2 lg:px-3 py-2 text-sm font-roboto font-medium relative group ${isActive(item.href) ? 'text-eco-green' : ''}`}
                          >
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-eco-green transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-eco-green to-eco-dark text-dark font-roboto font-medium hover:shadow-lg hover:shadow-eco-green/25 transition-all duration-300 text-sm lg:text-base px-4 lg:px-6">
                  Start Your Digital Evolution
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-eco-green transition-colors duration-300"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark/95 rounded-lg mt-2 border border-eco-green/20">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className={`text-white hover:text-eco-green block px-3 py-2 text-base font-roboto font-medium transition-colors duration-300 ${isActive(item.href) ? 'text-eco-green' : ''}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-4 space-y-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className={`text-gray-300 hover:text-eco-green block px-3 py-1 text-sm font-roboto transition-colors duration-300 ${isActive(dropdownItem.href) ? 'text-eco-green' : ''}`}
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-2">
                  <Link to="/contact">
                    <Button className="w-full bg-gradient-to-r from-eco-green to-eco-dark text-dark font-roboto font-medium">
                      Start Your Digital Evolution
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
