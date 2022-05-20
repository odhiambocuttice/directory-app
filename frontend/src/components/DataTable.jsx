import React from "react";

export const DataTable = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <table class="border-collapse w-full lg:w-3/4">
        <thead>
          <tr className="font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300">
            <th class="p-3  hidden lg:table-cell ">Phone Number</th>
            <th class="p-3  hidden lg:table-cell">Name</th>
            <th class="p-3  hidden lg:table-cell">Email Address</th>
            <th class="p-3  hidden lg:table-cell">OTP</th>
          </tr>
        </thead>

        {/* table body part */}
        <tbody>
          <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0 mx-6">
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static ">
              <span class="lg:hidden absolute  left-3 bg-orange-200 px-2 py-1 text-xs font-bold uppercase">
                Phone Number
              </span>
              KnobHome
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
              <span class="lg:hidden absolute left-3 bg-orange-200 px-2 py-1 text-xs font-bold uppercase">
                Name
              </span>
              German
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800  border border-b text-center block lg:table-cell relative lg:static">
              <span class="lg:hidden absolute  left-3 bg-orange-200 px-2 py-1 text-xs font-bold uppercase">
                Email Address
              </span>
              <span class="rounded bg-red-400 py-1 px-3 text-xs font-bold">
                deleted
              </span>
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
              <span class="lg:hidden absolute left-3 bg-orange-200 px-2 py-1 text-xs font-bold uppercase">
                OTP
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
