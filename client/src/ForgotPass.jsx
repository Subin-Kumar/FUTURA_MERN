import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { OtpSnd } from './ApiCall/api';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Passdetaail } from './Slice';
import { Link } from 'react-router-dom'


function ForgotPass() {

    const [FMail, setFMail] = useState('')
    const [OtpL, setOtpL] = useState('')
    const [OtpR, setOtpR] = useState('')
    const [fl, setfl] = useState(false)
    const nav = useNavigate()
    const disp = useDispatch()
    const OtpS = async () => {

        const Otpl = await OtpSnd({ FMail })
        setfl(true)
        console.log("otpl", Otpl.otp);
        setOtpL(Otpl.otp)
        disp(Passdetaail(FMail))
    }

    const OtpCheck = () => {
        if (OtpL === OtpR) {
            nav('/PCh')
        }
    }
    return (
        <div className='Lo'>
            <div className='Lout4'>
                <div className='Til2'>
                <h5 >Forgot Password</h5>

                </div>
                <div className='eml'>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                <Form.Control
                                    placeholder="Email id" aria-label="Username" aria-describedby="basic-addon1"
                                    value={FMail} onChange={(e) => setFMail(e.target.value)}
                                />
                            </InputGroup>
                        </div>

                        <div className='SnOtp'>
                            <Button variant='outline-warning' disabled={FMail == ''} onClick={OtpS}>Send Otp</Button>
                        </div>

                        <div hidden={!fl} style={{marginTop:'20px',display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Otp</InputGroup.Text>
                                <Form.Control
                                    placeholder="Otp" aria-label="Username" aria-describedby="basic-addon1"
                                    value={OtpR} onChange={(e) => setOtpR(e.target.value)}
                                />
                            </InputGroup>
                            <div className='but'>
                                <Button variant='outline-success' disabled={OtpR == ''} onClick={OtpCheck}>Proceed</Button>
                            </div>
                          
                        </div>
                        <div >
                                <Link to={'/'}><Button variant='outline-secondary' style={{marginTop:'60px'}}>I just remembered my password</Button></Link>
                            </div>
                    </div>


                </div>
            </div>
            <div className='imaL2'>
                <img src="Images/SS2.png"  />
            </div>
        </div>
    )
}

export default ForgotPass
