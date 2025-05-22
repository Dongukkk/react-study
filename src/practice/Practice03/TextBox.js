import './TextBox.css';

function TextBox({item}){

    return (
        <div className='textItem'>
            <p className='title'>제목 : {item}</p>
            <p>내용 : 내용{item}</p>
        </div>
    );
}

export default TextBox;