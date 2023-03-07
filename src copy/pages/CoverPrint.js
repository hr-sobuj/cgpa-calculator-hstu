import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { FaArrowLeft, FaPrint } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const CoverPrint = forwardRef((props, ref) => {
    const location = useLocation();
    const {
        studentName,
        studentId,
        studentFaculty,
        studentDepartment,
        level,
        semester,
        teacherName,
        teacherDesignation,
        teacherFaculty,
        teacherDepartment,
        course_title,
        course_code,
        coverType,
        submitDate,
    } = location.state;

    const componentRef = useRef();

    useImperativeHandle(ref, () => ({
        print: () => handlePrint(),
    }));

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: `${course_code} - ${course_title} (${coverType})`,
        printContent: () => componentRef.current,
    });

    const handleBack = () => {
        window.history.back();
    };

    return (
        <>
            <div ref={componentRef}
                className="max-w-5xl mx-auto border-2 border-gray-300 p-8 my-8"
                style={{ height: "297mm", width: "210mm", backgroundColor: "#FFFFFF" }}
            >
                <div className="flex justify-between items-center mb-8">
                    <div className="text-5xl font-bold text-center mx-auto text-blue-700">
                        {coverType}
                    </div>
                </div>
                <div className="text-3xl font-bold text-center mb-8">
                    {course_code} - {course_title}
                </div>
                <div className="flex flex-row justify-center mb-8">
                    <div className="w-1/2">
                        <div className="font-bold text-center text-gray-500 mb-2">
                            Teacher Information:
                        </div>
                        <div className="text-center mb-2">{teacherName}</div>
                        <div className="text-center mb-2">{teacherDesignation}</div>
                        <div className="text-center text-gray-500">
                            {teacherFaculty}, {teacherDepartment}
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="font-bold text-center text-gray-500 mb-2">
                            Student Information:
                        </div>
                        <div className="text-center mb-2">{studentName}</div>
                        <div className="text-center mb-2">{studentId}</div>
                        <div className="text-center mb-2">{level} , {semester}</div>
                        <div className="text-center text-gray-500">
                            {studentFaculty}, {studentDepartment}
                        </div>
                    </div>
                </div>
                <div className="font-bold text-center mb-8 text-gray-500">
                    Submission Date: {submitDate}
                </div>
                <div className="flex flex-col justify-end items-center my-8">
                    <img
                        src="https://hstu.ac.bd/img/hstu_logo_.png"
                        alt="HSTU Logo"
                        className="w-48 h-48 mb-4"
                    />

                    <div className="text-2xl font-bold text-center mb-2">
                        {studentDepartment}
                    </div>
                    <div className="text-3xl font-bold text-center mb-2">
                        Hajee Mohammad Danesh Science and Technology University
                    </div>
                    <div className="text-xl font-bold text-center mb-2">
                        Dinajpur-5200, Bangladesh
                    </div>

                </div>

            </div>
            <div className="flex justify-center items-center space-x-5 mb-6">
                <button
                    onClick={handleBack}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                    <FaArrowLeft className="inline mr-2" /> Back
                </button>
                <button
                    onClick={handlePrint}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    <FaPrint className="inline mr-2" /> Print
                </button>
            </div>
        </>
    );
});

export default CoverPrint;
