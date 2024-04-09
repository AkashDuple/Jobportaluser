import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useLocation, useNavigate } from "react-router-dom";

function JobCard(props) {
  const [timeAgo, setTimeAgo] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
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

    // Refresh time every minute
    const intervalId = setInterval(calculateTimeAgo, 60000);

    return () => clearInterval(intervalId);
  }, [props.createdAt]);

  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff(props.postedOn, "day");

  const applyHandler = (_id) => {
    navigate(`/jobdetails`, { state: { itemId: _id } });
  };
  return (
    <div className="mx-40 mb-4">
      <div className="flex justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-lg font-semibold">{props.title}</h1>
          <p>{props.location}</p>
          <div className="flex items-center gap-2">
            {/* {props.skills.map((skill,i) => (
                        <p key={i} className='text-gray-500 py-1 px-2 rounded-md border border-black'>{skill}</p>
                    ))} */}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-gray-500">Posted {timeAgo}</p>
          <a href={props.job_link} target="_blank" rel="noopener noreferrer">
            <button
              onClick={() => {
                applyHandler(props._id);
              }}
              className="text-blue-500 border border-blue-500 px-10 py-2 rounded-md"
            >
              Apply
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
