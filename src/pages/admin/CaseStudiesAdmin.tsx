
import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Edit, Trash2, Eye, Calendar, ExternalLink, Clock, ArrowRight, CheckCircle } from 'lucide-react';

const CaseStudiesAdmin = () => {
  const [caseStudies, setCaseStudies] = useState([
    {
      id: 1,
      title: 'TechFlow Solutions: B2B Platform Transformation',
      client: 'TechFlow Solutions',
      industry: 'B2B Software',
      duration: '12 weeks',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      overview: 'Complete digital transformation of a B2B software platform, resulting in dramatic improvements in user engagement and conversion rates.',
      challenge: 'TechFlow had an outdated website with poor user experience, resulting in high bounce rates and low conversion rates. Their existing platform failed to communicate their value proposition effectively and lacked modern design principles.',
      solution: 'We implemented a comprehensive redesign strategy focusing on user experience, performance optimization, and conversion rate optimization. Our approach included user research, modern design implementation, and technical performance improvements.',
      approach: [
        {
          step: '01',
          title: 'Discovery & Research',
          description: 'Conducted comprehensive user research and competitive analysis to understand pain points and opportunities.',
          details: [
            'User interviews with 25+ existing customers',
            'Analytics review and heatmap analysis', 
            'Competitive landscape assessment',
            'Technical audit of existing platform'
          ]
        },
        {
          step: '02', 
          title: 'Strategy & Planning',
          description: 'Developed a comprehensive strategy based on research findings and business objectives.',
          details: [
            'Information architecture redesign',
            'User journey mapping and optimization',
            'Conversion funnel analysis and improvement',
            'Technical requirements planning'
          ]
        },
        {
          step: '03',
          title: 'Design & Prototype',
          description: 'Created modern, user-centered designs with focus on conversion optimization.',
          details: [
            'Wireframing and user flow design',
            'High-fidelity UI design creation',
            'Interactive prototype development',
            'Usability testing and iteration'
          ]
        },
        {
          step: '04',
          title: 'Development & Launch',
          description: 'Built and deployed the new platform with focus on performance and scalability.',
          details: [
            'Frontend development with React/Next.js',
            'Performance optimization and speed improvements',
            'Quality assurance and cross-browser testing',
            'Deployment and launch coordination'
          ]
        }
      ],
      results: [
        { metric: 'Conversion Rate', before: '0.8%', after: '2.1%', improvement: '+150%' },
        { metric: 'Page Load Time', before: '4.2s', after: '1.7s', improvement: '-60%' },
        { metric: 'User Engagement', before: '2.3 min', after: '6.8 min', improvement: '+200%' },
        { metric: 'Lead Generation', before: '45/month', after: '180/month', improvement: '+300%' }
      ],
      testimonial: {
        quote: "devXplosion transformed our digital presence completely. The results exceeded all our expectations and our conversion rates have never been higher.",
        author: "Sarah Johnson",
        position: "CEO, TechFlow Solutions",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b1bb?w=150&h=150&fit=crop&crop=face"
      },
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      tags: ['Website Redesign', 'UX/UI Design', 'Lead Generation', 'Performance Optimization'],
      status: 'published',
      featured: true,
      projectUrl: 'https://techflow-solutions.com',
      completionDate: '2024-01-15'
    },
    {
      id: 2,
      title: 'EcoVibe: Sustainable E-commerce Platform',
      client: 'EcoVibe Marketplace',
      industry: 'E-commerce',
      duration: '16 weeks',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop',
      overview: 'Built a comprehensive multi-vendor e-commerce platform focused on sustainable products with advanced filtering and vendor management.',
      challenge: 'EcoVibe needed a scalable e-commerce platform that could handle their growing sustainable product marketplace while providing excellent user experience for both buyers and sellers.',
      solution: 'Developed a custom multi-vendor marketplace with sustainability scoring, advanced search capabilities, and comprehensive vendor management tools.',
      approach: [
        {
          step: '01',
          title: 'Platform Architecture',
          description: 'Designed scalable architecture to support multi-vendor marketplace functionality.',
          details: [
            'Database design for complex product relationships',
            'Multi-vendor payment processing architecture',
            'Scalable hosting infrastructure planning',
            'Security and compliance framework'
          ]
        },
        {
          step: '02',
          title: 'Core Development',
          description: 'Built the foundational marketplace features and vendor management system.',
          details: [
            'User authentication and authorization',
            'Product catalog and inventory management',
            'Vendor dashboard and analytics',
            'Order processing and fulfillment system'
          ]
        },
        {
          step: '03',
          title: 'Advanced Features',
          description: 'Implemented sustainability scoring and advanced marketplace features.',
          details: [
            'Sustainability rating algorithm',
            'Advanced search and filtering system',
            'Review and rating system',
            'Recommendation engine development'
          ]
        },
        {
          step: '04',
          title: 'Testing & Launch',
          description: 'Comprehensive testing and phased launch with vendor onboarding.',
          details: [
            'Load testing and performance optimization',
            'Payment gateway integration and testing',
            'Vendor training and onboarding program',
            'Soft launch and iterative improvements'
          ]
        }
      ],
      results: [
        { metric: 'Monthly Users', before: '2,000', after: '12,000', improvement: '+500%' },
        { metric: 'Transaction Volume', before: '$50K', after: '$300K', improvement: '+500%' },
        { metric: 'Vendor Count', before: '25', after: '125', improvement: '+400%' },
        { metric: 'Customer Satisfaction', before: '3.8/5', after: '4.9/5', improvement: '+29%' }
      ],
      testimonial: {
        quote: "The platform they built scaled perfectly with our rapid growth. The vendor management system is incredible and our customers love the sustainability features.",
        author: "Mike Chen",
        position: "Founder, EcoVibe",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      tags: ['Web Development', 'E-commerce', 'Scalability', 'Marketplace'],
      status: 'published',
      featured: false,
      projectUrl: 'https://ecovibe-marketplace.com',
      completionDate: '2024-02-20'
    },
    {
      id: 3,
      title: 'MindfulSpace: Mobile App UX Redesign',
      client: 'MindfulSpace',
      industry: 'Health & Wellness',
      duration: '8 weeks',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      overview: 'Complete UX redesign of a meditation app resulting in significant improvements in user retention and engagement.',
      challenge: 'MindfulSpace\'s meditation app had poor user retention and confusing navigation affecting user engagement. Users were abandoning the app after just a few sessions.',
      solution: 'Implemented a complete UX redesign based on extensive user research, simplified onboarding process, and created personalized user journeys.',
      approach: [
        {
          step: '01',
          title: 'User Research',
          description: 'Conducted extensive research to understand user behavior and pain points.',
          details: [
            'User interviews with 50+ current and former users',
            'App usage analytics and behavior analysis',
            'Competitive analysis of top meditation apps',
            'Accessibility audit and recommendations'
          ]
        },
        {
          step: '02',
          title: 'UX Strategy',
          description: 'Developed comprehensive UX strategy based on research insights.',
          details: [
            'User persona development and journey mapping',
            'Information architecture restructuring',
            'Onboarding flow optimization',
            'Personalization strategy development'
          ]
        },
        {
          step: '03',
          title: 'Design Implementation',
          description: 'Created calming, intuitive designs focused on user engagement.',
          details: [
            'Wireframing and user flow optimization',
            'Visual design with calming aesthetics',
            'Micro-interaction and animation design',
            'Accessibility improvements implementation'
          ]
        },
        {
          step: '04',
          title: 'Testing & Iteration',
          description: 'Comprehensive testing and refinement based on user feedback.',
          details: [
            'Usability testing with target users',
            'A/B testing of key features',
            'Performance optimization',
            'App store optimization'
          ]
        }
      ],
      results: [
        { metric: 'User Retention (30-day)', before: '15%', after: '45%', improvement: '+200%' },
        { metric: 'Average Session Duration', before: '3.5 min', after: '9.8 min', improvement: '+180%' },
        { metric: 'App Store Rating', before: '3.2/5', after: '4.8/5', improvement: '+50%' },
        { metric: 'Daily Active Users', before: '2,500', after: '8,750', improvement: '+250%' }
      ],
      testimonial: {
        quote: "Our users absolutely love the new design. The retention rates have never been higher and the feedback has been overwhelmingly positive.",
        author: "Dr. Lisa Park",
        position: "Product Manager, MindfulSpace",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase', 'Figma'],
      tags: ['UI/UX Design', 'Mobile App', 'User Research', 'Health Tech'],
      status: 'published',
      featured: false,
      projectUrl: 'https://mindfulspace-app.com',
      completionDate: '2024-03-10'
    }
  ]);

  const [editingCase, setEditingCase] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    client: '',
    industry: '',
    duration: '',
    overview: '',
    challenge: '',
    solution: '',
    approach: [
      { step: '01', title: '', description: '', details: ['', '', '', ''] },
      { step: '02', title: '', description: '', details: ['', '', '', ''] },
      { step: '03', title: '', description: '', details: ['', '', '', ''] },
      { step: '04', title: '', description: '', details: ['', '', '', ''] }
    ],
    results: [
      { metric: '', before: '', after: '', improvement: '' },
      { metric: '', before: '', after: '', improvement: '' },
      { metric: '', before: '', after: '', improvement: '' },
      { metric: '', before: '', after: '', improvement: '' }
    ],
    testimonial: {
      quote: '',
      author: '',
      position: '',
      image: ''
    },
    technologies: [],
    image: '',
    tags: [],
    status: 'draft',
    featured: false,
    projectUrl: '',
    completionDate: ''
  });

  const handleEdit = (caseStudy) => {
    setFormData({
      ...caseStudy,
      tags: Array.isArray(caseStudy.tags) ? caseStudy.tags : [],
      technologies: Array.isArray(caseStudy.technologies) ? caseStudy.technologies : []
    });
    setEditingCase(caseStudy.id);
    setShowForm(true);
  };

  const handleSave = () => {
    if (editingCase) {
      setCaseStudies(caseStudies.map(cs => 
        cs.id === editingCase 
          ? { ...formData, id: editingCase }
          : cs
      ));
    } else {
      const newCase = {
        ...formData,
        id: caseStudies.length + 1
      };
      setCaseStudies([...caseStudies, newCase]);
    }
    
    resetForm();
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this case study?')) {
      setCaseStudies(caseStudies.filter(cs => cs.id !== id));
    }
  };

  const resetForm = () => {
    setShowForm(false);
    setEditingCase(null);
    setFormData({
      title: '',
      client: '',
      industry: '',
      duration: '',
      overview: '',
      challenge: '',
      solution: '',
      approach: [
        { step: '01', title: '', description: '', details: ['', '', '', ''] },
        { step: '02', title: '', description: '', details: ['', '', '', ''] },
        { step: '03', title: '', description: '', details: ['', '', '', ''] },
        { step: '04', title: '', description: '', details: ['', '', '', ''] }
      ],
      results: [
        { metric: '', before: '', after: '', improvement: '' },
        { metric: '', before: '', after: '', improvement: '' },
        { metric: '', before: '', after: '', improvement: '' },
        { metric: '', before: '', after: '', improvement: '' }
      ],
      testimonial: {
        quote: '',
        author: '',
        position: '',
        image: ''
      },
      technologies: [],
      image: '',
      tags: [],
      status: 'draft',
      featured: false,
      projectUrl: '',
      completionDate: ''
    });
  };

  const updateApproachStep = (stepIndex, field, value) => {
    const newApproach = [...formData.approach];
    newApproach[stepIndex] = { ...newApproach[stepIndex], [field]: value };
    setFormData({ ...formData, approach: newApproach });
  };

  const updateApproachDetail = (stepIndex, detailIndex, value) => {
    const newApproach = [...formData.approach];
    const newDetails = [...newApproach[stepIndex].details];
    newDetails[detailIndex] = value;
    newApproach[stepIndex] = { ...newApproach[stepIndex], details: newDetails };
    setFormData({ ...formData, approach: newApproach });
  };

  const updateResult = (index, field, value) => {
    const newResults = [...formData.results];
    newResults[index] = { ...newResults[index], [field]: value };
    setFormData({ ...formData, results: newResults });
  };

  const updateTestimonial = (field, value) => {
    setFormData({
      ...formData,
      testimonial: { ...formData.testimonial, [field]: value }
    });
  };

  // Show detailed view
  if (selectedCase) {
    return (
      <AdminLayout>
        <div className="space-y-6">
          <Button 
            onClick={() => setSelectedCase(null)}
            variant="outline"
            className="mb-4"
          >
            ← Back to Case Studies List
          </Button>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video">
              <img 
                src={selectedCase.image} 
                alt={selectedCase.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {selectedCase.industry}
                </span>
                <div className="flex items-center text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm">{selectedCase.duration}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="text-sm">{selectedCase.completionDate}</span>
                </div>
                {selectedCase.featured && (
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                    Featured
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {selectedCase.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {selectedCase.overview}
              </p>

              {/* Challenge & Solution */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">The Challenge</h3>
                  <p className="text-gray-700">{selectedCase.challenge}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our Solution</h3>
                  <p className="text-gray-700">{selectedCase.solution}</p>
                </div>
              </div>

              {/* Approach Steps */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Approach</h3>
                <div className="space-y-8">
                  {selectedCase.approach.map((step, idx) => (
                    <div key={idx} className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                        <p className="text-gray-700 mb-4">{step.description}</p>
                        <div className="grid md:grid-cols-2 gap-2">
                          {step.details.map((detail, detailIdx) => (
                            <div key={detailIdx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Results */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Results</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {selectedCase.results.map((result, idx) => (
                    <div key={idx} className="text-center p-6 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {result.improvement}
                      </div>
                      <div className="text-sm text-gray-600 mb-1">
                        {result.metric}
                      </div>
                      <div className="text-xs text-gray-500">
                        {result.before} → {result.after}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCase.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Testimonial */}
              <div className="bg-blue-50 rounded-lg p-8 mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-6">
                  Client Testimonial
                </h3>
                <div className="flex gap-6">
                  <img 
                    src={selectedCase.testimonial.image} 
                    alt={selectedCase.testimonial.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-blue-800 italic text-lg mb-4">
                      "{selectedCase.testimonial.quote}"
                    </p>
                    <div className="text-blue-900">
                      <div className="font-bold">{selectedCase.testimonial.author}</div>
                      <div className="text-sm">{selectedCase.testimonial.position}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCase.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Project Link */}
              {selectedCase.projectUrl && (
                <div className="pt-6 border-t">
                  <a 
                    href={selectedCase.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Project
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Case Studies Management</h1>
            <p className="text-gray-600">Manage your portfolio case studies with detailed step-by-step content</p>
          </div>
          <Button onClick={() => setShowForm(true)} className="flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add New Case Study</span>
          </Button>
        </div>

        {showForm && (
          <Card>
            <CardHeader>
              <CardTitle>{editingCase ? 'Edit Case Study' : 'Create New Case Study'}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Project Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="client">Client Name</Label>
                  <Input
                    id="client"
                    value={formData.client}
                    onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                    className="mt-1"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="industry">Industry</Label>
                  <Input
                    id="industry"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="duration">Project Duration</Label>
                  <Input
                    id="duration"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    className="mt-1"
                    placeholder="e.g., 12 weeks"
                  />
                </div>
                <div>
                  <Label htmlFor="completionDate">Completion Date</Label>
                  <Input
                    id="completionDate"
                    type="date"
                    value={formData.completionDate}
                    onChange={(e) => setFormData({ ...formData, completionDate: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="status">Status</Label>
                  <select
                    id="status"
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>
              </div>

              {/* Overview, Challenge & Solution */}
              <div>
                <Label htmlFor="overview">Project Overview</Label>
                <Textarea
                  id="overview"
                  value={formData.overview}
                  onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
                  className="mt-1"
                  rows={2}
                  placeholder="Brief overview of the project and its impact"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="challenge">The Challenge</Label>
                  <Textarea
                    id="challenge"
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    className="mt-1"
                    rows={4}
                  />
                </div>
                <div>
                  <Label htmlFor="solution">Our Solution</Label>
                  <Textarea
                    id="solution"
                    value={formData.solution}
                    onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                    className="mt-1"
                    rows={4}
                  />
                </div>
              </div>

              {/* Approach Steps */}
              <div>
                <Label>Project Approach (4 Steps)</Label>
                <div className="space-y-6 mt-2">
                  {formData.approach.map((step, stepIndex) => (
                    <div key={stepIndex} className="border rounded-lg p-4">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                          {step.step}
                        </div>
                        <Input
                          placeholder="Step title"
                          value={step.title}
                          onChange={(e) => updateApproachStep(stepIndex, 'title', e.target.value)}
                          className="flex-1"
                        />
                      </div>
                      <Textarea
                        placeholder="Step description"
                        value={step.description}
                        onChange={(e) => updateApproachStep(stepIndex, 'description', e.target.value)}
                        rows={2}
                        className="mb-4"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        {step.details.map((detail, detailIndex) => (
                          <Input
                            key={detailIndex}
                            placeholder={`Detail ${detailIndex + 1}`}
                            value={detail}
                            onChange={(e) => updateApproachDetail(stepIndex, detailIndex, e.target.value)}
                            className="text-sm"
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div>
                <Label>Project Results (4 metrics)</Label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {formData.results.map((result, index) => (
                    <div key={index} className="space-y-2 border rounded-lg p-3">
                      <Input
                        placeholder="Metric name"
                        value={result.metric}
                        onChange={(e) => updateResult(index, 'metric', e.target.value)}
                      />
                      <div className="grid grid-cols-3 gap-2">
                        <Input
                          placeholder="Before"
                          value={result.before}
                          onChange={(e) => updateResult(index, 'before', e.target.value)}
                        />
                        <Input
                          placeholder="After"
                          value={result.after}
                          onChange={(e) => updateResult(index, 'after', e.target.value)}
                        />
                        <Input
                          placeholder="+150%"
                          value={result.improvement}
                          onChange={(e) => updateResult(index, 'improvement', e.target.value)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div>
                <Label>Client Testimonial</Label>
                <div className="space-y-4 mt-2 border rounded-lg p-4">
                  <Textarea
                    placeholder="Testimonial quote"
                    value={formData.testimonial.quote}
                    onChange={(e) => updateTestimonial('quote', e.target.value)}
                    rows={3}
                  />
                  <div className="grid grid-cols-3 gap-4">
                    <Input
                      placeholder="Author name"
                      value={formData.testimonial.author}
                      onChange={(e) => updateTestimonial('author', e.target.value)}
                    />
                    <Input
                      placeholder="Position/Title"
                      value={formData.testimonial.position}
                      onChange={(e) => updateTestimonial('position', e.target.value)}
                    />
                    <Input
                      placeholder="Author image URL"
                      value={formData.testimonial.image}
                      onChange={(e) => updateTestimonial('image', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Technologies, Image & URLs */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="technologies">Technologies Used (comma-separated)</Label>
                  <Input
                    id="technologies"
                    value={Array.isArray(formData.technologies) ? formData.technologies.join(', ') : ''}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      technologies: e.target.value.split(',').map(t => t.trim()).filter(t => t)
                    })}
                    className="mt-1"
                    placeholder="React, Next.js, TypeScript, etc."
                  />
                </div>
                <div>
                  <Label htmlFor="projectUrl">Project URL</Label>
                  <Input
                    id="projectUrl"
                    value={formData.projectUrl}
                    onChange={(e) => setFormData({ ...formData, projectUrl: e.target.value })}
                    className="mt-1"
                    placeholder="https://project-url.com"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="image">Featured Image URL</Label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="tags">Tags (comma-separated)</Label>
                  <Input
                    id="tags"
                    value={Array.isArray(formData.tags) ? formData.tags.join(', ') : ''}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      tags: e.target.value.split(',').map(t => t.trim()).filter(t => t)
                    })}
                    className="mt-1"
                  />
                </div>
                <div className="flex items-center space-x-2 mt-6">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="rounded border-gray-300"
                  />
                  <Label htmlFor="featured">Featured Case Study</Label>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button onClick={handleSave}>
                  {editingCase ? 'Update Case Study' : 'Create Case Study'}
                </Button>
                <Button variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Case Studies List */}
        <div className="grid gap-6">
          {caseStudies.map((caseStudy) => (
            <Card key={caseStudy.id} className="overflow-hidden">
              <div className="grid lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1">
                  <div className="aspect-video bg-gray-200">
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="lg:col-span-3 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        caseStudy.status === 'published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {caseStudy.status}
                      </span>
                      {caseStudy.featured && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                          Featured
                        </span>
                      )}
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {caseStudy.industry}
                      </span>
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">{caseStudy.duration}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" onClick={() => setSelectedCase(caseStudy)}>
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleEdit(caseStudy)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDelete(caseStudy.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{caseStudy.title}</h3>
                  <p className="text-gray-600 mb-2"><strong>Client:</strong> {caseStudy.client}</p>
                  <p className="text-gray-600 mb-4">{caseStudy.overview}</p>
                  
                  <div className="grid grid-cols-4 gap-4 mb-4">
                    {caseStudy.results.slice(0, 4).map((result, idx) => (
                      <div key={idx} className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">
                          {result.improvement}
                        </div>
                        <div className="text-xs text-gray-600">
                          {result.metric}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseStudy.technologies.slice(0, 5).map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {caseStudy.technologies.length > 5 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                        +{caseStudy.technologies.length - 5} more
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default CaseStudiesAdmin;
