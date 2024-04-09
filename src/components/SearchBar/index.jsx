import React, { useState, useEffect } from "react";
import axios from "axios";
import API from "../../ApiRoutes";

const indianStates = [
  { name: "Andaman and Nicobar Islands" },
  { name: "Andhra Pradesh" },
  { name: "Arunachal Pradesh" },
  { name: "Assam" },
  { name: "Bihar" },
  { name: "Chandigarh" },
  { name: "Chhattisgarh" },
  { name: "Dadra and Nagar Haveli" },
  { name: "Daman and Diu" },
  { name: "Delhi" },
  { name: "Goa" },
  { name: "Gujarat" },
  { name: "Haryana" },
  { name: "Himachal Pradesh" },
  { name: "Jammu and Kashmir" },
  { name: "Jharkhand" },
  { name: "Karnataka" },
  { name: "Kerala" },
  { name: "Ladakh" },
  { name: "Lakshadweep" },
  { name: "Madhya Pradesh" },
  { name: "Maharashtra" },
  { name: "Manipur" },
  { name: "Meghalaya" },
  { name: "Mizoram" },
  { name: "Nagaland" },
  { name: "Odisha" },
  { name: "Puducherry" },
  { name: "Punjab" },
  { name: "Rajasthan" },
  { name: "Sikkim" },
  { name: "Tamil Nadu" },
  { name: "Telangana" },
  { name: "Tripura" },
  { name: "Uttar Pradesh" },
  { name: "Uttarakhand" },
  { name: "West Bengal" },
];

function SearchBar({ setJobs }) {
  const [categories, setCategories] = useState([]);
  const [location, setLocation] = useState([]);
  const [jobCriteria, setJobCriteria] = useState({
    search: "",
    location: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobCriteria((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const searchData = async () => {
    try {
      const fetch = await axios.post(`${API.JOB_URL}/search-job`, jobCriteria);
      setJobCriteria({
        search: "",
        location: "",
        category: "",
      });
      console.log("fetch", fetch);
      setJobs(fetch.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const fetch = await axios.get(API.cat);
      setCategories(fetch.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchCategories();
    setLocation(indianStates);
  }, []);

  return (
    <div className="">
      <div className="grid grid-cols-4 gap-2 ">
        <input
          name="search"
          placeholder="Enter Job title..."
          value={jobCriteria.search}
          onChange={handleChange}
          className=" py-3 md:w-64 bg-zinc-200 font-semibold rounded-md placeholder-black"
        />
        <select
          onChange={handleChange}
          name="category"
          value={jobCriteria.category}
          className=" py-3  bg-zinc-200 font-semibold rounded-md"
        >
          <option value="">Category</option>
          {categories.map((category) => (
            <option key={category._id} value={category.category}>
              {category.category}
            </option>
          ))}
        </select>
        <select
          onChange={handleChange}
          name="location"
          value={jobCriteria.location}
          className=" py-3  bg-zinc-200 font-semibold rounded-md"
        >
          <option value="">Select a Location...</option>
          {location.map((state, index) => (
            <option key={index} value={state.name}>
              {state.name}
            </option>
          ))}
        </select>
        <button
          onClick={searchData}
          className=" py-3 bg-[blue]  md:w-64bg-blue-500 text-white font-bold  rounded-md"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
