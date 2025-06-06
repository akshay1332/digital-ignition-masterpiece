import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStartup Inc.",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      content: "DevXplosion transformed our outdated website into a modern, conversion-focused masterpiece. The attention to detail and innovative design approach exceeded all our expectations.",
      rating: 5,
      project: "Complete Website Redesign"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      content: "The UI/UX design work was phenomenal. Our user engagement increased by 300% and conversion rates doubled within the first month of launch. Absolutely incredible results!",
      rating: 5,
      project: "UI/UX Design & Development"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Creative Agency",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      content: "Working with DevXplosion was a game-changer. Their innovative approach to web development and stunning visual effects brought our brand vision to life perfectly.",
      rating: 5,
      project: "Brand Website Development"
    },
    {
      id: 4,
      name: "David Park",
      company: "FinTech Innovations",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      content: "The team delivered a sophisticated, secure platform that perfectly captures our fintech brand. The user experience is seamless and the design is cutting-edge.",
      rating: 5,
      project: "Platform Redesign"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      company: "Health & Wellness Co.",
      role: "Brand Manager",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      content: "DevXplosion's expertise in creating immersive digital experiences helped us connect with our audience on a deeper level. The results speak for themselves.",
      rating: 5,
      project: "Digital Experience Design"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-900 to-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-transparent to-neon-cyan/5"></div>
      
      {/* Floating Particles */}
      <div className="absolute top-20 left-20 w-12 h-12 bg-neon-cyan/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 bg-neon-magenta/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-neon-purple/10 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-montserrat font-bold text-white mb-6"
          >
            What Our <span className="text-neon-cyan">Clients Say</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl font-roboto text-gray-300 max-w-3xl mx-auto"
          >
            Don't just take our word for it. Here's what industry leaders have to say about their experience working with DevXplosion.
          </motion.p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700 hover:border-eco-green/50 transition-all duration-300 p-8 md:p-12 relative overflow-hidden"
            >
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-magenta rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-3xl blur-sm"></div>
              
              <div className="relative z-10">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-neon-cyan to-neon-magenta rounded-full flex items-center justify-center opacity-20">
                  <Quote className="w-8 h-8 text-white" />
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* Client Photo & Info */}
                  <div className="text-center md:text-left">
                    <div className="relative inline-block mb-4">
                      <div className="w-32 h-32 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-neon-cyan/30 hover:border-neon-cyan transition-colors duration-300">
                        <img 
                          src={currentTestimonial.image} 
                          alt={currentTestimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-neon-cyan to-neon-magenta rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-montserrat font-bold text-white mb-1">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-neon-cyan font-roboto mb-1">
                      {currentTestimonial.role}
                    </p>
                    <p className="text-gray-400 font-roboto text-sm mb-4">
                      {currentTestimonial.company}
                    </p>
                    
                    {/* Rating Stars */}
                    <div className="flex justify-center md:justify-start mb-4">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <div className="text-sm text-neon-magenta font-roboto font-medium">
                      Project: {currentTestimonial.project}
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="md:col-span-2">
                    <blockquote className="text-xl md:text-2xl font-roboto text-gray-200 leading-relaxed italic mb-6">
                      "{currentTestimonial.content}"
                    </blockquote>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="bg-white border-gray-300 text-black hover:bg-gray-100 transition-all duration-300"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-eco-green shadow-lg shadow-eco-green/50' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="bg-white border-gray-300 text-black hover:bg-gray-100 transition-all duration-300"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {[
            { number: "150+", label: "Happy Clients" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "300%", label: "Average ROI Increase" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-montserrat font-bold text-neon-cyan mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-roboto">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
