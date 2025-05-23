import './NewsBlog.css';
import { useState } from 'react';
import Modal from './Modal';

function NewsBlog(){

    let title = "React Study";

    // let [news1, setNews1] = useState('오늘의 뉴스');
    // let [news2, setNews2] = useState('어제의 뉴스');
    // let [news3, setNews3] = useState('내일의 뉴스');

    let [news, setNews] = useState( ["오늘의 뉴스","어제의 뉴스","내일의 뉴스"]);

    // let [like1,setLike1] = useState(0);
    // let [like2,setLike2] = useState(0);
    // let [like3,setLike3] = useState(0);

    let [like, setLike] = useState([0]);
    for(let i=like.length;i<news.length;i++){
        like.push(0);
    }
    let [showModal, setShowModal] = useState(false);

    let [selectedTitle, setSelectedTitle] = useState('');
    let [selectedCount, setSelectedCount] = useState(0);

    //input 값을 저장할 변수
    let [inputText,setInputText] = useState('');

    return (
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <p style={ { color:"orange", fontSize:'20px' } }>{title}</p>
            </div>

            <div>
                <input type="text" id="input_news" value={inputText} onChange={(event)=>{
                    // console.log(event);
                    console.log(event.target.value);
                    setInputText(event.target.value);
                }}></input>
                <button onClick={()=>{
                    //입력된 값을 제목 배열에 추가
                    //입력된 값 : input 요소에서 onChange 가 발생할때 -> inputText state 변수에 저장되어 있음.
                    //제목배열 news 배열변수에 추가 -> 리렌더링 -> news배열의 갯수만큼 반복(map) 화면에 표시
                    let temp = [...news];
                    // if(inputText.trim()==""){

                    // if(inputText.trim().length==0){

                    inputText= inputText.trim();

                    if(inputText.length==0){
                        setInputText("");
                        return;
                    }
                    temp.push(inputText);
                    setNews(temp);
                    console.log(news);

                    //배열state변수 바꾸는 법 : 배열 복사 -> 값 변경/추가/삭제 -> set함수로 원래 배열에 저장
                    setInputText("");   //공백 -> input value={inputText}

                    /*

                    let title = document.getElementById('input_news').value;
                    let temp = [...news];
                    temp.push(inputText);
                    setNews(temp);

                    document.getElementById('input_news').value = '';

                    */
                }}>등록</button>
            </div>

            {
                news.map((title, index)=>{
                    return (
                        <div className='post-list' key={index}>
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