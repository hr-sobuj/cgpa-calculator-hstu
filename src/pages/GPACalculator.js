import React, { useState } from "react";

export default function GPACalculator() {
    const [inputFields, setInputFields] = useState([
        { credit: '', grade: '' }
    ])

    const handleFormChange=(index,e)=>{
        let data=[...inputFields];
        console.log(e.target.name);
        data[index][e.target.name]=e.target.value;
        setInputFields(data);
    }

    const addField = () => {
        let newField = { credit: '', grade: '' }
        setInputFields([...inputFields, newField])
    }

    const generateResult=(e)=>{
        e.preventDefault();
        console.log(inputFields);
    }

    return (
        <>
            <div>
                <div className="h-screen flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-bold flex justify-center">GPA Calculator</h1>
                    <form className="flex flex-col">
                        {inputFields?.map((input, idx) => {
                            return (
                                <React.Fragment key={idx}>
                                    <div>
                                        <input type="number" name="credit" id="" placeholder="Enter your course Credit" value={input.credit} className="border px-3 py-2" onChange={(e)=>handleFormChange(idx,e)} />
                                       
                                        <select name="grade" value={input.grade} className="border px-3 py-2"  onChange={(e)=>handleFormChange(idx,e)}>
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
                    <button onClick={addField}>Add More</button>
                    <button onClick={generateResult}>Submit</button>
                </div>
            </div>
        </>
    )
}