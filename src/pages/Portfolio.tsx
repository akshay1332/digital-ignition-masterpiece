import { useState, useEffect } from 'react';
import { Filter, ExternalLink, Github } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'redesign', name: 'Website Redesign' },
    { id: 'design', name: 'Web Design' },
    { id: 'development', name: 'Web Development' },
    { id: 'ux', name: 'UI/UX Design' }
  ];

  const projects = [
    {
      id: 1,
      title: 'TechFlow Solutions',
      category: 'redesign',
      description: 'Complete website redesign for a B2B software company, resulting in 150% increase in conversion rates.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      results: '+150% conversions'
    },
    {
      id: 2,
      title: 'EcoVibe Marketplace',
      category: 'development',
      description: 'Full-stack e-commerce platform for sustainable products with custom payment integration.',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      results: '10K+ users'
    },
    {
      id: 3,
      title: 'MindfulSpace App',
      category: 'ux',
      description: 'UX redesign for a meditation app that improved user retention by 200%.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      technologies: ['Figma', 'Principle', 'Adobe XD'],
      liveUrl: '#',
      githubUrl: '#',
      results: '+200% retention'
    },
    {
      id: 4,
      title: 'FinanceForward',
      category: 'design',
      description: 'Modern web design for a fintech startup focusing on clean, trustworthy aesthetics.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
      technologies: ['React', 'Framer Motion', 'SCSS'],
      liveUrl: '#',
      githubUrl: '#',
      results: 'Series A funding'
    },
    {
      id: 5,
      title: 'HealthHub Platform',
      category: 'development',
      description: 'Healthcare management platform with real-time data visualization and secure patient portals.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      technologies: ['Vue.js', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      results: '50+ clinics'
    },
    {
      id: 6,
      title: 'CreativeStudio',
      category: 'redesign',
      description: 'Portfolio website redesign for a creative agency with advanced animations and interactions.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      technologies: ['React', 'Three.js', 'GSAP'],
      liveUrl: '#',
      githubUrl: '#',
      results: '+300% traffic'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-project') || '0');
            setTimeout(() => {
              setVisibleProjects(prev => [...prev, index]);
            }, index * 100);
          }
        });
      },
      { threshold: 0.3 }
    );

    const projectCards = document.querySelectorAll('[data-project]');
    projectCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredProjects]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Portfolio | Web Development Projects | devXplosion</title>
        <meta name="description" content="Explore our portfolio of successful web development, design, and UX projects. See how devXplosion transforms businesses through innovative digital solutions." />
        <meta name="keywords" content="web development portfolio, web design projects, UX design case studies, website examples, digital agency portfolio" />
        <meta property="og:title" content="Portfolio | Web Development Projects | devXplosion" />
        <meta property="og:description" content="Explore our portfolio of successful web development, design, and UX projects." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://devxplosion.com/portfolio" />
      </Helmet>
      
      <div className="min-h-screen bg-dark">
        <Navigation />
        
        <div className="pt-16">
          {/* Hero Section */}
          <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-neon-purple/10"></div>
            
            <div className="max-w-7xl mx-auto relative z-10 text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-4 md:mb-6 animate-fade-in-up">
                Our <span className="text-neon-cyan">Portfolio</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-roboto max-w-4xl mx-auto mb-8 md:mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Discover how we've transformed businesses through innovative web solutions and cutting-edge design.
              </p>
            </div>
          </section>

          {/* Filter Bar */}
          <section className="py-6 md:py-8 px-4 sm:px-6 lg:px-8 sticky top-16 z-40 bg-dark/90 backdrop-blur-md border-b border-neon-cyan/20">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                {filters.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={activeFilter === filter.id ? "default" : "outline"}
                    className={`${
                      activeFilter === filter.id
                        ? 'bg-gradient-to-r from-neon-cyan to-neon-magenta text-dark'
                        : 'border-neon-cyan/40 text-neon-cyan hover:bg-neon-cyan hover:text-dark'
                    } font-roboto font-medium transition-all duration-300 text-sm md:text-base px-3 md:px-4 py-2`}
                    onClick={() => setActiveFilter(filter.id)}
                  >
                    <Filter className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                    {filter.name}
                  </Button>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Grid */}
          <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredProjects.map((project, index) => {
                  const isVisible = visibleProjects.includes(index);
                  
                  return (
                    <Card
                      key={project.id}
                      data-project={index}
                      className={`group cursor-pointer bg-dark/80 backdrop-blur-md border-neon-cyan/20 hover:border-neon-cyan/60 transition-all duration-500 transform hover:scale-105 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                    >
                      <CardHeader className="relative overflow-hidden p-0">
                        <div className="aspect-video bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20 rounded-t-lg overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark">
                                <ExternalLink className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="outline" className="border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:text-dark">
                                <Github className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4 md:p-6">
                          <CardTitle className="text-lg md:text-xl font-montserrat font-bold text-white group-hover:text-neon-cyan transition-colors duration-300 mb-2">
                            {project.title}
                          </CardTitle>
                          
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-neon-cyan font-roboto text-xs md:text-sm capitalize">
                              {project.category.replace('-', ' ')}
                            </span>
                            <span className="text-neon-magenta font-roboto text-xs md:text-sm font-medium">
                              {project.results}
                            </span>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4 p-4 md:p-6 pt-0">
                        <CardDescription className="text-gray-300 font-roboto leading-relaxed text-sm md:text-base">
                          {project.description}
                        </CardDescription>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span 
                              key={idx}
                              className="px-2 py-1 bg-neon-cyan/10 text-neon-cyan rounded-full text-xs font-roboto"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-2">
                          <Button 
                            size="sm"
                            className="flex-1 bg-gradient-to-r from-neon-cyan to-neon-magenta text-dark font-roboto font-medium text-sm"
                          >
                            View Project
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center bg-dark/60 backdrop-blur-md border border-neon-cyan/20 rounded-lg p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-white mb-4">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-lg md:text-xl text-gray-300 font-roboto mb-8">
                Let's create something extraordinary together and add your project to our portfolio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-neon-cyan to-neon-magenta text-dark font-roboto font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg hover:shadow-xl hover:shadow-neon-cyan/30 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Digital Evolution
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark font-roboto font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg transition-all duration-300"
                >
                  Schedule Free Consultation
                </Button>
              </div>
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
