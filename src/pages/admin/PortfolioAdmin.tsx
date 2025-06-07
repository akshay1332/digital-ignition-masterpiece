
import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Edit, Trash2, Eye, ExternalLink } from 'lucide-react';

const PortfolioAdmin = () => {
  const [portfolioItems, setPortfolioItems] = useState([
    {
      id: 1,
      title: 'Modern E-commerce Platform',
      category: 'E-commerce',
      description: 'A sleek, responsive e-commerce platform built with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80'
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true,
      status: 'published'
    },
    {
      id: 2,
      title: 'Healthcare Dashboard',
      category: 'Healthcare',
      description: 'Analytics dashboard for healthcare providers with real-time data visualization',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80'
      ],
      liveUrl: '',
      githubUrl: '',
      featured: false,
      status: 'draft'
    }
  ]);

  const [editingItem, setEditingItem] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    technologies: [],
    image: '',
    gallery: [],
    liveUrl: '',
    githubUrl: '',
    featured: false,
    status: 'draft'
  });

  const categories = ['Web Development', 'Mobile App', 'E-commerce', 'Healthcare', 'Finance', 'Education', 'Other'];

  const handleEdit = (item) => {
    setFormData(item);
    setEditingItem(item.id);
    setShowForm(true);
  };

  const handleSave = () => {
    if (editingItem) {
      setPortfolioItems(portfolioItems.map(item => 
        item.id === editingItem 
          ? { ...formData, id: editingItem }
          : item
      ));
    } else {
      const newItem = {
        ...formData,
        id: portfolioItems.length + 1
      };
      setPortfolioItems([...portfolioItems, newItem]);
    }
    
    resetForm();
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this portfolio item?')) {
      setPortfolioItems(portfolioItems.filter(item => item.id !== id));
    }
  };

  const resetForm = () => {
    setShowForm(false);
    setEditingItem(null);
    setFormData({
      title: '',
      category: '',
      description: '',
      technologies: [],
      image: '',
      gallery: [],
      liveUrl: '',
      githubUrl: '',
      featured: false,
      status: 'draft'
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Portfolio Management</h1>
            <p className="text-gray-600">Manage your portfolio projects and showcase work</p>
          </div>
          <Button onClick={() => setShowForm(true)} className="flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add New Project</span>
          </Button>
        </div>

        {showForm && (
          <Card>
            <CardHeader>
              <CardTitle>{editingItem ? 'Edit Portfolio Item' : 'Create New Portfolio Item'}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
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
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select Category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="mt-1"
                  rows={3}
                />
              </div>

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
                  placeholder="React, Node.js, MongoDB"
                />
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
                  <Label htmlFor="liveUrl">Live URL (optional)</Label>
                  <Input
                    id="liveUrl"
                    value={formData.liveUrl}
                    onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="githubUrl">GitHub URL (optional)</Label>
                  <Input
                    id="githubUrl"
                    value={formData.githubUrl}
                    onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <Label htmlFor="featured">Featured Project</Label>
                </div>
                <div>
                  <Label htmlFor="status">Status</Label>
                  <select
                    id="status"
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="ml-2 rounded-md border border-gray-300 px-3 py-1 focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button onClick={handleSave}>
                  {editingItem ? 'Update Project' : 'Create Project'}
                </Button>
                <Button variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Portfolio Items List */}
        <div className="grid gap-6">
          {portfolioItems.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex space-x-4">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        {item.featured && (
                          <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                            Featured
                          </span>
                        )}
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          item.status === 'published' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2"><strong>Category:</strong> {item.category}</p>
                      <p className="text-gray-600 mb-3">{item.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {item.technologies.map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center space-x-4 text-sm">
                        {item.liveUrl && (
                          <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-blue-600 hover:text-blue-800">
                            <ExternalLink className="w-3 h-3" />
                            <span>Live Site</span>
                          </a>
                        )}
                        {item.githubUrl && (
                          <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-gray-600 hover:text-gray-800">
                            <ExternalLink className="w-3 h-3" />
                            <span>GitHub</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleEdit(item)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleDelete(item.id)}>
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

export default PortfolioAdmin;
