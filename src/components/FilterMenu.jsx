import React, { useState, useEffect } from "react";
import axios from "axios";
import API from "../ApiRoutes";

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

function FilterMenu({ setJobs, categories, setCategories }) {
  const [location, setLocation] = useState([]);
  const [jobCriteria, setJobCriteria] = useState({
    search: "",
    location: "",
    category: "",
  });

  console.log("location", location);
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
      setCategories((p) => {
        return p.lenght > 0 ? p : fetch.data.data;
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchLocations = async () => {
    try {
      const locations = await axios.get(API.location);
      setLocation(locations.data.data);
      console.log("locations", locations.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchLocations();
    fetchCategories();
    // setLocation(indianStates);
  }, []);

  return (
    <div className="">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2  mb-2">
        <input
          name="search"
          placeholder="Enter Job title..."
          value={jobCriteria?.search}
          onChange={handleChange}
          className=" py-2  bg-zinc-200 font-semibold rounded-md placeholder-black placeholder:p-2"
        />
        <select
          onChange={handleChange}
          name="category"
          value={jobCriteria?.category}
          className=" py-2 bg-zinc-200 font-semibold rounded-md"
        >
          <option value="">Category</option>
          {categories.map((category) => (
            <option key={category?._id} value={category?.category}>
              {category?.category}
            </option>
          ))}
        </select>
        <select
          onChange={handleChange}
          name="location"
          value={jobCriteria?.location}
          className=" py-2 bg-zinc-200 font-semibold rounded-md"
        >
          <option value="">Select a Location...</option>
          {location.map((location, index) => (
            <option
              key={index}
              value={`${location.city}, ${
                location.state ? location.state + ", " : ""
              }${location.country}`}
            >
              {location.city}
              {location.state ? `, ${location.state}` : ""}, {location.country}
            </option>
          ))}
        </select>
        <button
          onClick={searchData}
          className=" py-2 bg-blue-600  md:w-64bg-blue-500 text-white font-bold  rounded-md"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default FilterMenu;
