'use client';

import React from 'react';

const Services = () => {
  const services = [
    { name: 'Web Development', description: 'Membangun website modern dengan teknologi terbaru seperti React.js dan Next.js.', icon: '💻', color: 'text-blue-400' },
    { name: 'UI/UX Design', description: 'Membuat desain antarmuka yang menarik dan user-friendly menggunakan Figma dan Tailwind.', icon: '🎨', color: 'text-pink-400' },
    { name: 'Backend Development', description: 'Mengembangkan backend dengan Node.js, Express, dan API untuk mendukung aplikasi web.', icon: '🔧', color: 'text-yellow-400' },
    { name: 'Database Management', description: 'Mengelola database MySQL, PostgreSQL, dan PL/SQL untuk memastikan data yang aman dan terstruktur.', icon: '🗄️', color: 'text-green-400' },
    { name: 'SEO Optimization', description: 'Mengoptimalkan website agar muncul di peringkat atas mesin pencari seperti Google.', icon: '📈', color: 'text-purple-400' },
    { name: 'Maintenance & Support', description: 'Memberikan dukungan teknis dan pemeliharaan website agar selalu berjalan optimal.', icon: '🔧', color: 'text-red-400' },
  ];

  return (
    <div className="min-h-screen bg-white-900 text-black flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mt-16 mb-4">Layanan Saya</h1>
      <p className="text-center max-w-2xl text-black-300 mb-8">
        Saya menawarkan berbagai layanan dalam pengembangan web dan database untuk membantu bisnis dan proyek Anda berkembang.
      </p>

      <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl">
        {services.map((service, index) => (
          <div key={index} className="bg-blue-800 p-6 rounded-2xl text-center flex flex-col items-center shadow-lg">
            <div className={`${service.color} text-4xl mb-4`}>{service.icon}</div>
            <h2 className="text-xl font-semibold">{service.name}</h2>
            <p className="text-gray-400 mt-2">{service.description}</p>
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

export default Services;
