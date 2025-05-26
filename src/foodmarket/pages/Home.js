import {Nav, Navbar, Container, Card, Button, Row, Col } from 'react-bootstrap';
import FoodCard from '../components/FoodCard';

function Home({foods}){
    return (
        <div>
            <div className='main-bg'></div>

                <Container>
                    <Row>
                        {
                            foods.map((item, index)=>{     
                                return(
                                    <Col md={4} sm={6}>
                                        {/* <FoodCard index={index} foods={foods}/> */}
                                        <FoodCard index={index} food={item}/>
                                    </Col>
                                );
                            })
                        }
                        
                    </Row>
                </Container>
        </div>
    );
}

export default Home;