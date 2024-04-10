import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function JobCard(props) {
  const [timeAgo, setTimeAgo] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (props?.createdAt) {
      const calculateTimeAgo = () => {
        const currentDate = new Date();
        const postedDate = new Date(props.createdAt);
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
      const intervalId = setInterval(calculateTimeAgo, 60000);

      return () => clearInterval(intervalId);
    }
  }, [props?.createdAt]);

  const applyHandler = (_id) =>
    navigate(`/jobdetails`, { state: { itemId: _id } });

  return (
    <div className="mb-2  w-full ">
      <div
        className="flex justify-between items-center px-6 py-4 bg-white rounded-md  shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103"
        onClick={() => {
          applyHandler(props?._id);
        }}
      >
        <div className="flex flex-col items-start gap-3">
          <h1
            className="text-lg font-semibold"
            onClick={() => {
              applyHandler(props?._id);
            }}
          >
            {props?.title}
          </h1>

          <p>{props.location}</p>
        </div>
        <div className="flex flex-col md:flex-row items-center  gap-4">
          <p className="text-gray-500 text-[12px] md:text-sm">
            Posted {timeAgo}
          </p>

          <button
            onClick={() => {
              applyHandler(props?._id);
            }}
            className="text-blue-500 border border-blue-500 px-4 py-1 md:px-10 md:py-2  rounded-md"
          >
            Apply
          </button>
          {/* </a> */}
        </div>
      </div>
    </div>
  );
}

export default JobCard;
