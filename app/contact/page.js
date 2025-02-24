'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    alert('Pesan berhasil dikirim!');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-white-900 text-black flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Hubungi Saya</h1>
      <p className="text-center max-w-2xl text-black-300 mb-8">
        Jika Anda ingin berkolaborasi atau memiliki pertanyaan, silakan hubungi saya melalui informasi di bawah ini atau kirim pesan langsung melalui formulir.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="bg-blue-800 p-6 rounded-2xl text-center flex flex-col items-center shadow-lg">
          <span className="text-blue-400 text-2xl">📧</span>
          <h2 className="text-xl font-semibold mt-2">Email</h2>
          <p className="text-gray-400 mt-1">dzakyanandrashif@gmail.com</p>
        </div>
        <div className="bg-blue-800 p-6 rounded-2xl text-center flex flex-col items-center shadow-lg">
          <span className="text-green-400 text-2xl">📞</span>
          <h2 className="text-xl font-semibold mt-2">Telepon</h2>
          <p className="text-gray-400 mt-1">0838-2928-2472</p>
        </div>
        <div className="bg-blue-800 p-6 rounded-2xl text-center flex flex-col items-center shadow-lg">
          <span className="text-red-400 text-2xl">📍</span>
          <h2 className="text-xl font-semibold mt-2">Lokasi</h2>
          <p className="text-gray-400 mt-1">Bandung, Indonesia</p>
        </div>
      </div>

      <div className="mt-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Kirim Pesan</h2>
        <input 
          type="text" 
          placeholder="Masukkan pesan" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          className="w-full p-2 mb-4 rounded-lg bg-white-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          className="w-full bg-blue-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-full transition"
          onClick={handleSendMessage}
        >
          Kirim Pesan
        </button>
      </div>
      
      <button className="mt-8 bg-blue-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-full transition">
        Kembali ke Beranda
      </button>
    </div>
  );
};

export default ContactForm;
