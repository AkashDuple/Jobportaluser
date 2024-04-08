import React from "react";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/JobCard";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import ReactPaginate from "react-paginate";
import Pagination from "./components/Pagination";

const Jobs = [
  {
    id: "1",
    title: "Job Title",
    company: "Chiku",
    type: "FullTime",
    experience: "Candidates Applied",
    location: "Dehradun",
    skills: "React",
  },
  {
    id: "2",
    title: "Job Title",
    company: "Angoor",
    type: "FullTime",
    experience: "Candidates Applied",
    location: "Dehradun",
    skills: "React",
  },
  {
    id: "3",
    title: "Job Title",
    company: "Ladoo",
    type: "FullTime",
    experience: "Candidates Applied",
    location: "Dehradun",
    skills: "React",
  },
  {
    id: "4",
    title: "Job Title",
    company: "Peda",
    type: "FullTime",
    experience: "Candidates Applied",
    location: "Dehradun",
    skills: "React",
  },
  {
    id: "5",
    title: "Job Title",
    company: "Aloo",
    type: "FullTime",
    experience: "Candidates Applied",
    location: "Dehradun",
    skills: "React",
  },
  {
    id: "6",
    title: "Job Title",
    company: "Jaleebi",
    type: "FullTime",
    experience: "Candidates Applied",
    location: "Dehradun",
    skills: "React",
  },
];

function Home() {
  const [jobs, setJobs] = useState("");
  const [sliderJobs, setSliderJobs] = useState("");
  const [listJobs, setListJobs] = useState("");

  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobsAPI = async () => {
    try {
      const fetch = await axios.get(API.getJobs);
      setJobs(fetch.data.data);
    } catch (error) {
      return res.status(500).send({
        message: "Internal Server Error",
        status: false,
      });
    }
  };

  useEffect(() => {
    setSliderJobs(jobs.slice(5));
    setListJobs(jobs.slice(0, 10));
  }, [jobs]);

  // const fetchJobs = async () => {
  //   setCustomSearch(false);
  //   const tempJobs = [];
  //   const jobsRef = query(collection(db, "jobs"));
  //   const q = query(jobsRef, orderBy("postedOn", "desc"));
  //   const req = await getDocs(q);

  //   req.forEach((job) => {
  //     // console.log(doc.id, " => ", doc.data());
  //     tempJobs.push({
  //       ...job.data(),
  //       id: job.id,
  //       postedOn: job.data().postedOn.toDate(),
  //     });
  //   });
  //   setJobs(tempJobs);
  // };

  const fetchJobsCustom = async (jobCriteria) => {
    setCustomSearch(true);
    const tempJobs = [];
    const jobsRef = query(collection(db, "jobs"));
    const q = query(
      jobsRef,
      where("type", "==", jobCriteria.type),
      where("title", "==", jobCriteria.title),
      where("experience", "==", jobCriteria.experience),
      where("location", "==", jobCriteria.location),
      orderBy("postedOn", "desc")
    );
    const req = await getDocs(q);

    req.forEach((job) => {
      // console.log(doc.id, " => ", doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });
    // setJobs(tempJobs);
    setListJobs(tempJobs.slice(0, 10));
  };

  useEffect(() => {
    fetchJobsAPI();
  }, []);
 
  const handleRightpage= ()=>{

  }
  const handleLeftpage= ()=>{
    
  }
  return (
    <div>
      <Header />
      <SearchBar
        fetchJobsCustom={fetchJobsCustom}
        //category={}
      />

      {customSearch && (
        <button onClick={fetchJobs} className="flex pl-[1250px] mb-2">
          <p className="bg-blue-500 px-10 py-2 rounded-md text-white">
            Clear Filters
          </p>
        </button>
      )}
      {Jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    
     <Pagination  onRightclick ={handleRightpage}  onLeftclick={handleLeftpage}  /> 
    </div>
  );
}

export default Home;
