
import { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, Users, Clock, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const CaseStudies = () => {
  const [visibleStudies, setVisibleStudies] = useState<number[]>([]);
  const [selectedStudy, setSelectedStudy] = useState<any>(null);

  const caseStudies = [
    {
      id: 1,
      title: 'TechFlow Solutions: B2B Platform Transformation',
      client: 'TechFlow Solutions',
      industry: 'B2B Software',
      duration: '12 weeks',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      challenge: 'TechFlow had an outdated website with poor user experience, resulting in high bounce rates and low conversion rates.',
      solution: 'Complete redesign with modern UX principles, performance optimization, and lead generation focus.',
      fullContent: `
        <h2>The Challenge</h2>
        <p>TechFlow Solutions came to us with a critical problem: their outdated website was driving potential customers away. With a bounce rate of 78% and conversion rates below 1%, they were losing significant business opportunities. The site suffered from poor navigation, slow loading times, and a confusing user journey that failed to communicate their value proposition effectively.</p>
        
        <h2>Our Approach</h2>
        <p>We conducted comprehensive user research, including interviews with existing customers and analysis of user behavior data. Our design process focused on creating a clear information architecture that would guide users toward conversion points naturally.</p>
        
        <h3>Key Strategy Points:</h3>
        <ul>
          <li>Complete user experience audit and redesign</li>
          <li>Performance optimization for faster load times</li>
          <li>Implementation of lead generation best practices</li>
          <li>Mobile-first responsive design approach</li>
          <li>Integration with modern analytics and tracking tools</li>
        </ul>
        
        <h2>The Results</h2>
        <p>The transformation exceeded all expectations. Within 6 months of launch, TechFlow saw dramatic improvements across all key metrics:</p>
        
        <h2>Technical Implementation</h2>
        <p>We built the new platform using React and Next.js for optimal performance, implemented a headless CMS for easy content management, and integrated advanced analytics to track user behavior and conversion funnels.</p>
        
        <h2>Long-term Impact</h2>
        <p>The success of this project has positioned TechFlow as a leader in their industry, with increased market share and customer acquisition that continues to grow month over month.</p>
      `,
      results: [
        { metric: 'Conversion Rate', improvement: '+150%' },
        { metric: 'Page Load Time', improvement: '-60%' },
        { metric: 'User Engagement', improvement: '+200%' },
        { metric: 'Lead Generation', improvement: '+300%' }
      ],
      testimonial: {
        quote: "devXplosion transformed our digital presence. The results exceeded all our expectations.",
        author: "Sarah Johnson",
        position: "CEO, TechFlow Solutions"
      },
      tags: ['Website Redesign', 'UX/UI Design', 'Lead Generation']
    },
    {
      id: 2,
      title: 'EcoVibe: Sustainable E-commerce Platform',
      client: 'EcoVibe Marketplace',
      industry: 'E-commerce',
      duration: '16 weeks',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop',
      challenge: 'EcoVibe needed a scalable e-commerce platform that could handle their growing sustainable product marketplace.',
      solution: 'Custom-built platform with advanced filtering, payment integration, and vendor management system.',
      fullContent: `
        <h2>Project Overview</h2>
        <p>EcoVibe approached us with an ambitious vision: create the largest marketplace for sustainable products. They needed a platform that could scale with rapid growth while maintaining excellent user experience for both buyers and sellers.</p>
        
        <h2>Technical Challenges</h2>
        <p>Building a multi-vendor marketplace presented unique challenges:</p>
        <ul>
          <li>Complex product catalog with sustainability ratings</li>
          <li>Multi-vendor payment processing and commission tracking</li>
          <li>Advanced search and filtering capabilities</li>
          <li>Scalable infrastructure to handle growth</li>
          <li>Mobile-optimized shopping experience</li>
        </ul>
        
        <h2>Our Solution</h2>
        <p>We developed a comprehensive e-commerce ecosystem using modern technologies and best practices. The platform features a custom-built vendor dashboard, advanced analytics, and a seamless checkout process.</p>
        
        <h2>Key Features Implemented</h2>
        <ul>
          <li>Multi-vendor marketplace functionality</li>
          <li>Sustainability scoring system</li>
          <li>Advanced product filtering and search</li>
          <li>Integrated payment processing with Stripe</li>
          <li>Vendor analytics dashboard</li>
          <li>Mobile-responsive design</li>
          <li>Automated inventory management</li>
        </ul>
        
        <h2>Results and Impact</h2>
        <p>The platform launched successfully and has become a leading destination for sustainable shopping, with continuous growth in both vendor adoption and customer satisfaction.</p>
      `,
      results: [
        { metric: 'Monthly Users', improvement: '10,000+' },
        { metric: 'Transaction Volume', improvement: '+500%' },
        { metric: 'Vendor Onboarding', improvement: '+400%' },
        { metric: 'Customer Satisfaction', improvement: '4.9/5' }
      ],
      testimonial: {
        quote: "The platform they built scaled with our rapid growth. Absolutely incredible work.",
        author: "Mike Chen",
        position: "Founder, EcoVibe"
      },
      tags: ['Web Development', 'E-commerce', 'Scalability']
    },
    {
      id: 3,
      title: 'MindfulSpace: Mobile App UX Redesign',
      client: 'MindfulSpace',
      industry: 'Health & Wellness',
      duration: '8 weeks',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      challenge: 'MindfulSpace\'s meditation app had poor user retention and confusing navigation affecting user engagement.',
      solution: 'Complete UX redesign based on user research, simplified onboarding, and personalized user journeys.',
      fullContent: `
        <h2>Understanding the Problem</h2>
        <p>MindfulSpace's meditation app was struggling with user retention. Despite having quality content, users were abandoning the app after just a few sessions due to confusing navigation and overwhelming interface design.</p>
        
        <h2>Research and Discovery</h2>
        <p>We conducted extensive user research including:</p>
        <ul>
          <li>User interviews with current and former users</li>
          <li>Usability testing sessions</li>
          <li>Competitive analysis of successful meditation apps</li>
          <li>Analytics review to identify pain points</li>
        </ul>
        
        <h2>Design Strategy</h2>
        <p>Our redesign focused on creating a calming, intuitive experience that would encourage daily use and long-term engagement. We simplified the information architecture and created personalized user journeys based on individual meditation goals.</p>
        
        <h2>Key Design Improvements</h2>
        <ul>
          <li>Streamlined onboarding process</li>
          <li>Personalized meditation recommendations</li>
          <li>Progress tracking and achievements</li>
          <li>Simplified navigation structure</li>
          <li>Calming visual design with improved accessibility</li>
          <li>Offline content access</li>
        </ul>
        
        <h2>Implementation and Testing</h2>
        <p>We worked closely with the development team to ensure the design vision was properly implemented, conducting multiple rounds of user testing to validate our improvements.</p>
        
        <h2>Post-Launch Success</h2>
        <p>The redesigned app has seen remarkable improvements in user engagement and retention, establishing MindfulSpace as a top meditation app in the wellness category.</p>
      `,
      results: [
        { metric: 'User Retention', improvement: '+200%' },
        { metric: 'Session Duration', improvement: '+180%' },
        { metric: 'App Store Rating', improvement: '4.8/5' },
        { metric: 'Daily Active Users', improvement: '+250%' }
      ],
      testimonial: {
        quote: "Our users love the new design. Retention rates have never been higher.",
        author: "Dr. Lisa Park",
        position: "Product Manager, MindfulSpace"
      },
      tags: ['UI/UX Design', 'Mobile App', 'User Research']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-study') || '0');
            setTimeout(() => {
              setVisibleStudies(prev => [...prev, index]);
            }, index * 300);
          }
        });
      },
      { threshold: 0.2 }
    );

    const studyCards = document.querySelectorAll('[data-study]');
    studyCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  if (selectedStudy) {
    return (
      <>
        <Helmet>
          <title>{selectedStudy.title} | Case Study | devXplosion</title>
          <meta name="description" content={selectedStudy.challenge} />
        </Helmet>
        
        <div className="min-h-screen bg-dark">
          <Navigation />
          
          <div className="pt-16">
            <article className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <Button 
                  onClick={() => setSelectedStudy(null)}
                  variant="outline"
                  className="mb-8 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Case Studies
                </Button>
                
                <div className="aspect-video mb-8 overflow-hidden rounded-lg">
                  <img 
                    src={selectedStudy.image} 
                    alt={selectedStudy.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="px-3 py-1 bg-neon-cyan/10 text-neon-cyan rounded-full text-sm font-roboto">
                        {selectedStudy.industry}
                      </span>
                      <div className="flex items-center text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm font-roboto">{selectedStudy.duration}</span>
                      </div>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl font-montserrat font-bold text-white mb-6">
                      {selectedStudy.title}
                    </h1>
                    
                    <div 
                      className="prose prose-lg prose-invert max-w-none mb-8"
                      dangerouslySetInnerHTML={{ __html: selectedStudy.fullContent }}
                      style={{
                        color: '#d1d5db',
                        lineHeight: '1.8'
                      }}
                    />
                  </div>
                  
                  <div className="lg:col-span-1">
                    <div className="bg-dark/60 backdrop-blur-md border border-neon-cyan/20 rounded-lg p-6 mb-6">
                      <h3 className="text-xl font-montserrat font-bold text-white mb-4">
                        Key Results
                      </h3>
                      <div className="space-y-4">
                        {selectedStudy.results.map((result: any, idx: number) => (
                          <div key={idx} className="text-center p-4 bg-dark/60 rounded-lg border border-neon-cyan/20">
                            <div className="text-2xl font-montserrat font-bold text-neon-cyan mb-1">
                              {result.improvement}
                            </div>
                            <div className="text-sm text-gray-300 font-roboto">
                              {result.metric}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-dark/40 rounded-lg p-6 mb-6">
                      <h3 className="text-lg font-montserrat font-semibold text-neon-cyan mb-4">
                        Client Testimonial
                      </h3>
                      <p className="text-gray-300 font-roboto italic mb-4">
                        "{selectedStudy.testimonial.quote}"
                      </p>
                      <div className="text-white font-roboto">
                        <div className="font-medium">{selectedStudy.testimonial.author}</div>
                        <div className="text-sm text-gray-400">{selectedStudy.testimonial.position}</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {selectedStudy.tags.map((tag: string, idx: number) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-neon-magenta/10 text-neon-magenta rounded-full text-sm font-roboto"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Case Studies | Success Stories | devXplosion</title>
        <meta name="description" content="Explore detailed case studies showcasing how devXplosion has helped businesses achieve remarkable results through innovative web solutions and design." />
        <meta name="keywords" content="case studies, success stories, web development results, UX design case studies, website redesign examples" />
        <meta property="og:title" content="Case Studies | Success Stories | devXplosion" />
        <meta property="og:description" content="Explore detailed case studies showcasing remarkable results through innovative web solutions." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://devxplosion.com/case-studies" />
      </Helmet>
      
      <div className="min-h-screen bg-dark">
        <Navigation />
        
        <div className="pt-16">
          {/* Hero Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-neon-purple/10"></div>
            
            <div className="max-w-7xl mx-auto relative z-10 text-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-6 animate-fade-in-up">
                Success <span className="text-neon-cyan">Stories</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 font-roboto max-w-4xl mx-auto mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Real results from real clients. Discover how we've transformed businesses through innovative digital solutions.
              </p>
            </div>
          </section>

          {/* Case Studies */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-20">
              {caseStudies.map((study, index) => {
                const isVisible = visibleStudies.includes(index);
                
                return (
                  <div
                    key={study.id}
                    data-study={index}
                    className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  >
                    <Card className="bg-dark/80 backdrop-blur-md border-neon-cyan/20 overflow-hidden">
                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* Image */}
                        <div className="relative">
                          <div className="aspect-video lg:aspect-square bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20">
                            <img 
                              src={study.image} 
                              alt={study.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 lg:p-12">
                          <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-neon-cyan/10 text-neon-cyan rounded-full text-sm font-roboto">
                              {study.industry}
                            </span>
                            <div className="flex items-center text-gray-400">
                              <Clock className="w-4 h-4 mr-1" />
                              <span className="text-sm font-roboto">{study.duration}</span>
                            </div>
                          </div>

                          <h2 className="text-3xl font-montserrat font-bold text-white mb-4">
                            {study.title}
                          </h2>

                          <div className="space-y-6 mb-8">
                            <div>
                              <h3 className="text-lg font-montserrat font-semibold text-neon-cyan mb-2">
                                Challenge
                              </h3>
                              <p className="text-gray-300 font-roboto">
                                {study.challenge}
                              </p>
                            </div>

                            <div>
                              <h3 className="text-lg font-montserrat font-semibold text-neon-cyan mb-2">
                                Solution
                              </h3>
                              <p className="text-gray-300 font-roboto">
                                {study.solution}
                              </p>
                            </div>
                          </div>

                          {/* Results Grid */}
                          <div className="grid grid-cols-2 gap-4 mb-8">
                            {study.results.map((result, idx) => (
                              <div key={idx} className="text-center p-4 bg-dark/60 rounded-lg border border-neon-cyan/20">
                                <div className="text-2xl font-montserrat font-bold text-neon-cyan mb-1">
                                  {result.improvement}
                                </div>
                                <div className="text-sm text-gray-300 font-roboto">
                                  {result.metric}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Testimonial */}
                          <div className="bg-dark/40 rounded-lg p-6 mb-6">
                            <p className="text-gray-300 font-roboto italic mb-4">
                              "{study.testimonial.quote}"
                            </p>
                            <div className="text-white font-roboto">
                              <div className="font-medium">{study.testimonial.author}</div>
                              <div className="text-sm text-gray-400">{study.testimonial.position}</div>
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {study.tags.map((tag, idx) => (
                              <span 
                                key={idx}
                                className="px-3 py-1 bg-neon-magenta/10 text-neon-magenta rounded-full text-sm font-roboto"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <Button 
                            onClick={() => setSelectedStudy(study)}
                            className="bg-gradient-to-r from-neon-cyan to-neon-magenta text-dark font-roboto font-semibold"
                          >
                            View Full Case Study
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center bg-dark/60 backdrop-blur-md border border-neon-cyan/20 rounded-lg p-12">
              <h3 className="text-3xl font-montserrat font-bold text-white mb-4">
                Ready to Become Our Next Success Story?
              </h3>
              <p className="text-xl text-gray-300 font-roboto mb-8">
                Let's discuss how we can achieve similar results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-neon-cyan to-neon-magenta text-dark font-roboto font-semibold px-8 py-4 text-lg hover:shadow-xl hover:shadow-neon-cyan/30 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark font-roboto font-semibold px-8 py-4 text-lg transition-all duration-300"
                >
                  Download Case Study PDF
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

export default CaseStudies;
