import { Link } from "react-router-dom";
import React, { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [checkboxError, setCheckboxError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setCheckboxError("");

    if (!email) {
      setEmailError("Please enter your email address");
      return;
    }
    if (!isChecked) {
      setCheckboxError("Please check the box to subscribe");
      return;
    }

    // Form submission logic would go here
    alert("Thank you for subscribing!");
    setEmail("");
    setIsChecked(false);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
        <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Newsletter Section */}
            <div className="p-8 md:p-12 md:w-1/2">
              <h1 className="font-black text-4xl mb-2">DAZI</h1>
              <h2 className="text-2xl mt-8 mb-4 font-normal">
                Subscribe to our newsletter
              </h2>
              <p className="text-base mb-8 text-gray-600">
                and be among the first to hear about new arrivals, events and
                special offers.
              </p>

              <form onSubmit={handleSubmit} className="max-w-md">
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Email address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full border-b border-black py-2 px-1 focus:outline-none ${
                      emailError ? "border-red-500" : ""
                    }`}
                    placeholder="your@email.com"
                  />
                  {emailError && (
                    <p className="text-red-500 text-xs mt-1">{emailError}</p>
                  )}
                </div>

                <div className="flex items-start mt-6 mb-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="newsletterCheckbox"
                      className="h-4 w-4 mr-2"
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                    />
                    <label
                      htmlFor="newsletterCheckbox"
                      className="text-sm text-gray-700 cursor-pointer"
                    >
                      Yes, subscribe me to your newsletter. *
                    </label>
                  </div>
                </div>
                {checkboxError && (
                  <p className="text-red-500 text-xs mt-1 mb-4">
                    {checkboxError}
                  </p>
                )}

                <button
                  type="submit"
                  className="border border-black px-6 py-2 hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Links Section */}
            <div className="bg-gray-100 p-8 md:p-12 md:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold mb-4 text-lg">SHOP</h3>
                  <ul className="text-sm space-y-2 text-gray-600">
                    <li className="hover:text-black cursor-pointer">
                      <Link to="/products">All Products</Link>
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      <Link to="/newarrival">New Arrivals </Link>
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      <Link to="/sunglasses">Sunglasses</Link>
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      <Link to="/eyeglasses">Eyeglasses</Link>
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      <Link to="/about">About</Link>
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      <Link to="/gift">Gift Card</Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-4 text-lg">COMPANY</h3>
                  <ul className="text-sm space-y-2 text-gray-600">
                    <li className="hover:text-black cursor-pointer">
                      <a href="mailto:abyetensae@gmail.com">
                        {" "}
                        abyetensae@gmail.com
                      </a>
                    </li>
                    <li className="hover:text-black">0993598089</li>
                    <li className="hover:text-black">
                      Addis Ababa bole Street
                    </li>
                    <li className="hover:text-black">Ethiopia, Addis Ababa</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-4 text-lg">FOLLOW BACK</h3>
                  <ul className="text-sm space-y-2 text-gray-600">
                    <li className="hover:text-black cursor-pointer">
                      <a
                        target="_new"
                        href="https://web.facebook.com/?_rdc=1&_rdr#"
                      >
                        Facebook
                      </a>
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      <a target="_new" href="https://www.instagram.com/">
                        Instagram
                      </a>
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      <a target="_new" href="https://www.tiktok.com/en/">
                        Tiktok
                      </a>
                    </li>
                    <li className="hover:text-black cursor-pointer">X</li>
                    <li className="hover:text-black cursor-pointer">
                      Pinterest
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-4 text-lg">HELPFUL LINKS</h3>
                  <ul className="text-sm space-y-2 text-gray-600">
                    <li className="hover:text-black cursor-pointer">FAQ</li>
                    <li className="hover:text-black cursor-pointer">
                      Privacy Policy
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Refund Policy
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Shipping Policy
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Terms & Conditions
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Accessibility Statement
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterForm;
