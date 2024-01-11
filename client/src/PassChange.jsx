import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { PassChangeUp } from './ApiCall/api';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function PassChange() {
    const [Npass, setNpass] = useState('')
    const [RNpass, setRNpass] = useState('')
    const [fla, setfla] = useState(false)
    const FFmail = useSelector(state => state.ClData.passd);
    const nav = useNavigate()

    useEffect(() => {

        const cheCH = () => {
            console.log("Npass", Npass, "RNpass", RNpass);
            if (Npass == RNpass) {
                setfla(true)
            }
            else {
                setfla(false)
            }
        }
        cheCH()
    }, [RNpass])

    const ChanGEPass = () => {
        PassChangeUp({ FFmail, Npass })
        nav('/')
    }

    return (
        <div className='Lo'>
            <div className='imaL'>
                <img src="Images/SS2.png" alt="" />
            </div>
            <div className='Lout'>
            <div className='Til'>
                    <h5 >Change Password</h5>
                </div>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">New Password</InputGroup.Text>
                    <Form.Control
                        placeholder="New Password" aria-label="Username" aria-describedby="basic-addon1"
                        value={Npass} onChange={(e) => setNpass(e.target.value)}
                    />

                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Reenter New Password</InputGroup.Text>
                    <Form.Control
                        placeholder="New Passsword" aria-label="Username" aria-describedby="basic-addon1"
                        value={RNpass} onChange={(e) => setRNpass(e.target.value)}
                    />
                </InputGroup>
                <div className='but'>
                    <Button variant='outline-success' disabled={!fla} onClick={ChanGEPass} >submit</Button>
                </div>
            </div>
        </div>
    )
}

export default PassChange
