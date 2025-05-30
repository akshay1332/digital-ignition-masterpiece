
import { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Team = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'Founder & Creative Director',
      bio: 'Visionary leader with 10+ years in digital innovation. Alex transforms complex ideas into stunning visual experiences.',
      image: '/placeholder.svg',
      social: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      name: 'Sarah Martinez',
      role: 'Lead UI/UX Designer',
      bio: 'Master of user-centered design with expertise in creating intuitive interfaces that users love.',
      image: '/placeholder.svg',
      social: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      name: 'David Kim',
      role: 'Senior Full-Stack Developer',
      bio: 'Full-stack wizard who brings designs to life with clean, scalable code and cutting-edge technologies.',
      image: '/placeholder.svg',
      social: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      name: 'Emily Johnson',
      role: 'Project Manager',
      bio: 'Orchestrator of seamless project delivery, ensuring every milestone is met with precision and excellence.',
      image: '/placeholder.svg',
      social: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      name: 'Michael Brown',
      role: 'Frontend Specialist',
      bio: 'Animation and interaction expert who creates mesmerizing user experiences with advanced frontend techniques.',
      image: '/placeholder.svg',
      social: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      name: 'Lisa Wang',
      role: 'Brand Strategist',
      bio: 'Strategic thinker who aligns digital experiences with brand objectives to drive meaningful business results.',
      image: '/placeholder.svg',
      social: { github: '#', linkedin: '#', twitter: '#' }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-member') || '0');
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 150);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = teamRef.current?.querySelectorAll('[data-member]');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-neon-cyan/5 to-dark"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-white mb-6 animate-fade-in-up">
            Meet Our <span className="text-neon-cyan">Team</span>
          </h2>
          <p className="text-xl text-gray-300 font-roboto max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Talented individuals united by passion for creating extraordinary digital experiences.
          </p>
        </div>

        <div ref={teamRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => {
            const isVisible = visibleCards.includes(index);
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={index}
                data-member={index}
                className={`group cursor-pointer transform transition-all duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative bg-dark/80 backdrop-blur-md border border-neon-cyan/20 rounded-lg overflow-hidden hover:border-neon-cyan/40 transition-all duration-300 h-full">
                  {/* Glitch Effect Overlay */}
                  {isHovered && (
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-neon-magenta/10 animate-pulse z-10"></div>
                  )}
                  
                  <div className="relative z-20">
                    {/* Profile Image */}
                    <div className="relative overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className={`w-full h-64 object-cover transition-all duration-500 ${isHovered ? 'scale-110 filter brightness-110' : ''}`}
                      />
                      
                      {/* Glowing Frame */}
                      <div className={`absolute inset-0 border-4 border-neon-cyan/0 transition-all duration-300 ${isHovered ? 'border-neon-cyan/50 shadow-lg shadow-neon-cyan/25' : ''}`}></div>
                      
                      {/* Social Links Overlay */}
                      <div className={`absolute inset-0 bg-dark/80 flex items-center justify-center space-x-4 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                        <a href={member.social.github} className="text-white hover:text-neon-cyan transition-colors duration-200">
                          <Github className="w-6 h-6" />
                        </a>
                        <a href={member.social.linkedin} className="text-white hover:text-neon-cyan transition-colors duration-200">
                          <Linkedin className="w-6 h-6" />
                        </a>
                        <a href={member.social.twitter} className="text-white hover:text-neon-cyan transition-colors duration-200">
                          <Twitter className="w-6 h-6" />
                        </a>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-montserrat font-bold text-white mb-2">
                        {member.name}
                      </h3>
                      <p className="text-neon-cyan font-roboto font-medium mb-4">
                        {member.role}
                      </p>
                      <p className={`text-gray-300 font-roboto leading-relaxed transition-all duration-300 ${isHovered ? 'text-white' : ''}`}>
                        {member.bio}
                      </p>
                    </div>
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

export default Team;
