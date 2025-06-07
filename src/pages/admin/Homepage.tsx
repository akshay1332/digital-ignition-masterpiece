
import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save, Eye, Plus, Trash2 } from 'lucide-react';

const Homepage = () => {
  const [homepageData, setHomepageData] = useState({
    hero: {
      title: 'Crafting Digital Experiences That Convert',
      subtitle: 'We transform your vision into powerful web solutions that drive growth and deliver exceptional user experiences.',
      ctaText: 'Start Your Digital Evolution',
      secondaryCtaText: 'View Our Work',
      backgroundImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive solutions for your digital needs',
      services: [
        {
          title: 'Web Design',
          description: 'Stunning, responsive designs that captivate your audience and convert visitors into customers.',
          image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80',
          link: '/services/design'
        },
        {
          title: 'Development',
          description: 'Robust, scalable applications built with cutting-edge technology and best practices.',
          image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
          link: '/services/development'
        },
        {
          title: 'UX Design',
          description: 'User-centered design that drives engagement, improves satisfaction, and boosts conversions.',
          image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80',
          link: '/services/ux-design'
        },
        {
          title: 'Website Redesign',
          description: 'Transform your outdated website into a modern, high-performing digital powerhouse.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
          link: '/services/redesign'
        }
      ]
    },
    portfolio: {
      title: 'Featured Projects',
      subtitle: 'Showcasing our best work and client success stories',
      ctaText: 'View All Projects'
    },
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: 'Real feedback from real clients who have experienced our exceptional service',
      testimonials: [
        {
          name: 'Sarah Johnson',
          role: 'CEO, TechStart Inc.',
          content: 'devXplosion transformed our digital presence completely. The new website not only looks amazing but also improved our conversion rate by 45%.',
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Mike Chen',
          role: 'Founder, InnovateNow',
          content: 'The team\'s attention to detail and technical expertise is outstanding. They delivered beyond our expectations and on time.',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Emily Rodriguez',
          role: 'Marketing Director, GrowthCo',
          content: 'Working with devXplosion was a game-changer for our business. Their strategic approach to UX design significantly improved user engagement.',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80'
        }
      ]
    },
    contact: {
      title: 'Ready to Get Started?',
      subtitle: 'Let\'s discuss your project and bring your digital vision to life',
      ctaText: 'Start Your Project',
      secondaryCtaText: 'Schedule Consultation'
    },
    stats: {
      title: 'Our Impact',
      stats: [
        { number: '200+', label: 'Projects Completed' },
        { number: '50+', label: 'Happy Clients' },
        { number: '99%', label: 'Client Satisfaction' },
        { number: '24/7', label: 'Support Available' }
      ]
    }
  });

  const handleSave = () => {
    console.log('Saving homepage data:', homepageData);
    alert('Homepage content saved successfully!');
  };

  const updateService = (index: number, field: string, value: string) => {
    const newServices = [...homepageData.services.services];
    newServices[index] = { ...newServices[index], [field]: value };
    setHomepageData({
      ...homepageData,
      services: { ...homepageData.services, services: newServices }
    });
  };

  const updateTestimonial = (index: number, field: string, value: string) => {
    const newTestimonials = [...homepageData.testimonials.testimonials];
    newTestimonials[index] = { ...newTestimonials[index], [field]: value };
    setHomepageData({
      ...homepageData,
      testimonials: { ...homepageData.testimonials, testimonials: newTestimonials }
    });
  };

  const updateStat = (index: number, field: string, value: string) => {
    const newStats = [...homepageData.stats.stats];
    newStats[index] = { ...newStats[index], [field]: value };
    setHomepageData({
      ...homepageData,
      stats: { ...homepageData.stats, stats: newStats }
    });
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
                value={homepageData.hero.title}
                onChange={(e) => setHomepageData({
                  ...homepageData,
                  hero: { ...homepageData.hero, title: e.target.value }
                })}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="hero-subtitle">Subtitle</Label>
              <Textarea
                id="hero-subtitle"
                value={homepageData.hero.subtitle}
                onChange={(e) => setHomepageData({
                  ...homepageData,
                  hero: { ...homepageData.hero, subtitle: e.target.value }
                })}
                className="mt-1"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="hero-cta">Primary CTA Text</Label>
                <Input
                  id="hero-cta"
                  value={homepageData.hero.ctaText}
                  onChange={(e) => setHomepageData({
                    ...homepageData,
                    hero: { ...homepageData.hero, ctaText: e.target.value }
                  })}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="hero-secondary-cta">Secondary CTA Text</Label>
                <Input
                  id="hero-secondary-cta"
                  value={homepageData.hero.secondaryCtaText}
                  onChange={(e) => setHomepageData({
                    ...homepageData,
                    hero: { ...homepageData.hero, secondaryCtaText: e.target.value }
                  })}
                  className="mt-1"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="hero-bg">Background Image URL</Label>
              <Input
                id="hero-bg"
                value={homepageData.hero.backgroundImage}
                onChange={(e) => setHomepageData({
                  ...homepageData,
                  hero: { ...homepageData.hero, backgroundImage: e.target.value }
                })}
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
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="services-title">Section Title</Label>
                <Input
                  id="services-title"
                  value={homepageData.services.title}
                  onChange={(e) => setHomepageData({
                    ...homepageData,
                    services: { ...homepageData.services, title: e.target.value }
                  })}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="services-subtitle">Section Subtitle</Label>
                <Input
                  id="services-subtitle"
                  value={homepageData.services.subtitle}
                  onChange={(e) => setHomepageData({
                    ...homepageData,
                    services: { ...homepageData.services, subtitle: e.target.value }
                  })}
                  className="mt-1"
                />
              </div>
            </div>
            
            {/* Individual Services */}
            {homepageData.services.services.map((service, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <h4 className="font-semibold">Service {index + 1}</h4>
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
                    <Label>Link</Label>
                    <Input
                      value={service.link}
                      onChange={(e) => updateService(index, 'link', e.target.value)}
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
                    rows={2}
                  />
                </div>
                <div>
                  <Label>Image URL</Label>
                  <Input
                    value={service.image}
                    onChange={(e) => updateService(index, 'image', e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Stats Section */}
        <Card>
          <CardHeader>
            <CardTitle>Statistics Section</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="stats-title">Section Title</Label>
              <Input
                id="stats-title"
                value={homepageData.stats.title}
                onChange={(e) => setHomepageData({
                  ...homepageData,
                  stats: { ...homepageData.stats, title: e.target.value }
                })}
                className="mt-1"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {homepageData.stats.stats.map((stat, index) => (
                <div key={index} className="border rounded-lg p-3 space-y-2">
                  <h5 className="font-medium">Stat {index + 1}</h5>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label>Number</Label>
                      <Input
                        value={stat.number}
                        onChange={(e) => updateStat(index, 'number', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label>Label</Label>
                      <Input
                        value={stat.label}
                        onChange={(e) => updateStat(index, 'label', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Portfolio Section */}
        <Card>
          <CardHeader>
            <CardTitle>Portfolio Section</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="portfolio-title">Section Title</Label>
                <Input
                  id="portfolio-title"
                  value={homepageData.portfolio.title}
                  onChange={(e) => setHomepageData({
                    ...homepageData,
                    portfolio: { ...homepageData.portfolio, title: e.target.value }
                  })}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="portfolio-cta">CTA Text</Label>
                <Input
                  id="portfolio-cta"
                  value={homepageData.portfolio.ctaText}
                  onChange={(e) => setHomepageData({
                    ...homepageData,
                    portfolio: { ...homepageData.portfolio, ctaText: e.target.value }
                  })}
                  className="mt-1"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="portfolio-subtitle">Section Subtitle</Label>
              <Input
                id="portfolio-subtitle"
                value={homepageData.portfolio.subtitle}
                onChange={(e) => setHomepageData({
                  ...homepageData,
                  portfolio: { ...homepageData.portfolio, subtitle: e.target.value }
                })}
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>

        {/* Testimonials Section */}
        <Card>
          <CardHeader>
            <CardTitle>Testimonials Section</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="testimonials-title">Section Title</Label>
                <Input
                  id="testimonials-title"
                  value={homepageData.testimonials.title}
                  onChange={(e) => setHomepageData({
                    ...homepageData,
                    testimonials: { ...homepageData.testimonials, title: e.target.value }
                  })}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="testimonials-subtitle">Section Subtitle</Label>
                <Input
                  id="testimonials-subtitle"
                  value={homepageData.testimonials.subtitle}
                  onChange={(e) => setHomepageData({
                    ...homepageData,
                    testimonials: { ...homepageData.testimonials, subtitle: e.target.value }
                  })}
                  className="mt-1"
                />
              </div>
            </div>
            
            {/* Individual Testimonials */}
            {homepageData.testimonials.testimonials.map((testimonial, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <h4 className="font-semibold">Testimonial {index + 1}</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Name</Label>
                    <Input
                      value={testimonial.name}
                      onChange={(e) => updateTestimonial(index, 'name', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Role</Label>
                    <Input
                      value={testimonial.role}
                      onChange={(e) => updateTestimonial(index, 'role', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label>Content</Label>
                  <Textarea
                    value={testimonial.content}
                    onChange={(e) => updateTestimonial(index, 'content', e.target.value)}
                    className="mt-1"
                    rows={3}
                  />
                </div>
                <div>
                  <Label>Image URL</Label>
                  <Input
                    value={testimonial.image}
                    onChange={(e) => updateTestimonial(index, 'image', e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Section</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="contact-title">Section Title</Label>
                <Input
                  id="contact-title"
                  value={homepageData.contact.title}
                  onChange={(e) => setHomepageData({
                    ...homepageData,
                    contact: { ...homepageData.contact, title: e.target.value }
                  })}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="contact-subtitle">Section Subtitle</Label>
                <Input
                  id="contact-subtitle"
                  value={homepageData.contact.subtitle}
                  onChange={(e) => setHomepageData({
                    ...homepageData,
                    contact: { ...homepageData.contact, subtitle: e.target.value }
                  })}
                  className="mt-1"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="contact-cta">Primary CTA Text</Label>
                <Input
                  id="contact-cta"
                  value={homepageData.contact.ctaText}
                  onChange={(e) => setHomepageData({
                    ...homepageData,
                    contact: { ...homepageData.contact, ctaText: e.target.value }
                  })}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="contact-secondary-cta">Secondary CTA Text</Label>
                <Input
                  id="contact-secondary-cta"
                  value={homepageData.contact.secondaryCtaText}
                  onChange={(e) => setHomepageData({
                    ...homepageData,
                    contact: { ...homepageData.contact, secondaryCtaText: e.target.value }
                  })}
                  className="mt-1"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Homepage;
