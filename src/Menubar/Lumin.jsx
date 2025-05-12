import React, { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: " LUMIN",
    price: 200,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0nrznZv4121bOGqT8qkFNS38mlcRR3vIbtw&s",
    sku: "32095721049751",
  },
  {
    id: 2,
    name: "ODYES",
    price: 350,
    image:
      "https://www.americasbest.com/cdn-cgi/image/format=auto,fit=scale-down,width=400/medias/255830.webp?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDI5NDczNHxpbWFnZS9qcGVnfGFERXlMMmd4TkM4NE9EUTROVFV3TnpnNU1UVXdMekkxTlRnek1DNXFjR2N8MjlhY2I3YjhjZmMxZjdjMGRlMGRjOWY3ZjljNzA0YjRiZjZiNDg0MmI5OGU5ZjQwZWQ2ZjRhZWUyNjY2MjEzOQ",
    sku: "32095721049752", // Fixed duplicate SKU
  },
  {
    id: 3,
    name: "FOCUS",
    price: 250,
    image:
      "https://theeyewearcompany.com/storage/11924/EeGofTwAqdaNO24eEp22fk9rN5jRZOzPc50c6AxE.JPG",
    sku: "32095721049753", // Fixed duplicate SKU
  },
  {
    id: 4,
    name: "NEBULA",
    price: 300,
    image:
      "https://www.i-dealoptics.com/Image/ShowImage?upc=842691107107&sku=FOCUS%20269PUR56&w=400",
    sku: "32095721049754", // Fixed duplicate SKU
  },
];

const Lumin = () => {
  const [activeSection, setActiveSection] = useState(null); // Simplified accordion state
  const [quantity, setQuantity] = useState(1);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const currentProduct = products[currentProductIndex];
  const isFirstProduct = currentProductIndex === 0;
  const isLastProduct = currentProductIndex === products.length - 1;

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    } else {
      setQuantity(1);
    }
  };

  const handleNext = () => {
    if (!isLastProduct) {
      setCurrentProductIndex((prev) => prev + 1);
      setActiveSection(null); // Reset accordion when changing products
    }
  };

  const handlePrevious = () => {
    if (!isFirstProduct) {
      setCurrentProductIndex((prev) => prev - 1);
      setActiveSection(null); // Reset accordion when changing products
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
            aria-label="Previous product"
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
            aria-label="Next product"
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
              aria-label="Decrease quantity"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={handleInputChange}
              min="1"
              className="border-t border-b w-16 text-center focus:outline-none py-1"
              aria-label="Quantity"
            />
            <button
              onClick={handleIncrement}
              className="px-3 py-1 border rounded-r-md hover:bg-gray-100 cursor-pointer"
              aria-label="Increase quantity"
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
              aria-expanded={activeSection === "product"}
              aria-controls="product-info"
            >
              <span>Product Info</span>
              <span className="text-xl">
                {activeSection === "product" ? "-" : "+"}
              </span>
            </button>
            <div
              id="product-info"
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeSection === "product"
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {activeSection === "product" && (
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
              aria-expanded={activeSection === "return"}
              aria-controls="return-policy"
            >
              <span>Return and Refund Policy</span>
              <span className="text-xl">
                {activeSection === "return" ? "-" : "+"}
              </span>
            </button>
            <div
              id="return-policy"
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeSection === "return"
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {activeSection === "return" && (
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
              aria-expanded={activeSection === "shipping"}
              aria-controls="shipping-info"
            >
              <span>Shipping Info</span>
              <span className="text-xl">
                {activeSection === "shipping" ? "-" : "+"}
              </span>
            </button>
            <div
              id="shipping-info"
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeSection === "shipping"
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {activeSection === "shipping" && (
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

export default Lumin;
