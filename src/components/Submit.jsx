import React, { useState } from "react";

const Submit = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, for example:
    console.log("Form submitted:", formData);
    // Close the modal after form submission
    onClose();
  };

  return (
    <div
      className=" w-full absolute z-100 inset-0 bg-black  bg-opacity-20 h-full "
      onClick={(e) => {
        props.close();
      }}
    >
      <div className="flex relative justify-center items-center h-full w-full ">
        <div
          className=" bg-white container p-4  rounded-lg shadow-lg"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="py-2 border-b flex justify-between items-center">
              <div className="text-xl font-semibold">Apply</div>
              <div
                title="close"
                onClick={(e) => {
                  e.stopPropagation();
                  props.close();
                }}
                className="cursor-pointer px-2 hover:bg-gray-300 rounded-sm flex justify-center items-center"
              >
                X
              </div>
            </div>
            <div className="py-10">
              <div className=" w-full grid grid-cols-2 gap-4 ">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Experience
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="experience"
                    name="experience"
                    type="text"
                    placeholder="Enter experience"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Salary
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="salary"
                    name="salary"
                    type="text"
                    placeholder="Current Salary"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="resume"
                  >
                    Resume
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="resume"
                    name="resume"
                    type="file"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>
            <div className="text-right  border-t py-2  ">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Submit;
