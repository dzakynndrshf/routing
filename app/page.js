import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="max-w-3xl text-center">
        <div className="flex justify-center">
          <Image
            src="/dzaky.JPG" // Ganti dengan path foto kamu
            alt="Your Name"
            width={200}
            height={200}
            className="rounded-full border-4 border-blue-500 shadow-lg"
          />
        </div>
        <h1 className="text-4xl font-bold mt-4 text-blue-600">Dzaky Anand Rashif</h1>
        <h2 className="text-xl font-semibold text-black-700 mt-2">Mahasiswa</h2>
        <p className="mt-4 text-lg text-gray-600">
          Aku lahir di tahun 2004, pada saat Orang tua ku menikah aku tidak di undang saat itu, aku sangat sedih sekali
        </p>
        <div className="mt-6">
          <a
            href="contact"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}