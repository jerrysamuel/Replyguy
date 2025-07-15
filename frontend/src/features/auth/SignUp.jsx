import React, { useState } from 'react';
import { Mail, Lock, Building, User, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useParams } from 'react-router-dom';

const Signup = () => {
const { role } = useParams(); 
  
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    password: ''
  });
  const [focusedField, setFocusedField] = useState(null);

  const isEmployer = role === 'employer';

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-orange-900 to-neutral-900 flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>

      {/* Main card */}
      <div className="relative w-full max-w-md">
        {/* Glassmorphism card */}
       <div className="backdrop-blur-sm bg-orange-100/10 border border-orange-300/30 rounded-2xl p-8 shadow-2xl">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600
 rounded-full mb-4">
              {isEmployer ? (
                <Building className="w-8 h-8 text-white" />
              ) : (
                <User className="w-8 h-8 text-white" />
              )}
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Join as {isEmployer ? 'Employer' : 'Reply Guy'}
            </h1>
            <p className="text-white/70">
              {isEmployer 
                ? 'Connect with skilled reply guys to boost your brand'
                : 'Start earning by providing valuable responses'
              }
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Email Field */}
            <div className="relative">
              <div className={`relative transition-all duration-300 ${
                focusedField === 'email' ? 'transform scale-105' : ''
              }`}>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className={`w-5 h-5 transition-colors duration-300 ${
                    focusedField === 'email' ? 'text-orange-400' : 'text-white/40'
                  }`} />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Company Field (only for employers) */}
            {isEmployer && (
              <div className="relative">
                <div className={`relative transition-all duration-300 ${
                  focusedField === 'company' ? 'transform scale-105' : ''
                }`}>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building className={`w-5 h-5 transition-colors duration-300 ${
                      focusedField === 'company' ? 'text-orange-400' : 'text-white/40'
                    }`} />
                  </div>
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all duration-300"
                    required
                  />
                </div>
              </div>
            )}

            {/* Password Field */}
            <div className="relative">
              <div className={`relative transition-all duration-300 ${
                focusedField === 'password' ? 'transform scale-105' : ''
              }`}>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className={`w-5 h-5 transition-colors duration-300 ${
                    focusedField === 'password' ? 'text-orange-400' : 'text-white/40'
                  }`} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full pl-10 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all duration-300"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-white/40 hover:text-white/70 transition-colors duration-300"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="group relative w-full py-3 px-6 bg-gradient-to-r from-orange-500 to-orange-600
 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center">
                Create Account
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-white/50">Or continue with</span>
              </div>
            </div>

            {/* Google Sign Up */}
            <button
              type="button"
              className="w-full py-3 px-6 bg-white/10 border border-white/20 text-white font-medium rounded-xl hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Continue with Google</span>
            </button>

            {/* Role Switch Demo */}
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-white/70 text-sm mb-2">Demo: Switch between roles</p>
              <div className="flex gap-2">
                <button
                  onClick={() => window.location.reload()}
                  className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-md text-sm hover:bg-purple-500/30 transition-colors"
                >
                  Change role to see different form
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-6">
            <p className="text-white/50 text-sm">
              Already have an account?{' '}
              <button className="text-orange-400 hover:text-purple-300 transition-colors duration-300 font-medium">
                Sign in
              </button>
            </p>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-500 rounded-full animate-bounce"></div>
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyan-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default Signup;