
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
// import './Style.css'
import { DrdataRemove } from './SliceAd';
import { ADdataRemove } from './SliceAd';
import { LoginAd } from './AdApiCall/api';

function Login() {
    const [emaillog, setemaillog] = useState('')
    const [passwordlog, setpasswordlog] = useState('')
    const dispatch = useDispatch()

    const logg = () => {
        console.log("log details", emaillog, passwordlog);
        LoginAd(dispatch, { emaillog, passwordlog })
    }
    const loo = () => {
        dispatch(ADdataRemove())
        dispatch(DrdataRemove())
    }
    return (
        <div className='Lo'>
            <div className='imaL'>
                <img src="Images/SS2.png" alt="" />
            </div>
            <div className='Lout'>
                <div>
                    <h5 style={{ color: '#ff6969' }}>Admin Login</h5>
                </div>
                <div className='eml'>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        <Form.Control
                            placeholder="Email id"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            value={emaillog} onChange={(e) => setemaillog(e.target.value)}
                        />
                    </InputGroup>
                </div>
                <div className='pass'>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                        <Form.Control
                            placeholder="Password"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            value={passwordlog} onChange={(e) => setpasswordlog(e.target.value)}
                        />
                    </InputGroup>
                </div>
                {/* <div><Link to={'otp'} style={{ textDecoration: 'none', color: 'white', paddingBottom: '20px' }}>Forgot Password</Link></div> */}
                
                    <div className='but'>
                        <Button variant='outline-success' onClick={logg}>Login</Button>
                    </div>
                    {/* <div className='log'>
                    <Button variant='danger' onClick={loo}>looo</Button>
                </div> */}
                    <div className='but'>
                        <Link to={'adsignup'} style={{ textDecoration: 'none' }}><Button variant='outline-info' >Create New Account</Button></Link>
                    </div>
              
            </div>
        </div>
    )
}

export default Login
