import React from "react";
import Subdazi3 from "./Subdazi3";
const Subdazi2 = () => {
  return (
    <>
      <div className="mt-16 flex flex-col md:flex-row items-center gap-8 p-4 dazi-section">
        <div className="w-full md:w-1/2 max-w-[600px]">
          <img
            className="w-full h-auto object-cover rounded-lg"
            src="https://static.wixstatic.com/media/c837a6_72980fb941d04aa89bcbd71047aa53c0~mv2.jpg/v1/fill/w_926,h_741,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PhysicalStore.jpg"
            alt="DAZI Store"
          />
        </div>

        <div className="flex flex-col gap-6 w-full md:w-1/2 max-w-[600px]">
          <h1 className="text-2xl md:text-3xl font-bold">This is DAZI</h1>
          <p className="text-base md:text-lg leading-relaxed">
            This is a space to share more about the business: who's behind it,
            what it does and what this site has to offer. It's an opportunity to
            tell the story behind the business or describe a special service or
            product it offers. You can use this section to share the company's
            history or highlight a particular feature that sets it apart from
            competitors.
          </p>
          <div className="flex flex-col md:flex-row gap-6 mt-8 md:mt-24">
            <div className="w-full md:w-1/2">
              <h2 className="text-lg md:text-xl font-semibold mb-2">
                OPENING HOURS
              </h2>
              <p className="text-sm md:text-base">
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
              <p className="text-sm md:text-base">
                Saturday: 10:00 AM - 4:00 PM
              </p>
              <p className="text-sm md:text-base">Sunday: Closed</p>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-lg md:text-xl font-semibold mb-2">Address</h2>
              <p className="text-sm md:text-base">
                Addiss Ababa Instiute of Technology
              </p>
              <p className="text-sm md:text-base">Addis Ababa, State 12345</p>
              <p className="text-sm md:text-base">Ethiopia</p>
            </div>
          </div>
        </div>
      </div>
      <Subdazi3 />
    </>
  );
};

export default Subdazi2;
