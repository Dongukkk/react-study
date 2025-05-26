import './box.css';

function Box(props){

    
    return (
    <div className="box" style={{backgroundColor:props.bgColor}}></div>
    );
}

export default Box;