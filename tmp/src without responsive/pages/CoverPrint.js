import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { FaArrowLeft, FaPrint } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import Navbar from './../components/Navbar';

const CoverPrint = forwardRef((props, ref) => {
    const location = useLocation();
    const {
        studentName,
        studentId,
        // studentFaculty,
        studentDepartment,
        level,
        semester,
        teacherName,
        teacherDesignation,
        // teacherFaculty,
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
            <div className="mb-8">
                <Navbar />
            </div>
            <div
                ref={componentRef}
                className="max-w-5xl mx-auto border-2 border-gray-300 p-8 my-0 flex flex-col justify-between"
                style={{
                    height: "297mm",
                    width: "210mm",
                    backgroundColor: "#FFFFFF",
                    display: "grid",
                    gridTemplateRows: "1fr auto",
                }}
            >
                <div className="flex justify-center items-center">
                    <div className="text-5xl font-bold text-blue-700">{coverType}</div>
                </div>
                <div className="text-3xl font-bold text-center mb-8">
                    {course_code} - {course_title}
                </div>
                <div className="flex justify-center items-center mt-20 mb-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-2 gap-x-5 divide-x-2">
                            <div className="text-gray-500 flex flex-col items-center p-4">
                                <div className="font-bold mb-2">Submitted To</div>
                                <div>{teacherName}</div>
                                <div>{teacherDesignation}</div>
                                <div>{teacherDepartment}</div>
                            </div>
                            <div className="text-gray-500 flex flex-col items-center p-4">
                                <div className="font-bold mb-2">Submitted By</div>
                                <div>{studentName}</div>
                                <div>{studentId}</div>
                                <div>Level {level}, Semester {semester}</div>
                                <div>{studentDepartment}</div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="flex justify-center items-center my-16">
                    <div className="font-bold text-gray-500">
                        Submission Date: {submitDate}
                    </div>
                </div>
                <div className="flex flex-col items-center mb-8">
                    <img
                        src="https://hstu.ac.bd/img/hstu_logo_.png"
                        alt="HSTU Logo"
                        className="w-48 h-48 mb-4"
                    />
                    <div className="text-2xl font-bold">{studentDepartment}</div>
                    <div className="text-3xl text-center font-bold">
                        Hajee Mohammad Danesh Science and Technology University
                    </div>
                    <div className="text-xl font-bold">
                        Dinajpur-5200, Bangladesh
                    </div>
                </div>

            </div>
            <div className="flex justify-center items-center space-x-5 my-6">
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
