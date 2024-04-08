import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/JobCard";
// import jobData from "./JobDummyData"
import { useEffect, useState } from "react";
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Jobdetails from "./Jobdetails";
import Jobdetails2 from "./Jobdetails2";
import JobDetails3 from "./Jobdetails3";
import Jobdetails3 from "./Jobdetails3";
import Jobdetails4 from "./Jobdetails4";

// import {db} from "./firebase.config"

// {props.title}  {props.company}
// <props.type} {props.experience}{props.location}
// skills

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
    company: "Chiku",
    type: "FullTime",
    experience: "Candidates Applied",
    location: "Dehradun",
    skills: "React",
  },
  {
    id: "3",
    title: "Job Title",
    company: "Chiku",
    type: "FullTime",
    experience: "Candidates Applied",
    location: "Dehradun",
    skills: "React",
  },
  {
    id: "4",
    title: "Job Title",
    company: "Chiku",
    type: "FullTime",
    experience: "Candidates Applied",
    location: "Dehradun",
    skills: "React",
  },
  {
    id: "5",
    title: "Job Title",
    company: "Chiku",
    type: "FullTime",
    experience: "Candidates Applied",
    location: "Dehradun",
    skills: "React",
  },
  {
    id: "6",
    title: "Job Title",
    company: "Chiku",
    type: "FullTime",
    experience: "Candidates Applied",
    location: "Dehradun",
    skills: "React",
  },
];

function App() {
  // const [jobs, setJobs] = useState([]);
  // const [customSearch, setCustomSearch] = useState(false);

  // const fetchJobs = async() => {
  //   setCustomSearch(false);
  //   const tempJobs = []
  //    const jobsRef = query(collection(db, "jobs"));
  //   const q = query(jobsRef, orderBy("postedOn", "desc"));
  //   const req = await getDocs(q);

  //   req.forEach((job) => {
  //     // console.log(doc.id, " => ", doc.data());
  //     tempJobs.push({
  //       ...job.data(),
  //       id: job.id,
  //       postedOn: job.data().postedOn.toDate()
  //     })
  //   });
  //   setJobs(tempJobs);
  // }

  // const fetchJobsCustom = async(jobCriteria) => {
  //   setCustomSearch(true);
  //   const tempJobs = []
  //   const jobsRef = query(collection(db, "jobs"));
  //   const q = query(jobsRef, where("type", "==", jobCriteria.type), where("title", "==", jobCriteria.title), where("experience", "==", jobCriteria.experience), where("location", "==", jobCriteria.location) ,orderBy("postedOn", "desc"));
  //   const req = await getDocs(q);

  //   req.forEach((job) => {
  //     // console.log(doc.id, " => ", doc.data());
  //     tempJobs.push({
  //       ...job.data(),
  //       id: job.id,
  //       postedOn: job.data().postedOn.toDate()
  //     })
  //   });
  //   setJobs(tempJobs);
  // }

  // useEffect(() => {
  //   fetchJobs()
  // },[])

  return (
    <div >
      <Router>
        <Navbar />
         {/* <Header/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/jobdetails" element={<Jobdetails3 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
