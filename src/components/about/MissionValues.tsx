
import { useEffect, useRef, useState } from 'react';
import { Lightbulb, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MissionValues = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We push boundaries and embrace cutting-edge technologies to deliver solutions that set new industry standards.',
      color: 'neon-cyan'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Every project is crafted with meticulous attention to detail, ensuring exceptional quality and performance.',
      color: 'neon-magenta'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in transparent partnerships, working closely with clients to bring their visions to life.',
      color: 'neon-purple'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-card') || '0');
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-card]');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-neon-purple/5 to-dark"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Mission Statement */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-white mb-8 animate-fade-in-up">
            Our <span className="text-neon-magenta">Mission</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl sm:text-3xl font-montserrat font-light text-white leading-relaxed mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              "Empowering brands through <span className="text-neon-cyan">innovative web solutions</span> that transform digital experiences and drive meaningful connections."
            </p>
            <p className="text-lg text-gray-300 font-roboto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              We don't just build websites — we craft digital experiences that inspire, engage, and convert.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-montserrat font-bold text-white text-center mb-12 animate-fade-in-up">
            Our <span className="text-neon-cyan">Core Values</span>
          </h3>
          
          <div ref={sectionRef} className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              const isVisible = visibleCards.includes(index);
              
              return (
                <div
                  key={index}
                  data-card={index}
                  className={`group cursor-pointer transform transition-all duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} hover:scale-105 hover:-translate-y-2`}
                >
                  <div className={`bg-dark/80 backdrop-blur-md border border-${value.color}/20 rounded-lg p-8 h-full hover:border-${value.color}/40 transition-all duration-300 relative overflow-hidden`}>
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-${value.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 bg-${value.color}/10 rounded-lg flex items-center justify-center mb-6 group-hover:animate-glow-pulse`}>
                        <Icon className={`w-8 h-8 text-${value.color}`} />
                      </div>
                      
                      <h4 className="text-2xl font-montserrat font-bold text-white mb-4">
                        {value.title}
                      </h4>
                      
                      <p className="text-gray-300 font-roboto leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-neon-cyan to-neon-magenta text-dark font-roboto font-semibold px-8 py-4 text-lg hover:shadow-xl hover:shadow-neon-cyan/30 transition-all duration-300 transform hover:scale-105"
            >
              Work With Our Experts
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-dark font-roboto font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
            >
              Join Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionValues;
