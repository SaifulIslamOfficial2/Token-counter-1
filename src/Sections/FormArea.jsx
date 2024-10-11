import { useState } from "react"
import H1 from "../Componetnt/H1";


function FormArea() {

  let [num, setNum] = useState(0)

    let clickHandaler = () => {

       setNum( (int)=>{
            return int + 1;
       })
     }


  return (
   <div>
    <div className=" bg-white shadow-sm rounded-lg p-4 ">
        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
            <small className=" text-red-500 pb-4 hidden">Somthing is going wrong </small>
        <input type="text" placeholder="Type here" className="input input-bordered w-full mt-5 " />
        <small className=" text-red-500 pb-4 hidden">Somthing is going wrong </small>
        <input type="text" placeholder="Type here" className="input input-bordered w-full mt-5" />

        <button onClick={clickHandaler} className="btn btn-success mt-5 text-white">Add Token {num} </button>
        
    </div>
   <H1  dataNum={num}/>
   </div>
  )
}

export default FormArea