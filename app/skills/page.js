'use client';

import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 90, icon: '🔗', color: 'text-red-400' },
    { name: 'CSS & Tailwind', level: 85, icon: '✏️', color: 'text-blue-400' },
    { name: 'JavaScript', level: 80, icon: '⚡', color: 'text-yellow-400' },
    { name: 'React.js', level: 75, icon: '🌀', color: 'text-blue-500' },
    { name: 'Next.js', level: 70, icon: '🖥️', color: 'text-gray-400' },
    { name: 'Database / PL/SQL', level: 80, icon: '🗄️', color: 'text-green-400' },
  ];

  return (
    <div className="min-h-screen bg-white-900 text-gray flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Keahlian Saya</h1>
      <p className="text-center max-w-2xl text-black-300 mb-8">
        Saya memiliki pengalaman dalam pengembangan web dengan berbagai teknologi modern.
        Berikut adalah keterampilan utama saya:
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl">
        {skills.map((skill, index) => (
          <div key={index} className="bg-blue-800 p-6 rounded-2xl text-center flex flex-col items-center shadow-lg">
            <div className={`${skill.color} text-4xl mb-4`}>{skill.icon}</div>
            <h2 className="text-xl font-semibold">{skill.name}</h2>
            <div className="w-full mt-2">
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
              </div>
              <p className="text-gray-400 mt-2">{skill.level}%</p>
            </div>
          </div>
        ))}
      </div>

      <a 
      href='/'
      className="mt-8 bg-blue-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-full transition">
        Kembali ke Beranda
      </a>
    </div>
  );
};

export default Skills;
