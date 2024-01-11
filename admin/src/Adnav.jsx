import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { ADdataRemove } from './SliceAd';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom'

function Adnav() {

    const ud = useSelector(state => state.AdData.Data)

    const dispatch=useDispatch()
  const remove=()=>{
    dispatch( ADdataRemove())
  }
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light" style={{borderRadius:'45px',boxShadow:"0px 0px 10px #ff6969"}}>
        <Container >
        <img alt="http://localhost:3000/" src="https://mir-s3-cdn-cf.behance.net/user/276/f9c93b3204855.5a78b3b1aa150.png" width="100" height="100" className="d-inline-block align-top" style={{ marginRight: '20px', marginLeft: '20px' }} />
          <Nav className="me-auto" >
            <Nav.Link style={{color:'#ff6b6b',fontFamily:'Trebuchet MS'}} href="/">Home</Nav.Link>
            <Nav.Link style={{color:'#ff6b6b',fontFamily:'Trebuchet MS'}} href="adlist">Admin List</Nav.Link>
            <Nav.Link style={{color:'#ff6b6b',fontFamily:'Trebuchet MS'}} href="adsignup">Create New Admin</Nav.Link>
            <Nav.Link style={{color:'#ff6b6b',fontFamily:'Trebuchet MS'}} href="AddDr">Add Products</Nav.Link>
            <Nav.Link style={{color:'#ff6b6b',fontFamily:'Trebuchet MS'}} href='DrList?t=men'>Men Product List</Nav.Link>
            <Nav.Link style={{color:'#ff6b6b',fontFamily:'Trebuchet MS'}} href='DrList?t=women'>Women Product List</Nav.Link>
           
          </Nav>
        </Container>
        <Dropdown align={{ lg: 'end' }}>
                    <Dropdown.Toggle variant='light' id="dropdown-custom-1"><Image style={{ width: '40px', height: '40px',boxShadow:'0px 0px 10px #ff6969' }} src={`/Images/${ud[0].image}`} roundedCircle /></Dropdown.Toggle>
                    <Dropdown.Menu className="super-colors">
                    <div style={{paddingLeft:'45px',color:'#ff4747',fontWeight:'bold'}}>{ud[0].username}</div>

                        <Dropdown.Item style={{color:'#ff6b6b'}} href="adpro">Profile</Dropdown.Item>
                        
                        <Dropdown.Item style={{color:'#ff6b6b'}} href="/" onClick={remove}>SignOut</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
      </Navbar>
    </div>
  )
}

export default Adnav
