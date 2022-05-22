import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { DataContext } from "../context/DataContext";

export const RegistrationForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { setPhoneNumber } = React.useContext(DataContext);

  // Function called on submit that sends form data to the DB
  const onSubmit = async (data) => {
    // Destrcture data object
    const { phone_number, name, email } = data;
    console.log(data);

    try {
      setPhoneNumber(phone_number);
      navigate("/otp");
      // navigate(`/otp/${phoneNumber}`);

      // Send data to DB
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const postData = async () => {
        await axios
          .post(
            `${process.env.REACT_APP_API_URL}/api/create/`,
            { name, email, phone_number },
            config
          )
          .then((response) => {
            console.log(response.data); // view the response
          })
          .catch((error) => {
            console.log(error); // check if any error
          });
      };

      postData();

      // Clear form
      reset();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="h-screen flex justify-center items-start">
      <div className="flex w-full lg:w-[800px]  space-y-8">
        <div className="w-full px-8 md:px-32 lg:px-24">
          <h1 className="font-semibold text-4xl text-gray-600 my-6">
            Registry Form
          </h1>
          <form
            className="bg-white rounded-md shadow-2xl p-5"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <h1 className="text-gray-600 font-bold text-2xl mb-1">
              ID Details
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-8">
              Please fill out all the fields.
            </p>

            {/* Name input section */}
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Full Name
            </label>
            <div className="relative mx-6 my-2">
              <div className="absolute pt-4 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
                </svg>
              </div>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border block w-full px-10 py-3 "
                placeholder="Enter your full name"
                autoComplete="off"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Please enter your full name",
                  },
                  maxLength: {
                    value: 30,
                    message: "Please use 30 characters or less",
                  },
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: "Name must be letters only",
                  },
                  minLength: {
                    value: 5,
                    message: "Name must be at least 5 characters",
                  },
                })}
              />

              {/* If there is an error, display error message */}
              {errors.name && (
                <span className="text-xs text-red-600">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Email input section */}
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <div className="relative mx-6 my-2">
              <div className="absolute  pt-4 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                type="text"
                name="email"
                id="email"
                className="bg-gray-50 border block w-full px-10 py-3 "
                placeholder="Enter your email address"
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
              />

              {/* If there is an error, display error message */}
              {errors.email && (
                <span className="text-xs text-red-600">
                  Please enter a valid email address
                </span>
              )}
            </div>

            {/* Phone Number input section */}
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-gray-600"
            >
              Phone Number
            </label>
            <div className="relative mx-6 my-2">
              <div className="absolute  pt-4 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                  />
                </svg>
              </div>
              <input
                type="tel"
                id="phone_number"
                name="phone_number"
                // value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                autoComplete="off"
                className="bg-gray-50 border block w-full px-10 py-3 "
                placeholder="0700-254-254"
                {...register("phone_number", {
                  required: {
                    value: true,
                    message: "Please enter your phone number",
                  },
                  maxLength: {
                    value: 10,
                    message: "Invalid phone number",
                  },
                  minLength: {
                    value: 10,
                    message: "Invalid phone number",
                  },
                  pattern: {
                    pattern: /^\0[0-9]{3}-[0-9]{3}-[0-9]{3}$/,
                    message: "Invalid phone number",
                  },
                })}
              />

              {/* If there is an error, display error message */}
              {errors.phone_number && (
                <span className="text-xs text-red-600">
                  Please enter a valid phone number
                </span>
              )}
            </div>

            <button
              type="submit"
              className=" w-1/4 bg-green-500 mt-5 py-2 rounded hover:bg-green-600 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
            >
              Submit Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};