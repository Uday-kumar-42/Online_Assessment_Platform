
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  BarChart, 
  Settings, 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
    });
    navigate('/');
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed inset-0 z-40 flex">
        {sidebarOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
        )}
        
        <div 
          className={`fixed inset-y-0 left-0 flex flex-col w-64 bg-white transform transition-transform ease-in-out duration-300 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="h-16 flex items-center justify-between px-4 border-b">
            <Link to="/" className="flex items-center space-x-2">
              <span className="bg-primary rounded-lg w-8 h-8 flex items-center justify-center">
                <span className="text-white font-bold">E</span>
              </span>
              <span className="font-bold text-xl text-primary">Examify</span>
            </Link>
            <button onClick={() => setSidebarOpen(false)}>
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>
          
          <div className="flex-grow flex flex-col overflow-y-auto">
            <nav className="flex-1 px-2 py-4 space-y-1">
              <SidebarLink to="/dashboard" icon={<LayoutDashboard size={20} />} label="Dashboard" />
              <SidebarLink to="/dashboard/tests" icon={<FileText size={20} />} label="My Tests" />
              <SidebarLink to="/dashboard/candidates" icon={<Users size={20} />} label="Candidates" />
              <SidebarLink to="/dashboard/reports" icon={<BarChart size={20} />} label="Reports" />
              <SidebarLink to="/dashboard/settings" icon={<Settings size={20} />} label="Settings" />
            </nav>
          </div>
          
          <div className="p-4 border-t">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-gray-700" 
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-5 w-5" />
              Logout
            </Button>
          </div>
        </div>
      </div>
      
      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="w-64 flex flex-col">
          <div className="h-0 flex-1 flex flex-col border-r border-gray-200 bg-white">
            <div className="h-16 flex items-center px-4 border-b">
              <Link to="/" className="flex items-center space-x-2">
                <span className="bg-primary rounded-lg w-8 h-8 flex items-center justify-center">
                  <span className="text-white font-bold">E</span>
                </span>
                <span className="font-bold text-xl text-primary">Examify</span>
              </Link>
            </div>
            
            <div className="flex-grow flex flex-col overflow-y-auto">
              <nav className="flex-1 px-2 py-4 space-y-1">
                <SidebarLink to="/dashboard" icon={<LayoutDashboard size={20} />} label="Dashboard" />
                <SidebarLink to="/dashboard/tests" icon={<FileText size={20} />} label="My Tests" />
                <SidebarLink to="/dashboard/candidates" icon={<Users size={20} />} label="Candidates" />
                <SidebarLink to="/dashboard/reports" icon={<BarChart size={20} />} label="Reports" />
                <SidebarLink to="/dashboard/settings" icon={<Settings size={20} />} label="Settings" />
              </nav>
            </div>
            
            <div className="p-4 border-t">
              <Button 
                variant="ghost" 
                className="w-full justify-start text-gray-700" 
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-5 w-5" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200">
          <button
            className="lg:hidden px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
          
          <div className="flex-1 flex justify-end px-4">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                <span className="sr-only">View notifications</span>
                <span className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 flex items-center justify-center text-xs text-white">3</span>
                </span>
              </button>

              <div className="ml-3 relative">
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col items-end">
                    <span className="text-sm font-medium text-gray-700">Jane Doe</span>
                    <span className="text-xs text-gray-500">Admin</span>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-medium">
                    JD
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <main className="flex-1 relative overflow-y-auto focus:outline-none p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

// Helper component for sidebar links
interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const SidebarLink = ({ to, icon, label }: SidebarLinkProps) => {
  // In a real app, you'd check if this route is active
  const isActive = to === '/dashboard';
  
  return (
    <Link
      to={to}
      className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
        isActive 
          ? 'bg-primary/10 text-primary'
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      <span className="mr-3">{icon}</span>
      {label}
    </Link>
  );
};

export default DashboardLayout;
