'use client';

import React from 'react';

const Portfolio = () => {
  const projects = [
    { 
      name: 'Landing Page Perusahaan', 
      description: 'Website profesional untuk perusahaan dengan desain modern dan responsif.', 
      image: '/landing.jpg' 
    },
    { 
      name: 'E-Commerce Website', 
      description: 'Platform e-commerce dengan fitur pembayaran online dan manajemen produk.', 
      image: '/tokoonline.jpg' 
    },
    { 
      name: 'Dashboard Admin', 
      description: 'Dashboard interaktif untuk mengelola data dan analitik bisnis.', 
      image: '/admin.png' 
    }
  ];

  return (
    <div className="min-h-screen bg-white-900 text-black flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Portfolio Saya</h1>
      <p className="text-center max-w-2xl text-black-300 mb-8">
        Berikut adalah beberapa proyek yang telah saya kerjakan dalam pengembangan website dan aplikasi.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-blue-800 p-6 rounded-2xl text-center flex flex-col items-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-700 duration-300"
          >
            <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-lg mb-4 transition-transform transform hover:scale-110 duration-300" />
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-gray-400 mt-2">{project.description}</p>
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

export default Portfolio;
