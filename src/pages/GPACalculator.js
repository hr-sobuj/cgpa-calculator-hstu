import React, { useState } from "react";

export default function GPACalculator() {
    const [inputFields, setInputFields] = useState([
        { credit: 0.00, point: 0.00 }
    ])
    const [result, setResult] = useState(0.00);

    const handleFormChange = (index, e) => {
        let data = [...inputFields];
        data[index][e.target.name] = e.target.value;
        setInputFields(data);
    }

    const addField = () => {
        let newField = { credit: '', point: '' }
        setInputFields([...inputFields, newField])
    }

    const generateResult = (e) => {
        e.preventDefault();
        // console.log(inputFields);
        let total_credit = 0.00;
        let total_point = 0.00;
        inputFields.map((item) => {
            console.log(item);
            total_credit += parseFloat(item.credit)
            total_point +=parseFloat(parseFloat(item.point) * parseFloat(item.credit))
            console.log("tcr",total_point);
            console.log("cr",total_credit);
            let result=parseFloat((parseFloat(total_point) / parseFloat(total_credit)));
            console.log("res",result);
            setResult(result)
            return 0;
        }
        )

    }

    return (
        <>
        {result && result}
            <div>
                <div className="h-screen flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-bold flex justify-center">GPA Calculator</h1>
                    <form className="flex flex-col">
                        {inputFields?.map((input, idx) => {
                            return (
                                <React.Fragment key={idx}>
                                    <div>
                                        <input type="number" max={4} maxLength={1} name="credit" id="" placeholder="Enter your course Credit" value={input.credit} className="border px-3 py-2" onChange={(e) => handleFormChange(idx, e)} />

                                        <select name="point" value={input.point} className="border px-3 py-2" onChange={(e) => handleFormChange(idx, e)}>
                                            <option value="">Choose</option>
                                            <option value="4.00">A+</option>
                                            <option value="3.75">A</option>
                                            <option value="3.50">A-</option>
                                            <option value="3.25">B+</option>
                                            <option value="3.00">B</option>
                                            <option value="2.75">B-</option>
                                            <option value="2.50">C+</option>
                                            <option value="2.25">C</option>
                                            <option value="2.00">D</option>
                                            <option value="0.00">F</option>
                                        </select>
                                    </div>

                                </React.Fragment>
                            )
                        })}
                    </form>
                    <div className="flex space-x-3">
                        <button onClick={addField} className="bg-red-400">Add More</button>
                        <button onClick={generateResult} className="bg-lime-600">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}