import { PDFExport } from "@progress/kendo-react-pdf";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { FaArrowLeft, FaPrint } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const CoverPrint = forwardRef((props, ref) => {
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

    const componentRef = useRef();
    const pdfExportComponent = useRef(null);

    useImperativeHandle(ref, () => ({
        print: () => handlePrint(),
    }));

    const handlePrint = () => {
        if (pdfExportComponent.current) {
            pdfExportComponent.current.save();
        }
    };

    const handleBack = () => {
        window.history.back();
    };

    return (
        <div className="max-w-5xl mx-auto border-2 border-gray-300 p-8 my-8">
            <PDFExport ref={pdfExportComponent} paperSize="A4">
                <div
                    ref={componentRef}
                    style={{
                        height: "297mm",
                        width: "210mm",
                        backgroundColor: "#FFFFFF",
                    }}
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
                    </div>
                    </div>
            </PDFExport>
            <div className="flex justify-between items-center">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleBack}
                >
                    <FaArrowLeft className="inline-block mr-2" /> Back
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handlePrint}
                >
                    <FaPrint className="inline-block mr-2" /> Print
                </button>
            </div>
        </div>
    );
});
export default CoverPrint;
