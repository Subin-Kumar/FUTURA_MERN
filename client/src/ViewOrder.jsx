import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { GetUserData, Orderrem1 } from './ApiCall/api';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Navbar1 from './Navbar1';
import { OrderRemove } from './Slice';





function ViewOrder() {

  const dispatch=useDispatch()
  const UsOrd = useSelector(state => state.ClData.Orders);
  const Uid = useSelector(state => state.ClData.Data[0]._id)

  console.log("UsOrd", UsOrd[0].Date);

  const CclOrd = (e, u) => {
    e.preventDefault();
    console.log(u);
    console.log("uid",Uid);
    dispatch(OrderRemove(u._id));
    Orderrem1(Uid,u)
    // console.log("u._id", u._id);
    // console.log("Data[0]._id",Data1[0]._id);
    // Cartrem1(cd, Usid)
  }
  return (
    <div>
      <div>
        <Navbar1 />
      </div>
      <div style={{ marginTop: '150px' }}>
        <div style={{ marginLeft: '100px', marginRight: '100px', boxShadow: "0px 0px 10px #ff6969", marginTop: '50px', marginBottom: '50px', }}>
          <Table striped bordered hover style={{borderRadius:'25px',color:'black'}}>
            <thead>


              <tr>
                <th>Date</th>
                <th>Address</th>
                <th>Pincode</th>
                <th>Mobile</th>
                <th>Payment Method</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                UsOrd.map((u, index) => (
                  <tr key={index}>
                    <td>{u.fDate}</td>
                    <td>{u.Address}</td>
                    <td>{u.Pincode}</td>
                    <td>{u.Mobile}</td>
                    <td>{u.PayM}</td >
                    <td>{u.Pri}</td >
                    
                    <td><Button variant="outline-danger" onClick={(event) => CclOrd(event, u)} style={{marginLeft: '10px', width: '120px', height: "60px", marginTop: '10px', }}>Cancel Order</Button>
                    <Link to='/OrdL' state={{ ord: u.Cdata }}>   <Button variant="outline-info" style={{ marginLeft: '30px', width: '120px', height: "60px", marginTop: '10px', }}>Order Details</Button></Link></td>
                  </tr>

                ))


              }


            </tbody>
          </Table>
        </div>
      </div>

    </div>
  )
}

export default ViewOrder
