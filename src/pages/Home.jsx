import React from "react";
import FilterMenu from "../components/FilterMenu";
import JobCard from "../components/JobCard";
import { useState, useEffect } from "react";
import HeaderSection from "../components/HeaderSection";
import Pagination from "../components/Pagination";
import axios from "axios";
import API from "../ApiRoutes";
import Loader from "../components/Loader";

const ITEMS_PERPAGE = 10;
function Home() {
  const [jobs, setJobs] = useState("");
  const [sliderJobs, setSliderJobs] = useState([]);
  const [listJobs, setListJobs] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loader, setLoader] = useState(false);

  const totalPages = Math.ceil(total / ITEMS_PERPAGE);
  console.log("no of  page", totalPages);

  const fetchJobsAPI = async () => {
    try {
      setLoader(true);
      setTimeout(async () => {
        setLoader(true);

        const fetch = await axios.get(`${API.JOB_URL}?page=${page}`);
        const fetchedJobs = fetch.data.data;

        setTotal(fetch?.data?.count || 1);
        console.log("fetchedJobs", fetch.data);
        setSliderJobs(fetchedJobs.slice(0, 5));
        setJobs(fetchedJobs);
        setLoader(false);
      }, 5000);
    } catch (error) {
      setLoader(false);
      console.log("error", error);
    }
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
    setListJobs(tempJobs.slice(0, 10));
  };

  useEffect(() => {
    fetchJobsAPI();

    return () => {
      setJobs([])
   };
  }, [page]);

  const [categories, setCategories] = useState([]);

  const handleRightpage = () => {
    if (page === 10) return;
    setListJobs(jobs.slice(0, 10 * page));
    setPage((p) => p + 1);
  };
  const handleLeftpage = () => {
    if (page === 1) return;
    setPage((p) => p - 1);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const searchData = async (value) => {
    try {
      const fetch = await axios.post(`${API.JOB_URL}/search-job`, {
        category: value,
      });

      console.log("fetch", fetch);
      setJobs(fetch.data.data);
      setTotal(fetch?.data?.data.length || 1);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
   // if (searchTerm) {
      searchData(searchTerm);
   // }

   return () => {
    setJobs([])
 };
  }, [searchTerm]);

  console.log("jobs", jobs);

  return (
    <>
      <div className="relative  w-full ">
        <HeaderSection
          setCategories={setCategories}
          categories={categories}
          setJobs={setJobs}
          jobData={sliderJobs}
        />

        <div className="absolute bottom-[-40px] left-0 right-0 mx-auto w-[80%] shadow-lg  bg-white p-2  text-center">
          <FilterMenu
            categories={categories}
            setCategories={setCategories}
            setJobs={setJobs}
            
          />
        </div>
      </div>

      <section className="w-[100%]  my-16 ">
        <div className="w-full  md:w-[80%] mx-auto ">
          <div className=" flex flex-wrap justify-center gap-2   ">
            {categories?.map((category) => (
              <span
                onClick={() => {
                  setSearchTerm(category?.category);
                }}
                className="bg-gray-200 inline-block border  text-[20px]  m-1 border-gray-400 rounded-md px-2 py-1"
              >
                {category?.category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {loader && (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      )}

      <div id="jobs" className="mb-12 w-[100%] ">
        <div className="w-full  md:w-[80%] mx-auto p-4">
          {jobs?.length > 0 ? (
            jobs?.map((job) => <JobCard key={job.id} {...job} />)
          ) : (
            <div>
              {!loader && (
                <p className="flex justify-center py-10 text-2xl font-bold text-gray-500">
                  No jobs found!
                </p>
              )}
            </div>
          )}
        </div>
      </div>
      <section className="w-[100%]  ">
        <div className="w-full  md:w-[80%] mx-auto">
          {!loader && jobs.length > 0 && (
            <Pagination
              totalPages={totalPages}
              setPage={setPage}
              noOfpage={jobs.length / ITEMS_PERPAGE}
              currentPage={page}
              onRightclick={handleRightpage}
              onLeftclick={handleLeftpage}
            />
          )}
        </div>
      </section>
    </>
  );
}

export default Home;
