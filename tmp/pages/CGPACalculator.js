import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CGPACalculator() {
    let navigate = useNavigate();
    let [name, setName] = useState("");
    const [inputFields, setInputFields] = useState([{ gpa: "", credit: "" }]);

    const [result, setResult] = useState();

    const handleFormChange = (index, e) => {
        let data = [...inputFields];
        data[index][e.target.name] = e.target.value;
        setInputFields(data);
    };

    const addField = () => {
        let newField = { gpa: "", credit: "" };
        setInputFields([...inputFields, newField]);
    };

    const removeField = (index) => {
        let data = [...inputFields];
        data.splice(index, 1);
        setInputFields(data);
    };

    const generateResult = (e) => {
        e.preventDefault();
        let total_gpa = 0.0;
        let total_credit = 0.0;
        inputFields.map((item) => {
            total_credit += parseFloat(item.credit);
            if (item.gpa === 0) {
                total_gpa = total_gpa + 0;
            } else {
                total_gpa += parseFloat(
                    parseFloat(item.gpa) * parseFloat(item.credit)
                );
            }
            let result = 0;
            if (parseFloat(total_credit) !== 0.0) {
                result = parseFloat(parseFloat(total_gpa) / parseFloat(total_credit));
            }

            if (isNaN(result) || result === 0) {
                setResult(0.0);
            } else {
                
                result = result.toFixed(2)
                setResult(result);
                navigate("/result", { state: { inputFields, name, result } })
            }


            return 0;
        });

    };

    return (
        <>
            <div>
                <div className="h-screen flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-bold mb-5 text-green-500">
                        {result && <span>Your GPA is {result}</span>}
                    </h1>
                    <h1 className="text-4xl font-bold flex justify-center">
                        CGPA Calculator
                    </h1>
                    <form className="flex flex-col space-y-2">
                        <div>
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                className="border px-3 py-2 w-full"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </div>
                        {inputFields?.map((input, idx) => {
                            return (
                                <React.Fragment key={idx}>
                                    <div className="w-full">

                                        <input
                                            type="number"
                                            max={4}
                                            maxLength={2}
                                            name="gpa"
                                            id=""
                                            placeholder={`Enter ${idx + 1}th semester GPA`}
                                            value={input.gpa}
                                            className="border px-3 py-2"
                                            onChange={(e) => handleFormChange(idx, e)}
                                            required
                                        />

                                        <input
                                            type="number"
                                            max={4}
                                            maxLength={1}
                                            name="credit"
                                            id=""
                                            placeholder={`Enter ${idx + 1}th semester total credit`}
                                            value={input.credit}
                                            className="border px-3 py-2"
                                            onChange={(e) => handleFormChange(idx, e)}
                                            required
                                        />


                                        <button
                                            onClick={() => removeField(idx)}
                                            className="border p-2"
                                        >
                                            ❌
                                        </button>
                                    </div>
                                </React.Fragment>
                            );
                        })}
                    </form>
                    <div className="flex space-x-3">
                        <button onClick={addField} className="bg-red-400">
                            Add More
                        </button>
                        <button onClick={generateResult} className="bg-lime-600">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
