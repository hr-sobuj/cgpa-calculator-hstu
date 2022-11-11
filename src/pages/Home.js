import { Link, useNavigate } from "react-router-dom";

export default function Home(){
    let navigate=useNavigate();
    return(
        <>
      <div className="flex justify-center items-center space-x-2 h-screen">
      <Link to={"/gpa_calculator"} className="bg-black text-white">GPA Calculator</Link>
        <Link to={"/cgpa_calculator"} className="bg-blue-900 text-white">CGPA Calculator</Link>
      </div>
        </>
    )
}