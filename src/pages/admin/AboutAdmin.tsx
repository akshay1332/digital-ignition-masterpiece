
import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save, Eye, Plus, Trash2 } from 'lucide-react';

const AboutAdmin = () => {
  const [aboutData, setAboutData] = useState({
    hero: {
      title: 'About devXplosion',
      subtitle: 'Passionate about creating exceptional digital experiences that drive business growth and user engagement.',
      backgroundImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80'
    },
    mission: {
      title: 'Our Mission',
      description: 'To empower businesses with cutting-edge digital solutions that not only meet today\'s demands but anticipate tomorrow\'s opportunities.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80'
    },
    values: [
      {
        title: 'Innovation',
        description: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions.',
        icon: 'Lightbulb'
      },
      {
        title: 'Quality',
        description: 'Every project is crafted with meticulous attention to detail and highest standards.',
        icon: 'Award'
      },
      {
        title: 'Collaboration',
        description: 'We work closely with our clients as partners in their digital transformation journey.',
        icon: 'Users'
      },
      {
        title: 'Growth',
        description: 'We measure our success by the growth and success of our clients\' businesses.',
        icon: 'TrendingUp'
      }
    ],
    team: [
      {
        name: 'Sarah Johnson',
        role: 'Lead Designer',
        bio: 'Creative visionary with 8+ years of experience in digital design and user experience.',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80',
        social: {
          linkedin: '#',
          twitter: '#',
          dribbble: '#'
        }
      },
      {
        name: 'Mike Chen',
        role: 'Full Stack Developer',
        bio: 'Technical expert specializing in modern web technologies and scalable architectures.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
        social: {
          linkedin: '#',
          github: '#',
          twitter: '#'
        }
      },
      {
        name: 'Emily Rodriguez',
        role: 'UX Researcher',
        bio: 'Data-driven designer who turns user insights into compelling digital experiences.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
        social: {
          linkedin: '#',
          behance: '#'
        }
      }
    ],
    timeline: [
      {
        year: '2020',
        title: 'Company Founded',
        description: 'Started with a vision to transform digital experiences'
      },
      {
        year: '2021',
        title: 'First Major Client',
        description: 'Delivered our first enterprise-level project'
      },
      {
        year: '2022',
        title: 'Team Expansion',
        description: 'Grew to a team of 10+ talented professionals'
      },
      {
        year: '2023',
        title: '100+ Projects',
        description: 'Successfully completed over 100 digital projects'
      },
      {
        year: '2024',
        title: 'Innovation Award',
        description: 'Recognized for excellence in digital innovation'
      }
    ]
  });

  const handleSave = () => {
    console.log('Saving about data:', aboutData);
    alert('About page content saved successfully!');
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">About Page Management</h1>
            <p className="text-gray-600">Edit your about page content and team information</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" className="flex items-center space-x-2">
              <Eye className="w-4 h-4" />
              <span>Preview</span>
            </Button>
            <Button onClick={handleSave} className="flex items-center space-x-2">
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </Button>
          </div>
        </div>

        {/* Hero Section */}
        <Card>
          <CardHeader>
            <CardTitle>Hero Section</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="hero-title">Page Title</Label>
              <Input
                id="hero-title"
                value={aboutData.hero.title}
                onChange={(e) => setAboutData({ 
                  ...aboutData, 
                  hero: { ...aboutData.hero, title: e.target.value }
                })}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="hero-subtitle">Subtitle</Label>
              <Textarea
                id="hero-subtitle"
                value={aboutData.hero.subtitle}
                onChange={(e) => setAboutData({ 
                  ...aboutData, 
                  hero: { ...aboutData.hero, subtitle: e.target.value }
                })}
                className="mt-1"
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="hero-bg">Background Image URL</Label>
              <Input
                id="hero-bg"
                value={aboutData.hero.backgroundImage}
                onChange={(e) => setAboutData({ 
                  ...aboutData, 
                  hero: { ...aboutData.hero, backgroundImage: e.target.value }
                })}
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>

        {/* Mission Section */}
        <Card>
          <CardHeader>
            <CardTitle>Mission Section</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="mission-title">Mission Title</Label>
              <Input
                id="mission-title"
                value={aboutData.mission.title}
                onChange={(e) => setAboutData({ 
                  ...aboutData, 
                  mission: { ...aboutData.mission, title: e.target.value }
                })}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="mission-description">Mission Description</Label>
              <Textarea
                id="mission-description"
                value={aboutData.mission.description}
                onChange={(e) => setAboutData({ 
                  ...aboutData, 
                  mission: { ...aboutData.mission, description: e.target.value }
                })}
                className="mt-1"
                rows={4}
              />
            </div>
            <div>
              <Label htmlFor="mission-image">Mission Image URL</Label>
              <Input
                id="mission-image"
                value={aboutData.mission.image}
                onChange={(e) => setAboutData({ 
                  ...aboutData, 
                  mission: { ...aboutData.mission, image: e.target.value }
                })}
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>

        {/* Values Section */}
        <Card>
          <CardHeader>
            <CardTitle>Company Values</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {aboutData.values.map((value, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <h4 className="font-semibold">Value {index + 1}</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Title</Label>
                    <Input
                      value={value.title}
                      onChange={(e) => {
                        const newValues = [...aboutData.values];
                        newValues[index].title = e.target.value;
                        setAboutData({ ...aboutData, values: newValues });
                      }}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Icon</Label>
                    <select
                      value={value.icon}
                      onChange={(e) => {
                        const newValues = [...aboutData.values];
                        newValues[index].icon = e.target.value;
                        setAboutData({ ...aboutData, values: newValues });
                      }}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="Lightbulb">Lightbulb</option>
                      <option value="Award">Award</option>
                      <option value="Users">Users</option>
                      <option value="TrendingUp">Trending Up</option>
                      <option value="Target">Target</option>
                      <option value="Shield">Shield</option>
                    </select>
                  </div>
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea
                    value={value.description}
                    onChange={(e) => {
                      const newValues = [...aboutData.values];
                      newValues[index].description = e.target.value;
                      setAboutData({ ...aboutData, values: newValues });
                    }}
                    className="mt-1"
                    rows={2}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Team Section */}
        <Card>
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {aboutData.team.map((member, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <h4 className="font-semibold">Team Member {index + 1}</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Name</Label>
                    <Input
                      value={member.name}
                      onChange={(e) => {
                        const newTeam = [...aboutData.team];
                        newTeam[index].name = e.target.value;
                        setAboutData({ ...aboutData, team: newTeam });
                      }}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Role</Label>
                    <Input
                      value={member.role}
                      onChange={(e) => {
                        const newTeam = [...aboutData.team];
                        newTeam[index].role = e.target.value;
                        setAboutData({ ...aboutData, team: newTeam });
                      }}
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label>Bio</Label>
                  <Textarea
                    value={member.bio}
                    onChange={(e) => {
                      const newTeam = [...aboutData.team];
                      newTeam[index].bio = e.target.value;
                      setAboutData({ ...aboutData, team: newTeam });
                    }}
                    className="mt-1"
                    rows={2}
                  />
                </div>
                <div>
                  <Label>Profile Image URL</Label>
                  <Input
                    value={member.image}
                    onChange={(e) => {
                      const newTeam = [...aboutData.team];
                      newTeam[index].image = e.target.value;
                      setAboutData({ ...aboutData, team: newTeam });
                    }}
                    className="mt-1"
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Timeline Section */}
        <Card>
          <CardHeader>
            <CardTitle>Company Timeline</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {aboutData.timeline.map((event, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <h4 className="font-semibold">Timeline Event {index + 1}</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label>Year</Label>
                    <Input
                      value={event.year}
                      onChange={(e) => {
                        const newTimeline = [...aboutData.timeline];
                        newTimeline[index].year = e.target.value;
                        setAboutData({ ...aboutData, timeline: newTimeline });
                      }}
                      className="mt-1"
                    />
                  </div>
                  <div className="col-span-2">
                    <Label>Title</Label>
                    <Input
                      value={event.title}
                      onChange={(e) => {
                        const newTimeline = [...aboutData.timeline];
                        newTimeline[index].title = e.target.value;
                        setAboutData({ ...aboutData, timeline: newTimeline });
                      }}
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea
                    value={event.description}
                    onChange={(e) => {
                      const newTimeline = [...aboutData.timeline];
                      newTimeline[index].description = e.target.value;
                      setAboutData({ ...aboutData, timeline: newTimeline });
                    }}
                    className="mt-1"
                    rows={2}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AboutAdmin;
