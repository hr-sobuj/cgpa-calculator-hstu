import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { AiOutlinePrinter } from "react-icons/ai";
import { FaSearch, FaUniversity } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const GPAPrint = forwardRef((props, ref) => {
  let navigate = useNavigate();
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
    documentName: name, 
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div ref={printRef} className="p-4 bg-white  rounded-md">
        <div className="flex flex-col justify-center items-center space-y-4">
          <div className="bg-indigo-500 text-white px-4 py-2 rounded-md mb-4 flex items-center">
            <FaUniversity className="mr-2" />
            <h1 className="text-lg font-bold">
              Hajee Mohammad Danesh Science & Technology University
            </h1>
          </div>
          <table className="border border-black border-collapse max-w-full w-96">
            <thead>
              <tr className="text-center">
                <th className="border border-black p-2">Name</th>
                <th colSpan={2} className="border border-black p-2">
                  {name}
                </th>
              </tr>
              <tr>
                <th className="border border-black p-2">Course</th>
                <th className="border border-black p-2">Course Credit</th>
                <th className="border border-black p-2">Grade</th>
              </tr>
            </thead>
            <tbody>
              {inputFields.map((item, index) => {
                return (
                  <tr key={item.id} className="text-center">
                    <td className="border border-black p-2">{`${index + 1}${
                      index === 0
                        ? "st"
                        : index === 1
                        ? "nd"
                        : index === 2
                        ? "rd"
                        : "th"
                    } course`}</td>

                    <td className="border border-black p-2">{item.credit}</td>
                    <td className="border border-black p-2">{item.point}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <h1 className="text-xl font-bold text-center mt-5">
            Your Net GPA is {result}
          </h1>
        </div>
      </div>
      <div className="flex space-x-4 mt-4">
        <button
          onClick={triggerPrint}
          className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-lime-500 hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
        >
          <AiOutlinePrinter className="mr-2" />
          Download PDF
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center" onClick={() => navigate("/cgpa_calculator")}>
          <FaSearch className="mr-2" />
          Search Again
        </button>
      </div>
    </div>
  );
});

export default GPAPrint;

         
