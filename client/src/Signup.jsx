import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom'
import { Signin } from './ApiCall/api';

function Signup() {
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [age, setage] = useState(0)
  const [address, setaddress] = useState('')
  const [password, setpassword] = useState('')
  const [image, setimage] = useState({})
  const nav=useNavigate()
  const disp = (e) => {
    e.preventDefault()
    var Fdata = new FormData()
    Fdata.append('username', username)
    Fdata.append('email', email)
    Fdata.append('age', age)
    Fdata.append('address', address)
    Fdata.append('image', image)
    Fdata.append('password', password)

    console.log(username, email, age, address);
    Signin(Fdata)
    nav('/')

  }


  return (

    <div className='Lo'>

      <div className='Lout2'>


        <div className='Til2'>
          <h5 >SignUp</h5>
        </div>

        <Form onSubmit={disp} encType='multipart/form-data'>

          <Form.Group style={{paddingBottom:'20px'}} controlId="formBasicEmail">
            <Form.Label style={{ color: 'black' }}>UserName</Form.Label>
            <Form.Control type="text" placeholder="Enter UserName" value={username} onChange={(e) => setusername(e.target.value)} />
          </Form.Group>

          <Form.Group style={{paddingBottom:'20px'}}  controlId="formBasicEmail">
            <Form.Label style={{ color: 'black' }}>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setemail(e.target.value)} />
          </Form.Group>

          <Form.Group style={{paddingBottom:'20px'}}  controlId="formBasicEmail">
            <Form.Label style={{ color: 'black' }}>Age</Form.Label>
            <Form.Control type="Number" placeholder="Enter Age" value={age} onChange={(e) => setage(e.target.value)} />
          </Form.Group>

          <Form.Group style={{paddingBottom:'20px'}}  controlId="formBasicEmail">
            <Form.Label style={{ color: 'black' }}>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Address" value={address} onChange={(e) => setaddress(e.target.value)} />
          </Form.Group>
          <Form.Group style={{paddingBottom:'20px'}}  controlId="formBasicEmail">
            <Form.Label style={{ color: 'black' }}>Image</Form.Label>
            <Form.Control type="file" placeholder="Insert image" filename='image' onChange={(e) => setimage(e.target.files[0])} />
          </Form.Group>

          <Form.Group style={{paddingBottom:'20px'}}  controlId="formBasicPassword">
            <Form.Label style={{ color: 'black' }}>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" value={password} onChange={(e) => setpassword(e.target.value)} />
          </Form.Group>
          <div style={{ display: 'flex' ,paddingBottom:'20px' }}>
            <div className='but'>
              <Button variant="outline-success" type="submit">
                Submit
              </Button>
            </div>
            <div className='but'>
              <Link to={'/'}><Button variant='outline-warning'>I have an Account</Button></Link>
            </div>
          </div>
        </Form>
      </div>
      <div className='imaL2'>
        <img src="Images/SS2.png" alt="" />
      </div>
    </div>
  )
}

export default Signup
