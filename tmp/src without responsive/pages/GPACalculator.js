import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function classNames(...classes){
    return classes.filter(Boolean).join(" ")
}

export default function GPACalculator() {
    let navigate = useNavigate();
    let [name, setName] = useState("");
    const [inputFields, setInputFields] = useState([{ credit: "", point: "" }]);
    const [result, setResult] = useState();

    const handleFormChange = (index, e) => {
        let data = [...inputFields];
        data[index][e.target.name] = e.target.value;
        setInputFields(data);
    };

    const addField = () => {
        let newField = { credit: "", point: "" };
        setInputFields([...inputFields, newField]);
    };

    const removeField = (index) => {
        if (inputFields.length === 1) {
            return; // if only one input field, disable removing it
        }
        let data = [...inputFields];
        data.splice(index, 1);
        setInputFields(data);
    };

    const generateResult = (e) => {
        e.preventDefault();
        let total_credit = 0.0;
        let total_point = 0.0;
        let hasEmptyFields = false; // added variable to keep track of empty fields
        inputFields.forEach((item) => {
            if (item.credit === "" || item.point === "") { // check for empty fields
                hasEmptyFields = true;
                return;
            }
            total_credit += parseFloat(item.credit);
            if (item.point === 0) {
                total_point = total_point + 0;
            } else {
                total_point += parseFloat(
                    parseFloat(item.point) * parseFloat(item.credit)
                );
            }
        });

        let result = 0;
        if (parseFloat(total_credit) !== 0.0) {
            result = parseFloat(parseFloat(total_point) / parseFloat(total_credit));
        }
        if (!name) {
            hasEmptyFields = true 
          }
        

        if (hasEmptyFields) { // display error message if any required fields are empty
            alert("Please fill out all the required fields.");
        } else if (isNaN(result) || result === 0) {
            setResult(0.0);
        } else {
            setResult(result);
            // result=Math.ceil(result)
            result = result.toFixed(2)
            navigate("/gpa_result", { state: { inputFields, name, result } })
        }
    };


    return (
        <>
        <Navbar/>
            <div>
                <div className="h-screen flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-bold mb-5 text-green-500">
                        {result && <span>Your GPA is {result}</span>}
                    </h1>
                    <h1 className="text-4xl font-bold flex justify-center mb-5">
                        GPA Calculator
                    </h1>
                    <form className="flex flex-col space-y-2">
                        <div>
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                className="border px-3 py-2 w-full rounded-lg"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </div>
                        {inputFields?.map((input, idx) => {
                            return (
                                <React.Fragment key={idx}>
                                    <div className="flex space-x-2">
                                        <input
                                            type="number"
                                            max={4}
                                            maxLength={1}
                                            name="credit"
                                            id=""
                                            placeholder="Course Credit"
                                            value={input.credit}
                                            className="border px-3 py-2 rounded-lg"
                                            onChange={(e) => handleFormChange(idx, e)}
                                            required
                                        />

                                        <select
                                            name="point"
                                            value={input.point}
                                            className="border px-3 py-2 rounded-lg"
                                            onChange={(e) => handleFormChange(idx, e)}
                                            required
                                        >
                                            <option value="">Choose Grade</option>
                                            <option value="4.00">A+</option>
                                            <option value="3.75">A</option>
                                            <option value="3.50">A-</option>
                                            <option value="3.00">B</option>
                                            <option value="2.75">B-</option>
                                            <option value="2.50">C+</option>
                                            <option value="2.25">C</option>
                                            <option value="2.00">D</option>
                                            <option value="0.00">F</option>
                                        </select>
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
                                </React.Fragment>
                            );
                        })}
                  
                        <button
                            className="bg-green-500 text-white rounded-lg px-3 py-2 mt-3"
                            type="submit"
                            onClick={generateResult}
                        >
                            Calculate GPA
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
