import React, { useEffect } from "react";
import Submit from "./components/Submit";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import job from "./imgs/job2.jpg"
import axios from "axios";
import API from "./ApiRoutes";

const Jobdetails3 = () => {
  const [modal, setModal] = useState(false);
  const [data, setJobData] = useState({});
  const [timeAgo, setTimeAgo] = useState("");

  const location = useLocation();
  const id = location.state.itemId;
  console.log(id);
  const applyHandler = () => {
    console.log("Sumbitmodal");
    setModal(true);
  };

  const fetchJobDetails = async () => {
    try {
      const fetch = await axios.get(`${API.JOB_URL}/${id}`);
      console.log("fetch", fetch);
      setJobData(fetch.data.data);
    } catch (error) {}
  };
  console.log("data", data);
  useEffect(() => {
    fetchJobDetails();
  }, []);

  useEffect(() => {
    const calculateTimeAgo = () => {
      const currentDate = new Date();
      const postedDate = new Date(data.createdAt);
      const timeDifference = Math.abs(currentDate - postedDate); // in milliseconds

      const seconds = Math.floor(timeDifference / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      if (days > 0) {
        setTimeAgo(`${days} day${days > 1 ? "s" : ""} ago`);
      } else if (hours > 0) {
        setTimeAgo(`${hours} hour${hours > 1 ? "s" : ""} ago`);
      } else if (minutes > 0) {
        setTimeAgo(`${minutes} minute${minutes > 1 ? "s" : ""} ago`);
      } else {
        setTimeAgo("just now");
      }
    };

    calculateTimeAgo();

    // Refresh time every minute
    const intervalId = setInterval(calculateTimeAgo, 60000);

    return () => clearInterval(intervalId);
  }, [data.createdAt]);

  return (
    <div className="">
    <div className="relative flex text-center h-[400px] items-center justify-center text-4xl font-semibold bg-slate-100 shadow-lg  overflow-hidden">
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black opacity-70  z-10"></div>
  
  {/* Image */}
  <div className="absolute inset-0 flex items-center justify-center z-0">
    <img src={job} className="w-full h-[400px] rounded-lg" />
  </div>
  
  {/* Job details */}
  <div className="absolute text-5xl inset-0 flex items-center justify-center text-white z-20">
    Job details.
  </div>
</div>



      <div className="container mx-auto px-4 p-10 mt-5 bg-slate-100 shadow-lg rounded-lg">
        {modal && (
          <div className="mr-40">
            <Submit id={id} title={data.title} close={() => setModal(false)} />
          </div>
        )}
        <button
          onClick={applyHandler}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 float-right"
        >
          Apply
        </button>

        <div className="flex flex-col justify-center items-center border-b-[1px] border-b-[#afaeae]">
          <h1 className="  mb-4 text-4xl md:text-4xl text-slate-800 ">
            {data.title}
          </h1>
          <div className="flex flex-row justify-between w-full">
            {/* <p>Demo:data</p> */}
          </div>
          <div className="flex flex-row justify-between w-full  px-5 gap-0">
            <p className="text-lg mb-4 font-semibold inline-flex text-center rounded-full  text-amber-600 px-2.5 py-1 ms-4">
              <Link to="/">Home</Link>
              <span className="px-2">{">>"}</span>
              <Link to="#">Job-details</Link>
            </p>
            <p className="text-lg mb-4  inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1">
              Posted {timeAgo}
            </p>
          </div>
        </div>

        <div className="flex w-full justify-between ">
          {/* Left side */}
          <div className="w-3/4">
            {" "}
            {/* Take at least 70% of the area */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-2 border-b-3 border-black py-2 pr-6 mt-6">
                Job Description
              </h2>
              <p dangerouslySetInnerHTML={{ __html: data.description }} />
            </div>
          </div>

          {/* Right side */}
          <div className="w-1/4 ml-10 mt-8">
            {" "}
            {/* Take about 25% of the area */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-2 border-b-3 border-black py-2 pr-6">
                Subject
              </h2>
              <span>{data.subject}</span>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-2 border-b-3 border-black py-2 pr-6">
                Location
              </h2>
              <span>{data.location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobdetails3;
