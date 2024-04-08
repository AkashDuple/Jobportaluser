import React from "react";
import Submit from "./components/Submit";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Jobdetails3 = () => {
  const [modal, setModal] = useState(false);

  const applyHandler = () => {
    console.log("Sumbitmodal");
    setModal(true);
  };

  return (
    <div className="">
      <div className="relative flex text-center h-[100px] items-center justify-center text-4xl font-semibold bg-slate-100 shadow-lg rounded-lg">
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="" className="w-full h-auto" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center ">
          Jobdetails.
        </div>
      </div>

      <div className="container mx-auto px-4 p-10 mt-5 bg-slate-100 shadow-lg rounded-lg">
        {modal && (
          <div className="mr-40">
            <Submit close={() => setModal(false)} />
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
            Graphic Designer
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
              Posted on: 5th April 2024
            </p>
          </div>
        </div>

        <div className="d-flex flex w-full  gap-10">
          <div className="ml-20">
            <div className="mb-8 ">
              <h2 className="text-xl font-bold mb-2 border-b-[3px] border-b-[black] py-2 pr-6 mt-6 w-max ">
                Job Description
              </h2>
              <p className="">
                Graphic designers create images and layouts for some of the
                following:
              </p>
            </div>
          </div>
          <div className="ms-10 px-10 py-8">
            <div className="mb-8 inline-block">
              <h2 className="text-xl font-bold mb-2 border-b-[3px] border-b-[black] py-2 pr-6 w-max">
                Subject
              </h2>
              <span>Web-Development</span>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-2 border-b-[3px] border-b-[black] py-2 pr-6 w-max">
                Location
              </h2>
              <span>Chandigarh</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobdetails3;
