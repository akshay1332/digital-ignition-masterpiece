import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, TrendingUp, Users, Globe, Zap, Target, ShoppingCart, Search, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Custom Website – CrazySnitch',
      client: 'CrazySnitch.in',
      industry: 'Fashion & Accessories',
      category: 'UX Design | Mobile Optimization | Custom Development',
      challenge: 'The client needed a fast, scalable e-commerce platform with custom product configuration, seamless mobile shopping, and better checkout flow. Previous site had long load times and poor UI for personalized orders.',
      solution: 'I built a custom e-commerce website using modern responsive frameworks, optimizing checkout UX and integrating secure payment gateways with COD and dynamic shipping modules.',
      result: 'Enhanced personalization features, fully mobile-optimized experience, 2x faster load time & improved navigation',
      duration: '5 weeks',
      liveUrl: 'https://crazysnitch.in',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['E-commerce', 'UX Design', 'Mobile Optimization'],
      metrics: [
        { label: 'Personalized Order Engagement', value: '+200%', icon: TrendingUp },
        { label: 'Mobile Conversion Rate', value: '+50%', icon: Users },
        { label: 'Google PageSpeed Score', value: '95+', icon: Zap }
      ]
    },
    {
      id: 2,
      title: 'AI-Driven Audit Website – Sheetsway',
      client: 'Sheetsway.com',
      industry: 'AI Audit SaaS Platform',
      category: 'Full-Stack Development | SaaS UX | AI Integration',
      challenge: 'The startup needed a user-friendly frontend that could showcase AI audit tools and handle user authentication, dashboard interaction, and performance logging.',
      solution: 'Designed a clean, dashboard-style SaaS UI, integrated AI APIs, built login/session system, and deployed with database performance tracking.',
      result: 'Smooth onboarding for B2B users, 40% faster response time from API endpoints, 0% user drop during audit process',
      duration: '1.5 months',
      liveUrl: 'https://sheetsway.com',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['SaaS', 'AI Integration', 'Full-Stack Development'],
      metrics: [
        { label: 'User Retention', value: '+70%', icon: Users },
        { label: 'API Load Speed', value: '+40%', icon: Zap },
        { label: 'Secure Auth with 2FA', value: '100%', icon: Target }
      ]
    },
    {
      id: 3,
      title: 'CampusCashh – Internship & Job Portal',
      client: 'Self-started MVP',
      industry: 'Student Career Platform',
      category: 'Full-Stack Development | Student Career Platform | UI/UX',
      challenge: 'No dedicated platform existed for university startups and internship listings. Needed a solution for easy posting, filtering, and applying.',
      solution: 'Built a fully functional MERN stack web app with role-based logins (Student/Recruiter), smart filters, job bookmarking, and resume upload features.',
      result: '300+ beta users within first 2 weeks, instant job matching with category filter, applied SEO practices to rank job tags',
      duration: '3 weeks',
      liveUrl: 'https://campuscashh.vercel.app',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['MERN Stack', 'Job Portal', 'UI/UX'],
      metrics: [
        { label: 'Engagement from Repeat Users', value: '+150%', icon: TrendingUp },
        { label: 'New Startups Registered', value: '+40', icon: Users },
        { label: 'Beta Users in 2 weeks', value: '300+', icon: Target }
      ]
    },
    {
      id: 4,
      title: 'Chronical – Dubai Real Estate Business Website',
      client: 'Dubai-based Real Estate Company',
      industry: 'Real Estate',
      category: 'Corporate Website | Real Estate | SEO Optimization',
      challenge: 'Needed a modern, clean site to showcase properties and attract global clients with fast mobile loading and SEO-friendly structure.',
      solution: 'Designed a visually stunning landing page with smooth animations, call-to-action buttons, and optimized metadata for Arabic + English keywords.',
      result: 'Increased lead submissions from mobile, better international traffic via Google, integrated contact and location maps',
      duration: '10 days',
      liveUrl: 'https://chronical-lac.vercel.app',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Real Estate', 'SEO Optimization', 'Corporate Website'],
      metrics: [
        { label: 'Organic Traffic', value: '+80%', icon: Globe },
        { label: 'Mobile Engagement', value: '+55%', icon: Users },
        { label: 'Lead Conversion', value: '+35%', icon: TrendingUp }
      ]
    },
    {
      id: 5,
      title: 'Portfolio Website – Akshay Pratap Singh',
      client: 'Personal Project',
      industry: 'Personal Branding',
      category: 'Personal Branding | Responsive Design | Smooth UX',
      challenge: 'Needed a high-performance, personal site that reflects my full-stack skills, project experience, and allows recruiters to browse easily on any device.',
      solution: 'Created a minimal yet bold UI using modern tech (React/Next.js), with project cards, contact form, and optimized images and Lighthouse SEO.',
      result: '90+ PageSpeed on mobile, featured in 3 portfolio inspiration groups, used as example for personal branding in 2 university webinars',
      duration: '4 days',
      liveUrl: 'https://akshayys.vercel.app',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Personal Branding', 'React/Next.js', 'SEO'],
      metrics: [
        { label: 'Core Web Vitals Passed', value: '100%', icon: Zap },
        { label: 'Profile Clicks in First Month', value: '+500', icon: Users },
        { label: 'Client Leads Converted', value: '4', icon: Target }
      ]
    },
    {
      id: 6,
      title: 'CustomPrint – Personalized Product Store',
      client: 'CustomPrint.in',
      industry: 'Personalized Gifting',
      category: 'E-commerce | Customization Tool | Mobile-First Design',
      challenge: 'The brand needed a user-friendly e-commerce platform allowing customers to personalize products (e.g., t-shirts, mugs) with live previews, while facing high bounce rates and long checkout processes on their previous site.',
      solution: 'Built a custom product configurator using JavaScript with dynamic image previews. Integrated a fast, clean checkout system, added COD/payment gateway, and designed a responsive UI with product-based navigation.',
      result: 'Seamless user experience with real-time product previews, 60% decrease in cart abandonment, mobile-first experience optimized for 3-click purchase',
      duration: '4 weeks',
      liveUrl: 'https://customprint.in',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['E-commerce', 'Customization Tool', 'Mobile-First Design'],
      metrics: [
        { label: 'Sales Conversion', value: '+45%', icon: ShoppingCart },
        { label: 'Mobile Engagement', value: '+70%', icon: Users },
        { label: 'Avg Page Load Time', value: '2.8s', icon: Zap }
      ]
    },
    {
      id: 7,
      title: 'AutoaMake – Automobile Custom Parts & Accessories',
      client: 'AutoaMake.com',
      industry: 'Auto Parts Marketplace',
      category: 'E-commerce Website | UI/UX Design | Multi-Category Structure',
      challenge: 'AutoaMake wanted a scalable platform for listing thousands of vehicle accessories and tools, with advanced category filtering, responsive layout, and SEO-focused architecture to compete with industry giants.',
      solution: 'Developed an optimized multi-category product listing interface with filters by car model, type, and brand. Included user review modules, responsive sliders, and a blazing fast load time with CDN and image compression.',
      result: 'Increased trust & retention with review-based buying, 2x faster search with AJAX-based filtering, higher domain authority via blog integration',
      duration: '5 weeks',
      liveUrl: 'https://autoamake.com',
      image: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['E-commerce', 'Auto Parts', 'Multi-Category'],
      metrics: [
        { label: 'Search Traffic', value: '+120%', icon: Search },
        { label: 'Order Volume Month-over-Month', value: '+40%', icon: TrendingUp },
        { label: 'Site Bounce Rate Decrease', value: '50%', icon: Target }
      ]
    },
    {
      id: 8,
      title: 'BioclinPharam – Medical Lab & Diagnostic Website',
      client: 'BioclinPharam Diagnostics',
      industry: 'Path Lab Services',
      category: 'Healthcare Website | CMS | Appointment System',
      challenge: 'Needed a medical website for lab service offerings with dynamic test listings, appointment booking, and professional trust-building design. The older site lacked clarity, mobile support, and SEO readiness.',
      solution: 'Developed a fully responsive, CMS-backed website with categorized test details, downloadable reports section, and online appointment forms integrated with email automation. Included meta SEO for medical services.',
      result: 'Improved patient experience with 1-click appointment booking, faster access to test info & downloadable PDFs, better search engine ranking in regional diagnostics',
      duration: '3 weeks',
      liveUrl: 'https://bioclinpharam.in',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Healthcare', 'Medical Lab', 'Appointment System'],
      metrics: [
        { label: 'Patient Appointments via Web', value: '+85%', icon: Activity },
        { label: 'Organic Google Traffic', value: '+60%', icon: Globe },
        { label: 'Mobile Usage Growth in First Month', value: '3x', icon: Users }
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
                      <div className="absolute top-4 left-4">
                        <span className="bg-neon-purple text-dark px-3 py-1 rounded-full text-sm font-roboto font-medium">
                          {study.category.split(' | ')[0]}
                        </span>
                      </div>
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
                            <p className="text-gray-300 font-roboto text-sm">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="text-white font-montserrat font-semibold mb-2">Solution:</h4>
                            <p className="text-gray-300 font-roboto text-sm">{study.solution}</p>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-white font-montserrat font-semibold mb-2">Result:</h4>
                          <p className="text-neon-purple font-roboto font-medium">{study.result}</p>
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
                          <div className="flex gap-3">
                            <a href={study.liveUrl} target="_blank" rel="noopener noreferrer">
                              <Button 
                                variant="outline" 
                                className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-dark transition-all duration-300"
                              >
                                View Live
                              </Button>
                            </a>
                            <Button className="bg-gradient-to-r from-neon-purple to-neon-magenta text-dark font-roboto font-semibold hover:shadow-lg hover:shadow-neon-purple/25 transition-all duration-300">
                              View Full Case Study
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                          </div>
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
