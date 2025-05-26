import { useState } from "react";
import Box from "./Box";

function Practice05(){

    let [colorArr,setColorArr] = useState(['black']);

    return (
        <>
            <div>
                <button onClick={() => { 
                    let change = ['red',...colorArr];
                    setColorArr(change);
                }}>앞빨간박스추가</button>
                <button onClick={() => {
                    let change = ['blue',...colorArr];
                    setColorArr(change);
                }}>앞파란박스추가</button>
                <button onClick={() => {
                    let change = ['green',...colorArr];
                    setColorArr(change);
                }}>앞초록박스추가</button>

                <button onClick={() => { 
                    let change = [...colorArr,'red'];
                    setColorArr(change);
                }}>뒤빨간박스추가</button>
                <button onClick={() => { 
                    let change = [...colorArr,'blue'];
                    setColorArr(change);
                }}>뒤파란박스추가</button>
                <button onClick={() => { 
                    let change = [...colorArr,'green'];
                    setColorArr(change);
                }}>뒤초록박스추가</button>

                <button onClick={() => { 
                    let change = [...colorArr];
                    // change.splice(0, 1);
                    change.shift();
                    setColorArr(change);
                }}>앞 박스 삭제</button>
                <button onClick={() => { 
                    let change = [...colorArr];
                    // change.splice(change.length-1, 1);
                    change.pop();
                    setColorArr(change);
                }}>뒤 박스 삭제</button>
            </div>
            <div>
                {
                    colorArr.map((color)=>{
                        return <Box bgColor= {color}/>;
                    
                    })
            }
                
            </div>
    
        </>
        );
}

export default Practice05;