import React, { useEffect, useState } from 'react';
import {
  User, Mail, Wallet, Award, Building2, Shield, Star,
} from 'lucide-react';
import ProfileSkeleton from './ProfileSkeleton'; // assumes skeleton is external
import BadgeCard from './BadgeCard'; // assumes BadgeCard is a separate component

const Profile = ({ isOwnProfile = false, role = 'reply_guy' }) => {
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState(null);

  const isEmployer = role === 'employer';

  useEffect(() => {
    setTimeout(() => {
      setProfileData({
        id: 'abc123',
        email: 'user@example.com',
        company_name: 'Acme Inc.',
        badges: ['Serious Builder', 'Orange in My Veins', 'Support Warrior', 'Content Creator'],
        badge_urls: [
          'https://sign-public-cdn.s3.us-east-1.amazonaws.com/SBTs/0356059918.webp',
          'https://sign-public-cdn.s3.us-east-1.amazonaws.com/SBTs/3284429795.webp',
          'https://sign-public-cdn.s3.us-east-1.amazonaws.com/SBTs/0356059918.webp',
          'https://sign-public-cdn.s3.us-east-1.amazonaws.com/SBTs/3284429795.webp',
        ],
        ton_address: 'UQxxx...',
        role,
        rating: 4.8,
        completedJobs: 24,
        memberSince: '2023',
      });
      setLoading(false);
    }, 1500);
  }, [role]);

  if (loading || !profileData) return <ProfileSkeleton />;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 h-32 relative">
          <div className="absolute -bottom-16 left-8">
            <div className="w-32 h-32 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center">
              {isEmployer
                ? <Building2 className="w-12 h-12 text-orange-500" />
                : <User className="w-12 h-12 text-orange-500" />}
            </div>
          </div>

          {/* Stats */}
          <div className="absolute top-4 right-8 flex gap-4">
            <StatBox label="Rating" icon={<Star className="w-4 h-4 fill-current" />} value={profileData.rating} />
            <StatBox label="Jobs" value={profileData.completedJobs} />
          </div>
        </div>

        {/* Profile Content */}
        <div className="pt-20 pb-8 px-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {isEmployer ? profileData.company_name : 'Reply Guy Profile'}
            </h1>
            <p className="text-gray-600 flex items-center gap-2">
              <Shield className="w-4 h-4" />
              {isEmployer ? 'Verified Employer' : 'Certified Reply Guy'} • Member since {profileData.memberSince}
            </p>
          </div>

          {/* Badges */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5" /> Earned Badges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {profileData.badges.map((badge, index) => (
                <BadgeCard key={index} badge={badge} url={profileData.badge_urls[index]} index={index} />
              ))}
            </div>
          </section>

          {/* Private Info */}
          {isOwnProfile && (
            <section className="bg-gray-50 rounded-xl p-6 border-2 border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" /> Private Information
              </h3>
              <InfoItem icon={<Mail className="w-5 h-5 text-gray-500" />} value={profileData.email} />
              <InfoItem icon={<Wallet className="w-5 h-5 text-gray-500" />} value={profileData.ton_address} mono />
            </section>
          )}

          {/* Action Buttons */}
          {!isOwnProfile && (
            <div className="flex gap-3 mt-8">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex-1">
                {isEmployer ? 'Contact Company' : 'Hire Reply Guy'}
              </button>
              <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors flex-1">
                Send Message
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const StatBox = ({ label, icon, value }) => (
  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-white">
    <div className="text-sm opacity-80">{label}</div>
    <div className="font-bold flex items-center gap-1">
      {icon} {value}
    </div>
  </div>
);

const InfoItem = ({ icon, value, mono }) => (
  <div className="flex items-center gap-3 p-3 bg-white rounded-lg mb-2">
    {icon}
    <span className={`text-gray-700 ${mono ? 'font-mono' : ''}`}>{value}</span>
  </div>
);

export default Profile;
