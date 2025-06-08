
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform Redesign',
      client: 'TechStore Pro',
      industry: 'Technology Retail',
      challenge: 'Low conversion rates and poor mobile experience',
      result: '150% increase in mobile conversions',
      duration: '3 months',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['E-commerce', 'UX Design', 'Mobile Optimization'],
      metrics: [
        { label: 'Conversion Rate', value: '+150%', icon: TrendingUp },
        { label: 'Page Load Speed', value: '+60%', icon: Clock },
        { label: 'User Engagement', value: '+85%', icon: Users }
      ]
    },
    {
      id: 2,
      title: 'SaaS Platform Development',
      client: 'CloudSync Solutions',
      industry: 'Software',
      challenge: 'Need for scalable, user-friendly dashboard',
      result: '200% increase in user retention',
      duration: '6 months',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['SaaS', 'Dashboard', 'Full-Stack Development'],
      metrics: [
        { label: 'User Retention', value: '+200%', icon: Users },
        { label: 'Load Time', value: '+75%', icon: Clock },
        { label: 'Feature Adoption', value: '+120%', icon: TrendingUp }
      ]
    },
    {
      id: 3,
      title: 'Healthcare Portal Redesign',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      challenge: 'Complex user flows and accessibility issues',
      result: '90% improvement in user satisfaction',
      duration: '4 months',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Healthcare', 'Accessibility', 'User Experience'],
      metrics: [
        { label: 'User Satisfaction', value: '+90%', icon: Users },
        { label: 'Task Completion', value: '+65%', icon: TrendingUp },
        { label: 'Accessibility Score', value: '+180%', icon: Clock }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | devXplosion</title>
        <meta name="description" content="Explore our detailed case studies showcasing successful web development and design projects with measurable results." />
      </Helmet>
      
      <div className="min-h-screen bg-dark">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
            }}
          />
          <div className="absolute inset-0 bg-dark/80"></div>
          
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-6 animate-fade-in-up">
              Case <span className="text-neon-purple">Studies</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 font-roboto max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Real projects, real results. See how we transform businesses through digital innovation.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-1 gap-12">
              {caseStudies.map((study, index) => (
                <Card key={study.id} className="bg-dark/80 backdrop-blur-md border-neon-purple/20 hover:border-neon-purple/40 transition-all duration-500 overflow-hidden group">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative overflow-hidden">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-transparent"></div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 lg:p-12">
                      <CardHeader className="p-0 mb-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {study.tags.map((tag, idx) => (
                            <span key={idx} className="px-3 py-1 bg-neon-purple/10 text-neon-purple rounded-full text-sm font-roboto">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <CardTitle className="text-3xl font-montserrat font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                          {study.title}
                        </CardTitle>
                        
                        <CardDescription className="text-neon-purple font-roboto font-medium text-lg">
                          {study.client} • {study.industry}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="p-0 space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-white font-montserrat font-semibold mb-2">Challenge:</h4>
                            <p className="text-gray-300 font-roboto">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="text-white font-montserrat font-semibold mb-2">Result:</h4>
                            <p className="text-neon-purple font-roboto font-medium">{study.result}</p>
                          </div>
                        </div>

                        {/* Metrics */}
                        <div>
                          <h4 className="text-white font-montserrat font-semibold mb-4">Key Metrics:</h4>
                          <div className="grid grid-cols-3 gap-4">
                            {study.metrics.map((metric, idx) => {
                              const Icon = metric.icon;
                              return (
                                <div key={idx} className="text-center">
                                  <Icon className="w-6 h-6 text-neon-purple mx-auto mb-2" />
                                  <div className="text-2xl font-montserrat font-bold text-white">{metric.value}</div>
                                  <div className="text-sm text-gray-400 font-roboto">{metric.label}</div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4">
                          <div className="text-sm text-gray-400 font-roboto">
                            Duration: {study.duration}
                          </div>
                          <Button className="bg-gradient-to-r from-neon-purple to-neon-magenta text-dark font-roboto font-semibold hover:shadow-lg hover:shadow-neon-purple/25 transition-all duration-300">
                            View Full Case Study
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-20 bg-dark/60 backdrop-blur-md border border-neon-purple/20 rounded-lg p-12">
              <h3 className="text-3xl font-montserrat font-bold text-white mb-4">
                Ready to Become Our Next Success Story?
              </h3>
              <p className="text-xl text-gray-300 font-roboto mb-8 max-w-3xl mx-auto">
                Let's discuss your project and create measurable results together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-neon-purple to-neon-magenta text-dark font-roboto font-semibold px-8 py-4 text-lg hover:shadow-xl hover:shadow-neon-purple/30 transition-all duration-300 transform hover:scale-105"
                  >
                    Start Your Project
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-dark font-roboto font-semibold px-8 py-4 text-lg transition-all duration-300"
                  >
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudies;
