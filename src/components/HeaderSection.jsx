import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import JobImage from "/assets/imgs/homeBanner.jpg";

function HeaderSection({ jobData }) {
  const navigate = useNavigate();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const applyHandler = (_id) => {
    navigate(`/jobdetails`, { state: { itemId: _id } });
  };

  return (
    <div>
      <Carousel
        responsive={responsive}
        showArrows={false}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite={true}
      >
        {jobData?.length > 0 &&
          jobData?.map((job, index) => (
            <div
              className=" w-full h-[400px] md:h-[60vh] flex  items-center flex-start overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${JobImage})` }}
              key={index}
            >
              <>
                <div className="absolute inset-0 bg-black opacity-70  z-10"></div>

                <div className="absolute  inset-0 flex items-center justify-start text-white z-20 ml-16 md:ml-32 ">
                  <div className=" text-white ">
                    <h1 className="text-3xl font-bold mb-2">{job?.title}</h1>
                    <h2 className="font-bold mb-4">
                      {job.location} | {job.subject}
                    </h2>
                    <button
                      onClick={() => applyHandler(job?._id)}
                      className="bg-blue-600 text-white border border-blue-600   px-6 py-2 rounded-md font-semibold transition duration-300 hover:bg-blue-400 hover:text-white"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </>
            </div>
          ))}
      </Carousel>
    </div>
  );
}

export default HeaderSection;
