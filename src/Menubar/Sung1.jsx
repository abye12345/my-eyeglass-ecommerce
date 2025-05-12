import React, { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "SOLARIS",
    price: 250,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHe7n48Xyy1J-h2QHs8PcVyiqBo_dBN7OOPA&s",
    sku: "32095721049751",
  },
  {
    id: 2,
    name: "CONDOR",
    price: 350,
    image:
      "https://s3.zeelool.com/admin/product/image/aa19e1e6df3124db70715eb168f995cf.jpg?im=Resize%2Cwidth%3D800",
    sku: "32095721049750",
  },
];

const Sung1 = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const currentProduct = products[currentProductIndex];
  const isFirstProduct = currentProductIndex === 0;
  const isLastProduct = currentProductIndex === products.length - 1;

  const toggleSection = (section) => {
    switch (section) {
      case "product":
        setShow(!show);
        setShow1(false);
        setShow2(false);
        break;
      case "return":
        setShow(false);
        setShow1(!show1);
        setShow2(false);
        break;
      case "shipping":
        setShow(false);
        setShow1(false);
        setShow2(!show2);
        break;
      default:
        break;
    }
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    setQuantity(value >= 1 ? value : 1);
  };

  const handleNext = () => {
    if (!isLastProduct) {
      setCurrentProductIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (!isFirstProduct) {
      setCurrentProductIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="mt-24 max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <div className="flex gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-gray-900">
            Home
          </Link>
          <span>&gt;</span>
          <div className="text-gray-900">{currentProduct.name}</div>
        </div>
        <div className="text-sm text-gray-600">
          <button
            onClick={handlePrevious}
            disabled={isFirstProduct}
            className={`cursor-pointer hover:text-gray-900 ${
              isFirstProduct ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Previous
          </button>
          <span className="mx-2">|</span>
          <button
            onClick={handleNext}
            disabled={isLastProduct}
            className={`cursor-pointer hover:text-gray-900 ${
              isLastProduct ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Next
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-14">
        <div>
          <img
            src={currentProduct.image}
            alt={currentProduct.name}
            className="w-full max-w-md mx-auto"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{currentProduct.name}</h1>
          <p className="text-gray-600">SKU: {currentProduct.sku}</p>
          <p className="text-2xl font-semibold">
            ${currentProduct.price.toFixed(2)}
          </p>
          <p className="text-gray-700">
            I'm a product description. I'm a great place to add more details
            about your product such as sizing, material, care instructions and
            cleaning instructions.
          </p>

          <div className="flex items-center mt-6">
            <button
              onClick={handleDecrement}
              className="px-3 py-1 border rounded-l-md hover:bg-gray-100 cursor-pointer"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={handleInputChange}
              min="1"
              className="border-t border-b w-16 text-center focus:outline-none py-1"
            />
            <button
              onClick={handleIncrement}
              className="px-3 py-1 border rounded-r-md hover:bg-gray-100 cursor-pointer"
            >
              +
            </button>
          </div>
          <button className="mt-6 px-6 py-2 bg-black text-white hover:bg-gray-800 transition cursor-pointer border-1">
            Add to Cart
          </button>
          <button className="mt-6 px-6 py-2 hover:bg-gray-800 transition cursor-pointer border-1 ml-4 hover:text-white">
            Buy Now
          </button>
          <div className="border-t border-gray-200 pt-4 mt-4">
            <button
              onClick={() => toggleSection("product")}
              className="w-full flex justify-between items-center py-3 border-b border-gray-200 hover:text-gray-900 transition-colors cursor-pointer"
            >
              <span>Product Info</span>
              <span className="text-xl">{show ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                show ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {show && (
                <p className="py-4 text-gray-700">
                  I'm a product detail. I'm a great place to add more
                  information about your product such as sizing, material, care
                  and cleaning instructions. This is also a great space to write
                  what makes this product special and how your customers can
                  benefit from this item.
                </p>
              )}
            </div>

            <button
              onClick={() => toggleSection("return")}
              className="w-full flex justify-between items-center py-3 border-b border-gray-200 hover:text-gray-900 transition-colors cursor-pointer"
            >
              <span>Return and Refund Policy</span>
              <span className="text-xl">{show1 ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                show1 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {show1 && (
                <p className="py-4 text-gray-700">
                  I'm a Return and Refund policy. I'm a great place to let your
                  customers know what to do in case they are dissatisfied with
                  their purchase. Having a straightforward refund or exchange
                  policy is a great way to build trust and reassure your
                  customers that they can buy with confidence.
                </p>
              )}
            </div>

            <button
              onClick={() => toggleSection("shipping")}
              className="w-full flex justify-between items-center py-3 hover:text-gray-900 transition-colors cursor-pointer"
            >
              <span>Shipping Info</span>
              <span className="text-xl">{show2 ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                show2 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {show2 && (
                <p className="py-4 text-gray-700">
                  I'm a shipping policy. I'm a great place to add more
                  information about your shipping methods, packaging and cost.
                  Providing straightforward information about your shipping
                  policy is a great way to build trust and reassure your
                  customers that they can buy from you with confidence.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sung1;
