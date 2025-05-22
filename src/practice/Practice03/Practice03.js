import './Practice03.css';
import TextBox from './TextBox';

let titleArr = ['하나','둘','셋','넷','다섯'];
function Practice03() {
    return(
        <div>
            {
                titleArr.map((content)=>{
                return <TextBox item ={content}/>;
            })
            }
            
        </div>
    );
}

export default Practice03;