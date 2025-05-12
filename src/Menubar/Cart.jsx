import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  // Mock cart data - in a real app, this would come from a state management solution
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "FOCUS",
      price: 200,
      quantity: 1,
      image:
        "https://theeyewearcompany.com/storage/11924/EeGofTwAqdaNO24eEp22fk9rN5jRZOzPc50c6AxE.JPG",
    },
    {
      id: 2,
      name: "LUMIN",
      price: 250,
      quantity: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0nrznZv4121bOGqT8qkFNS38mlcRR3vIbtw&s",
    },
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateShipping = () => {
    return calculateSubtotal() > 0 ? 10 : 0;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-24">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">Your cart is empty</p>
          <Link
            to="/"
            className="inline-block px-6 py-2 bg-black text-white hover:bg-gray-800 transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 py-6 border-b"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover"
                />
                <div className="flex-grow">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 border rounded hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 border rounded hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 hover:text-red-800 text-sm mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${calculateSubtotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${calculateShipping().toFixed(2)}</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 px-6 py-3 bg-black text-white hover:bg-gray-800 transition">
                Proceed to Checkout
              </button>
              <Link
                to="/"
                className="block text-center mt-4 text-gray-600 hover:text-gray-900"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
