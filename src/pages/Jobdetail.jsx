import React, { useEffect } from "react";
import Submit from "../components/ApplyFormJob";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import JobBanner from "/assets/imgs/jobBanner.jpg";
import axios from "axios";
import API from "../ApiRoutes";
import { toast, Toaster } from "react-hot-toast";

const Jobdetail = () => {
  const [modal, setModal] = useState(false);
  const [data, setJobData] = useState({});
  const [timeAgo, setTimeAgo] = useState("");
  const [toaster, setToaster] = useState(false);

  const toastMessage = () => {
    setModal(false);
    // toast.success("Applied");
  };
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

  // if (toaster === 1) {
  //   toast.success("Successfully toasted!");
  // } else if (toaster === -1) {
  //   toast.error("error!");
  // }

  return (
    <div className="">
      <div>
        <Toaster />
      </div>
      <div
        style={{ backgroundImage: `url('${JobBanner}')` }}
        className="relative flex text-center bg-cover bg-center bg-no-repeat  items-center h-[45vh] justify-center text-4xl font-semibold bg-slate-100 shadow-lg  "
      >
        <div className="absolute inset-0 bg-black opacity-70  z-10"></div>

        {/* Job details */}
        <div className="absolute text- md:text-4xl  inset-0 flex items-center justify-center text-white z-20">
          Job details
        </div>
      </div>

      <div className="p-6">
        <p className="text-md  font-semibold inline-flex text-center rounded-full  text-amber-600  ">
          <Link to="/">Home</Link>
          <span className="px-2">{">>"}</span>
          <Link to="#">
            <span className="">Job-details</span>
          </Link>
        </p>
      </div>

      <div className=" mx-auto  py-10 px-4 w-full shadow-lg rounded-lg relative">
        {modal && (
          <div className="mr-40 ">
            <Submit
              id={id}
              title={data?.title}
              close={() => setModal(false)}
              onSubmitModal={toastMessage}
            />
          </div>
        )}

        <div className="flex justify-between mb-4 ">
          <h1 className=" fw-bold  text-xl md:text-4xl text-slate-800 ">
            {data.title}
          </h1>
          <button
            onClick={applyHandler}
            className="bg-blue-500 text-white text-sm px-6 py-1 rounded-md hover:bg-blue-600 "
          >
            Apply
          </button>
        </div>

        <div className="mb-2">
          <h2 className="">
            <b> Subject </b> : <span>{data?.subject}</span>
          </h2>

          <h2 className="">
            <b> Location : </b> <span>{data?.location}</span>
          </h2>
        </div>

        <div className="  border-b-[1px] border-b-[#afaeae] pb-2">
          <div className="text-sm my-1  inline-block  bg-indigo-100 text-indigo-600 rounded-full  px-2.5 py-1">
            Posted {timeAgo}
          </div>
        </div>

        <div className="flex w-full justify-between ">
          <div className="w-3/4">
            {" "}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-2 border-b-3 border-black py-2 pr-6 mt-6">
                Job Description
              </h2>
              <p dangerouslySetInnerHTML={{ __html: data?.description }} />
            </div>
          </div>
        </div>

        <div className="float-right ">
          <button
            onClick={applyHandler}
            className="bg-blue-500 text-white text-sm px-6 py-1 rounded-md hover:bg-blue-600 "
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jobdetail;
