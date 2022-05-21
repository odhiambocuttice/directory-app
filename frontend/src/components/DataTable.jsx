import React from "react";
import axios from "axios";

export const DataTable = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/view/`
        );
        setData(res.data);
        // console.log(res.data);
      } catch (err) {}
    };

    fetchData();
  }, []);
  console.log(data);

  return (
    <div className="h-screen flex justify-center items-center">
      <table className="border-collapse w-full lg:w-3/4">
        <thead>
          <tr className="font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300">
            <th className="p-3  hidden lg:table-cell ">Phone Number</th>
            <th className="p-3  hidden lg:table-cell">Name</th>
            <th className="p-3  hidden lg:table-cell">Email Address</th>
            <th className="p-3  hidden lg:table-cell">OTP</th>
          </tr>
        </thead>

        {/* table body part */}
        <tbody>
          {data.length > 0 &&
            data.map((result) => {
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
                    <span className="rounded bg-red-400 py-1 px-3 text-xs font-bold">
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
};
