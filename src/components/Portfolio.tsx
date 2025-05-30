
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "TechFlow Solutions",
      category: "Web Development",
      description: "Complete redesign and development of a SaaS platform with 300% increase in user engagement.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      results: ["300% User Engagement", "50% Faster Load Times", "98% Uptime"]
    },
    {
      title: "Creative Studio",
      category: "UI/UX Design",
      description: "Modern portfolio website with interactive animations and seamless user experience.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      technologies: ["Figma", "React", "Framer Motion", "Tailwind"],
      results: ["40% More Inquiries", "Reduced Bounce Rate", "Award Winning Design"]
    },
    {
      title: "E-Commerce Platform",
      category: "Website Redesign",
      description: "Full redesign of online store resulting in significant conversion rate improvements.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop",
      technologies: ["Shopify", "Vue.js", "Stripe", "Analytics"],
      results: ["150% Sales Increase", "Better UX Score", "Mobile Optimized"]
    },
    {
      title: "FinTech Dashboard",
      category: "Web Application",
      description: "Secure financial dashboard with real-time data visualization and advanced analytics.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      technologies: ["Angular", "D3.js", "Express", "MongoDB"],
      results: ["Real-time Analytics", "Bank-grade Security", "Intuitive Interface"]
    },
    {
      title: "Healthcare Portal",
      category: "Digital Platform",
      description: "Patient management system with telemedicine capabilities and HIPAA compliance.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      technologies: ["React", "Django", "PostgreSQL", "Docker"],
      results: ["HIPAA Compliant", "80% Time Savings", "Patient Satisfaction"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-white mb-6">
            Featured <span className="text-neon-magenta">Projects</span>
          </h2>
          <p className="text-xl font-roboto text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence with innovative solutions.
          </p>
        </div>

        {/* Project Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Project Images Carousel */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border-2 border-neon-cyan/30">
              <img
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                className="w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent"></div>
              <div className="absolute top-4 left-4">
                <span className="bg-neon-cyan text-dark px-3 py-1 rounded-full text-sm font-roboto font-medium">
                  {projects[activeProject].category}
                </span>
              </div>
            </div>

            {/* Project Navigation */}
            <div className="flex justify-center mt-6 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeProject
                      ? 'bg-neon-cyan shadow-lg shadow-neon-cyan/50'
                      : 'bg-gray-600 hover:bg-gray-500'
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
              <h4 className="text-sm font-roboto font-medium text-neon-cyan mb-3 uppercase tracking-wider">
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
              <h4 className="text-sm font-roboto font-medium text-neon-magenta mb-3 uppercase tracking-wider">
                Key Results
              </h4>
              <div className="space-y-2">
                {projects[activeProject].results.map((result, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-neon-magenta rounded-full mr-3"></div>
                    <span className="font-roboto">{result}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-neon-cyan to-neon-magenta text-dark font-roboto font-semibold hover:shadow-lg hover:shadow-neon-cyan/25 transition-all duration-300 group">
                View Case Study
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                className="border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:text-dark transition-all duration-300 group"
              >
                Live Demo
                <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-neon-purple to-neon-magenta text-white font-roboto font-semibold px-8 py-4 text-lg hover:shadow-xl hover:shadow-neon-purple/30 transition-all duration-300 transform hover:scale-105"
          >
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
