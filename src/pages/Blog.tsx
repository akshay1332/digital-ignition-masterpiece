
import { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  const [visiblePosts, setVisiblePosts] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt: 'Explore the latest trends shaping web development, from AI integration to advanced frameworks that are revolutionizing how we build digital experiences.',
      category: 'Web Development',
      author: 'Alex Chen',
      date: '2024-12-15',
      readTime: '8 min read',
      image: '/placeholder.svg',
      featured: true
    },
    {
      id: 2,
      title: 'UX Design Principles That Actually Convert',
      excerpt: 'Learn the essential UX design principles that drive conversions and create meaningful user experiences that keep visitors engaged.',
      category: 'UX Design',
      author: 'Sarah Kim',
      date: '2024-12-10',
      readTime: '6 min read',
      image: '/placeholder.svg',
      featured: false
    },
    {
      id: 3,
      title: 'Website Performance Optimization: A Complete Guide',
      excerpt: 'Discover proven strategies to optimize your website performance, reduce load times, and improve user experience across all devices.',
      category: 'Performance',
      author: 'Mike Johnson',
      date: '2024-12-05',
      readTime: '12 min read',
      image: '/placeholder.svg',
      featured: false
    },
    {
      id: 4,
      title: 'Building Scalable React Applications',
      excerpt: 'Best practices for building React applications that scale with your business needs while maintaining clean, maintainable code.',
      category: 'React',
      author: 'Emily Davis',
      date: '2024-11-28',
      readTime: '10 min read',
      image: '/placeholder.svg',
      featured: false
    },
    {
      id: 5,
      title: 'The Psychology of Color in Web Design',
      excerpt: 'Understanding how color choices impact user behavior and brand perception in digital design.',
      category: 'Design',
      author: 'David Wilson',
      date: '2024-11-20',
      readTime: '7 min read',
      image: '/placeholder.svg',
      featured: false
    },
    {
      id: 6,
      title: 'API Design Best Practices for Modern Web Apps',
      excerpt: 'Essential guidelines for designing robust, scalable APIs that power modern web applications.',
      category: 'Backend',
      author: 'Lisa Zhang',
      date: '2024-11-15',
      readTime: '9 min read',
      image: '/placeholder.svg',
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-post') || '0');
            setTimeout(() => {
              setVisiblePosts(prev => [...prev, index]);
            }, index * 100);
          }
        });
      },
      { threshold: 0.3 }
    );

    const postCards = document.querySelectorAll('[data-post]');
    postCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredPosts]);

  return (
    <>
      <Helmet>
        <title>Blog | Web Development Insights | devXplosion</title>
        <meta name="description" content="Stay updated with the latest web development trends, UX design insights, and technical tutorials from the devXplosion team." />
        <meta name="keywords" content="web development blog, UX design articles, React tutorials, web design trends, development insights" />
        <meta property="og:title" content="Blog | Web Development Insights | devXplosion" />
        <meta property="og:description" content="Stay updated with the latest web development trends and insights." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://devxplosion.com/blog" />
      </Helmet>
      
      <div className="min-h-screen bg-dark">
        <Navigation />
        
        <div className="pt-16">
          {/* Hero Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-neon-purple/10"></div>
            
            <div className="max-w-7xl mx-auto relative z-10 text-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-6 animate-fade-in-up">
                Our <span className="text-neon-cyan">Blog</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 font-roboto max-w-4xl mx-auto mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Insights, tutorials, and trends from the world of web development and digital design.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto relative animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-dark/60 border-neon-cyan/20 text-white placeholder-gray-400 focus:border-neon-cyan"
                />
              </div>
            </div>
          </section>

          {/* Featured Article */}
          {featuredPost && (
            <section className="py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-montserrat font-bold text-white mb-8 text-center">
                  Featured <span className="text-neon-cyan">Article</span>
                </h2>
                
                <Card className="bg-dark/80 backdrop-blur-md border-neon-cyan/20 overflow-hidden group cursor-pointer hover:border-neon-cyan/60 transition-all duration-500">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative overflow-hidden">
                      <div className="aspect-video lg:aspect-square bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20">
                        <img 
                          src={featuredPost.image} 
                          alt={featuredPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    
                    <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-neon-cyan/10 text-neon-cyan rounded-full text-sm font-roboto">
                          {featuredPost.category}
                        </span>
                        <span className="text-gray-400 text-sm font-roboto">
                          {featuredPost.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-montserrat font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors duration-300">
                        {featuredPost.title}
                      </h3>
                      
                      <p className="text-gray-300 font-roboto text-lg leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-400">
                          <User className="w-4 h-4 mr-2" />
                          <span className="text-sm font-roboto mr-4">{featuredPost.author}</span>
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm font-roboto">{featuredPost.date}</span>
                        </div>
                        
                        <Button className="bg-gradient-to-r from-neon-cyan to-neon-magenta text-dark font-roboto font-medium group-hover:shadow-lg group-hover:shadow-neon-cyan/25 transition-all duration-300">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </section>
          )}

          {/* Blog Posts Grid */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-montserrat font-bold text-white mb-12 text-center">
                Latest <span className="text-neon-cyan">Articles</span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => {
                  const isVisible = visiblePosts.includes(index);
                  
                  return (
                    <Card
                      key={post.id}
                      data-post={index}
                      className={`group cursor-pointer bg-dark/80 backdrop-blur-md border-neon-cyan/20 hover:border-neon-cyan/60 transition-all duration-500 transform hover:scale-105 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                    >
                      <CardHeader className="relative overflow-hidden p-0">
                        <div className="aspect-video bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20 overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </CardHeader>

                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-2 py-1 bg-neon-cyan/10 text-neon-cyan rounded-full text-xs font-roboto">
                            {post.category}
                          </span>
                          <span className="text-gray-400 text-xs font-roboto">
                            {post.readTime}
                          </span>
                        </div>
                        
                        <CardTitle className="text-xl font-montserrat font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </CardTitle>
                        
                        <CardDescription className="text-gray-300 font-roboto leading-relaxed mb-4 line-clamp-3">
                          {post.excerpt}
                        </CardDescription>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-400">
                            <User className="w-3 h-3 mr-1" />
                            <span className="text-xs font-roboto mr-3">{post.author}</span>
                            <Calendar className="w-3 h-3 mr-1" />
                            <span className="text-xs font-roboto">{post.date}</span>
                          </div>
                          
                          <Button size="sm" variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark">
                            Read
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center bg-dark/60 backdrop-blur-md border border-neon-cyan/20 rounded-lg p-12">
              <h3 className="text-3xl font-montserrat font-bold text-white mb-4">
                Stay Updated with Our Newsletter
              </h3>
              <p className="text-xl text-gray-300 font-roboto mb-8">
                Get the latest insights, tutorials, and industry trends delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Input
                  placeholder="Enter your email"
                  className="bg-dark/60 border-neon-cyan/20 text-white placeholder-gray-400 focus:border-neon-cyan"
                />
                <Button 
                  className="bg-gradient-to-r from-neon-cyan to-neon-magenta text-dark font-roboto font-semibold whitespace-nowrap"
                >
                  Subscribe
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

export default Blog;
