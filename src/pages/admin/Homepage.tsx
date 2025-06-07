
import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save, Eye } from 'lucide-react';

const Homepage = () => {
  const [heroData, setHeroData] = useState({
    title: 'Crafting Digital Experiences That Convert',
    subtitle: 'We transform your vision into powerful web solutions that drive growth and deliver exceptional user experiences.',
    ctaText: 'Start Your Digital Evolution',
    backgroundImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80'
  });

  const [servicesData, setServicesData] = useState({
    title: 'Our Services',
    subtitle: 'Comprehensive solutions for your digital needs',
    services: [
      {
        title: 'Web Design',
        description: 'Stunning, responsive designs that captivate your audience',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Development',
        description: 'Robust, scalable applications built with cutting-edge technology',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'UX Design',
        description: 'User-centered design that drives engagement and conversions',
        image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80'
      }
    ]
  });

  const handleSave = () => {
    // Here you would typically save to your backend/database
    console.log('Saving homepage data:', { heroData, servicesData });
    alert('Homepage content saved successfully!');
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Homepage Management</h1>
            <p className="text-gray-600">Edit your homepage content and sections</p>
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
              <Label htmlFor="hero-title">Main Title</Label>
              <Input
                id="hero-title"
                value={heroData.title}
                onChange={(e) => setHeroData({ ...heroData, title: e.target.value })}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="hero-subtitle">Subtitle</Label>
              <Textarea
                id="hero-subtitle"
                value={heroData.subtitle}
                onChange={(e) => setHeroData({ ...heroData, subtitle: e.target.value })}
                className="mt-1"
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="hero-cta">CTA Button Text</Label>
              <Input
                id="hero-cta"
                value={heroData.ctaText}
                onChange={(e) => setHeroData({ ...heroData, ctaText: e.target.value })}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="hero-bg">Background Image URL</Label>
              <Input
                id="hero-bg"
                value={heroData.backgroundImage}
                onChange={(e) => setHeroData({ ...heroData, backgroundImage: e.target.value })}
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>

        {/* Services Section */}
        <Card>
          <CardHeader>
            <CardTitle>Services Section</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="services-title">Section Title</Label>
              <Input
                id="services-title"
                value={servicesData.title}
                onChange={(e) => setServicesData({ ...servicesData, title: e.target.value })}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="services-subtitle">Section Subtitle</Label>
              <Input
                id="services-subtitle"
                value={servicesData.subtitle}
                onChange={(e) => setServicesData({ ...servicesData, subtitle: e.target.value })}
                className="mt-1"
              />
            </div>
            
            {/* Individual Services */}
            {servicesData.services.map((service, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <h4 className="font-semibold">Service {index + 1}</h4>
                <div>
                  <Label>Title</Label>
                  <Input
                    value={service.title}
                    onChange={(e) => {
                      const newServices = [...servicesData.services];
                      newServices[index].title = e.target.value;
                      setServicesData({ ...servicesData, services: newServices });
                    }}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea
                    value={service.description}
                    onChange={(e) => {
                      const newServices = [...servicesData.services];
                      newServices[index].description = e.target.value;
                      setServicesData({ ...servicesData, services: newServices });
                    }}
                    className="mt-1"
                    rows={2}
                  />
                </div>
                <div>
                  <Label>Image URL</Label>
                  <Input
                    value={service.image}
                    onChange={(e) => {
                      const newServices = [...servicesData.services];
                      newServices[index].image = e.target.value;
                      setServicesData({ ...servicesData, services: newServices });
                    }}
                    className="mt-1"
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

export default Homepage;
