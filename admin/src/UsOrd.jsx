import React from 'react'
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Adnav from './Adnav';


function UsOrd() {
    const location = useLocation();
    const Usda = location.state?.data
    console.log("dtauser",Usda.orders);
  return (
    <div>
         <div>
        <Adnav />
      </div>
      <div className='Til2' style={{marginLeft:'740px'}}>
        <h5 style={{ color: '#ff6969' }} >User {Usda.username} 's Orders</h5>
      </div>
       <div style={{ marginTop: '50px' }}>
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
                Usda.orders.map((u, index) => (
                  <tr key={index}>
                    <td>{u.fDate}</td>
                    <td>{u.Address}</td>
                    <td>{u.Pincode}</td>
                    <td>{u.Mobile}</td>
                    <td>{u.PayM}</td >
                    <td>{u.Pri}</td >
                    
                    {/* <td><Button variant="outline-danger" onClick={(event) => CclOrd(event, u)} style={{marginLeft: '10px', width: '120px', height: "60px", marginTop: '10px', }}>Cancel Order</Button> */}
                    <td><Link to='/Vor' state={{ ord: u.Cdata }}>   <Button variant="outline-info" style={{ marginLeft: '30px', width: '120px', height: "60px", marginTop: '10px', }}>Order Details</Button></Link></td>
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

export default UsOrd
