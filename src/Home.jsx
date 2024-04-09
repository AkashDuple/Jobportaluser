import React from "react";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/JobCard";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import ReactPaginate from "react-paginate";
import Pagination from "./components/Pagination";
import axios from "axios";
import API from "./ApiRoutes";

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
  const [sliderJobs, setSliderJobs] = useState([]);
  const [listJobs, setListJobs] = useState("");
  const [page, setPage] = useState(1);
  console.log("sliderJobs", sliderJobs);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobsAPI = async () => {
    try {
      const fetch = await axios.get(API.JOB_URL);
      const fetchedJobs = fetch.data.data;
      console.log("fetchedJobs", fetchedJobs);
      setSliderJobs(fetchedJobs.slice(0, 5));
      setJobs(fetchedJobs.slice(5));
    } catch (error) {
      console.log("error", error);
    }
  };
  console.log("jobs", jobs);

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
    setListJobs(tempJobs.slice(0, 10));
  };

  useEffect(() => {
    fetchJobsAPI();
  }, []);

  const handleRightpage = () => {
    if (page === 10) return;
    setListJobs(jobs.slice(0, 10 * page));
    setPage((p) => p + 1);
  };
  const handleLeftpage = () => {
    if (page === 1) return;
    setPage((p) => p - 1);
  };
  return (
    <div className="relative">
      <Header jobData={sliderJobs} />
      {/* <SearchBar setJobs={setJobs} /> */}
      <div
        className="relative h-[3vh]  opacity-100  inset-0 gap-0 "
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        {/* <div className="absolute flex justify-center items-center  bottom-[-60px] md:bottom-[-15px] left-0 right-0 mx-auto w-full md:w-[80%] shadow-lg  bg-[red] p-4 text-center">
          <SearchBar setJobs={setJobs} />
        </div> */}
      </div>

      <div className="h-[20px] "></div>
      {customSearch && (
        <button onClick={fetchJobs} className="flex pl-[1250px] mb-2">
          <p className="bg-blue-500 px-10 py-2 rounded-md text-white">
            Clear Filters
          </p>
        </button>
      )}
      <div className="  ">
        {jobs.length > 0 ? (
          jobs?.map((job) => <JobCard key={job.id} {...job} />)
        ) : (
          <p className="flex justify-center py-10 text-2xl font-bold text-gray-500">
            No jobs found!
          </p>
        )}
      </div>

      <Pagination
        noOfpage={jobs.length / 10 + (jobs.length > 0 ? 1 : 0)}
        pageno={page}
        onRightclick={handleRightpage}
        onLeftclick={handleLeftpage}
      />
    </div>
  );
}

export default Home;
