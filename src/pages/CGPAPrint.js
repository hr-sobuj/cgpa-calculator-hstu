import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { FaPrint, FaSearch, FaUniversity } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const CGPAPrint = forwardRef((props, ref) => {
  let navigate=useNavigate()
  const location = useLocation();
  let { inputFields, name, result } = location.state;

  const printRef = useRef();

  useImperativeHandle(ref, () => ({
    handlePrint() {
      triggerPrint();
    },
  }));

  const triggerPrint = useReactToPrint({
    content: () => printRef.current,
    documentName: name, // Set the PDF name to the value of the 'name' variable
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
      <div ref={printRef} className="flex flex-col justify-center items-center">
        <div className="bg-indigo-500 text-white px-4 py-2 rounded-md mb-4 flex items-center">
          <FaUniversity className="mr-2" />
          <h1 className="text-lg font-bold">Hajee Mohammad Danesh Science & Technology University</h1>
        </div>
        <div className="bg-white shadow-md rounded-md p-4 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">{name}'s Transcript of Records</h2>
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
                   <td className="border border-black p-2">{`${index+1}${index === 0 ? 'st' : index === 1 ? 'nd' : index === 2 ? 'rd' : 'th'} semester`}</td>

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
        <button className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center" onClick={triggerPrint}>
          <FaPrint className="mr-2" />
          Print
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center" onClick={() => navigate("/cgpa_calculator")}>
          <FaSearch className="mr-2" />
          Search Again
        </button>
      </div>
    </div>
  );
});

export default CGPAPrint;
