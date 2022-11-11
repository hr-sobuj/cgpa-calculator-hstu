import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [10, 10]
};

export default function ResultPrint() {
    let navigate=useNavigate()
    const location = useLocation();
    let { inputFields, name, result } = location.state;

    console.log(inputFields, name, result);
    return <>
        <div className="flex flex-col justify-center w-full items-center space-y-4">

            <div ref={ref}>
                <div className="flex flex-col justify-center w-full items-center space-y-4">
                    <h1 className="text-lg font-bold text-indigo-500">Hajee Mohammad Danesh Science & Technology University </h1>
                    {/* <h1 className="">{name}</h1> */}
                    <table className="border border-black border-collapse max-w-full w-96">
                        <tr className="text-center">
                            <td className="border border-black">Name</td>
                            <td className="border border-black">{name}</td>
                        </tr>
                        <tr>
                            <th className="border border-black">Credit</th>
                            <th className="border border-black">Point</th>
                        </tr>
                        {inputFields.map((item) => {
                            return (

                                <tr className="text-center">
                                    <td className="border border-black">{item.credit}</td>
                                    <td className="border border-black">{item.point}</td>
                                </tr>

                            )
                        })}
                    </table>
                    <h1 className="text-xl font-bold text-center mt-5">Your Net GPA is {result}</h1>

                </div>
            </div>

            <Pdf targetRef={ref} filename={`${name}'s_result`} options={options} >
                {({ toPdf }) => <button className="bg-lime-500" onClick={toPdf}>Print</button>}
            </Pdf>
            <button className="bg-blue-600 text-white" onClick={()=>navigate("/")}>Search Again</button>
        </div>
    </>;
}
