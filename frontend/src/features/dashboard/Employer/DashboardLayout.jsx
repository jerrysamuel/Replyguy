import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Users,
  CreditCard,
  MessageCircle,
  ClipboardList,
  LogOut,
  User,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import EmployerTabContent from './TabContent';

const EmployerDashboardLayout = () => {
  const [activeTab, setActiveTab] = useState('replyguys');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const sidebarRef = useRef();

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (sidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
          setSidebarOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [sidebarOpen]);
  const tabs = [
    { key: 'replyguys', label: 'Reply Guys', icon: <Users className="w-5 h-5" /> },
    { key: 'contracts', label: 'Contracts', icon: <ClipboardList className="w-5 h-5" /> },
    { key: 'chats', label: 'Chats', icon: <MessageCircle className="w-5 h-5" /> },
    { key: 'payments', label: 'Payments', icon: <CreditCard className="w-5 h-5" /> },
  ];

  return (
    <div className="flex min-h-screen bg-orange-50 text-gray-800">
      {/* Sidebar */}
      <aside
        ref={sidebarRef}
  className={`fixed z-20 h-full bg-white border-r border-orange-100 shadow-md transition-transform duration-300
    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
    md:translate-x-0 md:w-64`}
>
  <div className="flex justify-between items-center gap-x-4 px-6 py-4 border-b border-orange-100">
    <h2 className="text-xl font-bold text-orange-600">Employer</h2>
    <button
      onClick={() => setSidebarOpen(false)}
      className="text-orange-600 md:hidden"
    >
      <X className="w-8 h-8" />
    </button>
  </div>
  <nav className="mt-6 space-y-2">
    {tabs.map(tab => (
      <button
        key={tab.key}
        onClick={() => setActiveTab(tab.key)}
        className={`w-full text-left px-6 py-3 flex items-center space-x-2 hover:bg-orange-100 transition ${
          activeTab === tab.key ? 'bg-orange-100 font-semibold' : ''
        }`}
      >
        {tab.icon}
        <span>{tab.label}</span>
      </button>
    ))}
  </nav>
</aside>


      {/* Main Content */}
      <div className="flex-1 ml-0 md:ml-64 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow px-6 py-4 border-b border-orange-100 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-orange-600 md:hidden"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-semibold text-orange-600 hidden md:block">
              Dashboard – {tabs.find(t => t.key === activeTab)?.label}
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/profile"
              className="text-sm flex items-center space-x-1 hover:text-orange-600 transition"
            >
              <User className="w-5 h-5" />
              <span>Profile</span>
            </Link>
            <button className="text-sm flex items-center space-x-1 hover:text-red-600 transition">
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </header>

        <main className="p-6">
          <EmployerTabContent activeTab={activeTab} />
        </main>
      </div>
    </div>
  );
};

export default EmployerDashboardLayout;
