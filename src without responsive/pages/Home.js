import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaCalculator, FaClipboard } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Welcome to GPA & CGPA Calculator</h1>
          <div className="mt-10 flex flex-wrap justify-center">
            <Link
              to={"/gpa_calculator"}
              className="focus:outline-none m-4 flex items-center justify-center w-72 h-72 bg-white rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="p-6 text-center">
                <FaCalculator className="text-6xl text-blue-700 mb-4" />
                <h2 className="text-xl font-bold text-gray-800 mb-2">Calculate your GPA</h2>
                <p className="text-gray-700 text-lg">Determine your Grade Point Average (GPA) for each semester and cumulative GPA.</p>
              </div>
            </Link>
            <Link
              to={"/cgpa_calculator"}
              className="focus:outline-none m-4 flex items-center justify-center w-72 h-72 bg-white rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="p-6 text-center">
                <AiOutlineFundProjectionScreen className="text-6xl text-blue-700 mb-4" />
                <h2 className="text-xl font-bold text-gray-800 mb-2">Calculate your CGPA</h2>
                <p className="text-gray-700 text-lg">Compute your Cumulative Grade Point Average (CGPA) across all semesters.</p>
              </div>
            </Link>
            <Link
              to={"/cover_page"}
              className="focus:outline-none m-4 flex items-center justify-center w-72 h-72 bg-white rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="p-6 text-center">
                <FaClipboard className="text-6xl text-blue-700 mb-4" />
                <h2 className="text-xl font-bold text-gray-800 mb-2">Create a Cover Page</h2>
                <p className="text-gray-700 text-lg">Design and download a professional-looking cover page for your academic papers.</p>
              </div>
            </Link>
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-700 text-lg">This calculator is tailored for Hajee Mohammad Danesh Science and Technology University students to make their academic journey easier.</p>
          </div>
        </div>
      </div>
    </>
  );
}
