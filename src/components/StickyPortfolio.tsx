
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const StickyPortfolio = () => {
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "TechFlow Solutions",
      category: "Web Development",
      description: "Complete redesign and development of a SaaS platform with 300% increase in user engagement.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      results: ["300% User Engagement", "50% Faster Load Times", "98% Uptime"],
      price: "₹9,999"
    },
    {
      title: "Creative Studio",
      category: "UI/UX Design",
      description: "Modern portfolio website with interactive animations and seamless user experience.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      technologies: ["Figma", "React", "Framer Motion", "Tailwind"],
      results: ["40% More Inquiries", "Reduced Bounce Rate", "Award Winning Design"],
      price: "₹9,999"
    },
    {
      title: "E-Commerce Platform",
      category: "Website Redesign",
      description: "Full redesign of online store resulting in significant conversion rate improvements.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop",
      technologies: ["Shopify", "Vue.js", "Stripe", "Analytics"],
      results: ["150% Sales Increase", "Better UX Score", "Mobile Optimized"],
      price: "₹9,999"
    },
    {
      title: "FinTech Dashboard",
      category: "Web Application",
      description: "Secure financial dashboard with real-time data visualization and advanced analytics.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      technologies: ["Angular", "D3.js", "Express", "MongoDB"],
      results: ["Real-time Analytics", "Bank-grade Security", "Intuitive Interface"],
      price: "₹9,999"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !cardsRef.current) return;

      const section = sectionRef.current;
      const cards = cardsRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      // Check if section is in view
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const scrollProgress = Math.abs(rect.top) / (sectionHeight - windowHeight);
        const projectIndex = Math.min(
          Math.floor(scrollProgress * projects.length),
          projects.length - 1
        );
        
        if (projectIndex !== activeProject) {
          setActiveProject(projectIndex);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeProject, projects.length]);

  return (
    <section 
      ref={sectionRef}
      className="min-h-[400vh] relative bg-dark"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-white mb-6">
              Featured <span className="text-eco-green">Projects</span>
            </h2>
            <p className="text-xl font-roboto text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their digital presence with innovative solutions.
            </p>
          </div>

          {/* Project Showcase */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Images */}
            <div ref={cardsRef} className="relative">
              <div className="relative overflow-hidden rounded-2xl border-2 border-eco-green/30">
                <img
                  src={projects[activeProject].image}
                  alt={projects[activeProject].title}
                  className="w-full h-96 object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-eco-green text-dark px-3 py-1 rounded-full text-sm font-roboto font-medium">
                    {projects[activeProject].category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-eco-green text-dark px-4 py-2 rounded-full text-lg font-roboto font-bold">
                    {projects[activeProject].price}
                  </span>
                </div>
              </div>

              {/* Project Navigation */}
              <div className="flex justify-center mt-6 space-x-2">
                {projects.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeProject
                        ? 'bg-eco-green shadow-lg shadow-eco-green/50'
                        : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div>
              <h3 className="text-3xl font-montserrat font-bold text-white mb-4">
                {projects[activeProject].title}
              </h3>
              
              <p className="text-lg font-roboto text-gray-300 mb-6">
                {projects[activeProject].description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-roboto font-medium text-eco-green mb-3 uppercase tracking-wider">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-lg text-sm font-roboto"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="mb-8">
                <h4 className="text-sm font-roboto font-medium text-eco-medium mb-3 uppercase tracking-wider">
                  Key Results
                </h4>
                <div className="space-y-2">
                  {projects[activeProject].results.map((result, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-eco-medium rounded-full mr-3"></div>
                      <span className="font-roboto">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/case-studies">
                  <Button className="bg-gradient-to-r from-eco-green to-eco-medium text-dark font-roboto font-semibold hover:shadow-lg hover:shadow-eco-green/25 transition-all duration-300 group">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="border-eco-medium text-eco-medium hover:bg-eco-medium hover:text-dark transition-all duration-300 group"
                >
                  Live Demo
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyPortfolio;
