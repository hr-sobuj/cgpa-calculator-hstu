import React from "react";
import { AiOutlinePrinter, AiOutlineSearch } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const options = {
    orientation: "landscape",
    unit: "in",
    format: [10, 10],
  };
  

export default function GPAPrint() {
  let navigate = useNavigate();
  const location = useLocation();
  let { inputFields, name, result } = location.state;

  console.log(inputFields, name, result);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div ref={ref} className="p-4 bg-white shadow-md rounded-md">
        <div className="flex flex-col justify-center items-center space-y-4">
          <h1 className="text-2xl font-bold text-indigo-500">
            Hajee Mohammad Danesh Science & Technology University{" "}
          </h1>
          <table className="border border-black border-collapse max-w-full w-96">
            <thead>
              <tr className="text-center">
                <th className="border border-black p-2">Name</th>
                <th className="border border-black p-2">{name}</th>
              </tr>
              <tr>
                <th className="border border-black p-2">Credit</th>
                <th className="border border-black p-2">Point</th>
              </tr>
            </thead>
            <tbody>
              {inputFields.map((item) => {
                return (
                  <tr key={item.id} className="text-center">
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
        <Pdf targetRef={ref} filename={`${name}'s_result`} options={options}>
          {({ toPdf }) => (
            <button
              onClick={toPdf}
              className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-lime-500 hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
            >
              <AiOutlinePrinter className="mr-2" />
              Download PDF
            </button>
          )}
        </Pdf>
        <button
          className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
          onClick={() => navigate("/cgpa_calculator")}
        >
          <AiOutlineSearch className="mr-2" />
          Search Again
        </button>
      </div>
    </div>
  );
}
