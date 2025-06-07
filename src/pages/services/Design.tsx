
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceDetail from '@/components/services/ServiceDetail';
import { Helmet } from 'react-helmet-async';

const Design = () => {
  const serviceData = {
    title: 'Web Design',
    subtitle: 'Crafting Digital Masterpieces',
    description: 'Create stunning, responsive websites that perfectly capture your brand essence and engage your audience with cutting-edge design principles.',
    hero: {
      headline: 'Design. Inspire. Convert.',
      subheadline: 'Your brand deserves a digital presence that stands out from the crowd.',
    },
    process: [
      {
        title: 'Discovery & Research',
        description: 'We dive deep into understanding your brand, target audience, and competitive landscape to create a design strategy that resonates.',
        deliverables: ['Brand analysis', 'User research', 'Competitor audit', 'Design strategy']
      },
      {
        title: 'Wireframing & Concepts',
        description: 'We create initial concepts and wireframes to establish the structure and user flow of your website.',
        deliverables: ['Site wireframes', 'User flow diagrams', 'Initial concepts', 'Navigation structure']
      },
      {
        title: 'Visual Design',
        description: 'Our designers craft stunning visual designs that bring your brand to life with modern aesthetics and user-centered principles.',
        deliverables: ['High-fidelity mockups', 'Visual style guide', 'Component library', 'Responsive designs']
      },
      {
        title: 'Prototyping & Testing',
        description: 'We create interactive prototypes and conduct user testing to ensure optimal user experience before development.',
        deliverables: ['Interactive prototypes', 'User testing', 'Design validation', 'Final refinements']
      },
      {
        title: 'Design Handoff',
        description: 'We provide comprehensive design specifications and assets to ensure pixel-perfect implementation.',
        deliverables: ['Design specifications', 'Asset export', 'Developer handoff', 'Implementation support']
      }
    ],
    pricing: [
      {
        name: 'Startup Design',
        price: '$3,500',
        description: 'Perfect for new businesses establishing their digital presence',
        features: [
          'Up to 8 custom pages',
          'Mobile-responsive design',
          'Brand integration',
          'Basic animations',
          'Style guide included',
          '2 rounds of revisions'
        ],
        popular: false
      },
      {
        name: 'Business Design',
        price: '$7,500',
        description: 'Comprehensive design solution for growing companies',
        features: [
          'Up to 20 custom pages',
          'Advanced interactions',
          'Custom illustrations',
          'Multi-device optimization',
          'Complete design system',
          'Unlimited revisions',
          'SEO optimization'
        ],
        popular: true
      },
      {
        name: 'Enterprise Design',
        price: 'Custom',
        description: 'Full-scale design solution for large organizations',
        features: [
          'Unlimited pages',
          'Custom animations',
          'Brand evolution',
          'Multi-platform design',
          'Design team collaboration',
          'Ongoing design support',
          '12 months maintenance'
        ],
        popular: false
      }
    ],
    cta: {
      headline: 'Ready to Transform Your Brand?',
      description: 'Let\'s create a stunning digital presence that converts visitors into customers.'
    },
    color: 'neon-magenta'
  };

  return (
    <>
      <Helmet>
        <title>Web Design Services | Custom Website Design | devXplosion</title>
        <meta name="description" content="Professional web design services creating stunning, responsive websites that capture your brand essence. Custom UI/UX design from devXplosion." />
        <meta name="keywords" content="web design, website design, UI design, UX design, responsive design, custom website design, professional web design services" />
        <meta property="og:title" content="Web Design Services | Custom Website Design | devXplosion" />
        <meta property="og:description" content="Professional web design services creating stunning, responsive websites that capture your brand essence." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://devxplosion.com/services/design" />
      </Helmet>
      
      <div className="min-h-screen bg-dark">
        <Navigation />
        <div className="pt-16">
          <ServiceDetail {...serviceData} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Design;
