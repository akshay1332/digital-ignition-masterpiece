
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Home, 
  Briefcase, 
  PenTool, 
  Code, 
  Palette,
  FolderOpen,
  FileText,
  MessageSquare,
  Phone,
  Users,
  Settings,
  BarChart3,
  ChevronDown,
  ChevronRight,
  Info
} from 'lucide-react';

const AdminSidebar = () => {
  const [expandedGroups, setExpandedGroups] = useState<string[]>(['services']);

  const toggleGroup = (groupName: string) => {
    setExpandedGroups(prev => 
      prev.includes(groupName) 
        ? prev.filter(g => g !== groupName)
        : [...prev, groupName]
    );
  };

  const menuGroups = [
    {
      name: 'dashboard',
      label: 'Dashboard',
      items: [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' }
      ]
    },
    {
      name: 'pages',
      label: 'Page Management',
      items: [
        { icon: Home, label: 'Homepage', path: '/admin/homepage' },
        { icon: Info, label: 'About Page', path: '/admin/about' },
        { icon: Phone, label: 'Contact Page', path: '/admin/contact' }
      ]
    },
    {
      name: 'services',
      label: 'Services',
      items: [
        { icon: Briefcase, label: 'Services Overview', path: '/admin/services' },
        { icon: Palette, label: 'Web Design', path: '/admin/services/design' },
        { icon: PenTool, label: 'UX Design', path: '/admin/services/ux-design' },
        { icon: Code, label: 'Development', path: '/admin/services/development' },
        { icon: PenTool, label: 'Redesign', path: '/admin/services/redesign' }
      ]
    },
    {
      name: 'content',
      label: 'Content Management',
      items: [
        { icon: FolderOpen, label: 'Portfolio', path: '/admin/portfolio' },
        { icon: FileText, label: 'Case Studies', path: '/admin/case-studies' },
        { icon: MessageSquare, label: 'Blog', path: '/admin/blog' }
      ]
    },
    {
      name: 'system',
      label: 'System',
      items: [
        { icon: BarChart3, label: 'Analytics', path: '/admin/analytics' },
        { icon: Settings, label: 'Settings', path: '/admin/settings' }
      ]
    }
  ];

  return (
    <div className="w-64 bg-white shadow-lg border-r h-screen sticky top-0 overflow-y-auto">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-gray-900">Admin Panel</h2>
        <p className="text-sm text-gray-600">devXplosion</p>
      </div>
      
      <nav className="mt-6">
        <div className="px-4 space-y-1">
          {menuGroups.map((group) => (
            <div key={group.name}>
              <button
                onClick={() => toggleGroup(group.name)}
                className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <span>{group.label}</span>
                {expandedGroups.includes(group.name) ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              
              {expandedGroups.includes(group.name) && (
                <div className="ml-4 mt-1 space-y-1">
                  {group.items.map((item, index) => (
                    <NavLink
                      key={index}
                      to={item.path}
                      end={item.path === '/admin'}
                      className={({ isActive }) =>
                        `flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`
                      }
                    >
                      <item.icon className="w-4 h-4 mr-3" />
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default AdminSidebar;
