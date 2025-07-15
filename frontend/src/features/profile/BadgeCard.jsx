import React from 'react';

const badgeColors = [
  'bg-yellow-50 border-yellow-200',
  'bg-gray-50 border-gray-200',
  'bg-orange-50 border-orange-200',
  'bg-blue-50 border-blue-200',
];

const badgeIcons = ['🥇', '🥈', '🥉', '🏅'];

const BadgeCard = ({ badge, url, index }) => {
  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-xl border-2 ${badgeColors[index % 4]} hover:shadow-md transition-all duration-200`}
    >
      <div className="relative">
        <img
          src={url}
          alt={badge}
          className="w-16 h-16 rounded-xl shadow-sm"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="w-16 h-16 bg-gray-100 rounded-xl hidden items-center justify-center text-2xl">
          {badgeIcons[index % 4]}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">{badge}</h3>
        <p className="text-sm text-gray-600">Achievement Badge</p>
      </div>
      <div className="text-right">
        <div className="text-lg font-bold text-orange-600">#{index + 1}</div>
      </div>
    </div>
  );
};

export default BadgeCard;
