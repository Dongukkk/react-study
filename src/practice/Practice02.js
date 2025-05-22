import { useState } from "react";

function Practice02(){

    //useState -> state변수 : 재렌더링발생, 데이터값유지
    let [index,setIndex] = useState(0);
    let textArr = ['하나','둘','셋'];

    return (
        <div className="App">
            <p>{textArr[index]}</p>
            <button onClick={()=>{
                console.log(index);
                setIndex((index+1)%textArr.length);
            }}>변경버튼</button>
        </div>
    );
}

export default Practice02;