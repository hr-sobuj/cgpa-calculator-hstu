import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function CGPACalculator() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [inputFields, setInputFields] = useState([{ gpa: "", credit: "" }]);
    const [result, setResult] = useState("");
    const [errorMessages, setErrorMessages] = useState([]);

    const handleFormChange = (index, e) => {
        const data = [...inputFields];
        data[index][e.target.name] = e.target.value;
        setInputFields(data);
    };

    const addField = () => {
        const newField = { gpa: "", credit: "" };
        setInputFields([...inputFields, newField]);
    };

    const removeField = (index) => {
        if (inputFields.length === 1) return;
        const data = [...inputFields];
        data.splice(index, 1);
        setInputFields(data);
    };

    const generateResult = (e) => {
        e.preventDefault();
        const errors = [];
        let total_gpa = 0.0;
        let total_credit = 0.0;
        inputFields.forEach((item, index) => {
            if (!item.gpa || !item.credit) {
                errors[index] = "Please fill both fields";
                return;
            }
            total_credit += parseFloat(item.credit);
            if (item.gpa === 0) {
                total_gpa = total_gpa + 0;
            } else {
                total_gpa += parseFloat(parseFloat(item.gpa) * parseFloat(item.credit));
            }
        });
        if (errors.length) {
            setErrorMessages(errors);
            setResult("");
            return;
        }
        let result = 0;
        if (parseFloat(total_credit) !== 0.0) {
            result = parseFloat(parseFloat(total_gpa) / parseFloat(total_credit));
        }
        if (isNaN(result) || result === 0) {
            setResult(0.0);
        } else {
            result = result.toFixed(2);
            setResult(result);
            
            navigate("/cgpa_result", { state: { inputFields, name, result } });
        }
        setErrorMessages([]);
    };

    return (
        <>
        <Navbar/>
        <div className="bg-gray-100 h-screen">
            <div className="flex flex-col h-full justify-center items-center">
                <h1 className="text-4xl font-bold text-green-500 mb-8">
                    {result && <span>Your CGPA is {result}</span>}
                </h1>
                <h1 className="text-4xl font-bold mb-6 text-center">
                    CGPA Calculator
                </h1>
                <form className="space-y-4">
                    <div className="flex flex-col">
                        {/* <label className="font-medium mb-2">Enter Your Name</label> */}
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            className="border rounded-lg px-3 py-2 w-full"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>
                    {inputFields?.map((input, idx) => {
                        return (
                            <div className="flex space-x-4 items-center" key={idx}>
                                <div className="flex flex-col w-40">
                                    {/* <label className="font-medium mb-2">Enter GPA</label> */}
                                    <input
                                        type="number"
                                        min="0"
                                        max="4"
                                        step="0.01"
                                        placeholder="Enter GPA"
                                        name="gpa"
                                        className="border rounded-lg px-3 py-2 w-full"
                                        onChange={(e) => handleFormChange(idx, e)}
                                        value={input.gpa}
                                    />
                                </div>
                                <div className="flex flex-col w-40">
                                    {/* <label className="font-medium mb-2">Enter Credit</label> */}
                                    <input
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        placeholder="Enter Credit"
                                        name="credit"
                                        className="border rounded-lg px-3 py-2 w-full"
                                        onChange={(e) => handleFormChange(idx, e)}
                                        value={input.credit}
                                    />
                                </div>
                                {idx === inputFields.length - 1 ? (
                                    <button
                                        className="bg-green-500 text-white rounded-lg px-3 py-2"
                                        type="button"
                                        onClick={addField}
                                    >
                                        <FaPlus />
                                    </button>
                                ) : (
                                    <button
                                        className="bg-red-500 text-white rounded-lg px-3 py-2"
                                        type="button"
                                        onClick={() => removeField(idx)}
                                    >
                                        <FaMinus />
                                    </button>
                                )}
                            </div>
                        );
                    })}
                    <div className="flex flex-col space-y-2">
                        {errorMessages.length > 0 &&
                            errorMessages.map((error, index) => {
                                return (
                                    <p key={index} className="text-red-500 text-sm">
                                        {error}
                                    </p>
                                );
                            })}
                        <button
                            type="submit"
                            className="bg-green-500 text-white py-2 rounded-lg w-full"
                            onClick={generateResult}
                        >
                            Calculate CGPA
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}



