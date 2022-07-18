import React from "react";
import { useEffect,useState } from "react";


function Page_button(){
    const [counter, setCounter] = useState(0);
    const inserts = () => {
        setCounter(count => count + 1);
      };
     
      const deletes = () => {
        setCounter(count => count - 1);
      };

    return(
        <div className="container">
            <div className="Botton">

                <div className="Bottonlist">
                <h1 className="text-center">{counter}</h1> 
                <button className="btn btn-success" onClick={inserts}>เพิ่ม</button>
                <button className="btn btn-danger" onClick={deletes}>ลด</button>
                </div>
            </div>
        </div>
    );
}


export default Page_button;