import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sunglasses = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [priceRange, setPriceRange] = useState(50);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleshow = () => setShow(!show);
  const handleshow1 = () => setShow1(!show1);
  const handleshow2 = () => setShow2(!show2);

  const handlePriceChange = (e) => setPriceRange(e.target.value);

  const handleColorToggle = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleSizeToggle = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <div className="flex flex-col lg:flex-row lg:gap-24 px-4 sm:px-6 mt-16">
      {/* Filters Sidebar */}
      <div className="text-gray-600 lg:w-1/4">
        <div className="flex gap-2 text-sm">
          <Link to="/" className="hover:text-gray-900">
            Home
          </Link>
          <span>&gt;</span>
          <div className="text-gray-900">All Products</div>
        </div>

        <div className="mt-6 lg:mt-12">
          <h1 className="border-b pb-4">BROWSE BY</h1>
          <div className="flex flex-col space-y-3 mt-2">
            <Link to="/products">All products</Link>
            <Link to="/newarrival">New Arrivals</Link>
            <Link to="/">Best Sellers</Link>
            <Link to="/sunglasses">Sunglasses</Link>
            <Link to="/eyeglasses">Eyeglasses</Link>
          </div>
        </div>

        <div className="mt-6 lg:mt-12">
          <h1 className="border-b pb-4">Filter by</h1>
          <div className="flex flex-col mt-2">
            {/* Price Filter */}
            <div className="border-b pb-4">
              <button
                onClick={handleshow}
                className="w-full flex justify-between items-center cursor-pointer"
              >
                <span>Price</span>
                <span className="text-2xl">{show ? "-" : "+"}</span>
              </button>
              <div
                className={`transition-all duration-300 ${
                  show ? "max-h-40" : "max-h-0"
                } overflow-hidden`}
              >
                <input
                  type="range"
                  min="190"
                  max="350"
                  value={priceRange}
                  onChange={handlePriceChange}
                  className="w-full mt-2"
                />
                <div className="flex justify-between mt-2 text-sm">
                  <span>${190}</span>
                  <span>${350}</span>
                </div>
              </div>
            </div>

            {/* Color Filter */}
            <div className="border-b pb-4">
              <button
                onClick={handleshow1}
                className="w-full flex justify-between items-center cursor-pointer"
              >
                <span>Color</span>
                <span className="text-2xl">{show1 ? "-" : "+"}</span>
              </button>
              <div
                className={`transition-all duration-300 ${
                  show1 ? "max-h-40" : "max-h-0"
                } overflow-hidden`}
              >
                <div className="mt-2 flex gap-4">
                  {["red", "green", "yellow"].map((color) => (
                    <button
                      key={color}
                      className={`w-5 h-5 rounded-full bg-${color}-400 border-2 ${
                        selectedColors.includes(color)
                          ? "border-black"
                          : "border-transparent"
                      }`}
                      onClick={() => handleColorToggle(color)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Size Filter */}
            <div className="border-b pb-4">
              <button
                onClick={handleshow2}
                className="w-full flex justify-between items-center cursor-pointer"
              >
                <span>Size</span>
                <span className="text-2xl">{show2 ? "-" : "+"}</span>
              </button>
              <div
                className={`transition-all duration-300 ${
                  show2 ? "max-h-48" : "max-h-0"
                } overflow-hidden`}
              >
                <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                  {["250ml", "500ml", "80ml", "Large", "Medium", "Small"].map(
                    (size) => (
                      <label key={size} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={selectedSizes.includes(size)}
                          onChange={() => handleSizeToggle(size)}
                        />
                        {size}
                      </label>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="flex-1 lg:mt-16 mt-8">
        <h1 className="text-2xl lg:text-3xl">Sunglasses</h1>
        <p className="mt-4 text-sm lg:text-base">
          Sunglasses are protective eyewear designed to shield eyes from harmful
          UV rays and bright sunlight. They typically have darkened or polarized
          lenses to reduce glare and improve visual comfort. Sunglasses come in
          various shapes, sizes, and styles, and some can even have prescription
          lenses.
        </p>
        <p className="mt-4 text-gray-600 text-sm lg:text-base">11 Products</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Product Items */}
          <Link to="/sung1">
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[4/3] relative group">
              <span className="absolute top-2 left-2 bg-white px-3 py-1 rounded text-sm lg:text-base">
                BEST SELLER
              </span>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT19O1Yr0y_ht8fvDBF5sHRnsvomzHitnDwsaZXJc4EZl-6rqYa_ez_btbZMKX8Z5JJEqI&usqp=CAU"
                alt="Focus product"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-2 left-2 text-sm lg:text-base">
                <p className="font-serif">FOCUS</p>
                <p>$250.00</p>
              </div>
            </div>
          </Link>

          <Link to="/Sung2">
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[4/3] relative group">
              <span className="absolute top-2 left-2 bg-white px-3 py-1 rounded text-sm lg:text-base">
                BEST SELLER
              </span>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBs3m5i7d-uBC6UswxEP2jxG9zXwGo_3DUmg&s"
                alt="Nebula product"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-2 left-2 text-sm lg:text-base">
                <p className="font-serif">NEBULA</p>
                <p>$300.00</p>
              </div>
            </div>
          </Link>

          {/* Add more product items here following the same pattern */}
        </div>
      </div>
    </div>
  );
};

export default Sunglasses;
