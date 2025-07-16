// src/pages/NotFound.jsx
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white p-6">
      <h1 className="text-6xl font-bold text-orange-500 mb-4">404</h1>
      <p className="text-lg text-white/80 mb-6">Page not found</p>
      <Link
        to="/"
        className="flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-xl text-white font-semibold transition-all"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
