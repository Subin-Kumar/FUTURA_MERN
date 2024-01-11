
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
// import './Style.css'
import { CldataRemove, DrdataAdd, DrdataRemove } from './Slice';
import { GetAllAData, LoginF } from './ApiCall/api';
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

function Login() {
    const [emaillog, setemaillog] = useState('')
    const [passwordlog, setpasswordlog] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        const gdf = async () => {
            const gd = await GetAllAData()
            console.log("gd==0", gd[0], 'gd1--', gd[1]);
            dispatch(DrdataAdd([gd[0].data, gd[1].data]))

        }

        gdf()
    }, [])


    const logg = () => {
        console.log("log details", emaillog, passwordlog);
        LoginF(dispatch, { emaillog, passwordlog })
    }
    const loo = () => {
        dispatch(CldataRemove())
        dispatch(DrdataRemove())
    }
    return (
        <div className='Lo'>
            <div className='imaL'>
                <img src="Images/SS2.png" alt="" />
            </div>
            <div className='Lout'>
                <div className='Til'>
                    <h5 >Login</h5>
                </div>
                <div className='eml'>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><MdEmail /></InputGroup.Text>
                        <Form.Control
                            placeholder="Email id"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            value={emaillog} onChange={(e) => setemaillog(e.target.value)}
                        />
                    </InputGroup>
                </div>
                <div className='eml'>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><RiLockPasswordFill /></InputGroup.Text>
                        <Form.Control
                            placeholder="Password"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            value={passwordlog} onChange={(e) => setpasswordlog(e.target.value)}
                        />
                    </InputGroup>

                </div>
                <div className='ForP'><Link to={'Fpass'} style={{ textDecoration: 'none', color: '#ff6969', marginBottom: '30px' }}>Forgot Password...?</Link></div>
                <div className='but'>
                    <Button variant='outline-success' onClick={logg}>Login</Button>
                </div>
                {/* <div className='log'>
                    <Button variant='danger' onClick={loo}>looo</Button>
                </div> */}

                <div className='but'>

                    <Link to={'signup'} style={{ textDecoration: 'none' }}><Button variant='outline-info' >Create New Account</Button></Link>
                </div>
            </div>
        </div>
    )
}

export default Login
