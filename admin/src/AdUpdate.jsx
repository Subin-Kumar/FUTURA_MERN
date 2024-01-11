import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { AdUpdated } from './AdApiCall/api';

function AdUpdate() {
  const ADd = useSelector(state => state.AdData.Data[0])
  const navigate = useNavigate()
  const dispat = useDispatch()
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [age, setage] = useState(0)
  const [image, setimage] = useState({})
  const [address, setaddress] = useState('')
  const [password, setpassword] = useState('')

  const [Op, setOp] = useState()

  useEffect(() => {
    setusername(ADd.username)
    setemail(ADd.email)
    setage(ADd.age)
    setaddress(ADd.address)
    setpassword(ADd.Op)
    setimage(ADd.image)
    setOp(ADd.Op)

  }, [ADd])

  const disp = (e) => {
    e.preventDefault()
    const forMdt = new FormData()
    forMdt.append('username', username)
    forMdt.append('email', email)
    forMdt.append('age', age)
    forMdt.append('address', address)
    forMdt.append('image', image)
    forMdt.append('password', password)

    var Uid = ADd && ADd._id

    console.log("dataform--", { username, email, age, address, Uid });

    AdUpdated({ username, email, age, address, password }, Uid, navigate, dispat)
    // console.log("updatez",Updatez);
  }
  return (
    <div className='Lo'>

      <div className='Lout2'>
        
        <div className='Til2'><h5 style={{ color: '#ff6969' }}>Update Admin Profile</h5>
          </div>
        <Form onSubmit={disp} encType='multipart/form-data'>


          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: 'black' }}>Username</Form.Label>
            <Form.Control type="text" placeholder={username} value={username} onChange={(e) => setusername(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: 'black' }}>Email address</Form.Label>
            <Form.Control type="email" placeholder={ADd.email} value={email} onChange={(e) => setemail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: 'black' }}>Age</Form.Label>
            <Form.Control type="Number" placeholder={ADd.age} value={age} onChange={(e) => setage(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: 'black' }}>Address</Form.Label>
            <Form.Control type="text" placeholder={ADd.address} value={address} onChange={(e) => setaddress(e.target.value)} />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label style={{ color:'black'  }}>Image</Form.Label>
         <Form.Control type="file" placeholder={ADd.image} filename='image'  onChange={(e) => setimage(e.target.files[0])} />
       </Form.Group> */}

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ color: 'black' }}>Password</Form.Label>
            <Form.Control type="password" placeholder={ADd.Op} value={password} onChange={(e) => setpassword(e.target.value)} />
          </Form.Group>
        
        </Form>
        <div style={{ display: 'flex', paddingBottom: '20px' }} >
            <div className='but'>
              <Button variant="outline-success" type="submit">
                Submit
              </Button>
            </div>
            <div className='but'>
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

export default AdUpdate
