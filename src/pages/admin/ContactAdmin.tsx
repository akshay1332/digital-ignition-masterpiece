
import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save, Eye } from 'lucide-react';

const ContactAdmin = () => {
  const [contactData, setContactData] = useState({
    hero: {
      title: 'Get In Touch',
      subtitle: 'Ready to transform your digital presence? Let\'s discuss your project and bring your vision to life.',
      backgroundImage: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80'
    },
    contactInfo: {
      email: 'hello@devxplosion.com',
      phone: '+91 98765 43210',
      address: 'Bangalore, Karnataka, India',
      hours: 'Mon - Fri: 9:00 AM - 6:00 PM'
    },
    socialLinks: {
      linkedin: 'https://linkedin.com/company/devxplosion',
      twitter: 'https://twitter.com/devxplosion',
      instagram: 'https://instagram.com/devxplosion',
      github: 'https://github.com/devxplosion'
    },
    form: {
      title: 'Send us a message',
      description: 'Fill out the form below and we\'ll get back to you within 24 hours.',
      fields: [
        { name: 'name', label: 'Full Name', type: 'text', required: true },
        { name: 'email', label: 'Email Address', type: 'email', required: true },
        { name: 'phone', label: 'Phone Number', type: 'tel', required: false },
        { name: 'company', label: 'Company', type: 'text', required: false },
        { name: 'service', label: 'Service Interested In', type: 'select', required: true, options: [
          'Web Design',
          'Web Development',
          'UX/UI Design',
          'Website Redesign',
          'Other'
        ]},
        { name: 'budget', label: 'Project Budget', type: 'select', required: false, options: [
          'Under ₹10,000',
          '₹10,000 - ₹25,000',
          '₹25,000 - ₹50,000',
          '₹50,000 - ₹1,00,000',
          'Above ₹1,00,000'
        ]},
        { name: 'message', label: 'Project Details', type: 'textarea', required: true }
      ]
    },
    cta: {
      headline: 'Ready to Start Your Project?',
      description: 'Let\'s schedule a free consultation to discuss your needs and how we can help you achieve your goals.',
      buttonText: 'Schedule Free Consultation'
    }
  });

  const handleSave = () => {
    console.log('Saving contact data:', contactData);
    alert('Contact page content saved successfully!');
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Contact Page Management</h1>
            <p className="text-gray-600">Edit your contact page content and form settings</p>
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
                value={contactData.hero.title}
                onChange={(e) => setContactData({ 
                  ...contactData, 
                  hero: { ...contactData.hero, title: e.target.value }
                })}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="hero-subtitle">Subtitle</Label>
              <Textarea
                id="hero-subtitle"
                value={contactData.hero.subtitle}
                onChange={(e) => setContactData({ 
                  ...contactData, 
                  hero: { ...contactData.hero, subtitle: e.target.value }
                })}
                className="mt-1"
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="hero-bg">Background Image URL</Label>
              <Input
                id="hero-bg"
                value={contactData.hero.backgroundImage}
                onChange={(e) => setContactData({ 
                  ...contactData, 
                  hero: { ...contactData.hero, backgroundImage: e.target.value }
                })}
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  value={contactData.contactInfo.email}
                  onChange={(e) => setContactData({ 
                    ...contactData, 
                    contactInfo: { ...contactData.contactInfo, email: e.target.value }
                  })}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={contactData.contactInfo.phone}
                  onChange={(e) => setContactData({ 
                    ...contactData, 
                    contactInfo: { ...contactData.contactInfo, phone: e.target.value }
                  })}
                  className="mt-1"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={contactData.contactInfo.address}
                  onChange={(e) => setContactData({ 
                    ...contactData, 
                    contactInfo: { ...contactData.contactInfo, address: e.target.value }
                  })}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="hours">Business Hours</Label>
                <Input
                  id="hours"
                  value={contactData.contactInfo.hours}
                  onChange={(e) => setContactData({ 
                    ...contactData, 
                    contactInfo: { ...contactData.contactInfo, hours: e.target.value }
                  })}
                  className="mt-1"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Social Links */}
        <Card>
          <CardHeader>
            <CardTitle>Social Media Links</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="linkedin">LinkedIn URL</Label>
                <Input
                  id="linkedin"
                  value={contactData.socialLinks.linkedin}
                  onChange={(e) => setContactData({ 
                    ...contactData, 
                    socialLinks: { ...contactData.socialLinks, linkedin: e.target.value }
                  })}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="twitter">Twitter URL</Label>
                <Input
                  id="twitter"
                  value={contactData.socialLinks.twitter}
                  onChange={(e) => setContactData({ 
                    ...contactData, 
                    socialLinks: { ...contactData.socialLinks, twitter: e.target.value }
                  })}
                  className="mt-1"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="instagram">Instagram URL</Label>
                <Input
                  id="instagram"
                  value={contactData.socialLinks.instagram}
                  onChange={(e) => setContactData({ 
                    ...contactData, 
                    socialLinks: { ...contactData.socialLinks, instagram: e.target.value }
                  })}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="github">GitHub URL</Label>
                <Input
                  id="github"
                  value={contactData.socialLinks.github}
                  onChange={(e) => setContactData({ 
                    ...contactData, 
                    socialLinks: { ...contactData.socialLinks, github: e.target.value }
                  })}
                  className="mt-1"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="form-title">Form Title</Label>
              <Input
                id="form-title"
                value={contactData.form.title}
                onChange={(e) => setContactData({ 
                  ...contactData, 
                  form: { ...contactData.form, title: e.target.value }
                })}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="form-description">Form Description</Label>
              <Textarea
                id="form-description"
                value={contactData.form.description}
                onChange={(e) => setContactData({ 
                  ...contactData, 
                  form: { ...contactData.form, description: e.target.value }
                })}
                className="mt-1"
                rows={2}
              />
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card>
          <CardHeader>
            <CardTitle>Call to Action</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="cta-headline">Headline</Label>
              <Input
                id="cta-headline"
                value={contactData.cta.headline}
                onChange={(e) => setContactData({ 
                  ...contactData, 
                  cta: { ...contactData.cta, headline: e.target.value }
                })}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="cta-description">Description</Label>
              <Textarea
                id="cta-description"
                value={contactData.cta.description}
                onChange={(e) => setContactData({ 
                  ...contactData, 
                  cta: { ...contactData.cta, description: e.target.value }
                })}
                className="mt-1"
                rows={2}
              />
            </div>
            <div>
              <Label htmlFor="cta-button">Button Text</Label>
              <Input
                id="cta-button"
                value={contactData.cta.buttonText}
                onChange={(e) => setContactData({ 
                  ...contactData, 
                  cta: { ...contactData.cta, buttonText: e.target.value }
                })}
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default ContactAdmin;
