import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function CoverPage() {
    const navigate = useNavigate();
    const [studentName, setStudentName] = useState("");
    const [studentId, setStudentId] = useState("");
    const [level, setLevel] = useState("");
    const [semester, setSemester] = useState("");
    const [studentFaculty, setStudentFaculty] = useState("");
    const [studentDepartment, setStudentDepartment] = useState("");
    const [teacherName, setTeacherName] = useState("");
    const [teacherDesignation, setTeacherDesignation] = useState("");
    const [teacherFaculty, setTeacherFaculty] = useState("");
    const [teacherDepartment, setTeacherDepartment] = useState("");
    const [course_title, setCourseTitle] = useState("");
    const [course_code, setCourseCode] = useState("");
    const [coverType, setCoverType] = useState("");
    const [submitDate, setSubmitDate] = useState("");
    const [errors, setErrors] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();

        let validationErrors = [];

        if (studentName.trim() === "") {
            validationErrors.push("Student name is required");
        }
        if (studentId.trim() === "") {
            validationErrors.push("Student ID is required");
        }
        if (level.trim() === "") {
            validationErrors.push("Level is required");
        }
        if (semester.trim() === "") {
            validationErrors.push("Semester is required");
        }
        if (studentFaculty.trim() === "") {
            validationErrors.push("Student faculty is required");
        }
        if (studentDepartment.trim() === "") {
            validationErrors.push("Student department is required");
        }
        if (teacherName.trim() === "") {
            validationErrors.push("Teacher name is required");
        }
        if (teacherDesignation.trim() === "") {
            validationErrors.push("Teacher designation is required");
        }
        if (teacherFaculty.trim() === "") {
            validationErrors.push("Teacher faculty is required");
        }
        if (teacherDepartment.trim() === "") {
            validationErrors.push("Teacher department is required");
        }

        if (course_title.trim() === "") {
            validationErrors.push("Course Title is required");
        }
        if (course_code.trim() === "") {
            validationErrors.push("Course Code is required");
        }
        if (coverType.trim() === "") {
            validationErrors.push("Cover Page type is required");
        }
        if (submitDate.trim() === "") {
            validationErrors.push("Submission date is required");
        }

        if (validationErrors.length === 0) {
            navigate("/print_cover", {
                state: {
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
                },
            });
        } else {
            setErrors(validationErrors.join(", "));
        }
    };



    return (
        <>
            <Navbar />

            <div className="h-screen flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold flex justify-center mb-8">
                    Cover Page Design
                </h1>
                {errors && <p className=" text-red-500">{errors}</p>}
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <div className="flex-1">
                            <label htmlFor="studentName" className="block text-gray-700 font-bold mb-2">
                                Student Name
                            </label>
                            <input
                                type="text"
                                name="studentName"
                                id="studentName"
                                value={studentName}
                                onChange={(event) => setStudentName(event.target.value)}
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-lime-600 focus:ring focus:ring-lime-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="studentId" className="block text-gray-700 font-bold mb-2">
                                Student ID
                            </label>
                            <input
                                type="text"
                                name="studentId"
                                id="studentId"
                                value={studentId}
                                onChange={(event) => setStudentId(event.target.value)}
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-lime-600 focus:ring focus:ring-lime-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="studentFaculty" className="block text-gray-700 font-bold mb-2">
                                Student Faculty
                            </label>
                            <input
                                type="text"
                                name="studentFaculty"
                                id="studentFaculty"
                                value={studentFaculty}
                                onChange={(event) => setStudentFaculty(event.target.value)}
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-lime-600 focus:ring focus:ring-lime-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="studentDepartment" className="block text-gray-700 font-bold mb-2">
                                Student Department
                            </label>
                            <input
                                type="text"
                                name="studentDepartment"
                                id="studentDepartment"
                                value={studentDepartment}
                                onChange={(event) => setStudentDepartment(event.target.value)}
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-lime-600 focus:ring focus:ring-lime-200 focus:ring-opacity-50"
                            />
                        </div>

                        <div className="flex-1">
                            <label htmlFor="level" className="block text-gray-700 font-bold mb-2">
                                Level
                            </label>
                            <input
                                type="text"
                                name="level"
                                id="level"
                                value={level}
                                onChange={(event) => setLevel(event.target.value)}
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-lime-600 focus:ring focus:ring-lime-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="semester" className="block text-gray-700 font-bold mb-2">
                                Semester
                            </label>
                            <input
                                type="text"
                                name="semester"
                                id="semester"
                                value={semester}
                                onChange={(event) => setSemester(event.target.value)}
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-lime-600 focus:ring focus:ring-lime-200 focus:ring-opacity-50"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <div className="flex-1">
                            <label htmlFor="teacherName" className="block text-gray-700 font-bold mb-2">
                                Teacher Name
                            </label>
                            <input
                                type="text"
                                name="teacherName"
                                id="teacherName"
                                value={teacherName}
                                onChange={(event) => setTeacherName(event.target.value)}
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-lime-600 focus:ring focus:ring-lime-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="teacherDesignation" className="block text-gray-700 font-bold mb-2">
                                Teacher Designation
                            </label>
                            <input
                                type="text"
                                name="teacherDesignation"
                                id="teacherDesignation"
                                value={teacherDesignation}
                                onChange={(event) => setTeacherDesignation(event.target.value)}
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-lime-600 focus:ring focus:ring-lime-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="teacherFaculty" className="block text-gray-700 font-bold mb-2">
                                Teacher Faculty
                            </label>
                            <input
                                type="text"
                                name="teacherFaculty"
                                id="teacherFaculty"
                                value={teacherFaculty}
                                onChange={(event) => setTeacherFaculty(event.target.value)}
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-lime-600 focus:ring focus:ring-lime-200 focus:ring-opacity-50"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <div className="flex-1">
                            <label htmlFor="teacherDepartment" className="block text-gray-700 font-bold mb-2">
                                Teacher Department
                            </label>
                            <input
                                type="text"
                                name="teacherDepartment"
                                id="teacherDepartment"
                                value={teacherDepartment}
                                onChange={(event) => setTeacherDepartment(event.target.value)}
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-lime-600 focus:ring focus:ring-lime-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="submitDate" className="block text-gray-700 font-bold mb-2">
                                Submit Date
                            </label>
                            <input
                                type="date"
                                name="submitDate"
                                id="submitDate"
                                value={submitDate}
                                onChange={(event) => setSubmitDate(event.target.value)}
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-lime-600 focus:ring focus:ring-lime-200 focus:ring-opacity-50"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <div className="flex-1">
                            <label htmlFor="courseTitle" className="block text-gray-700 font-bold mb-2">
                                Course Title
                            </label>
                            <input
                                type="text"
                                name="courseTitle"
                                id="courseTitle"
                                value={course_title}
                                onChange={(event) => setCourseTitle(event.target.value)}
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-lime-600 focus:ring focus:ring-lime-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="courseCode" className="block text-gray-700 font-bold mb-2">
                            Course Code
                            </label>
                            <input
                                type="text"
                                name="courseCode"
                                id="courseCode"
                                value={course_code}
                                onChange={(event) => setCourseCode(event.target.value)}
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-lime-600 focus:ring focus:ring-lime-200 focus:ring-opacity-50"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <div className="flex flex-col w-full">
                            <label htmlFor="coverType" className="block text-gray-700 font-bold mb-2">
                                Cover Page Type
                            </label>
                            <select name="coverType" id="coverType" value={coverType}
                                onChange={(event) => setCoverType(event.target.value)} className="w-full border-gray-300 rounded-md shadow-sm focus:border-lime-600 focus:ring focus:ring-lime-200 focus:ring-opacity-50"
                            >
                                <option value="Assignment">Assignment</option>
                                <option value="Lab Report">Lab Report</option>
                            </select>
                        </div>
                       
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="px-4 py-2 bg-lime-600 text-white rounded-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-opacity-50">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
