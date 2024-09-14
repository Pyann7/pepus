import React, { useState, useEffect } from "react";
import { Book, RotateCcw, MapPin } from "lucide-react";

const LoadingScreen = () => (
  <div className="fixed inset-0 bg-indigo-600 flex items-center justify-center z-50">
    <div className="text-white text-center">
      <svg
        className="w-20 h-20 mx-auto mb-4 animate-bounce"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        ></path>
      </svg>
      <h2 className="text-2xl font-bold">LibraTrack</h2>
    </div>
  </div>
);

const LibraryHeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const visibilityTimer = setTimeout(() => {
        setIsVisible(true);
      }, 100); // Small delay to ensure smooth transition

      return () => clearTimeout(visibilityTimer);
    }
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center p-4 overflow-hidden">
      <div
        className={`max-w-6xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8 lg:p-12">
            <div className="flex items-center mb-6">
              <svg
                className="w-10 h-10 text-indigo-600 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                ></path>
              </svg>
              <h2 className="text-2xl font-bold text-gray-800">LibraTrack</h2>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              Perpustakaan Digital Modern
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Kelola perpustakaan Anda dengan mudah dan efisien.
            </p>
            <div className="space-y-6">
              {[
                {
                  icon: Book,
                  color: "text-blue-500",
                  text: "Pinjam buku dengan satu klik",
                },
                {
                  icon: RotateCcw,
                  color: "text-green-500",
                  text: "Kembalikan buku tanpa antri",
                },
                {
                  icon: MapPin,
                  color: "text-purple-500",
                  text: "Lacak lokasi buku di rak perpustakaan",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 transform transition-all duration-500 ease-out ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div
                    className={`p-2 rounded-full ${item.color} bg-opacity-20`}
                  >
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <span className="text-gray-700 text-lg">{item.text}</span>
                </div>
              ))}
            </div>
            <button className="mt-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
              Mulai Jelajahi
            </button>
          </div>
          <div className="lg:w-1/2 bg-white flex items-center justify-center p-8 lg:p-12">
            <div
              className={`relative transform transition-all duration-1000 ease-out ${
                isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            >
              <img
                src="https://img.freepik.com/free-photo/men-carrying-backpack-searching-books-library_1150-24661.jpg?ga=GA1.2.513483817.1695048291&semt=ais_hybrid"
                alt="Library illustration"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryHeroSection;
