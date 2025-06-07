
import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Edit, Trash2, Eye, Calendar, User, Tag } from 'lucide-react';

const BlogAdmin = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'The Future of Web Design: Trends to Watch in 2024',
      slug: 'future-web-design-trends-2024',
      excerpt: 'Explore the cutting-edge design trends that will shape the digital landscape in 2024, from AI-powered interfaces to sustainable design practices.',
      content: `
        <h2>Introduction</h2>
        <p>The web design landscape is constantly evolving, driven by technological advances, changing user expectations, and new creative possibilities. As we move through 2024, several key trends are emerging that will define the future of digital experiences.</p>
        
        <h2>AI-Powered Design Systems</h2>
        <p>Artificial intelligence is revolutionizing how we approach web design. From automated layout generation to intelligent color palette suggestions, AI tools are becoming indispensable for modern designers.</p>
        
        <h3>Key Benefits:</h3>
        <ul>
          <li>Faster prototyping and iteration</li>
          <li>Data-driven design decisions</li>
          <li>Personalized user experiences</li>
          <li>Automated accessibility improvements</li>
        </ul>
        
        <h2>Sustainable Web Design</h2>
        <p>Environmental consciousness is driving a new approach to web development, focusing on energy-efficient designs, optimized performance, and reduced carbon footprints.</p>
        
        <h2>Immersive 3D Experiences</h2>
        <p>WebGL and WebXR technologies are making it easier than ever to create stunning 3D web experiences that engage users in entirely new ways.</p>
        
        <h2>Conclusion</h2>
        <p>These trends represent just the beginning of an exciting evolution in web design. By embracing these technologies and approaches, designers can create more engaging, accessible, and sustainable digital experiences.</p>
      `,
      author: 'Sarah Johnson',
      authorBio: 'Senior UX Designer with 8+ years of experience in digital product design',
      authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b1bb?w=150&h=150&fit=crop&crop=face',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      category: 'Design Trends',
      tags: ['Web Design', 'AI', 'Sustainability', '3D Design', 'UX'],
      status: 'published',
      featured: true,
      views: 1234,
      likes: 89
    },
    {
      id: 2,
      title: 'Optimizing User Experience: A Data-Driven Approach',
      slug: 'optimizing-ux-data-driven-approach',
      excerpt: 'Learn how to leverage analytics and user feedback to create exceptional digital experiences that drive engagement and conversions.',
      content: `
        <h2>The Power of Data in UX Design</h2>
        <p>In today's competitive digital landscape, successful UX design relies heavily on data-driven insights rather than assumptions or personal preferences.</p>
        
        <h2>Essential UX Metrics to Track</h2>
        <p>Understanding which metrics matter most for your specific goals is crucial for meaningful optimization.</p>
        
        <h3>Conversion Metrics:</h3>
        <ul>
          <li>Conversion rate by page and user segment</li>
          <li>Time to conversion</li>
          <li>Drop-off points in user journeys</li>
          <li>Form completion rates</li>
        </ul>
        
        <h3>Engagement Metrics:</h3>
        <ul>
          <li>Session duration and page views</li>
          <li>Bounce rate and exit rate</li>
          <li>Click-through rates on CTAs</li>
          <li>User retention and return visits</li>
        </ul>
        
        <h2>Tools and Techniques</h2>
        <p>Modern UX professionals have access to a wealth of tools for gathering and analyzing user behavior data.</p>
        
        <h2>Implementing Changes</h2>
        <p>The key to successful UX optimization lies in systematic testing and gradual implementation of changes based on solid data.</p>
        
        <h2>Measuring Success</h2>
        <p>Continuous monitoring and adjustment ensure that UX improvements deliver lasting value to both users and business objectives.</p>
      `,
      author: 'Mike Chen',
      authorBio: 'Data Analyst & UX Researcher specializing in conversion optimization',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      date: '2024-01-10',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      category: 'User Experience',
      tags: ['UX Research', 'Analytics', 'Conversion Optimization', 'Data Analysis'],
      status: 'published',
      featured: false,
      views: 892,
      likes: 67
    },
    {
      id: 3,
      title: 'Building Scalable Design Systems for Modern Teams',
      slug: 'building-scalable-design-systems',
      excerpt: 'A comprehensive guide to creating and maintaining design systems that grow with your organization and improve team collaboration.',
      content: `
        <h2>What is a Design System?</h2>
        <p>A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.</p>
        
        <h2>Benefits of Design Systems</h2>
        <p>Well-implemented design systems provide numerous advantages for both design and development teams.</p>
        
        <h2>Key Components</h2>
        <p>Every effective design system includes several essential elements that work together to create consistency.</p>
        
        <h2>Implementation Strategy</h2>
        <p>Successfully rolling out a design system requires careful planning and stakeholder buy-in across the organization.</p>
        
        <h2>Maintenance and Evolution</h2>
        <p>Design systems are living documents that require ongoing maintenance and strategic evolution to remain effective.</p>
      `,
      author: 'Emily Rodriguez',
      authorBio: 'Design Systems Lead with expertise in component architecture and team collaboration',
      authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      date: '2024-01-05',
      readTime: '15 min read',
      image: 'https://images.unsplash.com/photo-1558655146-364adaf6fcc9?auto=format&fit=crop&w=800&q=80',
      category: 'Design Systems',
      tags: ['Design Systems', 'Component Design', 'Team Collaboration', 'Scalability'],
      status: 'draft',
      featured: false,
      views: 445,
      likes: 32
    }
  ]);

  const [editingBlog, setEditingBlog] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    author: '',
    authorBio: '',
    authorImage: '',
    readTime: '',
    image: '',
    category: '',
    tags: [],
    status: 'draft',
    featured: false
  });

  const handleEdit = (blog) => {
    setFormData({
      ...blog,
      tags: Array.isArray(blog.tags) ? blog.tags : []
    });
    setEditingBlog(blog.id);
    setShowForm(true);
  };

  const handleSave = () => {
    const currentDate = new Date().toISOString().split('T')[0];
    
    if (editingBlog) {
      setBlogs(blogs.map(blog => 
        blog.id === editingBlog 
          ? { ...formData, id: editingBlog, date: blog.date }
          : blog
      ));
    } else {
      const newBlog = {
        ...formData,
        id: blogs.length + 1,
        date: currentDate,
        views: 0,
        likes: 0
      };
      setBlogs([...blogs, newBlog]);
    }
    
    resetForm();
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      setBlogs(blogs.filter(blog => blog.id !== id));
    }
  };

  const resetForm = () => {
    setShowForm(false);
    setEditingBlog(null);
    setFormData({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      author: '',
      authorBio: '',
      authorImage: '',
      readTime: '',
      image: '',
      category: '',
      tags: [],
      status: 'draft',
      featured: false
    });
  };

  // Generate slug from title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  // Show detailed view
  if (selectedBlog) {
    return (
      <AdminLayout>
        <div className="space-y-6">
          <Button 
            onClick={() => setSelectedBlog(null)}
            variant="outline"
            className="mb-4"
          >
            ← Back to Blog List
          </Button>
          
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video">
              <img 
                src={selectedBlog.image} 
                alt={selectedBlog.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {selectedBlog.category}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{selectedBlog.date}</span>
                </div>
                <span className="text-gray-500 text-sm">{selectedBlog.readTime}</span>
                {selectedBlog.featured && (
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                    Featured
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {selectedBlog.title}
              </h1>
              
              <div className="flex items-center space-x-4 mb-6 pb-6 border-b">
                <img 
                  src={selectedBlog.authorImage} 
                  alt={selectedBlog.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-gray-900">{selectedBlog.author}</div>
                  <div className="text-sm text-gray-600">{selectedBlog.authorBio}</div>
                </div>
              </div>
              
              <div 
                className="prose max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
              />
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedBlog.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-6 border-t">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{selectedBlog.views} views</span>
                  <span>{selectedBlog.likes} likes</span>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  selectedBlog.status === 'published' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {selectedBlog.status}
                </span>
              </div>
            </div>
          </article>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
            <p className="text-gray-600">Manage your blog posts and content with detailed editing capabilities</p>
          </div>
          <Button onClick={() => setShowForm(true)} className="flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add New Post</span>
          </Button>
        </div>

        {showForm && (
          <Card>
            <CardHeader>
              <CardTitle>{editingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Title and Slug */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => {
                      const title = e.target.value;
                      setFormData({ 
                        ...formData, 
                        title,
                        slug: generateSlug(title)
                      });
                    }}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="slug">URL Slug</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Excerpt */}
              <div>
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="mt-1"
                  rows={3}
                />
              </div>

              {/* Content */}
              <div>
                <Label htmlFor="content">Content (HTML)</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="mt-1"
                  rows={12}
                  placeholder="Enter HTML content for the blog post..."
                />
              </div>

              {/* Author Information */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="readTime">Read Time</Label>
                  <Input
                    id="readTime"
                    value={formData.readTime}
                    onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                    className="mt-1"
                    placeholder="e.g., 5 min read"
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Author Bio and Image */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="authorBio">Author Bio</Label>
                  <Textarea
                    id="authorBio"
                    value={formData.authorBio}
                    onChange={(e) => setFormData({ ...formData, authorBio: e.target.value })}
                    className="mt-1"
                    rows={2}
                  />
                </div>
                <div>
                  <Label htmlFor="authorImage">Author Image URL</Label>
                  <Input
                    id="authorImage"
                    value={formData.authorImage}
                    onChange={(e) => setFormData({ ...formData, authorImage: e.target.value })}
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Featured Image and Tags */}
              <div className="grid grid-cols-2 gap-4">
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
              </div>

              {/* Status and Featured */}
              <div className="grid grid-cols-2 gap-4">
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
                <div className="flex items-center space-x-2 mt-6">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="rounded border-gray-300"
                  />
                  <Label htmlFor="featured">Featured Post</Label>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button onClick={handleSave}>
                  {editingBlog ? 'Update Post' : 'Create Post'}
                </Button>
                <Button variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Blog Posts List */}
        <div className="grid gap-6">
          {blogs.map((blog) => (
            <Card key={blog.id} className="overflow-hidden">
              <div className="grid lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1">
                  <div className="aspect-video bg-gray-200">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="lg:col-span-3 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        blog.status === 'published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {blog.status}
                      </span>
                      {blog.featured && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                          Featured
                        </span>
                      )}
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {blog.category}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" onClick={() => setSelectedBlog(blog)}>
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleEdit(blog)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDelete(blog.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{blog.author}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{blog.date}</span>
                    </span>
                    <span>{blog.readTime}</span>
                    <span>{blog.views} views</span>
                    <span>{blog.likes} likes</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.slice(0, 4).map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                    {blog.tags.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                        +{blog.tags.length - 4} more
                      </span>
                    )}
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

export default BlogAdmin;
