
import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save, Eye, Edit } from 'lucide-react';

const ServicesAdmin = () => {
  const [servicesData, setServicesData] = useState({
    hero: {
      title: 'Our Services',
      subtitle: 'From concept to launch, we provide comprehensive digital solutions that transform your business and engage your audience.',
      backgroundImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80'
    },
    services: [
      {
        id: 1,
        title: 'Website Redesign',
        subtitle: 'Revitalize Your Digital Presence',
        description: 'Transform your outdated website into a modern, high-performing digital powerhouse that drives results.',
        icon: 'RefreshCw',
        color: 'neon-cyan',
        features: [
          'Complete UX/UI overhaul',
          'Performance optimization',
          'Mobile-first responsive design',
          'SEO enhancement',
          'Conversion rate optimization'
        ],
        pricing: '₹9,999'
      },
      {
        id: 2,
        title: 'Web Design',
        subtitle: 'Crafting Digital Masterpieces',
        description: 'Create stunning, responsive websites that perfectly capture your brand essence and engage your audience.',
        icon: 'Palette',
        color: 'neon-magenta',
        features: [
          'Custom visual identity',
          'User-centered design',
          'Interactive prototypes',
          'Cross-platform compatibility',
          'Brand consistency'
        ],
        pricing: '₹9,999'
      },
      {
        id: 3,
        title: 'Web Development',
        subtitle: 'Building Scalable Solutions',
        description: 'Develop fast, secure, and scalable web applications using cutting-edge technologies and best practices.',
        icon: 'Code',
        color: 'neon-purple',
        features: [
          'Custom functionality',
          'API integrations',
          'Database optimization',
          'Security implementation',
          'Performance monitoring'
        ],
        pricing: '₹9,999'
      },
      {
        id: 4,
        title: 'UI/UX Design',
        subtitle: 'Designing Intuitive Experiences',
        description: 'Create user interfaces that delight and user experiences that convert through research-driven design.',
        icon: 'Users',
        color: 'neon-cyan',
        features: [
          'User research & testing',
          'Information architecture',
          'Wireframing & prototyping',
          'Usability optimization',
          'Accessibility compliance'
        ],
        pricing: '₹9,999'
      }
    ],
    cta: {
      headline: 'Ready to Transform Your Digital Presence?',
      description: "Let's discuss your project and create something extraordinary together."
    }
  });

  const handleSave = () => {
    console.log('Saving services data:', servicesData);
    alert('Services content saved successfully!');
  };

  const updateService = (index: number, field: string, value: any) => {
    const newServices = [...servicesData.services];
    newServices[index] = { ...newServices[index], [field]: value };
    setServicesData({ ...servicesData, services: newServices });
  };

  const updateServiceFeature = (serviceIndex: number, featureIndex: number, value: string) => {
    const newServices = [...servicesData.services];
    const newFeatures = [...newServices[serviceIndex].features];
    newFeatures[featureIndex] = value;
    newServices[serviceIndex] = { ...newServices[serviceIndex], features: newFeatures };
    setServicesData({ ...servicesData, services: newServices });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Services Management</h1>
            <p className="text-gray-600">Edit your services page content and offerings</p>
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
                value={servicesData.hero.title}
                onChange={(e) => setServicesData({ 
                  ...servicesData, 
                  hero: { ...servicesData.hero, title: e.target.value }
                })}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="hero-subtitle">Subtitle</Label>
              <Textarea
                id="hero-subtitle"
                value={servicesData.hero.subtitle}
                onChange={(e) => setServicesData({ 
                  ...servicesData, 
                  hero: { ...servicesData.hero, subtitle: e.target.value }
                })}
                className="mt-1"
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="hero-bg">Background Image URL</Label>
              <Input
                id="hero-bg"
                value={servicesData.hero.backgroundImage}
                onChange={(e) => setServicesData({ 
                  ...servicesData, 
                  hero: { ...servicesData.hero, backgroundImage: e.target.value }
                })}
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>

        {/* Services */}
        {servicesData.services.map((service, index) => (
          <Card key={service.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Service {index + 1}: {service.title}
                <Button variant="outline" size="sm">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Details
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Title</Label>
                  <Input
                    value={service.title}
                    onChange={(e) => updateService(index, 'title', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Subtitle</Label>
                  <Input
                    value={service.subtitle}
                    onChange={(e) => updateService(index, 'subtitle', e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <Label>Description</Label>
                <Textarea
                  value={service.description}
                  onChange={(e) => updateService(index, 'description', e.target.value)}
                  className="mt-1"
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Color Theme</Label>
                  <select
                    value={service.color}
                    onChange={(e) => updateService(index, 'color', e.target.value)}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="neon-cyan">Neon Cyan</option>
                    <option value="neon-magenta">Neon Magenta</option>
                    <option value="neon-purple">Neon Purple</option>
                  </select>
                </div>
                <div>
                  <Label>Pricing</Label>
                  <Input
                    value={service.pricing}
                    onChange={(e) => updateService(index, 'pricing', e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <Label>Features</Label>
                <div className="space-y-2 mt-2">
                  {service.features.map((feature, featureIndex) => (
                    <Input
                      key={featureIndex}
                      value={feature}
                      onChange={(e) => updateServiceFeature(index, featureIndex, e.target.value)}
                      placeholder={`Feature ${featureIndex + 1}`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* CTA Section */}
        <Card>
          <CardHeader>
            <CardTitle>Call to Action Section</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="cta-headline">Headline</Label>
              <Input
                id="cta-headline"
                value={servicesData.cta.headline}
                onChange={(e) => setServicesData({ 
                  ...servicesData, 
                  cta: { ...servicesData.cta, headline: e.target.value }
                })}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="cta-description">Description</Label>
              <Textarea
                id="cta-description"
                value={servicesData.cta.description}
                onChange={(e) => setServicesData({ 
                  ...servicesData, 
                  cta: { ...servicesData.cta, description: e.target.value }
                })}
                className="mt-1"
                rows={2}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default ServicesAdmin;
