import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto border-b">
        <div className="text-2xl font-bold text-orange-600">JagoDigital</div>
        <button className="bg-stone-800 text-white px-5 py-2 rounded-full hover:bg-stone-700 transition">Login</button>
      </nav>
      <main className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-6">Aplikasi Fullstack <span className="text-orange-500">Pertama Anda</span></h1>
        <p className="text-lg text-stone-500 mb-10 max-w-xl mx-auto">Siap dihubungkan dengan database AWS Amplify.</p>
      </main>
    </div>
  );
}