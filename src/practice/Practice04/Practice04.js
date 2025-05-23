import { useState } from 'react';
import './Practice04.css';

function Practice04(){

    let [boxCnt, setBoxCnt] = useState([]);

    return (
        <div>
            <button style= {{margin:'10px'}} onClick={()=>{
                setBoxCnt([...boxCnt,'box']);
            }}>추가</button>
            <br/>
            {
                boxCnt.map(()=>{
                    return <div className='box'>박스</div>;
                })
            }
            
        </div>
    );
}

export default Practice04;