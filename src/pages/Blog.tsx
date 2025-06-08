import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends shaping the future of web development, from AI integration to progressive web apps.',
      content: 'Lorem ipsum dolor sit amet...',
      author: 'Sarah Johnson',
      authorBio: 'Senior Full-Stack Developer',
      authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b743?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Development',
      tags: ['React', 'AI', 'Web Development', 'Trends'],
      status: 'published',
      featured: true,
      views: 1250,
      likes: 89
    },
    {
      id: 2,
      title: 'UX Design Principles That Drive Conversions',
      excerpt: 'Learn how to apply fundamental UX design principles to create websites that convert visitors into customers.',
      content: 'Lorem ipsum dolor sit amet...',
      author: 'Mike Chen',
      authorBio: 'UX/UI Design Lead',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      date: '2024-01-12',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Design',
      tags: ['UX Design', 'Conversion', 'User Experience'],
      status: 'published',
      featured: false,
      views: 890,
      likes: 67
    },
    {
      id: 3,
      title: 'Building Scalable React Applications: Best Practices',
      excerpt: 'Discover the best practices for building React applications that can scale with your business needs.',
      content: 'Lorem ipsum dolor sit amet...',
      author: 'Emily Rodriguez',
      authorBio: 'React Specialist',
      authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      date: '2024-01-10',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Development',
      tags: ['React', 'Scalability', 'Best Practices'],
      status: 'published',
      featured: true,
      views: 1456,
      likes: 112
    }
  ];

  const categories = ['All', 'Development', 'Design', 'Marketing', 'Business'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Blog | devXplosion</title>
        <meta name="description" content="Stay updated with the latest insights on web development, design trends, and digital marketing strategies from our expert team." />
      </Helmet>
      
      <div className="min-h-screen bg-dark">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
            }}
          />
          <div className="absolute inset-0 bg-dark/80"></div>
          
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-6 animate-fade-in-up">
              Our <span className="text-eco-green">Blog</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 font-roboto max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Insights, trends, and expertise from the world of web development and design
            </p>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`${
                    selectedCategory === category
                      ? 'bg-eco-green text-dark'
                      : 'border-eco-green text-eco-green hover:bg-eco-green hover:text-dark'
                  } font-roboto font-medium transition-all duration-300`}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="bg-dark/80 backdrop-blur-md border-eco-green/20 hover:border-eco-green/40 transition-all duration-500 group h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-eco-green/90 text-dark rounded-full text-sm font-roboto font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <CardHeader className="flex-grow">
                    <CardTitle className="text-xl font-montserrat font-bold text-white group-hover:text-eco-green transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300 font-roboto line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="mt-auto">
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="font-roboto">{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="font-roboto">{post.readTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img 
                          src={post.authorImage} 
                          alt={post.author}
                          className="w-8 h-8 rounded-full mr-3"
                        />
                        <div>
                          <div className="text-white font-roboto font-medium text-sm">{post.author}</div>
                          <div className="text-gray-400 font-roboto text-xs">{post.authorBio}</div>
                        </div>
                      </div>
                      
                      <Button 
                        size="sm"
                        className="bg-gradient-to-r from-eco-green to-neon-cyan text-dark font-roboto font-medium hover:shadow-lg hover:shadow-eco-green/25 transition-all duration-300"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-20 bg-dark/60 backdrop-blur-md border border-eco-green/20 rounded-lg p-12">
              <h3 className="text-3xl font-montserrat font-bold text-white mb-4">
                Stay Updated with Our Latest Insights
              </h3>
              <p className="text-xl text-gray-300 font-roboto mb-8 max-w-3xl mx-auto">
                Subscribe to our newsletter and never miss the latest trends and tips in web development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-eco-green to-neon-cyan text-dark font-roboto font-semibold px-8 py-4 text-lg hover:shadow-xl hover:shadow-eco-green/30 transition-all duration-300 transform hover:scale-105"
                >
                  Subscribe to Newsletter
                </Button>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-eco-green text-eco-green hover:bg-eco-green hover:text-dark font-roboto font-semibold px-8 py-4 text-lg transition-all duration-300"
                  >
                    Get in Touch
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

export default Blog;
