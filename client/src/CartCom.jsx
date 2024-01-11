import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar1 from './Navbar1';
import { useDispatch, useSelector } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import { CartdataRemove, CartdataRemoveAll, QuantityChange } from './Slice';
import { CartQua, Cartrem1, CartremAll } from './ApiCall/api';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';



function CartCom() {
    const dispatch = useDispatch()

    const Cdata = useSelector(state => state.ClData.Cartlist);
    const CID = useSelector(state => state.ClData.CartIdList);
    
    console.log("cIDdata", CID);
    console.log("cdata", Cdata);
    console.log("cdata len", CID.length);
    console.log("Cartlist", Cdata);
    const Usid = useSelector(state => state.ClData.Data[0]._id);
    console.log("Cartdata  ", Cdata);
    const TotPrc = useSelector(state => state.ClData.Totprc);

    const RemoveAll = () => {
        dispatch(CartdataRemoveAll())
        CartremAll(Usid)
    }

    const Remove1Cart = (e, cd) => {
        e.preventDefault();
        console.log(cd);
        dispatch(CartdataRemove(cd));
        console.log("cd._id", cd._id);
        // console.log("Data[0]._id",Data1[0]._id);
        Cartrem1(cd, Usid)
    }
    const Qchange=async (e,a,cd)=>{
        e.preventDefault();
    
        var id=cd.m._id
            console.log("a===",a);
            console.log("cdd===",cd);
           
            const updatedQuantity = a === '+' ? cd.q + 1 : cd.q - 1;
    
            dispatch(QuantityChange({ a, id }));

            const updatedCd = { ...cd, q: updatedQuantity };
    
            await CartQua(Usid, id, updatedCd);
    
        // cd.m._id -->id
       

    }

    return (
        <div style={{  height: '772px', padding: '1px', }}>
            <div style={{ position: 'fixed', zIndex: 1000, width: '100%' }}>
                <Navbar1 />
            </div>
            <div style={{ position: 'relative', zIndex: 999, marginTop: '100px' }}>
                {CID.length > 0 ? (
                    <div className='body1' style={{ display: 'flex', marginBottom: '20px',marginTop:'15px' }}>
                        <div className='Rmb'>
                            <Button variant="danger" onClick={RemoveAll} style={{ marginLeft: '660px', width: '200px', height: "60px", marginTop: '10px', boxShadow: '0px 0px 10px #ff6969' }}>Remove All</Button>
                        </div>
                        <div>
                            {/* <Badge bg="secondary" style={{ marginLeft: "600px", width: '200px', height: "60px", marginTop: '10px', textShadow: '1.5px 1.5px rgb(39, 38, 38), 0 0 2px rgb(45, 45, 45)', boxShadow: '0px 0px 10px black' }}><h6 style={{ marginTop: '10px' }}>Cart Price<br></br>Rs {TotPrc}</h6></Badge> */}
                        </div>
                    </div>
                ) : (
                    <div className='emp'>
                    </div>
                )}
                {CID.length > 0 ? (
                    <div className='body1'>
                        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <div className='SCdress'>
                                {Cdata.map((cd) => (
                                    <Card className="Ccrd" style={{ width: '150px', height: '350px' }} key={cd.m._id}>
                                        <Card.Img style={{ height: '200px', overflow: 'clip', padding: '3px', borderRadius: '10px', objectFit: 'cover' }} variant="top" src={cd.m.img} />

                                        <Card.Text >
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white', fontSize: "10px", }}>
                                                <h6> Rs {cd.m.price}</h6>
                                                <h6>Quantity {cd.q}</h6>
                                                <h6>Size {cd.s}</h6>
                                            </div>
                                        </Card.Text>
                                        <Button variant="dark" onClick={(event) => Remove1Cart(event, cd)}>Remove</Button>
                                    </Card>

                                ))}

                            </div>


                            <div style={{ width: '500px', borderRadius: '10px', boxShadow: '0px 0px 10px #ff6969', backgroundColor: 'white' }}>
                                <div style={{ padding: '15px', }}>

                                    <Table borderless hover style={{ borderRadius: '15px' }}>
                                        <thead>
                                            <tr>

                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Size</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        {Cdata.map((cd) => (
                                            <tbody>
                                                <tr>

                                                    <td>{cd.m.productType}</td>
                                                    <td>Rs {cd.m.price}</td>
                                                    <td>{cd.s}</td>
                                                    <td><ButtonGroup >
                                                        <Button variant="outline-light" onClick={(event) => Qchange(event, '-',cd)}>-</Button>
                                                        <Button variant="dark">{cd.q}</Button>
                                                        <Button variant="outline-light" onClick={(event) => Qchange(event, '+',cd)}>+</Button>
                                                    </ButtonGroup></td>
                                                    <td>Rs {cd.m.price * cd.q}</td>



                                                </tr>

                                            </tbody>


                                        ))}
                                    </Table>
                                    <div style={{ marginLeft: '250px' }}>
                                        <Table borderless hover style={{ borderRadius: '15px' }}>
                                            <tbody>
                                                <tr style={{ fontWeight: 'bold' }}>
                                                    <td >Cart Total</td>
                                                    <td >Rs {TotPrc}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>


                                </div>
                                <div>
                    
                                <Link to='/DelD' state={{Price:TotPrc}}>   <Button variant="outline-success" style={{ marginLeft: '330px', width: '150px', height: "60px", marginTop: '10px',marginBottom:'10px' }}>Place Order</Button></Link>

                                 
                                </div>

                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <img style={{ height: '670px' }} src="/Images/T2.jpg" alt="" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default CartCom
