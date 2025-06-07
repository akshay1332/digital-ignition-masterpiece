
import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Edit, Trash2, Eye, Calendar, ExternalLink, Clock } from 'lucide-react';

const CaseStudiesAdmin = () => {
  const [caseStudies, setCaseStudies] = useState([
    {
      id: 1,
      title: 'TechFlow Solutions: B2B Platform Transformation',
      client: 'TechFlow Solutions',
      industry: 'B2B Software',
      duration: '12 weeks',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      challenge: 'TechFlow had an outdated website with poor user experience, resulting in high bounce rates and low conversion rates.',
      solution: 'Complete redesign with modern UX principles, performance optimization, and lead generation focus.',
      fullContent: `
        <h2>The Challenge</h2>
        <p>TechFlow Solutions came to us with a critical problem: their outdated website was driving potential customers away. With a bounce rate of 78% and conversion rates below 1%, they were losing significant business opportunities. The site suffered from poor navigation, slow loading times, and a confusing user journey that failed to communicate their value proposition effectively.</p>
        
        <h2>Our Approach</h2>
        <p>We conducted comprehensive user research, including interviews with existing customers and analysis of user behavior data. Our design process focused on creating a clear information architecture that would guide users toward conversion points naturally.</p>
        
        <h3>Key Strategy Points:</h3>
        <ul>
          <li>Complete user experience audit and redesign</li>
          <li>Performance optimization for faster load times</li>
          <li>Implementation of lead generation best practices</li>
          <li>Mobile-first responsive design approach</li>
          <li>Integration with modern analytics and tracking tools</li>
        </ul>
        
        <h2>The Results</h2>
        <p>The transformation exceeded all expectations. Within 6 months of launch, TechFlow saw dramatic improvements across all key metrics:</p>
        
        <h2>Technical Implementation</h2>
        <p>We built the new platform using React and Next.js for optimal performance, implemented a headless CMS for easy content management, and integrated advanced analytics to track user behavior and conversion funnels.</p>
        
        <h2>Long-term Impact</h2>
        <p>The success of this project has positioned TechFlow as a leader in their industry, with increased market share and customer acquisition that continues to grow month over month.</p>
      `,
      results: [
        { metric: 'Conversion Rate', improvement: '+150%' },
        { metric: 'Page Load Time', improvement: '-60%' },
        { metric: 'User Engagement', improvement: '+200%' },
        { metric: 'Lead Generation', improvement: '+300%' }
      ],
      testimonial: {
        quote: "devXplosion transformed our digital presence. The results exceeded all our expectations.",
        author: "Sarah Johnson",
        position: "CEO, TechFlow Solutions"
      },
      tags: ['Website Redesign', 'UX/UI Design', 'Lead Generation'],
      status: 'published'
    },
    {
      id: 2,
      title: 'EcoVibe: Sustainable E-commerce Platform',
      client: 'EcoVibe Marketplace',
      industry: 'E-commerce',
      duration: '16 weeks',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop',
      challenge: 'EcoVibe needed a scalable e-commerce platform that could handle their growing sustainable product marketplace.',
      solution: 'Custom-built platform with advanced filtering, payment integration, and vendor management system.',
      fullContent: `
        <h2>Project Overview</h2>
        <p>EcoVibe approached us with an ambitious vision: create the largest marketplace for sustainable products. They needed a platform that could scale with rapid growth while maintaining excellent user experience for both buyers and sellers.</p>
        
        <h2>Technical Challenges</h2>
        <p>Building a multi-vendor marketplace presented unique challenges:</p>
        <ul>
          <li>Complex product catalog with sustainability ratings</li>
          <li>Multi-vendor payment processing and commission tracking</li>
          <li>Advanced search and filtering capabilities</li>
          <li>Scalable infrastructure to handle growth</li>
          <li>Mobile-optimized shopping experience</li>
        </ul>
        
        <h2>Our Solution</h2>
        <p>We developed a comprehensive e-commerce ecosystem using modern technologies and best practices. The platform features a custom-built vendor dashboard, advanced analytics, and a seamless checkout process.</p>
        
        <h2>Key Features Implemented</h2>
        <ul>
          <li>Multi-vendor marketplace functionality</li>
          <li>Sustainability scoring system</li>
          <li>Advanced product filtering and search</li>
          <li>Integrated payment processing with Stripe</li>
          <li>Vendor analytics dashboard</li>
          <li>Mobile-responsive design</li>
          <li>Automated inventory management</li>
        </ul>
        
        <h2>Results and Impact</h2>
        <p>The platform launched successfully and has become a leading destination for sustainable shopping, with continuous growth in both vendor adoption and customer satisfaction.</p>
      `,
      results: [
        { metric: 'Monthly Users', improvement: '10,000+' },
        { metric: 'Transaction Volume', improvement: '+500%' },
        { metric: 'Vendor Onboarding', improvement: '+400%' },
        { metric: 'Customer Satisfaction', improvement: '4.9/5' }
      ],
      testimonial: {
        quote: "The platform they built scaled with our rapid growth. Absolutely incredible work.",
        author: "Mike Chen",
        position: "Founder, EcoVibe"
      },
      tags: ['Web Development', 'E-commerce', 'Scalability'],
      status: 'published'
    },
    {
      id: 3,
      title: 'MindfulSpace: Mobile App UX Redesign',
      client: 'MindfulSpace',
      industry: 'Health & Wellness',
      duration: '8 weeks',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      challenge: 'MindfulSpace\'s meditation app had poor user retention and confusing navigation affecting user engagement.',
      solution: 'Complete UX redesign based on user research, simplified onboarding, and personalized user journeys.',
      fullContent: `
        <h2>Understanding the Problem</h2>
        <p>MindfulSpace's meditation app was struggling with user retention. Despite having quality content, users were abandoning the app after just a few sessions due to confusing navigation and overwhelming interface design.</p>
        
        <h2>Research and Discovery</h2>
        <p>We conducted extensive user research including:</p>
        <ul>
          <li>User interviews with current and former users</li>
          <li>Usability testing sessions</li>
          <li>Competitive analysis of successful meditation apps</li>
          <li>Analytics review to identify pain points</li>
        </ul>
        
        <h2>Design Strategy</h2>
        <p>Our redesign focused on creating a calming, intuitive experience that would encourage daily use and long-term engagement. We simplified the information architecture and created personalized user journeys based on individual meditation goals.</p>
        
        <h2>Key Design Improvements</h2>
        <ul>
          <li>Streamlined onboarding process</li>
          <li>Personalized meditation recommendations</li>
          <li>Progress tracking and achievements</li>
          <li>Simplified navigation structure</li>
          <li>Calming visual design with improved accessibility</li>
          <li>Offline content access</li>
        </ul>
        
        <h2>Implementation and Testing</h2>
        <p>We worked closely with the development team to ensure the design vision was properly implemented, conducting multiple rounds of user testing to validate our improvements.</p>
        
        <h2>Post-Launch Success</h2>
        <p>The redesigned app has seen remarkable improvements in user engagement and retention, establishing MindfulSpace as a top meditation app in the wellness category.</p>
      `,
      results: [
        { metric: 'User Retention', improvement: '+200%' },
        { metric: 'Session Duration', improvement: '+180%' },
        { metric: 'App Store Rating', improvement: '4.8/5' },
        { metric: 'Daily Active Users', improvement: '+250%' }
      ],
      testimonial: {
        quote: "Our users love the new design. Retention rates have never been higher.",
        author: "Dr. Lisa Park",
        position: "Product Manager, MindfulSpace"
      },
      tags: ['UI/UX Design', 'Mobile App', 'User Research'],
      status: 'draft'
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
    challenge: '',
    solution: '',
    fullContent: '',
    results: [
      { metric: '', improvement: '' },
      { metric: '', improvement: '' },
      { metric: '', improvement: '' },
      { metric: '', improvement: '' }
    ],
    testimonial: {
      quote: '',
      author: '',
      position: ''
    },
    image: '',
    tags: [],
    status: 'draft'
  });

  const handleEdit = (caseStudy) => {
    setFormData({
      ...caseStudy,
      tags: Array.isArray(caseStudy.tags) ? caseStudy.tags : []
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
      challenge: '',
      solution: '',
      fullContent: '',
      results: [
        { metric: '', improvement: '' },
        { metric: '', improvement: '' },
        { metric: '', improvement: '' },
        { metric: '', improvement: '' }
      ],
      testimonial: {
        quote: '',
        author: '',
        position: ''
      },
      image: '',
      tags: [],
      status: 'draft'
    });
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
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                {selectedCase.title}
              </h1>
              
              <div 
                className="prose max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: selectedCase.fullContent }}
              />
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {selectedCase.results.map((result, idx) => (
                  <div key={idx} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {result.improvement}
                    </div>
                    <div className="text-sm text-gray-600">
                      {result.metric}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-600 mb-4">
                  Client Testimonial
                </h3>
                <p className="text-gray-700 italic mb-4">
                  "{selectedCase.testimonial.quote}"
                </p>
                <div className="text-gray-900">
                  <div className="font-medium">{selectedCase.testimonial.author}</div>
                  <div className="text-sm text-gray-600">{selectedCase.testimonial.position}</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {selectedCase.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
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
            <p className="text-gray-600">Manage your portfolio case studies with detailed content</p>
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
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="client">Client</Label>
                  <Input
                    id="client"
                    value={formData.client}
                    onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                    className="mt-1"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
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
                  <Label htmlFor="duration">Duration</Label>
                  <Input
                    id="duration"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
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

              {/* Challenge & Solution */}
              <div>
                <Label htmlFor="challenge">Challenge</Label>
                <Textarea
                  id="challenge"
                  value={formData.challenge}
                  onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                  className="mt-1"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="solution">Solution</Label>
                <Textarea
                  id="solution"
                  value={formData.solution}
                  onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                  className="mt-1"
                  rows={3}
                />
              </div>

              {/* Full Content */}
              <div>
                <Label htmlFor="fullContent">Full Content (HTML)</Label>
                <Textarea
                  id="fullContent"
                  value={formData.fullContent}
                  onChange={(e) => setFormData({ ...formData, fullContent: e.target.value })}
                  className="mt-1"
                  rows={10}
                  placeholder="Enter HTML content for the detailed case study..."
                />
              </div>

              {/* Results */}
              <div>
                <Label>Results (4 metrics)</Label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {formData.results.map((result, index) => (
                    <div key={index} className="space-y-2">
                      <Input
                        placeholder="Metric name"
                        value={result.metric}
                        onChange={(e) => updateResult(index, 'metric', e.target.value)}
                      />
                      <Input
                        placeholder="Improvement (e.g., +150%)"
                        value={result.improvement}
                        onChange={(e) => updateResult(index, 'improvement', e.target.value)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div>
                <Label>Client Testimonial</Label>
                <div className="space-y-2 mt-2">
                  <Textarea
                    placeholder="Testimonial quote"
                    value={formData.testimonial.quote}
                    onChange={(e) => updateTestimonial('quote', e.target.value)}
                    rows={3}
                  />
                  <div className="grid grid-cols-2 gap-4">
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
                  </div>
                </div>
              </div>

              {/* Image & Tags */}
              <div>
                <Label htmlFor="image">Featured Image URL</Label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="mt-1"
                />
              </div>

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
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <div className="aspect-video bg-gray-200">
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="lg:col-span-2 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        caseStudy.status === 'published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {caseStudy.status}
                      </span>
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
                  <p className="text-gray-600 mb-4">{caseStudy.challenge}</p>
                  
                  <div className="grid grid-cols-4 gap-4 mb-4">
                    {caseStudy.results.map((result, idx) => (
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
