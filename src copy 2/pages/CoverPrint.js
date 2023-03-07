import React from "react";
import { FaArrowLeft, FaPrint, FaUniversity } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function CoverPrint() {
  const location = useLocation();
  const {
    studentName,
    studentFaculty,
    studentDepartment,
    teacherName,
    teacherDesignation,
    teacherFaculty,
    teacherDepartment,
    course_title,
    course_code,
    coverType,
    submitDate,
  } = location.state;

  const handlePrint = () => {
    const content = document.getElementById("cover-page");
    const pri = window.open("", "print");
    pri.document.write(content.innerHTML);
    pri.document.close();
    pri.focus();
    pri.print();
    pri.close();
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <Navbar />
      <div
        className="max-w-5xl mx-auto border-2 border-gray-300 p-8 my-8"
        id="cover-page"
        style={{ height: "297mm", width: "210mm" }}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="text-4xl font-bold text-center mx-auto">
            {coverType}
          </div>
        </div>
        <div className="text-2xl font-bold text-center mb-8">
          {course_code} - {course_title}
        </div>
        <div className="flex flex-row justify-center mb-8">
          <div className="w-1/2">
            <div className="font-bold text-center">Teacher Information:</div>
            <div className="text-center">{teacherName}</div>
            <div className="text-center">{teacherDesignation}</div>
            <div className="text-center">
              {teacherFaculty}, {teacherDepartment}
            </div>
          </div>
          <div className="w-1/2">
            <div className="font-bold text-center">Student Information:</div>
            <div className="text-center">{studentName}</div>
            <div className="text-center">
              {studentFaculty}, {studentDepartment}
            </div>
          </div>
        </div>
        <div className="font-bold text-center mb-8">
          Submission Date: {submitDate}
        </div>
        <div className="flex flex-col items-center my-8">
          <img
            src="https://hstu.ac.bd/img/hstu_logo_.png"
            alt="HSTU logo"
            className="h-16 w-16 mb-2"
          />
          <div className="text-xl font-bold text-center">
            {studentDepartment}
          </div>
          <div className="text-2xl font-bold text-center">
            Hajee Mohammad Danesh Science and Technology University
          </div>
          <FaUniversity className="text-4xl mt-2" />
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handlePrint}
        >
          <FaPrint className="mr-2" />
          Print
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleBack}
        >
          <FaArrowLeft className="mr-2" />
          Back
    </button>
  </div>
</>
);
}