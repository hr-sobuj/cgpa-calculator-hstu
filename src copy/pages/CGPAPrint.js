import React from "react";
import { FaPrint, FaSearch, FaUniversity } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const options = {
  orientation: "landscape",
  unit: "in",
  format: [10, 10],
};

export default function CGPAPrint() {
  let navigate = useNavigate();
  const location = useLocation();
  let { inputFields, name, result } = location.state;

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
      <div ref={ref} className="flex flex-col justify-center items-center">
        <div className="bg-indigo-500 text-white px-4 py-2 rounded-md mb-4 flex items-center">
          <FaUniversity className="mr-2" />
          <h1 className="text-lg font-bold">Hajee Mohammad Danesh Science & Technology University</h1>
        </div>
        <div className="bg-white shadow-md rounded-md p-4 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Transcript of Records</h2>
          <table className="border border-black border-collapse max-w-full w-96">
            <thead>
              <tr className="text-center">
                <th className="border border-black p-2">Semester</th>
                <th className="border border-black p-2">Grade</th>
                <th className="border border-black p-2">Credit</th>
              </tr>
            </thead>
            <tbody>
              {inputFields.map((item, index) => {
                return (
                  <tr key={index} className="text-center">
                    <td className="border border-black p-2">{`${index+1}th semester`}</td>
                    <td className="border border-black p-2">{item.gpa}</td>
                    <td className="border border-black p-2">{item.credit}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex justify-center mt-5">
            <h1 className="text-xl font-bold text-center">
              Overall GPA: {result}
            </h1>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4 mt-4">
        <Pdf targetRef={ref} filename={`${name}'s_result`} options={options}>
          {({ toPdf }) => (
            <button className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center" onClick={toPdf}>
              <FaPrint className="mr-2" />
              Print
            </button>
          )}
        </Pdf>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center" onClick={() => navigate("/cgpa_calculator")}>
          <FaSearch className="mr-2" />
          Search Again
        </button>
      </div>
    </div>
  );
}
