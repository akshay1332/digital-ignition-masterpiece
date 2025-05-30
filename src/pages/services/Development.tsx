
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceDetail from '@/components/services/ServiceDetail';
import { Helmet } from 'react-helmet-async';

const Development = () => {
  const serviceData = {
    title: 'Web Development',
    subtitle: 'Building Scalable Solutions',
    description: 'Develop fast, secure, and scalable web applications using cutting-edge technologies and industry best practices for optimal performance.',
    hero: {
      headline: 'Code. Scale. Dominate.',
      subheadline: 'Transform your ideas into powerful web applications that drive results.',
    },
    process: [
      {
        title: 'Technical Planning',
        description: 'We architect robust technical solutions that scale with your business needs and integrate seamlessly with your existing systems.',
        deliverables: ['Technical architecture', 'Database design', 'API planning', 'Technology stack selection']
      },
      {
        title: 'Frontend Development',
        description: 'We build responsive, interactive user interfaces using modern frameworks and best practices for optimal user experience.',
        deliverables: ['React/Vue development', 'Responsive implementation', 'Performance optimization', 'Cross-browser compatibility']
      },
      {
        title: 'Backend Development',
        description: 'We create secure, scalable server-side solutions with robust APIs and efficient data management.',
        deliverables: ['API development', 'Database implementation', 'Server configuration', 'Security implementation']
      },
      {
        title: 'Testing & QA',
        description: 'Comprehensive testing ensures your application works flawlessly across all devices and scenarios.',
        deliverables: ['Unit testing', 'Integration testing', 'Performance testing', 'Security auditing']
      },
      {
        title: 'Deployment & Support',
        description: 'We deploy your application to production and provide ongoing maintenance and support.',
        deliverables: ['Production deployment', 'Monitoring setup', 'Documentation', 'Ongoing support']
      }
    ],
    pricing: [
      {
        name: 'MVP Development',
        price: '$8,000',
        description: 'Perfect for startups launching their first web application',
        features: [
          'Custom web application',
          'Responsive frontend',
          'Basic backend API',
          'Database setup',
          'Basic authentication',
          '3 months support'
        ],
        popular: false
      },
      {
        name: 'Full-Stack Development',
        price: '$18,000',
        description: 'Comprehensive development for growing businesses',
        features: [
          'Advanced web application',
          'Custom integrations',
          'Advanced authentication',
          'Payment processing',
          'Admin dashboard',
          'Performance optimization',
          '6 months support'
        ],
        popular: true
      },
      {
        name: 'Enterprise Development',
        price: 'Custom',
        description: 'Large-scale applications for enterprise clients',
        features: [
          'Scalable architecture',
          'Microservices',
          'Advanced security',
          'Third-party integrations',
          'Load balancing',
          'Dedicated team',
          '12 months support'
        ],
        popular: false
      }
    ],
    cta: {
      primary: 'Get Development Quote',
      secondary: 'View Our Projects'
    },
    color: 'neon-purple'
  };

  return (
    <>
      <Helmet>
        <title>Web Development Services | Custom Web Applications | devXplosion</title>
        <meta name="description" content="Professional web development services building fast, secure, and scalable web applications. Full-stack development from devXplosion." />
        <meta name="keywords" content="web development, custom web applications, full-stack development, React development, Node.js development, API development" />
        <meta property="og:title" content="Web Development Services | Custom Web Applications | devXplosion" />
        <meta property="og:description" content="Professional web development services building fast, secure, and scalable web applications." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://devxplosion.com/services/development" />
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

export default Development;
