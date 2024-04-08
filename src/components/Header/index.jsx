import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

function Header() {
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
  return (
    <>
      <div className="h-[20vh] bg-slate-100 pt-0">
        <Carousel responsive={responsive}>
          <div className="flex flex-row justify-between w-full px-20 h-[20vh] items-center">
            <div>
              <h1 className="text-4xl">Software Engineer</h1>
              <h2>London</h2>
            </div>
            <div>
            <Link to={"/jobdetails"} className="text-4xl">Jobdetails</Link>
            </div>
          </div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
        </Carousel>
      </div>
    </>
  );
}

export default Header;
