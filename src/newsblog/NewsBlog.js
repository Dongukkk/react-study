import './NewsBlog.css';
import { useState } from 'react';

function NewsBlog(){

    let title = "React Study";

    let [news1, setNews1] = useState('오늘의 뉴스');
    let [news2, setNews2] = useState('어제의 뉴스');
    let [news3, setNews3] = useState('내일의 뉴스');

    let [news, setNews] = useState( ["오늘의 뉴스","어제의 뉴스","내일의 뉴스"]);

    let [like1,setLike1] = useState(0);
    let [like2,setLike2] = useState(0);
    let [like3,setLike3] = useState(0);

    let [like, setLike] = useState([0,0,0]);
    

    return (
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <p style={ { color:"orange", fontSize:'20px' } }>{title}</p>
            </div>

            <div className='post-list'>
                <h4 onClick={()=>{
                    let change = [...like];
                    change[0]=like[0]+1;
                    setLike(change);
                }}>{news[0]} 💖<span>{like[0]}</span></h4>
                <p>내용 무</p>

                
                {/* <button onClick={()=>{
                    let change = [...news];
                    change[0] = "Today News";
                    setNews(change);
                }}>제목 변경</button> */}
            </div>
            
            <div className='post-list'>
                <h4 onClick={()=>{
                    let change = [...like];
                    change[1]=like[1]+1;
                    setLike(change);
                }}>{news[1]} 💖<span>{like[1]}</span></h4>
                <p>내용 무</p>
            </div>
            
            <div className='post-list'>
                <h4 onClick={()=>{
                    let change = [...like];
                    change[2]=like[2]+1;
                    setLike(change);
                }}>{news[2]} 💖<span>{like[2]}</span></h4>
                <p>내용 무</p>
            </div>

        </div>
    );
}

export default NewsBlog;