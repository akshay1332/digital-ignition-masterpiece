
import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Edit, Trash2, Eye, Calendar, ExternalLink } from 'lucide-react';

const CaseStudiesAdmin = () => {
  const [caseStudies, setCaseStudies] = useState([
    {
      id: 1,
      title: 'E-commerce Platform Redesign',
      client: 'TechCorp Inc.',
      category: 'Web Design & Development',
      challenge: 'Outdated design with poor user experience leading to low conversion rates',
      solution: 'Complete redesign with modern UI/UX principles and performance optimization',
      results: '45% increase in conversions, 60% improvement in page load speed',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      timeline: '3 months',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
      ],
      liveUrl: 'https://example.com',
      status: 'published'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      client: 'StartupXYZ',
      category: 'Mobile Development',
      challenge: 'Need for a cross-platform mobile app to reach wider audience',
      solution: 'React Native development with custom UI components and API integration',
      results: '100k+ downloads in first 3 months, 4.8 app store rating',
      technologies: ['React Native', 'Firebase', 'Redux'],
      timeline: '4 months',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80'
      ],
      liveUrl: '',
      status: 'draft'
    }
  ]);

  const [editingCase, setEditingCase] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    client: '',
    category: '',
    challenge: '',
    solution: '',
    results: '',
    technologies: [],
    timeline: '',
    image: '',
    gallery: [],
    liveUrl: '',
    status: 'draft'
  });

  const handleEdit = (caseStudy) => {
    setFormData(caseStudy);
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
      category: '',
      challenge: '',
      solution: '',
      results: '',
      technologies: [],
      timeline: '',
      image: '',
      gallery: [],
      liveUrl: '',
      status: 'draft'
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Case Studies Management</h1>
            <p className="text-gray-600">Manage your portfolio case studies</p>
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
            <CardContent className="space-y-4">
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
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="timeline">Timeline</Label>
                  <Input
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="mt-1"
                  />
                </div>
              </div>

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

              <div>
                <Label htmlFor="results">Results</Label>
                <Textarea
                  id="results"
                  value={formData.results}
                  onChange={(e) => setFormData({ ...formData, results: e.target.value })}
                  className="mt-1"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="technologies">Technologies (comma-separated)</Label>
                  <Input
                    id="technologies"
                    value={Array.isArray(formData.technologies) ? formData.technologies.join(', ') : ''}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      technologies: e.target.value.split(',').map(t => t.trim())
                    })}
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
                <Label htmlFor="liveUrl">Live URL (optional)</Label>
                <Input
                  id="liveUrl"
                  value={formData.liveUrl}
                  onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
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
            <Card key={caseStudy.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-semibold">{caseStudy.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        caseStudy.status === 'published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {caseStudy.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2"><strong>Client:</strong> {caseStudy.client}</p>
                    <p className="text-gray-600 mb-2"><strong>Category:</strong> {caseStudy.category}</p>
                    <p className="text-gray-600 mb-3">{caseStudy.challenge}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span><strong>Timeline:</strong> {caseStudy.timeline}</span>
                      {caseStudy.liveUrl && (
                        <a href={caseStudy.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-blue-600 hover:text-blue-800">
                          <ExternalLink className="w-3 h-3" />
                          <span>Live Site</span>
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <Button variant="outline" size="sm">
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default CaseStudiesAdmin;
