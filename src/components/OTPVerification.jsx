import React from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import axios from "axios";

import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

export const OTPVerification = () => {
  // const { handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const { Button, phoneNumber, regData } = React.useContext(DataContext);
  const [otp, setOtp] = React.useState("");

  // Function called on submit that sends form data to the DB
  const onSubmit = async () => {
    try {
      // Destrcture data object
      let newData = { ...regData, OTP: otp };
      const { name, email, phone_number, OTP } = newData;
      console.log(otp);

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Send data to DB
      const postData = async () => {
        await axios
          .post(
            "https://registration-registry-app.herokuapp.com/api/create/",
            // "http://localhost:8000/api/create/",
            { name, email, phone_number, OTP },
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
      navigate("/dashboard");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="rounded-md h-screen flex flex-col justify-center items-center">
      <div className="ml-52">
        <Button className="" />
      </div>

      <div className="w-1/8 bg-white p-14 shadow-2xl ">
        <div className="">
          <p className="mb-3 lg:text-lg font-bold">
            <span className="text-sm font-normal text-gray-700">
              OTP sent to phone number
            </span>
            {phoneNumber}
          </p>
        </div>
        <OTPInput
          value={otp}
          className="bg-gray-200 border rounded-md px-10 py-3"
          onChange={setOtp}
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
          onClick={onSubmit}
          className="bg-green-500 mt-5 py-3 px-3 rounded hover:bg-green-600 hover:-translate-y-1 transition-all duration-500 text-white font-semibold"
        >
          Finish Registration
        </button>
      </div>
    </div>
  );
};
