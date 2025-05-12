import React from "react";
import { Link } from "react-router-dom";
import Subdazi1 from "./Subdazi1";
import Subdazi2 from "./Subdazi2";
const Dazi = () => {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row mx-0">
        <div className="relative w-full md:w-1/2">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5da918ce1cfeb6372a8c4e3f/1571454347444-WG4VTSUBS7P214OKGGWS/IVI_10.jpg"
            alt="Dazi product showcase"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4">
            <span className="block text-white text-4xl font-bold bg-black bg-opacity-50 p-2 mb-2">
              Handmade
              <br />
              Premium Eyewear
            </span>
            <Link
              to="/products"
              className="inline-flex items-center text-white font-medium py-2 px-6 text-lg group underline"
            >
              Shop Now
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
        <img
          src="https://static.wixstatic.com/media/c837a6_b64fc73a00df4838a8900e7d6eb1012c~mv2.jpg/v1/fill/w_948,h_671,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HeaderRight.jpg"
          alt="Dazi eyewear collection"
          className="w-full md:w-1/2 object-cover"
        />
      </div>
      {/* New Arrivals Section - Compact */}
      <section className="mt-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Title and CTA */}
          <div className="lg:w-1/4 lg:mr-8">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              New <br className="hidden sm:block" />
              Arrivals
            </h2>
            <Link
              to="/products"
              className="inline-flex items-center text-base group underline mt-2 hover:text-primary transition-colors"
            >
              Shop Now
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

          {/* Product Images - Compact */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <Link to="/condor">
                <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[4/3] flex items-center justify-center p-2 cursor-pointer relative group">
                  <span className="absolute top-2 left-2 bg-white px-2 py-1 rounded text-lg font-medium">
                    NEW
                  </span>
                  <span className="absolute bottom-2 left-2  px-2 py-1 text-lg font-serif">
                    CONDOR
                    <br />
                    $350.00
                  </span>
                  <img
                    src="https://www.americasbest.com/cdn-cgi/image/format=auto,fit=scale-down,width=400/medias/255830.webp?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDI5NDczNHxpbWFnZS9qcGVnfGFERXlMMmd4TkM4NE9EUTROVFV3TnpnNU1UVXdMekkxTlRnek1DNXFjR2N8MjlhY2I3YjhjZmMxZjdjMGRlMGRjOWY3ZjljNzA0YjRiZjZiNDg0MmI5OGU5ZjQwZWQ2ZjRhZWUyNjY2MjEzOQ"
                    alt="New Arrivals Product 1"
                    className="w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                    loading="lazy"
                  />
                </div>
              </Link>
              <Link to="/solaris">
                <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[4/3] flex items-center justify-center p-2 cursor-pointer relative group">
                  <span className="absolute top-2 left-2 bg-white px-2 py-1 rounded text-lg font-medium">
                    NEW
                  </span>
                  <span className="absolute bottom-2 left-2  px-2 py-1 text-lg font-serif">
                    SOLARIS
                    <br />
                    $250.00
                  </span>
                  <img
                    src="https://s3.zeelool.com/admin/product/image/aa19e1e6df3124db70715eb168f995cf.jpg?im=Resize%2Cwidth%3D800"
                    alt="New Arrivals Product 2"
                    className="w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                    loading="lazy"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
      <div className="bg-gray-100 mt-4 flex flex-col md:flex-row gap-4 p-6">
        {/* Image container */}
        <div className="flex-1 max-w-md lg:max-w-xl">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-md"
            src="https://static.wixstatic.com/media/c837a6_dff3cf733a3b4489b9b4a40bf02c8bb5~mv2.jpg/v1/fill/w_1131,h_1716,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ModelOrange.jpg"
            alt="Holiday Collection Model"
            loading="lazy"
          />
        </div>

        {/* Text content with positioned image */}
        <div className="flex-1 max-w-md text-center md:text-left relative pb-16">
          {" "}
          {/* Added relative positioning and padding-bottom */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Holiday
            <br />
            Collection
          </h1>
          <p className="mb-4">
            This is the space to introduce the Product
            <br /> section and showcase the types of products
            <br /> available.
          </p>
          {/* Call-to-action button */}
          <Link
            to="/products"
            className="inline-flex items-center text-base group underline mt-2 hover:text-primary transition-colors"
          >
            Shop Now
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
          {/* Bottom-right positioned image */}
          <img
            src="https://static.wixstatic.com/media/c837a6_25fa69665d4949b5a29d4e7e79a3eaf3~mv2.jpg/v1/fill/w_695,h_422,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/OdysseySide.jpg"
            className="absolute right-0 bottom-0 w-full  rounded-lg shadow-md"
            alt="Odyssey Side"
          />
        </div>
      </div>
      {/* impo!! */}
      <Subdazi1 />
      {/*!!!!!!fdfc vcfcffgg  vhjh!!*/}
      {/* New Arrivals Section - Compact */}
      <section className="mt-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Title and CTA */}
          <div className="lg:w-1/4 lg:mr-8">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Best <br className="hidden sm:block" />
              Sellers
            </h2>
            <Link
              to="/products"
              className="inline-flex items-center text-base group underline mt-2 hover:text-primary transition-colors"
            >
              Shop Now
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

          {/* Product Images - Compact */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <Link to="/odyes">
                <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[4/3] flex items-center justify-center p-2 cursor-pointer relative group">
                  <span className="absolute top-2 left-2 bg-white px-2 py-1 rounded text-lg font-medium">
                    BEST SELLER
                  </span>
                  <span className="absolute bottom-2 left-2  px-2 py-1 text-lg font-serif">
                    ODYSSEY
                    <br />
                    $350.00
                  </span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0nrznZv4121bOGqT8qkFNS38mlcRR3vIbtw&s"
                    alt="New Arrivals Product 1"
                    className="w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                    loading="lazy"
                  />
                </div>
              </Link>
              <Link to="/lumin">
                <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[4/3] flex items-center justify-center p-2 cursor-pointer relative group">
                  <span className="absolute top-2 left-2 bg-white px-2 py-1 rounded text-lg font-medium">
                    BEST SELLER
                  </span>
                  <span className="absolute bottom-2 left-2  px-2 py-1 text-lg font-serif">
                    LUMIN
                    <br />
                    $200.00
                  </span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtVwyJs0iKKRCXbygqx1bsUukVEIA5R7z4IA&s"
                    alt="New Arrivals Product 2"
                    className="w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                    loading="lazy"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* 55656ggghhbell*/}

      <section className="mt-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div className="lg:w-1/4 lg:mr-8"></div>
          {/* Product Images - Compact */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <Link to="/focus">
                <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[4/3] flex items-center justify-center p-2 cursor-pointer relative group">
                  <span className="absolute top-2 left-2 bg-white px-2 py-1 rounded text-lg font-medium">
                    BEST SELLER
                  </span>
                  <span className="absolute bottom-2 left-2  px-2 py-1 text-lg font-serif">
                    FOCUS
                    <br />
                    $250.00
                  </span>
                  <img
                    src="https://theeyewearcompany.com/storage/11924/EeGofTwAqdaNO24eEp22fk9rN5jRZOzPc50c6AxE.JPG"
                    alt="New Arrivals Product 1"
                    className="w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                    loading="lazy"
                  />
                </div>
              </Link>

              <Link to="/nebula">
                <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[4/3] flex items-center justify-center p-2 cursor-pointer relative group">
                  <span className="absolute top-2 left-2 bg-white px-2 py-1 rounded text-lg font-medium">
                    BEST SELLER
                  </span>
                  <span className="absolute bottom-2 left-2  px-2 py-1 text-lg font-serif">
                    NEBULA
                    <br />
                    $300.00
                  </span>
                  <img
                    src="https://www.i-dealoptics.com/Image/ShowImage?upc=842691107107&sku=FOCUS%20269PUR56&w=400"
                    alt="New Arrivals Product 2"
                    className="w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                    loading="lazy"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*....subgazi...*/}
      <Subdazi2 />
    </>
  );
};

export default Dazi;
