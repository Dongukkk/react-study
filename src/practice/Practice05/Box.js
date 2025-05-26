import './box.css';

function Box(props){

    
    return (
    <div className="box" style={{backgroundColor:props.bgColor}}>
        <button onClick={()=>{
            let change = [...props.colorArr];
            change.splice(props.index, 1);
            props.setColorArr(change);
        }}>X</button>
    </div>
    );
}

export default Box;