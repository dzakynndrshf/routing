'use client';

import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white-900 text-gray flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Tentang Saya</h1>
      <p className="text-center max-w-2xl text-black-300 mb-8">
        Saya adalah mahasiswa semester 4 di salah satu universitas swasta di Bandung Timur,
        dengan minat besar dalam pengembangan website dan teknologi web. Saya selalu antusias
        dalam mempelajari hal baru, terutama dalam dunia pemrograman dan desain web.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl">
        {/* Pengalaman */}
        <div className="bg-blue-800 p-6 rounded-2xl text-center flex flex-col items-center shadow-lg">
          <div className="text-blue-400 text-4xl mb-4">💼</div>
          <h2 className="text-xl font-semibold">Pengalaman</h2>
          <p className="text-gray-400 mt-2">
            Memiliki pengalaman dalam membangun website dengan teknologi modern seperti Next.js dan Tailwind CSS.
          </p>
        </div>

        {/* Pendidikan */}
        <div className="bg-blue-800 p-6 rounded-2xl text-center flex flex-col items-center shadow-lg">
          <div className="text-white-400 text-4xl mb-4">🎓</div>
          <h2 className="text-xl font-semibold">Pendidikan</h2>
          <p className="text-gray-400 mt-2">
            Mahasiswa semester 4 di bidang Sistem Informasi, aktif mengikuti berbagai seminar dan organisasi.
          </p>
        </div>

        {/* Keahlian */}
        <div className="bg-blue-800 p-6 rounded-2xl text-center flex flex-col items-center shadow-lg">
          <div className="text-yellow-400 text-4xl mb-4">⚡</div>
          <h2 className="text-xl font-semibold">Keahlian</h2>
          <p className="text-gray-400 mt-2">
            Menguasai HTML, CSS, JavaScript, serta framework seperti React.js dan Next.js untuk pengembangan website modern.
          </p>
        </div>
      </div>

      <a 
      href='/'
      className="mt-8 bg-blue-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-full transition">
        Kembali ke Beranda
      </a>
    </div>
  );
};

export default About;
