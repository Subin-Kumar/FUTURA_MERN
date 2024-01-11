import React, { useEffect, useState } from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import { Link} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { AiOutlineShoppingCart } from "react-icons/ai";
import Col from 'react-bootstrap/Col';
import { CartdataRemoveAll, CldataRemove, DrdataRemove } from './Slice';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'react-bootstrap/Image';
import { CartremAll, GetUserData } from './ApiCall/api';


function Navbar1() {
    const [Search, setSearch] = useState('')


    let value = useSelector(state => state.ClData.CartQuantity)

    const ud = useSelector(state => state.ClData.Data)
    const Usid = useSelector(state => state.ClData.Data[0]._id);

    
    const RemoveAll = () => {
        dispatch(CartdataRemoveAll())
        CartremAll(ud[0]._id)
    }

    const dispatch = useDispatch()
    // const nav = useNavigate()
    const loo = () => {
        dispatch(CldataRemove())
        dispatch(DrdataRemove())
        // nav('/')
    }


    return (
        <div style={{ position: 'fixed', top: 0, width: '100%',boxShadow:"0px 0px 10px #ff6969",borderRadius:'30px',marginBottom:"120px" }}>
            <Navbar bg="light" data-bs-theme="light" style={{ height: '100px' ,borderRadius:'30px'}}>
                <Container >
                    <img alt="http://localhost:3000/" src="https://mir-s3-cdn-cf.behance.net/user/276/f9c93b3204855.5a78b3b1aa150.png" width="100" height="100" className="d-inline-block align-top" style={{ marginRight: '20px', marginLeft: '20px' }} />
                    <Nav className="me-auto">
                        <Nav.Link href="http://localhost:3000/" style={{ marginLeft: '30px',color:'#ff6b6b',fontFamily:'Trebuchet MS' }}>Home</Nav.Link>

                        <Nav.Link href="#pricing" as={Link} to='/Crt' style={{ textDecoration: 'none',color:'#ff6b6b',fontFamily:'Trebuchet MS' }}>Your Cart<AiOutlineShoppingCart />
                            <Badge bg="danger">{value}</Badge>
                        </Nav.Link>


                        <Dropdown>
                            <Dropdown.Toggle style={{color:'#ff6b6b',fontFamily:'Trebuchet MS'}} variant="light" id="dropdown-basic">
                                Types
                            </Dropdown.Toggle>


                            <Dropdown.Menu>


                                <Link to='/Ptd' state={{ PType: 'T-Shirt', PCat: 'Men' }} style={{ textDecoration: 'none' }}>
                                    <Dropdown.Item style={{color:'#ff6b6b',fontFamily:'Trebuchet MS'}} href="/Ptd">T-Shirt</Dropdown.Item>
                                </Link>
                                <Link to='/Ptd' state={{ PType: 'Shirt', PCat: 'Men' }} style={{ textDecoration: 'none' }}>
                                    <Dropdown.Item style={{color:'#ff6b6b',fontFamily:'Trebuchet MS'}} href="/Ptd">Men-Shirt</Dropdown.Item>
                                </Link>
                                <Link to='/Ptd' state={{ PType: 'Jeans', PCat: 'Men' }} style={{ textDecoration: 'none' }}>
                                    <Dropdown.Item style={{color:'#ff6b6b',fontFamily:'Trebuchet MS'}} href="/Ptd">Jeans</Dropdown.Item>
                                </Link>
                                <Link to='/Ptd' state={{ PType: 'Shirt', PCat: 'Women' }} style={{ textDecoration: 'none' }}>
                                    <Dropdown.Item style={{color:'#ff6b6b',fontFamily:'Trebuchet MS'}} href="/Ptd">Women-Shirt</Dropdown.Item>
                                </Link>
                                <Link to='/Ptd' state={{ PType: 'Dress', PCat: 'Women' }} style={{ textDecoration: 'none' }}>
                                    <Dropdown.Item style={{color:'#ff6b6b',fontFamily:'Trebuchet MS'}} href="/Ptd">Dress</Dropdown.Item>
                                </Link>
                                <Link to='/Ptd' state={{ PType: 'Saree', PCat: 'Women' }} style={{ textDecoration: 'none' }}>
                                    <Dropdown.Item style={{color:'#ff6b6b',fontFamily:'Trebuchet MS'}} href="/Ptd">Saree</Dropdown.Item>
                                </Link>
                                <Link to='/Ptd' state={{ PType: 'Joggers', PCat: 'Women' }} style={{ textDecoration: 'none' }}>
                                    <Dropdown.Item style={{color:'#ff6b6b',fontFamily:'Trebuchet MS'}} href="/Ptd">Joggers</Dropdown.Item>
                                </Link>
                                <Link to='/Ptd' state={{ PType: 'Top', PCat: 'Women' }} style={{ textDecoration: 'none' }}>
                                    <Dropdown.Item style={{color:'#ff6b6b',fontFamily:'Trebuchet MS'}} href="/Ptd">Top</Dropdown.Item>
                                </Link>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link href='/ViewOrd' style={{ textDecoration: 'none',color:'#ff6b6b',fontFamily:'Trebuchet MS' }}>
                          View Orders
                        </Nav.Link>

                    </Nav>
                </Container>
                <Container>
                    {/* <div >
                    <Button variant="danger" onClick={RemoveAll} style={{ marginLeft: '660px', width: '200px', height: "60px", marginTop: '10px' }}>Remove All</Button>

                    </div> */}
                    <Form inline='true' style={{marginLeft:'472px'}}>
                        <Row>
                            <Col xs="auto">
                                <Form.Control type="text" placeholder="Search" className=" mr-sm-2" value={Search} onChange={(e) => setSearch(e.target.value)} />
                            </Col>
                            <Col xs="auto">
                                {Search ? (
                                    <Link to='/search' state={{ searchQuery: Search }}>
                                        <Button variant='danger' type="submit" >
                                            Search
                                        </Button>
                                    </Link>
                                ) : (
                                    <Button type="submit"  variant='danger' disabled>
                                        Search
                                    </Button>
                                )}

                            </Col>
                        </Row>
                    </Form>

                </Container>

                <Dropdown align={{ lg: 'end' }}>
                    <Dropdown.Toggle variant='light' id="dropdown-custom-1"><Image style={{ width: '40px', height: '40px',boxShadow:'0px 0px 10px #ff6969' }} src={`/Images/${ud[0].image}`} roundedCircle /></Dropdown.Toggle>
                    <Dropdown.Menu className="super-colors">
                        <Dropdown.Item style={{color:'#ff6b6b',fontWeight:'bolder'}} href="profile">Profile</Dropdown.Item>
                        
                        <Dropdown.Item href="/" style={{color:'#ff6b6b',fontWeight:'bolder'}} onClick={loo}>SignOut</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar>
        </div>
    )
}

export default Navbar1
