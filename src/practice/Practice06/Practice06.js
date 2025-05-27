import {Routes, Route, Link, useNavigate} from 'react-router';
import Cart from './Cart';

function Practice06(){



    //생성한 프로젝트
    //npm install react-router
    //index.js <BrowserRouter> 설정

    let navigate = useNavigate();

    return(
        <>
            <div>
                {/* <button><Link to='/'>Main</Link></button>
                <button><Link to='/info'>/info</Link></button>
                <button><Link to='/mypage'>/mypage</Link></button>
                <button><Link to='/cart'>/cart</Link></button> */}
                <button onClick={()=>{navigate("/")}}>Main</button>
                <button onClick={()=>{navigate("/info")}}>/info</button>
                <button onClick={()=>{navigate("/mypage")}}>/mypage</button>
                <button onClick={()=>{navigate("/cart")}}>/cart</button>
            </div>

            <Routes>
                <Route path='/' element='Main'></Route>
                <Route path='/info' element='/info 공간입니다.'></Route>
                <Route path='/mypage' element='/mypage 공간입니다.'></Route>
                <Route path='/cart' element={<Cart/>}></Route>
            </Routes>
        </>
        
    );

}

export default Practice06;