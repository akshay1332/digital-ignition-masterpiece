
import React from 'react';
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
  BarChart3
} from 'lucide-react';

const AdminSidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
    { icon: Home, label: 'Homepage', path: '/admin/homepage' },
    { icon: Briefcase, label: 'Services', path: '/admin/services', submenu: [
      { label: 'Web Design', path: '/admin/services/design' },
      { label: 'UX Design', path: '/admin/services/ux-design' },
      { label: 'Development', path: '/admin/services/development' },
      { label: 'Redesign', path: '/admin/services/redesign' }
    ]},
    { icon: FolderOpen, label: 'Portfolio', path: '/admin/portfolio' },
    { icon: FileText, label: 'Case Studies', path: '/admin/case-studies' },
    { icon: MessageSquare, label: 'Blog', path: '/admin/blog' },
    { icon: Users, label: 'About', path: '/admin/about' },
    { icon: Phone, label: 'Contact', path: '/admin/contact' },
    { icon: BarChart3, label: 'Analytics', path: '/admin/analytics' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' }
  ];

  return (
    <div className="w-64 bg-white shadow-lg border-r h-screen sticky top-0">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-gray-900">Admin Panel</h2>
        <p className="text-sm text-gray-600">devXplosion</p>
      </div>
      
      <nav className="mt-6">
        <div className="px-4 space-y-2">
          {menuItems.map((item, index) => (
            <div key={index}>
              <NavLink
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
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </NavLink>
              
              {item.submenu && (
                <div className="ml-8 mt-2 space-y-1">
                  {item.submenu.map((subItem, subIndex) => (
                    <NavLink
                      key={subIndex}
                      to={subItem.path}
                      className={({ isActive }) =>
                        `block px-3 py-1 rounded text-sm transition-colors ${
                          isActive
                            ? 'text-blue-700 bg-blue-50'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`
                      }
                    >
                      {subItem.label}
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
