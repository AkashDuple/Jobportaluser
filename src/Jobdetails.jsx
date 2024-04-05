import React, { useState } from 'react'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom';
import Submit from './components/Submit';
function Jobdetails() {

    // const date1 = dayjs(Date.now());
    // const diffInDays = date1.diff(props.postedOn,'day');
    
    const [modal,setModal]=useState(false)

    const navigate=useNavigate()

    const applyHandler =()=>{
      console.log("Sumbitmodal")
      setModal(true)
    }

  return (
<div  className="h-60 relative flex flex-col justify-between items-center w-full"> {/* Increased height to 20, using flex column layout */}
  {modal && <Submit close={()=>setModal}/>}
  <div className='w-1/2 flex gap-2 items-stretch '>
  <div className='flex justify-center w-full bg-red-100 '> <div/>
  <div className='px-6 py-4  w-full bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500'>
  <div className='flex flex-col gap-4 ml-10'> {/* Column for headings */}
    <div className="flex justify-between items-center"> {/* Flex container for each heading and its demo data */}
      <h1 className="font-bold text-lg">Job Title</h1>
      <p className="text-gray-500 mr-4">Demo Job Title</p> {/* Demo data */}
    </div>
    <div className="flex justify-between items-center"> {/* Flex container for each heading and its demo data */}
      <h1 className="font-bold text-lg">Location</h1>
      <p className="text-gray-500 mr-4">Demo Location</p> {/* Demo data */}
    </div>
    <div className="flex justify-between items-center"> {/* Flex container for each heading and its demo data */}
      <h1 className="font-bold text-lg">Subject</h1>
      <p className="text-gray-500 mr-4">Demo Subject</p> {/* Demo data */}
    </div>
    <div className="flex justify-between items-center"> {/* Flex container for each heading and its demo data */}
      <h1 className="font-bold text-lg">Description</h1>
      <p className="text-gray-500 mr-4 ml-6">The job description should accurately reflect the duties and responsibilities of the position. When well-written, it produces a realistic picture of a job and answers the question, “What does the person in this role actually do?”

A job description not only describes the position’s responsibilities, it sets the foundation for recruiting, developing, and retaining talent and also sets the stage for optimum work performance by clarifying responsibilities, expected results, and evaluation of performance. It is also an important component to maintaining an equitable compensation system and ensuring legal compliance. The document should be revisited and updated in line with the annual performance evaluation cycle.</p> {/* Demo data */}
    </div>
    {/* Add your headings and demo data here */}
  </div>
</div>
</div>



  </div>
  <div className="mx-auto mb-4"> {/* Centered Apply button */}
    <button onClick={applyHandler} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Apply</button>
  </div>
</div>




  )
}

export default Jobdetails