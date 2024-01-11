import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { ADdataRemove } from './SliceAd';
import { AdDelAcc } from './AdApiCall/api';

function AdPro() {
    const ud = useSelector(state => state.AdData.Data)
    
    const nav=useNavigate()
  const dispatch=useDispatch()
    const loo=()=>{
      dispatch( ADdataRemove())
    }
    const delAcc=()=>{
      AdDelAcc(ud[0]._id,nav,dispatch)
    }
  return (
    <div>
      <div style={{display:'flex',justifyContent:'end'}}>
      <Link to={'/'}>< Button style={{marginTop:'15px',marginRight:'15px',boxShadow:'0px 0px 10px #ff6969'}} variant="warning">Home</Button></Link>
      </div>
      <div className='procard' style={{fontFamily:'Trebuchet MS'}}>
      <Card style={{ width: '600px' ,display:'flex', width: '600px' ,display:'flex',boxShadow:'0px 0px 10px #ff6969 '}}>
      
      <Card.Img variant="top" src={`/Images/${ud[0].image}`} style={{borderRadius:'200px',height:"300px",width:"18rem",marginLeft:'160px',marginTop:'10px'}} />
      <Card.Body style={{display:"flex" ,flexDirection:"column" ,alignItems: "center",fontWeight:'bolder'}}>
        <Card.Title>{ud[0].username}</Card.Title>
        <Card.Text>
         Email:{ud[0].email}
        </Card.Text>
        <Card.Text>
         Age:{ud[0].age}
        </Card.Text>
        <Card.Text>
         Address:{ud[0].address}
        </Card.Text>
        <Link to={'/ADu'}> <Button  variant="outline-success" style={{marginBottom:"10px",boxShadow:'0px 0px 10px #ff6969'}}>Edit Profile</Button></Link>
       
        
      </Card.Body>
      <div style={{display:'flex',justifyContent:'space-between',padding:'20px'}}>
      
     
      <Link to={'/'}> <Button style={{boxShadow:'0px 0px 10px #ff6969'}} onClick={delAcc} variant="outline-danger">Delete your Account</Button></Link>
      <Link to={'/'}><Button style={{boxShadow:'0px 0px 10px #ff6969'}} variant="outline-warning" onClick={loo}>Sign Out</Button></Link>
     
      </div>
    </Card>
      </div>
      
    </div>
  )
}

export default AdPro
