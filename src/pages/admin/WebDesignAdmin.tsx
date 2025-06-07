
import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save, Eye, Plus, Trash2 } from 'lucide-react';

const WebDesignAdmin = () => {
  const [designData, setDesignData] = useState({
    title: 'Web Design',
    subtitle: 'Crafting Digital Masterpieces',
    description: 'Create stunning, responsive websites that perfectly capture your brand essence and engage your audience.',
    hero: {
      headline: 'Beautiful Web Design That Converts',
      subheadline: 'Transform your vision into stunning digital experiences that captivate your audience and drive business growth through strategic design.'
    },
    process: [
      {
        title: 'Research & Discovery',
        description: 'Understanding your brand, audience, and business goals',
        deliverables: ['Brand analysis', 'User personas', 'Competitive research', 'Project roadmap']
      },
      {
        title: 'Concept & Wireframes',
        description: 'Creating the foundation and structure of your website',
        deliverables: ['Site architecture', 'Wireframes', 'User journey mapping', 'Content strategy']
      },
      {
        title: 'Visual Design',
        description: 'Bringing your brand to life with stunning visuals',
        deliverables: ['Visual mockups', 'Color schemes', 'Typography', 'Brand elements']
      },
      {
        title: 'Prototype & Testing',
        description: 'Interactive prototypes and user testing',
        deliverables: ['Interactive prototypes', 'User testing', 'Design refinements', 'Final approval']
      }
    ],
    pricing: [
      {
        name: 'Starter',
        price: '₹9,999',
        description: 'Perfect for small businesses and startups',
        features: [
          'Up to 5 pages',
          'Responsive design',
          'Basic SEO optimization',
          'Contact form integration',
          '30 days support'
        ],
        popular: false
      },
      {
        name: 'Professional',
        price: '₹19,999',
        description: 'Ideal for growing businesses',
        features: [
          'Up to 10 pages',
          'Advanced animations',
          'CMS integration',
          'Advanced SEO',
          'Analytics setup',
          '60 days support'
        ],
        popular: true
      },
      {
        name: 'Enterprise',
        price: '₹39,999',
        description: 'For large businesses and corporations',
        features: [
          'Unlimited pages',
          'Custom functionality',
          'Multi-language support',
          'Advanced integrations',
          'Performance optimization',
          '90 days support'
        ],
        popular: false
      }
    ],
    cta: {
      headline: 'Ready to Create Your Digital Masterpiece?',
      description: 'Let\'s bring your vision to life with stunning web design that converts visitors into customers.'
    },
    color: 'neon-magenta'
  });

  const handleSave = () => {
    console.log('Saving web design data:', designData);
    alert('Web Design content saved successfully!');
  };

  const updateProcessStep = (index: number, field: string, value: any) => {
    const newProcess = [...designData.process];
    newProcess[index] = { ...newProcess[index], [field]: value };
    setDesignData({ ...designData, process: newProcess });
  };

  const updatePricingPlan = (index: number, field: string, value: any) => {
    const newPricing = [...designData.pricing];
    newPricing[index] = { ...newPricing[index], [field]: value };
    setDesignData({ ...designData, pricing: newPricing });
  };

  const addFeatureToPlan = (planIndex: number) => {
    const newPricing = [...designData.pricing];
    newPricing[planIndex].features.push('New feature');
    setDesignData({ ...designData, pricing: newPricing });
  };

  const removeFeatureFromPlan = (planIndex: number, featureIndex: number) => {
    const newPricing = [...designData.pricing];
    newPricing[planIndex].features.splice(featureIndex, 1);
    setDesignData({ ...designData, pricing: newPricing });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Web Design Service</h1>
            <p className="text-gray-600">Edit your web design service page content</p>
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

        {/* Basic Info */}
        <Card>
          <CardHeader>
            <CardTitle>Service Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Service Title</Label>
                <Input
                  id="title"
                  value={designData.title}
                  onChange={(e) => setDesignData({ ...designData, title: e.target.value })}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="subtitle">Subtitle</Label>
                <Input
                  id="subtitle"
                  value={designData.subtitle}
                  onChange={(e) => setDesignData({ ...designData, subtitle: e.target.value })}
                  className="mt-1"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={designData.description}
                onChange={(e) => setDesignData({ ...designData, description: e.target.value })}
                className="mt-1"
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Hero Section */}
        <Card>
          <CardHeader>
            <CardTitle>Hero Section</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="hero-headline">Headline</Label>
              <Input
                id="hero-headline"
                value={designData.hero.headline}
                onChange={(e) => setDesignData({ 
                  ...designData, 
                  hero: { ...designData.hero, headline: e.target.value }
                })}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="hero-subheadline">Subheadline</Label>
              <Textarea
                id="hero-subheadline"
                value={designData.hero.subheadline}
                onChange={(e) => setDesignData({ 
                  ...designData, 
                  hero: { ...designData.hero, subheadline: e.target.value }
                })}
                className="mt-1"
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Process Steps */}
        <Card>
          <CardHeader>
            <CardTitle>Process Steps</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {designData.process.map((step, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <h4 className="font-semibold">Step {index + 1}</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Title</Label>
                    <Input
                      value={step.title}
                      onChange={(e) => updateProcessStep(index, 'title', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Input
                      value={step.description}
                      onChange={(e) => updateProcessStep(index, 'description', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label>Deliverables</Label>
                  <div className="space-y-2 mt-2">
                    {step.deliverables.map((deliverable, delIndex) => (
                      <Input
                        key={delIndex}
                        value={deliverable}
                        onChange={(e) => {
                          const newDeliverables = [...step.deliverables];
                          newDeliverables[delIndex] = e.target.value;
                          updateProcessStep(index, 'deliverables', newDeliverables);
                        }}
                        placeholder={`Deliverable ${delIndex + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Pricing Plans */}
        <Card>
          <CardHeader>
            <CardTitle>Pricing Plans</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {designData.pricing.map((plan, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{plan.name} Plan</h4>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={plan.popular}
                      onChange={(e) => updatePricingPlan(index, 'popular', e.target.checked)}
                      className="rounded"
                    />
                    <Label>Popular</Label>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label>Plan Name</Label>
                    <Input
                      value={plan.name}
                      onChange={(e) => updatePricingPlan(index, 'name', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Price</Label>
                    <Input
                      value={plan.price}
                      onChange={(e) => updatePricingPlan(index, 'price', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Input
                      value={plan.description}
                      onChange={(e) => updatePricingPlan(index, 'description', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label>Features</Label>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => addFeatureToPlan(index)}
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      Add Feature
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Input
                          value={feature}
                          onChange={(e) => {
                            const newFeatures = [...plan.features];
                            newFeatures[featureIndex] = e.target.value;
                            updatePricingPlan(index, 'features', newFeatures);
                          }}
                          className="flex-1"
                        />
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => removeFeatureFromPlan(index, featureIndex)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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
                value={designData.cta.headline}
                onChange={(e) => setDesignData({ 
                  ...designData, 
                  cta: { ...designData.cta, headline: e.target.value }
                })}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="cta-description">Description</Label>
              <Textarea
                id="cta-description"
                value={designData.cta.description}
                onChange={(e) => setDesignData({ 
                  ...designData, 
                  cta: { ...designData.cta, description: e.target.value }
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

export default WebDesignAdmin;
