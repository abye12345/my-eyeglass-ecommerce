import React, { useEffect, useRef, useState } from "react";
import Subdazi4 from "./Subdazi4";
const Subdazi3 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Reset animation faster
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => setIsVisible(true), 10);
          }, 1500);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={componentRef} className="relative h-[500px] overflow-hidden">
        <img
          src="https://static.wixstatic.com/media/c837a6_332616449743474e95ffa7e98ac65bcc~mv2.jpg/v1/fill/w_1898,h_1167,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/glasses%20image%20-%20juno%20collection.jpg"
          className={`w-full h-full object-cover ${
            isVisible ? "animate-fadeIn" : ""
          }`}
          alt="Juno Collection"
        />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)] ${
            isVisible ? "animate-fadeIn" : ""
          }`}
        >
          <h3 className="text-xl font-medium">COMMING SOON</h3>
          <h1 className="text-4xl font-bold my-2">JUNO COLLECTION</h1>
          <h2 className="text-2xl font-semibold">Spring 2035</h2>
        </div>
        {/* Decorative light effects */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
          ${isVisible ? "animate-shimmer" : "opacity-0"} 
          transition-opacity duration-300`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 
          ${isVisible ? "animate-sweep" : "opacity-0"} 
          transition-opacity duration-300`}
        />
      </div>
      <Subdazi4 />
    </>
  );
};

export default Subdazi3;
