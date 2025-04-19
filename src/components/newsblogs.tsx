import React from 'react';

const news = [
  {
    title: 'Maximizing Project Efficiency with Modern Tools',
    date: 'Mar 4, 2024',
  },
  {
    title: 'The Importance of Real-Time Performance Tracking',
    date: 'Jan 4, 2024',
  },
  {
    title: 'Seamless Integration: Connecting Your Tools for Success',
    date: 'Jun 5, 2024',
  },
  {
    title: 'Fostering Team Collaboration in a Remote Environment',
    date: 'Apr 23, 2024',
  },
];

const NewsList: React.FC = () => {
  return (
    <div className="bg-black text-white w-full px-4 py-10">
      {/* Inner content container centered with max width */}
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8">News</h2>
        <div className="space-y-6 w-full">
          {news.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center transform transition-transform duration-300 hover:scale-x-95 cursor-pointer"
            >
              <span className="text-lg">{item.title}</span>
              <span className="text-sm text-violet-400">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsList;
