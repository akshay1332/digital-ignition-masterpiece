
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceDetail from '@/components/services/ServiceDetail';

const Redesign = () => {
  const serviceData = {
    title: 'Website Redesign',
    subtitle: 'Revitalize Your Digital Presence',
    description: 'Transform your outdated website into a modern, high-performing digital powerhouse that drives conversions and enhances user experience.',
    hero: {
      headline: 'Transform. Modernize. Dominate.',
      subheadline: 'Your website is your digital storefront. Make it count.',
    },
    process: [
      {
        title: 'Comprehensive Audit',
        description: 'We analyze your current website\'s performance, user experience, and technical foundation to identify opportunities for improvement.',
        deliverables: ['Performance analysis', 'UX audit report', 'Competitive analysis', 'Technical assessment']
      },
      {
        title: 'Strategic Planning',
        description: 'Based on our findings, we develop a comprehensive redesign strategy aligned with your business goals and user needs.',
        deliverables: ['Redesign strategy', 'User personas', 'Site architecture', 'Feature roadmap']
      },
      {
        title: 'Design & Prototype',
        description: 'Our designers create stunning, modern interfaces that reflect your brand while optimizing for user engagement and conversions.',
        deliverables: ['Wireframes', 'High-fidelity designs', 'Interactive prototypes', 'Style guide']
      },
      {
        title: 'Development & Testing',
        description: 'We rebuild your website using the latest technologies, ensuring fast performance, security, and scalability.',
        deliverables: ['Responsive development', 'Performance optimization', 'Quality assurance', 'Browser testing']
      },
      {
        title: 'Launch & Optimization',
        description: 'We carefully migrate your content, launch your new site, and provide ongoing optimization to maximize results.',
        deliverables: ['Content migration', 'SEO optimization', 'Analytics setup', 'Training & support']
      }
    ],
    pricing: [
      {
        name: 'Essential Redesign',
        price: '$5,000',
        description: 'Perfect for small businesses looking to modernize their online presence',
        features: [
          'Up to 5 pages redesigned',
          'Mobile-responsive design',
          'Basic SEO optimization',
          'Content migration',
          '30 days support'
        ],
        popular: false
      },
      {
        name: 'Professional Redesign',
        price: '$12,000',
        description: 'Comprehensive redesign for growing businesses',
        features: [
          'Up to 15 pages redesigned',
          'Advanced UX/UI design',
          'Performance optimization',
          'Custom functionality',
          'Analytics integration',
          '90 days support'
        ],
        popular: true
      },
      {
        name: 'Enterprise Redesign',
        price: 'Custom',
        description: 'Full-scale transformation for large organizations',
        features: [
          'Unlimited pages',
          'Custom integrations',
          'Advanced security',
          'Multi-language support',
          'Dedicated project manager',
          '12 months support'
        ],
        popular: false
      }
    ],
    cta: {
      headline: 'Ready for a Digital Makeover?',
      description: 'Transform your website into a conversion-optimized powerhouse that drives real results.'
    },
    color: 'neon-cyan'
  };

  return (
    <div className="min-h-screen bg-dark">
      <Navigation />
      <div className="pt-16">
        <ServiceDetail {...serviceData} />
      </div>
      <Footer />
    </div>
  );
};

export default Redesign;
