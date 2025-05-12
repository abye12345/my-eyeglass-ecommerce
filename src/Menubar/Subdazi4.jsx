import React from "react";
import { Link } from "react-router-dom";
const Subdazi4 = () => {
  return (
    <>
      <div className="bg-yellow-300 w-full h-auto md:h-[500px] flex flex-col md:flex-row justify-between px-4 md:px-8 py-8 md:py-0">
        <div className="max-w-md mx-auto md:mx-0 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Gift Card</h1>
          <div className="mt-8 md:mt-36">
            <h1 className="text-2xl md:text-4xl font-semibold mb-2">
              Looking for the perfect gift?
            </h1>
            <p className="text-gray-700 mb-4 text-base md:text-lg">
              Gift cards are the ultimate choice for any occasion. Let your
              friends and family pick their favorite frames from our wide
              selection of stylish glasses
            </p>
            <Link
              to="/gift"
              className="inline-flex items-center text-base group underline mt-2 hover:text-primary transition-colors"
            >
              Gift Card
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="h-full flex items-center justify-center mt-8 md:mt-0">
          <img
            src="https://static.wixstatic.com/media/c837a6_3e57aa37f05c428fbe93d96301ffe50c~mv2.jpg/v1/fill/w_936,h_741,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ModelYellow.jpg"
            alt="Gift Card Model"
            className="h-[300px] md:h-[480px] w-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Subdazi4;
