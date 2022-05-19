import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const DataContext = createContext({});

export const Button = () => {
  return (
    <>
      <div className="container flex p-2  rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-6 w-6 mx-3"
        >
          <path
            d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z"
            data-name="4-Arrow Left"
          />
        </svg>
        <button className="mr-3">
          <Link className="text-gray-600 " to="/">
            Back to Registration
          </Link>
        </button>
      </div>
    </>
  );
};

export const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider
      value={{
        Button,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
