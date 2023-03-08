import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaCalculator, FaClipboard } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700">
      <h1 className="text-5xl pt-10 font-bold text-white">
        Hajee Mohammad Danesh Science & Technology University
      </h1>
      <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 justify-center items-center mt-20">
        <Link
          to={"/gpa_calculator"}
          className="focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center transform transition duration-300 hover:scale-105">
            <FaCalculator className="text-4xl text-blue-700 mr-4" />
            <div>
              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                GPA Calculator
              </h2>
              <p className="text-gray-700">Calculate your GPA!</p>
            </div>
          </div>
        </Link>
        <Link
          to={"/cgpa_calculator"}
          className="focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center transform transition duration-300 hover:scale-105">
            <AiOutlineFundProjectionScreen className="text-4xl text-blue-700 mr-4" />
            <div>
              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                CGPA Calculator
              </h2>
              <p className="text-gray-700">Calculate your CGPA!</p>
            </div>
          </div>
        </Link>
        <Link
          to={"/cover_page"}
          className="focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center transform transition duration-300 hover:scale-105">
            <FaClipboard className="text-4xl text-blue-700 mr-4" />
            <div>
              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                Cover Page Generator
              </h2>
              <p className="text-gray-700">Build your own Cover Page!</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
