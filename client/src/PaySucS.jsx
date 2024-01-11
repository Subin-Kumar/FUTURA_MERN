import React from 'react'
import { Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Navbar1 from './Navbar1';
import { useSelector } from 'react-redux';

function PaySucS() {
  const OrIn= useSelector(state => state.ClData.Orders);
  console.log("order info",OrIn);
  return (
    <div>
      <div>
        <Navbar1 />
      </div>
      <div style={{marginTop:'250px',boxShadow:'0px 0px 10px #ff6969',width:'600px',height:'400px',borderRadius:'10px',marginLeft:'550px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around',color:'#ff6969'}} >
      <h1>Ordered Succsessfully</h1>
      <div>
      <Link to={'/'}><Button style={{marginTop:'15px',marginRight:'15px',boxShadow:'0px 0px 10px #ff6969'}} variant="outline-warning">Home</Button></Link>
      <Link to='/ViewOrd'><Button style={{marginTop:'15px',marginRight:'15px',boxShadow:'0px 0px 10px #ff6969'}} variant="outline-info">View Orders</Button></Link>

      </div>
    
      </div>
      
    </div>
    
  )
}

export default PaySucS
