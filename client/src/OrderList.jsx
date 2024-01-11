import React from 'react'
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar1 from './Navbar1';

function OrderList() {
    const location = useLocation();
    const Ord = location.state?.ord
    console.log("Ord", Ord);
    return (
        <div>
            <div>
        <Navbar1 />
      </div>
            <div style={{marginTop:'100px'}}>
            <div className='Sdress'>
                                {Ord.map((cd) => (
                                    <Card className="crd" style={{ width: '250px', height: '380px' }} key={cd.m._id}>
                                        <Card.Img style={{ height: '300px', overflow: 'clip', padding: '3px', borderRadius: '10px', objectFit: 'cover' }} variant="top" src={cd.m.img} />

                                        <Card.Text >
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white', fontSize: "10px", }}>
                                                <h6> Rs {cd.m.price}</h6>
                                                <h6>Quantity {cd.q}</h6>
                                                <h6>Size {cd.s}</h6>
                                            </div>
                                        </Card.Text>
                                        
                                    </Card>

                                ))}

                            </div>
            </div>
           
            </div>
    
    )
}

export default OrderList
