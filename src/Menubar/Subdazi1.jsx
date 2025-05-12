import React, { useState, useEffect } from "react";

const QUOTES = [
  {
    title:
      "Love these sunglasses! Lightweight and stylish, they're perfect for everyday wear.",
    name: "JAKE MCCLAIN",
  },
  {
    title: "I've tried many brands, but these sunglasses stand out.",
    name: "PRIYA KAPOOR",
  },
  {
    title: "Best glasses I've tried. Comfortable and high-quality.",
    name: "MARCUS THOMPSON",
  },
];

const Subdazi1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextQuote = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % QUOTES.length);
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  };

  const prevQuote = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev - 1 + QUOTES.length) % QUOTES.length);
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextQuote, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-6">
      <div className="max-w-3xl mx-auto text-center">
        <div
          className={`transition-opacity duration-1000 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <blockquote className="text-xl sm:text-2xl font-serif text-gray-700 mb-4">
            "{QUOTES[currentIndex].title}"
          </blockquote>
          <cite className="text-lg font-semibold text-gray-900">
            - {QUOTES[currentIndex].name}
          </cite>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={prevQuote}
            disabled={isTransitioning}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors disabled:opacity-50 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextQuote}
            disabled={isTransitioning}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors disabled:opacity-50 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subdazi1;
