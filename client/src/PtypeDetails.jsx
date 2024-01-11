import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Navbar1 from './Navbar1';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { CartdataAdd, clearAlert, setAlert } from './Slice';
import { useDispatch, useSelector } from 'react-redux';
import { Cartadd } from './ApiCall/api';
import Alert from 'react-bootstrap/Alert';


function PtypeDetails() {
  const location = useLocation();
  const Pro = location.state?.Pr
  const [qua, setqua] = useState(1)

  const Uid = useSelector(state => state.ClData.Data[0]._id && state.ClData.Data[0]._id)
  const CidL = useSelector(state => state.ClData.CartIdList && state.ClData.CartIdList)
  const CL = useSelector(state => state.ClData.Cartlist && state.ClData.Cartlist)

  const dispatch = useDispatch()
  console.log("CLbef",CL);

  const Add2Cart = (e, m,s,q) => {
  var f=0

      if (CidL.includes(m._id)) {
      console.log("Cidl includes m._id",CidL,"--",m._id);
       CL.map((cl)=>{
        console.log("cl",cl);
        if(cl.m._id===m._id&&cl.s===s){
          console.log("cl.m._id===m._id&&cl.s===s",cl.m._id,m._id,"---",cl.s,s );
          console.log("Already exist");
          f=1
          console.log("F",f);
          dispatch(setAlert())
        } })
        
        if(f===0){
          
          console.log("F in",f);
          console.log("diff size add");
          e.preventDefault()
          console.log("entered inner else if");
          dispatch(CartdataAdd({m,s,q}))
          Cartadd({m,s,q}, Uid)
        }
      

        
      }
      
      else if(f===0) {
        console.log("F out",f);
          e.preventDefault()
          console.log("entered outer else if");
          console.log("M===", m._id);
          console.log("S==",s);
          console.log("Q==",q);
          dispatch(CartdataAdd({m,s,q}))
          Cartadd({m,s,q}, Uid)
      }

  }

  const AlertMsg = useSelector(state => state.ClData.Alert);
  const [showAlert, setShowAlert] = useState(false);
  const [Rsel, setRsel] = useState(false)

  useEffect(() => {
      if (AlertMsg) {
          setShowAlert(true);

          setTimeout(() => {
              setShowAlert(false);
              dispatch(clearAlert());
          }, 1000);
      }
  }, [AlertMsg, dispatch]);

  const handleCloseAlert = () => {
      setShowAlert(false);
      dispatch(clearAlert());
  }
  const [sSize, setsSize] = useState(null);

  const handleRadioChange = (size) => {
    setsSize(size);
    setRsel(true)
  }

  return (
    <div style={{height:'772px',padding:'1px'}} >
      <div>
        <Navbar1 />
      </div>
      <div >
      {
                    showAlert && (
                        <Alert variant="warning" style={{ position: 'fixed', width: '100%', zIndex: 9999 }} onClose={handleCloseAlert} dismissible>
                            Item Already Exists in Cart
                        </Alert>
                    )}
      </div>
      <div style={{ display: 'flex' ,marginTop: '110px',marginLeft:'400px'}}>

        <div >
          <Card  style={{ width: '18rem',  marginLeft: '140px',marginTop:'70px',boxShadow:'0px 0px 10px #ff6969' }}>
            <Card.Img  variant="top" src={Pro.img} />
            <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

              <Card.Title  style={{ whiteSpace: 'pre-line' }} >Sizes:  {
                Pro.sizes.map((ps) => (
                  <h4 style={{ display: 'inline' }}>{ps}</h4>
                ))
              }</Card.Title>
              <Card.Title  style={{ whiteSpace: 'pre-line' }} >Colours: {Pro.colors.map((pc) => (
                <h4 style={{ display: 'inline' }}>{pc}</h4>
              ))}</Card.Title>
              <Card.Title>Price: {Pro.price}</Card.Title>


            
            </Card.Body>
          </Card>


        </div>
        <div className='DetR' >
          <div >
            <h1>{Pro.productType}</h1>
          </div>
          <div>
            <h4>₹ {Pro.price}</h4>
          </div>
          <div style={{display:"flex"}}>
            <h4>Colours :</h4>
             {Pro.colors.map((pc) => (
              <h4 > {pc},</h4>
            ))}
          </div>
          <div>
            <h5>Select size:</h5>
            <Form>
              {Pro.sizes.map((s) => (
                <Form.Check inline label={s} type='radio' id={`inline-radio-${s}`} name='Sg' onChange={() => handleRadioChange(s)}/>
              ))}
            </Form>
          </div>
          <div>
            <h5>Select Quantity: </h5>
            <Dropdown >
              <Dropdown.Toggle size='lg' variant="dark" id="dropdown-basic">
                {qua}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {
                  [2, 3, 4, 5, 6, 7, 8, 9, 10].map((m) => (
                    <Dropdown.Item key={m} onClick={() => setqua(m)}>{m}</Dropdown.Item>
                  ))
                }

              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
          <Button variant="outline-success" style={{width:'150px'}} disabled={!Rsel} onClick={(event) => Add2Cart(event,Pro,sSize,qua )}>Add</Button>

          </div>

        </div>
      </div>
    </div>
  )
}

export default PtypeDetails
