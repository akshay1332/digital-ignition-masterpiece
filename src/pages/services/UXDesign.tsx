
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceDetail from '@/components/services/ServiceDetail';
import { Helmet } from 'react-helmet-async';

const UXDesign = () => {
  const serviceData = {
    title: 'UI/UX Design',
    subtitle: 'Designing Intuitive Experiences',
    description: 'Create user interfaces that delight and user experiences that convert through research-driven design and usability optimization.',
    hero: {
      headline: 'Research. Design. Optimize.',
      subheadline: 'Every interaction matters. Make them count.',
    },
    process: [
      {
        title: 'User Research',
        description: 'We conduct comprehensive user research to understand your audience\'s needs, behaviors, and pain points.',
        deliverables: ['User interviews', 'Surveys & analytics', 'Persona development', 'User journey mapping']
      },
      {
        title: 'Information Architecture',
        description: 'We organize and structure your content to create intuitive navigation and logical user flows.',
        deliverables: ['Site mapping', 'Content strategy', 'Navigation design', 'Information hierarchy']
      },
      {
        title: 'Wireframing & Prototyping',
        description: 'We create detailed wireframes and interactive prototypes to test and validate design concepts.',
        deliverables: ['Low-fi wireframes', 'High-fi prototypes', 'Interaction design', 'User flow validation']
      },
      {
        title: 'UI Design & Testing',
        description: 'We design beautiful interfaces and conduct usability testing to ensure optimal user experience.',
        deliverables: ['Interface design', 'Design systems', 'Usability testing', 'Accessibility compliance']
      },
      {
        title: 'Implementation & Optimization',
        description: 'We guide implementation and continuously optimize based on user feedback and analytics.',
        deliverables: ['Design specifications', 'Implementation support', 'Performance monitoring', 'Continuous optimization']
      }
    ],
    pricing: [
      {
        name: 'UX Audit',
        price: '$2,500',
        description: 'Comprehensive analysis of your current user experience',
        features: [
          'UX audit report',
          'Usability analysis',
          'Improvement recommendations',
          'Competitive analysis',
          'Action plan',
          '1 month consultation'
        ],
        popular: false
      },
      {
        name: 'Complete UX Design',
        price: '$9,500',
        description: 'Full UX design process for optimal user experience',
        features: [
          'User research',
          'Information architecture',
          'Wireframing & prototyping',
          'Usability testing',
          'Design system creation',
          'Implementation guidance',
          '6 months support'
        ],
        popular: true
      },
      {
        name: 'Enterprise UX',
        price: 'Custom',
        description: 'Large-scale UX transformation for enterprise applications',
        features: [
          'Multi-platform UX design',
          'Advanced user research',
          'Design system governance',
          'Team training',
          'Ongoing optimization',
          'Dedicated UX team',
          '12 months partnership'
        ],
        popular: false
      }
    ],
    cta: {
      primary: 'Enhance Your UX',
      secondary: 'Schedule UX Consultation'
    },
    color: 'neon-cyan'
  };

  return (
    <>
      <Helmet>
        <title>UI/UX Design Services | User Experience Design | devXplosion</title>
        <meta name="description" content="Professional UI/UX design services creating intuitive user interfaces and optimal user experiences. Research-driven design from devXplosion." />
        <meta name="keywords" content="UI UX design, user experience design, user interface design, UX research, usability testing, UX audit" />
        <meta property="og:title" content="UI/UX Design Services | User Experience Design | devXplosion" />
        <meta property="og:description" content="Professional UI/UX design services creating intuitive user interfaces and optimal user experiences." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://devxplosion.com/services/ux-design" />
      </Helmet>
      
      <div className="min-h-screen bg-dark">
        <Navigation />
        <div className="pt-16">
          <ServiceDetail data={serviceData} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default UXDesign;
