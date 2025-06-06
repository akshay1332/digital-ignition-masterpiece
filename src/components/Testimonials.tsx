
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
      name: "Rajesh Kumar",
      company: "TechnoVision Solutions",
      role: "Founder & CEO",
      initial: "R",
      content: "DevXplosion completely transformed our outdated e-commerce platform. The new design increased our conversion rate by 250% and customer engagement has never been better. Their team understood our business needs perfectly.",
      rating: 5,
      project: "E-commerce Platform Redesign",
      location: "Mumbai, India"
    },
    {
      id: 2,
      name: "Priya Sharma",
      company: "Digital Marketing Hub",
      role: "Marketing Director",
      initial: "P",
      content: "Working with DevXplosion was a game-changer for our agency. They delivered a stunning portfolio website that showcases our work beautifully. Our client inquiries increased by 300% within two months of launch.",
      rating: 5,
      project: "Corporate Website Development",
      location: "Bangalore, India"
    },
    {
      id: 3,
      name: "Michael Thompson",
      company: "Thompson Consulting",
      role: "Managing Partner",
      initial: "M",
      content: "The level of professionalism and technical expertise at DevXplosion is outstanding. They built us a custom CRM system that streamlined our operations and saved us countless hours every week.",
      rating: 5,
      project: "Custom Web Application",
      location: "New York, USA"
    },
    {
      id: 4,
      name: "Arjun Patel",
      company: "StartupTech Innovations",
      role: "Co-founder",
      initial: "A",
      content: "As a startup, we needed a website that could grow with us. DevXplosion delivered exactly that - a scalable, modern platform that has supported our journey from 10 to 500+ customers.",
      rating: 5,
      project: "Startup Website & Branding",
      location: "Delhi, India"
    },
    {
      id: 5,
      name: "Sarah Williams",
      company: "Creative Studios Ltd",
      role: "Creative Director",
      initial: "S",
      content: "DevXplosion brought our creative vision to life with pixel-perfect precision. The interactive elements and smooth animations on our new website have impressed both our team and clients beyond expectations.",
      rating: 5,
      project: "Creative Portfolio Website",
      location: "London, UK"
    },
    {
      id: 6,
      name: "Vikram Singh",
      company: "HealthCare Plus",
      role: "Operations Manager",
      initial: "V",
      content: "The patient portal they developed for us has revolutionized how we interact with our patients. The user-friendly interface and secure features have significantly improved our service quality.",
      rating: 5,
      project: "Healthcare Management System",
      location: "Chennai, India"
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
            Real experiences from businesses that have transformed their digital presence with DevXplosion.
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
                  {/* Client Info with Initial */}
                  <div className="text-center md:text-left">
                    <div className="relative inline-block mb-4">
                      <div className="w-32 h-32 mx-auto md:mx-0 rounded-full border-4 border-neon-cyan/30 hover:border-neon-cyan transition-colors duration-300 bg-gradient-to-br from-eco-green to-eco-dark flex items-center justify-center">
                        <span className="text-4xl font-montserrat font-bold text-dark">
                          {currentTestimonial.initial}
                        </span>
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
                    <p className="text-gray-400 font-roboto text-sm mb-2">
                      {currentTestimonial.company}
                    </p>
                    <p className="text-eco-green font-roboto text-sm mb-4">
                      {currentTestimonial.location}
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
              className="bg-dark border-gray-600 text-black hover:bg-gray-800 hover:text-white transition-all duration-300"
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
              className="bg-dark border-gray-600 text-black hover:bg-gray-800 hover:text-white transition-all duration-300"
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
            { number: "200+", label: "Happy Clients" },
            { number: "99%", label: "Client Satisfaction" },
            { number: "250%", label: "Average Growth" }
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
