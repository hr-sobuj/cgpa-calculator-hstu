import React from "react";
import { useNavigate } from "react-router-dom";

export default function CoverPrint() {
    let navigate = useNavigate();
  
    return (
        <>
            <div>
                <div className="h-screen flex flex-col justify-center items-center">
              
                    <h1 className="text-4xl font-bold flex justify-center">
                        CGPA Calculator
                    </h1>
                    <form className="flex flex-col space-y-2">
                      
                    </form>
                    <div className="flex space-x-3">
                    
                        <button className="bg-lime-600">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
