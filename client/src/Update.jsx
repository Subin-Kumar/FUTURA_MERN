import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Updated } from './ApiCall/api';

function Update() {

  const ud = useSelector(state => state.ClData.Data[0])
  const nav = useNavigate()
  const dispatch = useDispatch()
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [age, setage] = useState(0)
  const [image, setimage] = useState({})
  const [address, setaddress] = useState('')
  const [password, setpassword] = useState('')
  const [token, settoken] = useState()
  const [Op, setOp] = useState()

  useEffect(() => {
    setusername(ud.username)
    setemail(ud.email)
    setage(ud.age)
    setaddress(ud.address)
    setpassword(ud.Op)
    setimage(ud.image)
    setOp(ud.Op)
    settoken(ud.accesstoken)
  }, [ud])

  const disp = (e) => {
    e.preventDefault()
    const forMdat = new FormData()
    forMdat.append('username', username)
    forMdat.append('email', email)
    forMdat.append('age', age)
    forMdat.append('address', address)
    forMdat.append('image', image)
    forMdat.append('password', password)

    var Uid = ud && ud._id

    console.log("dataform--", { username, email, age, address, Uid });

    Updated(forMdat, Uid, nav, dispatch, Op, token)
  }
  return (
    <div className='Lo'>

      <div className='Lout2'>
        <div className='Til2'>
          <h5 >Update Profile</h5>

        </div>
        <Form onSubmit={disp} encType='multipart/form-data'>


          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: 'black' }}>Username</Form.Label>
            <Form.Control type="text" placeholder={username} value={username} onChange={(e) => setusername(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: 'black' }}>Email address</Form.Label>
            <Form.Control type="email" placeholder={ud.email} value={email} onChange={(e) => setemail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: 'black' }}>Age</Form.Label>
            <Form.Control type="Number" placeholder={ud.age} value={age} onChange={(e) => setage(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: 'black' }}>Address</Form.Label>
            <Form.Control type="text" placeholder={ud.address} value={address} onChange={(e) => setaddress(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: 'black' }}>Image</Form.Label>
            <Form.Control type="file" placeholder={ud.image} filename='image' onChange={(e) => setimage(e.target.files[0])} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ color: 'black' }}>Password</Form.Label>
            <Form.Control type="password" placeholder={ud.Op} value={password} onChange={(e) => setpassword(e.target.value)} />
          </Form.Group>
        </Form>
        <div style={{ display: 'flex', paddingBottom: '20px' }}>
          <div className='but'>
            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          </div>
          <div className='but' >
            <Link to={'/'}><Button variant="outline-warning">Home</Button></Link>
          </div>
        </div>

      </div>
      <div className='imaL2'>
        <img src="Images/SS2.png" alt="" />
      </div>
    </div>
  )
}

export default Update
