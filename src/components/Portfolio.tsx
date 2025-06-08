
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "E-commerce Custom Website – CrazySnitch",
      category: "E-commerce Development",
      description: "Complete custom e-commerce platform with personalization features, mobile optimization, and enhanced checkout UX. Achieved 2x faster load times and 200% increase in personalized order engagement.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "Payment Gateway", "Mobile Optimization"],
      results: ["+200% Personalized Orders", "+50% Mobile Conversion", "95+ PageSpeed Score"],
      liveUrl: "https://crazysnitch.in",
      duration: "5 weeks"
    },
    {
      title: "AI-Driven Audit Website – Sheetsway",
      category: "SaaS Development",
      description: "Modern SaaS platform with AI integration, dashboard UI, and secure authentication system. Built for seamless B2B user experience with zero drop-off during audit processes.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      technologies: ["React", "AI APIs", "Dashboard UI", "Authentication"],
      results: ["+70% User Retention", "+40% API Speed", "Secure 2FA Auth"],
      liveUrl: "https://sheetsway.com",
      duration: "1.5 months"
    },
    {
      title: "CampusCashh – Job Portal",
      category: "Full-Stack Platform",
      description: "MERN stack job portal for university students with role-based authentication, smart filtering, and resume upload functionality. Gained 300+ beta users in 2 weeks.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      technologies: ["MERN Stack", "Role-based Auth", "Smart Filters", "File Upload"],
      results: ["+150% User Engagement", "300+ Beta Users", "+40 Startups Registered"],
      liveUrl: "https://campuscashh.vercel.app",
      duration: "3 weeks"
    },
    {
      title: "Chronical – Dubai Real Estate",
      category: "Corporate Website",
      description: "Modern real estate website with smooth animations, bilingual SEO optimization, and integrated contact forms. Increased organic traffic by 80% and mobile engagement by 55%.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      technologies: ["React", "SEO Optimization", "Animations", "Multilingual"],
      results: ["+80% Organic Traffic", "+55% Mobile Engagement", "+35% Lead Conversion"],
      liveUrl: "https://chronical-lac.vercel.app",
      duration: "10 days"
    },
    {
      title: "Portfolio Website – Akshay Pratap Singh",
      category: "Personal Branding",
      description: "High-performance personal portfolio with modern design, optimized for recruiters and clients. Achieved 100% Core Web Vitals and generated 4 client leads in first month.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      technologies: ["React/Next.js", "Performance Optimization", "SEO", "Responsive Design"],
      results: ["100% Core Web Vitals", "+500 Profile Clicks", "4 Client Leads"],
      liveUrl: "https://akshayys.vercel.app",
      duration: "4 days"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-white mb-6">
            Featured <span className="text-eco-dark">Projects</span>
          </h2>
          <p className="text-xl font-roboto text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence with innovative solutions.
          </p>
        </div>

        {/* Project Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Project Images Carousel */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border-2 border-eco-green/30">
              <img
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                className="w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent"></div>
              <div className="absolute top-4 left-4">
                <span className="bg-eco-green text-dark px-3 py-1 rounded-full text-sm font-roboto font-medium">
                  {projects[activeProject].category}
                </span>
              </div>
              <div className="absolute bottom-4 right-4">
                <span className="bg-eco-green text-dark px-4 py-2 rounded-full text-sm font-roboto font-bold">
                  {projects[activeProject].duration}
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
                      ? 'bg-eco-green shadow-lg shadow-eco-green/50'
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
              <h4 className="text-sm font-roboto font-medium text-eco-dark mb-3 uppercase tracking-wider">
                Key Results
              </h4>
              <div className="space-y-2">
                {projects[activeProject].results.map((result, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-eco-dark rounded-full mr-3"></div>
                    <span className="font-roboto">{result}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/case-studies">
                <Button className="bg-gradient-to-r from-eco-green to-eco-dark text-dark font-roboto font-semibold hover:shadow-lg hover:shadow-eco-green/25 transition-all duration-300 group">
                  View Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href={projects[activeProject].liveUrl} target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  className="border-eco-dark text-eco-dark hover:bg-eco-dark hover:text-dark transition-all duration-300 group"
                >
                  Live Demo
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link to="/portfolio">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-eco-medium to-eco-dark text-dark font-roboto font-semibold px-8 py-4 text-lg hover:shadow-xl hover:shadow-eco-green/30 transition-all duration-300 transform hover:scale-105"
            >
              View Full Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
