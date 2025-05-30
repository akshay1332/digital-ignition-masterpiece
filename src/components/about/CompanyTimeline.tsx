
import { useEffect, useRef, useState } from 'react';
import { Calendar, Rocket, Users, Trophy } from 'lucide-react';

const CompanyTimeline = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  const milestones = [
    {
      year: '2020',
      title: 'DevXplosion Founded',
      description: 'Started with a vision to revolutionize web development through innovative design and cutting-edge technology.',
      icon: Rocket,
      color: 'neon-cyan'
    },
    {
      year: '2021',
      title: 'First Major Client',
      description: 'Successfully redesigned a Fortune 500 company\'s digital presence, achieving 200% increase in user engagement.',
      icon: Trophy,
      color: 'neon-magenta'
    },
    {
      year: '2022',
      title: 'Team Expansion',
      description: 'Grew to a team of 15+ specialists in design, development, and user experience across multiple time zones.',
      icon: Users,
      color: 'neon-purple'
    },
    {
      year: '2023',
      title: 'Award Recognition',
      description: 'Received "Best Digital Agency" award and completed 100+ successful projects for clients worldwide.',
      icon: Calendar,
      color: 'neon-cyan'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = timelineRef.current?.querySelectorAll('[data-index]');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-neon-purple/5"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-white mb-6 animate-fade-in-up">
            Our <span className="text-neon-cyan">Journey</span>
          </h2>
          <p className="text-xl text-gray-300 font-roboto max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            From a bold vision to industry recognition, discover the milestones that shaped DevXplosion into the powerhouse we are today.
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-cyan via-neon-magenta to-neon-purple"></div>

          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isVisible = visibleItems.includes(index);
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index}
                data-index={index}
                className={`relative mb-16 ${isEven ? 'pr-1/2' : 'pl-1/2'}`}
              >
                {/* Timeline Node */}
                <div className={`absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full border-4 border-${milestone.color} bg-dark flex items-center justify-center z-10 ${isVisible ? 'animate-glow-pulse' : ''}`}>
                  <Icon className={`w-8 h-8 text-${milestone.color}`} />
                </div>

                {/* Content Card */}
                <div className={`${isEven ? 'text-right pr-16' : 'text-left pl-16'} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                  <div className={`inline-block bg-dark/80 backdrop-blur-md border border-${milestone.color}/20 rounded-lg p-8 max-w-md hover:border-${milestone.color}/40 transition-all duration-300`}>
                    <div className={`text-3xl font-montserrat font-bold text-${milestone.color} mb-2`}>
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-montserrat font-semibold text-white mb-4">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-300 font-roboto leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;
