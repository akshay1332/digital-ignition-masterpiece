
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CompanyTimeline from '@/components/about/CompanyTimeline';
import MissionValues from '@/components/about/MissionValues';
import Team from '@/components/about/Team';

const About = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Navigation />
      <div className="pt-16">
        <CompanyTimeline />
        <MissionValues />
        <Team />
      </div>
      <Footer />
    </div>
  );
};

export default About;
