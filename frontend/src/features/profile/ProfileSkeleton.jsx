import React from 'react';

const ProfileSkeleton = () => {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 animate-pulse">
      <div className="h-8 w-1/3 bg-gray-300 rounded mb-6" />
      <div className="flex gap-4 mb-6">
        {[...Array(3)].map((_, idx) => (
          <div key={idx} className="w-12 h-12 bg-orange-300 rounded-full" />
        ))}
      </div>
      <div className="space-y-4">
        <div className="h-4 w-1/2 bg-orange-300 rounded" />
        <div className="h-4 w-2/3 bg-orange-300 rounded" />
      </div>
    </div>
  );
};

export default ProfileSkeleton;