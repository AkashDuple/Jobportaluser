import React from 'react';
import Submit from './components/Submit';
import { useState } from 'react';


const Jobdetails3 = () => {

    const [modal, setModal] = useState(false);

    const applyHandler = () => {
        console.log("Sumbitmodal");
        setModal(true);
      };


  return (
    <div className="container mx-auto px-4 py-8 bg-slate-100 shadow-lg rounded-lg">
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

        <div className='flex flex-col justify-center items-center'>
      <h1 className="text-3xl font-bold mb-4">Job Title: Graphic Designer</h1>
      <p className="text-lg mb-2 font-semibold">Posted By: VidIQ</p>
      <p className="text-lg mb-4 ">Apr 5th, 2024</p>
      </div>

      <div className='ml-20'>
      <div className="mb-8 ">
        <h2 className="text-xl font-bold mb-2 border-b-[3px] border-b-[black] py-2 pr-6 w-max">Description</h2>
        <p className='font-semibold'>Graphic designers create images and layouts for some of the following:</p>
        <ul className="list-disc list-inside mb-4">
          <li className='font-semibold'>Company brand identity (logos, typography, and colour palettes)</li>
          <li className='font-semibold'>User interfaces on apps and websites</li>
          <li className='font-semibold'>Books, magazines, newspapers, and other publications</li>
          <li className='font-semibold'>Product packaging</li>
        </ul>
        <p>Deadline: Feb 21st, 2024</p>
      </div>

      <div className="mb-8 inline-block">
        <h2 className="text-xl font-bold mb-2 border-b-[3px] border-b-[black] py-2 pr-6 w-max">Subject</h2>
        <ul className="list-disc list-inside mb-4">
          <li className='font-semibold'>PhotoShop</li>
          <li className='font-semibold'>Adobe Illustrator</li>
          <li className='font-semibold'>Canva</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2 border-b-[3px] border-b-[black] py-2 pr-6 w-max">Location</h2>
        <ul className="list-disc list-inside mb-4">
          <li className='font-semibold'>Yearly Increment</li>
          <li className='font-semibold'>Food</li>
          <li className='font-semibold'>4 Days</li>
        </ul>
        <p className='font-semibold'>Salary: 62 TK</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2 border-b-[3px] border-b-[black] py-2 pr-6 w-max">To Apply</h2>
        <p className='font-semibold'>Send Your Cv/Resume</p>
        <p className='font-semibold'>Email: jobs@vidiq.com</p>
      </div>

       </div>
    </div>
  );
};

export default Jobdetails3;
