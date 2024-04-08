import React from "react";
import { useFormik } from 'formik';

const Submit = (props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      resume: null,
      experience: "",
      salary: ""
    },
    validate: values => {
      const errors = {};
      if (!values.name) {
        errors.name = 'Required';
      }

      if (!values.phone) {
        errors.phone = 'Required';
      }
       
      if (!values.experience) {
        errors.experience = 'Required';
      }

      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    },
  });

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
                    Name
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
                  {formik.touched.name && formik.errors.name ? <div className="text-red-500">{formik.errors.name}</div> : null}
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="experience"
                  >
                    Experience
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="experience"
                    name="experience"
                    type="text"
                    placeholder="Enter experience"
                    value={formik.values.experience}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                   {formik.touched.experience && formik.errors.experience ? <div className="text-red-500">{formik.errors.experience}</div> : null}
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="salary"
                  >
                    Salary
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="salary"
                    name="salary"
                    type="text"
                    placeholder="Current Salary"
                    value={formik.values.salary}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
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
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                   {formik.touched.phone && formik.errors.phone ? <div className="text-red-500">{formik.errors.phone}</div> : null}
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
                  {formik.touched.email && formik.errors.email ? <div className="text-red-500">{formik.errors.email}</div> : null}
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
                    onChange={(event) => {
                      formik.setFieldValue("resume", event.currentTarget.files[0]);
                    }}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.resume && formik.errors.resume ? <div className="text-red-500">{formik.errors.resume}</div> : null}
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
