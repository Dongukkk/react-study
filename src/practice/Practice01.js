import { useState } from "react";
import './Practice01.css';
function Practice01(){

    let [even, setEven] = useState(0);
    return (
        <div>
            <br></br>
            <button onClick={()=>{
                setEven(even+2);
            }}>짝수출력</button>
            {/* <span style={{color : 'red'}}>{even}</span> */}
            <span className="even-red">{even}</span>
        </div>
        
    );
}

export default Practice01;