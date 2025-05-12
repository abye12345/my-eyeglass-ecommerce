import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to home page
    navigate("/");

    // Function to attempt scrolling to Dazi section
    const scrollToDaziSection = () => {
      const daziSection = document.querySelector(".dazi-section");
      if (daziSection) {
        daziSection.scrollIntoView({ behavior: "smooth" });
        return true;
      }
      return false;
    };

    // Try to scroll immediately
    if (!scrollToDaziSection()) {
      // If not successful, retry a few times with increasing delays
      let attempts = 0;
      const maxAttempts = 5;
      const retryInterval = setInterval(() => {
        attempts++;
        if (scrollToDaziSection() || attempts >= maxAttempts) {
          clearInterval(retryInterval);
        }
      }, 200); // Try every 200ms
    }
  }, [navigate]);

  return (
    <div>
      <p>Redirecting to About section...</p>
    </div>
  );
};

export default About;
