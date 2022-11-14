import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl pt-10">Hajee Mohammad Danesh Science & Technology University</h1>
      <div className="flex space-x-5 h-screen justify-center items-center">
      <Link to={"/gpa_calculator"} className=" text-white">
          <div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h2 class="text-2xl font-bold mb-2 text-gray-800">
                GPA Calculator
              </h2>
              <p class="text-gray-700">Calculate your GPA!</p>
            </div>
          </div>
        </Link>
        <Link to={"/cgpa_calculator"} className=" text-white">
          <div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h2 class="text-2xl font-bold mb-2 text-gray-800">
                CGPA Calculator
              </h2>
              <p class="text-gray-700">Calculate your CGPA!</p>
            </div>
          </div>
        </Link>
        <Link to={"/cover_page"} className=" text-white">
          <div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h2 class="text-2xl font-bold mb-2 text-gray-800">
                Cover Page Generator
              </h2>
              <p class="text-gray-700">Build your own Cover Page!</p>
            </div>
          </div>
        </Link>
      </div>
      </div>
    </>
  );
}
