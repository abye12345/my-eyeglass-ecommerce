import React, { useState } from "react";

const Giftcard = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const amounts = [25, 50, 100, 150, 200];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="https://static.wixstatic.com/media/c837a6_66a889b76f964f1eac729b05857f9d50~mv2.jpg/v1/fill/w_677,h_451,al_c,lg_1,q_80,enc_auto/c837a6_66a889b76f964f1eac729b05857f9d50~mv2.jpg"
            alt="Gift Card"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">Dazi Gift Card</h1>
          <p className="text-gray-600">
            You can't go wrong with a gift card. Choose an amount and write a
            personalized message to make this gift your own.
          </p>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">
              Select Amount
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`p-4 text-center rounded-lg border-2 transition-all duration-200 cursor-pointer ${
                    selectedAmount === amount
                      ? "border-blue-500 bg-blue-50 text-blue-600"
                      : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>
          </div>

          {selectedAmount && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-lg font-medium text-gray-800">
                Selected Amount: ${selectedAmount}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Giftcard;
