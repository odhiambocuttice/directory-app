import React from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useForm } from "react-hook-form";

import { DataContext } from "../context/DataContext";

export const OTPVerification = () => {
  const [OTP, setOTP] = React.useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { Button } = React.useContext(DataContext);

  // Function called on submit that sends form data to the DB
  const submitData = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      // Send data to DB

      // Clear form
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form
      className="rounded-md h-screen flex flex-col justify-center items-center"
      onSubmit={handleSubmit(submitData)}
      noValidate
    >
      <div className="ml-52">
        <Button className="" />
      </div>

      <div className="w-1/8 bg-white p-14 shadow-2xl ">
        <OTPInput
          value={OTP}
          className="bg-gray-200 border rounded-md px-10 py-3"
          onChange={setOTP}
          autoFocus
          OTPLength={4}
          otpType="number"
          disabled={false}
          // secure
        />
        <ResendOTP onResendClick={() => console.log("Resend clicked")} />
      </div>
      <div>
        <button
          type="submit"
          className="bg-green-500 mt-5 py-3 px-3 rounded hover:bg-green-600 hover:-translate-y-1 transition-all duration-500 text-white font-semibold"
        >
          Finish Registration
        </button>
      </div>
    </form>
  );
};
