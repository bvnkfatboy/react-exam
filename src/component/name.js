import { useEffect,useState } from "react";
import React from "react";

function Page_name(){
    const [count, setCount] = useState(0);
    const user = ["สมชาย", "สมหญิง", "สมนึก", "สมคิด"];
    useEffect(() => {
      setTimeout(()=>{
        setCount(count<3? count+1: 0);
      }, 5000);
    },[count]);
    
    const [time, setTime] = useState("");
    useEffect(() => {
        setTimeout(()=>{
            setTime(new Date().toLocaleTimeString("TH-th"));
          }, 1000);

    },[time]);


    return(
        <div className="container">
            <div className="Name">
                <p className="text-center">ขนะนี้เวลา <br/>
                <p id="time">{time}<p>{user[count]}</p> </p>
                
                </p>
            </div>
        </div>
    );
}


export default Page_name;