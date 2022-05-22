import React from "react";
import axios from "axios";
import {
  faSearch,
  faSort,
  faSortDown,
  faSortUp,
  faRefresh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DataTable = () => {
  const [data, setData] = React.useState([]);
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://registration-registry-app.herokuapp.com/api/view/"
          // "http://localhost:8000/api/view/"
        );
        setData(res.data);
      } catch (err) {}
    };

    fetchData();
  }, []);
  console.log(data);

  const sortTypes = {
    up: {
      class: faSortUp,
      fn: (a, b) => a.phone_number - b.phone_number,
    },
    down: {
      class: faSortDown,
      fn: (a, b) => b.phone_number - a.phone_number,
    },
    default: {
      class: faSort,
      fn: (a, b) => a,
    },
  };

  // declaring the default state of the sort type
  const [currentSort, setCurrentSort] = React.useState("default");

  // method called every time the sort button is clicked
  // it will change the currentSort value to the next one
  const handleSort = () => {
    let nextSort;
    if (currentSort === "down") nextSort = "up";
    else if (currentSort === "up") nextSort = "default";
    else if (currentSort === "default") nextSort = "down";
    setCurrentSort(nextSort);
  };

  // method called every time the search input is changed
  // it will change the query value to the new one
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  // method called every time the search button is clicked
  // it will filter the data array based on the query value
  const handleSearch = () => {
    const filteredData = data.filter((item) => {
      return (
        item.phone_number.toString().includes(query) ||
        item.name.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query)
      );
    });
    if (query.length === 0 || query.length > 2) setData(filteredData);
    if (filteredData.length === 0) {
      alert("No results found");
      setData(data);
    }
  };

  // method called every time the refresh button is clicked
  // it will refresh the data array
  const handleRefresh = () => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://registration-registry-app.herokuapp.com/api/view/"
          // "http://localhost:8000/api/view/"
        );
        setData(res.data);
        setQuery("");
      } catch (err) {}
    };
    fetchData();
  };

  return (
    <div className="h-screen flex flex-col justify-start items-center">
      <div className="">
        <input
          type="search"
          className="px-3 py-1.5 my-4 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  focus:text-gray-700 focus:bg-white focus:outline"
          placeholder="Search"
          onChange={handleQuery}
        />
        <button onClick={handleSearch}>
          <FontAwesomeIcon className="px-2 w-4 h-4" icon={faSearch} />
        </button>
        <button onClick={handleRefresh}>
          <FontAwesomeIcon className="px-2 w-4 h-4" icon={faRefresh} />
        </button>
      </div>

      <table className="border-collapse w-full lg:w-3/4">
        <thead>
          <tr className="font-bold uppercase bg-gray-600 text-white">
            <th className="p-3  hidden lg:table-cell ">
              Phone Number
              <button onClick={handleSort}>
                <FontAwesomeIcon
                  className="px-2 w-4 h-4"
                  icon={sortTypes[currentSort].class}
                />
              </button>
            </th>
            <th className="p-3  hidden lg:table-cell">Name</th>
            <th className="p-3  hidden lg:table-cell">Email Address</th>
            <th className="p-3  hidden lg:table-cell">OTP</th>
          </tr>
        </thead>

        {/* table body part */}
        <tbody>
          {data.length > 0 &&
            [...data].sort(sortTypes[currentSort].fn).map((result) => {
              return (
                <tr
                  key={result.id}
                  className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0 mx-6"
                >
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static ">
                    <span className="lg:hidden absolute  left-3 bg-orange-200 px-2 py-1 text-xs font-bold uppercase">
                      Phone Number
                    </span>
                    {result.phone_number}
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute left-3 bg-orange-200 px-2 py-1 text-xs font-bold uppercase">
                      Name
                    </span>
                    {result.name}
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800  border border-b text-center block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute  left-3 bg-orange-200 px-2 py-1 text-xs font-bold uppercase">
                      Email Address
                    </span>
                    <span className="rounded  py-1 px-3 text-xs font-bold">
                      {result.email}
                    </span>
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute left-3 bg-orange-200 px-2 py-1 text-xs font-bold uppercase">
                      OTP
                    </span>
                    {result.OTP}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};;
