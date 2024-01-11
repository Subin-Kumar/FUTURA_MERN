import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { CldataRemove, DrdataRemove } from './Slice';
import { Link, useNavigate } from 'react-router-dom';
import { DelAcc } from './ApiCall/api';


function Profile() {
  const ud = useSelector(state => state.ClData.Data)
  console.log("ud",ud);

  const dispatch = useDispatch()
  const nav = useNavigate()
  const loo = () => {
      dispatch(CldataRemove())
      dispatch(DrdataRemove())
      // nav('/')
  }

  const delAcc=()=>{
    DelAcc(ud[0]._id,nav,dispatch)
  }
  return (
    <div style={{backgroundImage: `url('/Images/profile.jpg')`,height:'772px'}}>
      <div style={{display:'flex',justifyContent:'end',}}>
      <Link to={'/'}><Button style={{marginTop:'15px',marginRight:'15px',boxShadow:'0px 0px 8px black'}} variant="warning">Home</Button></Link>
      </div>
      <div className='procard' style={{fontFamily:'Trebuchet MS'}}>
      <Card bg='light' text='dark' style={{ width: '600px' ,display:'flex',boxShadow:'0px 0px 10px #ff6969'}}>
      
      <Card.Img variant="top" src={`/Images/${ud[0].image}`} style={{borderRadius:'200px',height:"300px",width:"18rem",marginLeft:'160px',marginTop:'10px',boxShadow:'0px 0px 5px #ff6969 '}} />
      <Card.Body style={{display:"flex" ,flexDirection:"column" ,alignItems: "center",fontWeight:'bolder'}}>
        <Card.Title style={{marginBottom:'10px'}}>{ud[0].username}</Card.Title>
        <Card.Text>
         Email:{ud[0].email}
        </Card.Text>
        <Card.Text>
         Age:{ud[0].age}
        </Card.Text>
        <Card.Text>
         Address:{ud[0].address}
        </Card.Text>
        <Link to={'/update'}> <Button variant="outline-success" style={{marginBottom:"10px"}}>Edit Profile</Button></Link>
       
        
      </Card.Body>
      <div style={{display:'flex',justifyContent:'space-between',padding:'20px'}}>
      
     
      <Link to={'/'}> <Button onClick={delAcc} variant="outline-danger">Delete your Account</Button></Link>
      <Link to={'/'}><Button variant="outline-warning" onClick={loo}>Sign Out</Button></Link>
     
      </div>
    </Card>
      </div>
      
    </div>
  )
}

export default Profile
