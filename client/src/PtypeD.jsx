import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Navbar1 from './Navbar1';
import Button from 'react-bootstrap/Button';
import { CartdataAdd, clearAlert, setAlert } from './Slice';
import Alert from 'react-bootstrap/Alert';
import { Cartadd } from './ApiCall/api';


function PtypeD() {
    const location = useLocation();
    const ProT = location.state?.PType
    const ProC = location.state?.PCat
    console.log('Prot==', ProT);
    console.log("Proc==", ProC);

    const MData = useSelector(state => state.ClData.MenDr)
    const WData = useSelector(state => state.ClData.WomenDr)
    const Uid = useSelector(state => state.ClData.Data[0]._id && state.ClData.Data[0]._id)
    
    console.log("uid====", Uid);
   




  


    return (
        <div style={{padding:'1px'}}>
            <div className='nava' style={{ position: 'fixed', zIndex: 1000, width: '100%' }}>
                <Navbar1 />
            </div>
            <div className='Sdress' style={{ position: 'relative', zIndex: 999, marginTop: '150px',backdropFilter:'blur(4px)' }}>

               
                {
                    ProC === "Men" ? (
                        <div >
                            <div style={{color:'#ff6969',fontFamily:'Trebuchet MS',display:'flex',justifyContent:'center',margin:'20px'}} >
                                <h1 style={{color:'#ff6969'}}>{ProT}</h1>
                            </div>
                            <div className='Sdress'>
                                {MData.map((m) => (
                                    m.productType === ProT ? (
                                        <Card className="crd" style={{ width: '18rem' }} key={m._id}>
                                            <Link to='/PrDet' state={{ Pr: m }}>
                                                <Card.Img style={{ height: '350px', overflow: 'clip', padding: '3px', borderRadius: '10px', objectFit: 'cover' }} variant="top" src={m.img} />
                                            </Link>
                                            <Card.Text className="Ptprc">Price :{m.price}</Card.Text>
                                            
                                        </Card>) : null
                                ))}
                            </div>
                        </div>
                    ) : (<div>
                        <h1 style={{color:'#ff6969',marginLeft:'300px'}}>{ProT}</h1>
                        <div className='Sdress'>
                            {WData.map((m) => (
                                m.productType === ProT ? (
                                    <Card className="crd" style={{ width: '18rem' }} key={m._id}>
                                        <Link to='/PrDet' state={{ Pr: m }}>
                                            <Card.Img  style={{ height: '350px', overflow: 'clip', padding: '3px', borderRadius: '10px', objectFit: 'cover' }} variant="top" src={m.img} />
                                        </Link>
                                        
                                        <Card.Text className="Ptprc" >Price :{m.price}</Card.Text>

                                        
                                       
                                    </Card>) : null
                            ))}
                        </div>

                    </div>

                    )}


            </div>
        </div>
    )
}

export default PtypeD
