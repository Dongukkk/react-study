import './NewsBlog.css';
import { useState } from 'react';
import Modal from './Modal';

function NewsBlog(){

    let title = "React Study";

    let [news1, setNews1] = useState('오늘의 뉴스');
    let [news2, setNews2] = useState('어제의 뉴스');
    let [news3, setNews3] = useState('내일의 뉴스');

    let [news, setNews] = useState( ["오늘의 뉴스","어제의 뉴스","내일의 뉴스","매일의 뉴스","asd"]);

    let [like1,setLike1] = useState(0);
    let [like2,setLike2] = useState(0);
    let [like3,setLike3] = useState(0);

    let [like, setLike] = useState([0]);
    for(let i=like.length;i<news.length;i++){
        like.push(0);
    }
    let [showModal, setShowModal] = useState(false);

    let [selectedTitle, setSelectedTitle] = useState('');

    let [selectedCount, setSelectedCount] = useState(0);
    return (
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <p style={ { color:"orange", fontSize:'20px' } }>{title}</p>
            </div>

            {
                news.map((title, index)=>{
                    return (
                        <div className='post-list'>
                            <h4 onClick={()=>{
                                setShowModal(!showModal);
                                setSelectedTitle(title);
                                setSelectedCount(like[index]);
                            }}>{title} <span onClick={(event)=>{
                                event.stopPropagation();
                                let change = [...like];
                                change[index]=change[index]+1;
                                setLike(change);
                            }}>💖{like[index]}</span></h4>
                            <p>내용 무</p>
                        </div>
                    )
                })
            }

            {
                // showModal == true ? <Modal/> : null
                // props 전달
                // 변수, 배열, 객체, 함수, 요소(컴포넌트)
                showModal && <Modal title={selectedTitle} likeCnt = {selectedCount}
                                    news={news} setNews={setNews}
                                    bgColor = 'lightcyan'/>
            }
            
        </div>
    );
}

export default NewsBlog;