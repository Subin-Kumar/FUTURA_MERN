import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { DrUp } from './AdApiCall/api';
import { useDispatch } from 'react-redux';


function AddDress() {

    const [image, setimage] = useState({})
    const [price, setprice] = useState(0)
    const [ptype, setptype] = useState('')
    const [Ctgry, setCtgry] = useState('')
    const [sizes, setsizes] = useState('')
    const [colors, setcolors] = useState('')
    const dispatch = useDispatch()
    const nav = useNavigate()
    const disp = (e) => {
        e.preventDefault()
        var sz = sizes.toLowerCase()
        var SizeArr = sz.split(' ')
        var cl = colors.toLowerCase()
        var ColArr = cl.split(' ')

        var Drdata = new FormData()
        Drdata.append('productType', ptype)
        Drdata.append('price', price)
        Drdata.append('sizes', SizeArr)
        Drdata.append('colors', ColArr)
        Drdata.append('img', image)
        DrUp(Drdata, Ctgry, dispatch)
        nav('/')

    }

    const handleRadioChange = (c) => {
        setCtgry(c)

    }

    return (
        <div className='Lo'>
    

                <div className='Lout2'>
                    <div className='Til2'>
                        <h5 style={{ color: '#ff6969' }}>Add Products</h5>
                    </div>

                    <Form onSubmit={disp} encType='multipart/form-data'>
                        <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Product Category</Form.Label>
                        {['Men', 'Women'].map((c, index) => (
                            <div key={index} style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                                <Form.Check inline label={c} type='radio' id={`inline-radio-${c}`} name='Sg' onChange={() => handleRadioChange(c)} />
                            </div>
                        ))}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Product Type</Form.Label>
                            <Form.Control type="text" placeholder="Enter Product Type" value={ptype} onChange={(e) => setptype(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Price</Form.Label>
                            <Form.Control type="Number" placeholder="Enter Price" value={price} onChange={(e) => setprice(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Sizes</Form.Label>
                            <Form.Control type="text" placeholder="Enter Sizes with space in between" value={sizes} onChange={(e) => setsizes(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Colors</Form.Label>
                            <Form.Control type="text" placeholder="Enter Colors with space in between" value={colors} onChange={(e) => setcolors(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Image</Form.Label>
                            <Form.Control type="file" placeholder="Insert image" filename='img' onChange={(e) => setimage(e.target.files[0])} />
                        </Form.Group>
                        <div style={{ display: 'flex' ,paddingBottom:'20px',justifyContent:'center' }}>
                            <div className='but'>
                                <Button variant="outline-success" type="submit">
                                    Submit
                                </Button>
                            </div>
                            <div className='but'>
                                <Link to={'/'}><Button variant='outline-warning'>Home</Button></Link>
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

export default AddDress
