import React from "react";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/JobCard";
import { useState, useEffect } from "react";
import Header from "./components/Header";

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
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async () => {
    setCustomSearch(false);
    const tempJobs = [];
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);

    req.forEach((job) => {
      // console.log(doc.id, " => ", doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });
    setJobs(tempJobs);
  };

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
    setJobs(tempJobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
     <Header /> 
      <SearchBar fetchJobsCustom={fetchJobsCustom} />
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
    </div>
  );
}

export default Home;
