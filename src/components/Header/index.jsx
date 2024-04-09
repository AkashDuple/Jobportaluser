import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useNavigate } from "react-router-dom";
import JobImage from "../../imgs/job.jpg";
import SearchBar from "../SearchBar";

function Header({ jobData }) {
  console.log("jobData", jobData);
  const navigate = useNavigate();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
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
    <div
      className="relative h-[40vh]  opacity-100  inset-0 gap-0"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "400px",
      }}
    >
      <Carousel
        responsive={responsive}
        showArrows={false} // Hide arrows
        autoPlay={true} // Start autoplay
        autoPlaySpeed={5000} // Set autoplay speed (optional)
        infinite={true} // Set infinite loop (optional)
      >
        {jobData.map((job, index) => (
          <div
            className="bg-cover bg-no-repeat bg-center flex flex-col gap-5 px-40 h-[60vh] items-left mt-0"
            style={{ backgroundImage: `url('${JobImage}')` }}
            key={index}
          >
            <div>
              <h1 className="text-4xl mt-20 text-white font-bold">
                {job.title}
              </h1>
              <h2 className="text-white font-bold">
                {job.location} | {job.subject}
              </h2>
            </div>
            <div>
              <button
                onClick={() => {
                  applyHandler(job._id);
                }}
                className="text-blue-500 border border-blue-500 px-10 py-2 rounded-md mt-5 font-semibold"
              >
                Apply
              </button>
            </div>
          </div>
        ))}
      </Carousel>

      <div className="absolute bottom-0 left-0 right-0 mx-auto w-[80%] shadow-lg  bg-white p-2  text-center">
        <SearchBar />
      </div>
    </div>
  );
}

export default Header;
