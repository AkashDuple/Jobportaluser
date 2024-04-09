import React from "react";
import { useFormik } from "formik";
import API from "../ApiRoutes";
import axios from "axios";
const AWS_S3 = "http://64.227.173.23:8080/aws-s3/image-upload/";
const Submit = (props) => {
  console.log("props", props);
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      resume: null,
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Required";
      }

      if (!values.phone) {
        errors.phone = "Required";
      }

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        // Upload PDF to AWS S3
        const formData = new FormData();
        formData.append("image", values.resume);

        const awsResponse = await axios.post(AWS_S3, formData);
        const imageUrl = awsResponse.data.data.url;

        // Update formik values with resume URL
        const payload = {
          ...values,
          resume: imageUrl,
          jobTitle: props.title,
        };

        // Submit form data with updated resume URL
        const submitResponse = await axios.post(
          `${API.CANDIDATE_URL}/apply/${props.id}`,
          payload
        );

        console.log("Submission response:", submitResponse);
      } catch (error) {
        console.error("Error submitting details:", error);
      }
    },
  });

  const submitDetails = async (data) => {
    try {
      const payload = {
        ...data,
        jobTitle: props.title,
      };
      const fetch = await axios.post(
        `${API.CANDIDATE_URL}/apply/${props.id}`,
        payload
      );
      console.log("fetch", fetch);
    } catch (error) {
      console.log("error", error);
    }
  };

  console.log("formik.errors", formik.errors);
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
          <form onSubmit={formik.handleSubmit}>
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
                    Name<span className="text-gray bg-red-50">*</span>
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-red-500">{formik.errors.name}</div>
                  ) : null}
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
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <div className="text-red-500">{formik.errors.phone}</div>
                  ) : null}
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
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500">{formik.errors.email}</div>
                  ) : null}
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
                    accept=".pdf"
                    onChange={(event) => {
                      const file = event.currentTarget.files[0];
                      if (file && file.type === "application/pdf") {
                        formik.setFieldValue("resume", file);
                      } else {
                        formik.setFieldValue("resume", null); // Clear the field if invalid file is selected
                      }
                    }}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.resume && formik.errors.resume ? (
                    <div className="text-red-500">{formik.errors.resume}</div>
                  ) : null}
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
