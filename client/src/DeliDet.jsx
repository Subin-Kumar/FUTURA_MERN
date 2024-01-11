import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CartremAll, PlOrder, genOId, razorpayVerify } from './ApiCall/api';
import { useDispatch, useSelector } from 'react-redux';
import { CartdataRemoveAll, OrdInfoAdd, OrderAdd } from './Slice';
import Navbar1 from './Navbar1';







function DeliDet() {
  const location = useLocation();
  const nav = useNavigate()
  const dispatch = useDispatch()
  const Pri = location.state?.Price
  console.log("Tot", Pri);
  const Usid = useSelector(state => state.ClData.Data[0]._id);
  const Cdata = useSelector(state => state.ClData.Cartlist);
  console.log('Usid', Usid);
  console.log('Cdata', Cdata);

  function formatDateToString(dateObject) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();
    const dayoW = dateObject.getDay();
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const seconds = dateObject.getSeconds();

    return `${daysOfWeek[dayoW]} ${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  }


  const [Address, setAddress] = useState('')
  const [Pincode, setPincode] = useState(0)
  const [Mobile, setMobile] = useState(0)
  const [PayM, setPayM] = useState(0)
  const [Rsel, setRsel] = useState(false)

  const handleRadioChange = (Pm) => {
    setPayM(Pm);
    console.log("Pm--", Pm);
    console.log("PM", PayM);
    setRsel(true)

  }


  const razorpayPayment = (order) => {

    var options = {
      "key": "rzp_test_6FPhitZ9tLf8nl", // Enter the Key ID generated from the Dashboard
      "amount": order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise10010
      "currency": "INR",
      "name": "SouledStore",
      "description": "Test Transaction",
      "image": "Images/download (1).png",
      "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response) {
        razorpayVerify(response, order)
      },
      "prefill": {
        "name": "Subin Kumar",
        "email": "iamsubin307.com",
        "contact": "9072949299"
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#ff6969"
      }
    };

    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  }


  const Check = async () => {

    const gidd = await genOId()
    const _id = gidd.data
    console.log("Genidjsx", _id);

    if (PayM === 'Cash On Delivery') {
      const myDate = new Date();
      const fDate = formatDateToString(myDate);
      console.log("dateeeeeee", fDate);

      const res = await PlOrder({ _id, fDate, Address, Pincode, Mobile, PayM, Pri, Cdata }, Usid)
      console.log("res--", res);
      dispatch(CartdataRemoveAll())
      dispatch(OrderAdd({ _id, fDate, Address, Pincode, Mobile, PayM, Pri, Cdata }))
      CartremAll(Usid)
      nav('/PSu')
    }
    else {
      const myDate = new Date();
      const fDate = formatDateToString(myDate);

      const dataAll = { _id, fDate, Address, Pincode, Mobile, PayM, Pri, Cdata }
      console.log("data alllll", dataAll);
      const res = await PlOrder({ _id, fDate, Address, Pincode, Mobile, PayM, Pri, Cdata }, Usid)
      razorpayPayment(res.data)
      dispatch(OrderAdd({ _id, fDate, Address, Pincode, Mobile, PayM, Pri, Cdata }))
      dispatch(CartdataRemoveAll())
      CartremAll(Usid)
      dispatch(OrdInfoAdd(dataAll))


      console.log("res online", res);
      //  nav('/PSu')
    }
  }


  return (
    <div>
      <div>
        <Navbar1 />
      </div>
      <div className='Lo'>
        <div className='Lout3'>
          <h5 style={{color:'#ff6969',fontWeight:'bolder'}}>Enter Delivery Details</h5>
          <div style={{ display: 'flex' }}>
            <div style={{ marginLeft: '60px', marginTop: '10px', marginRight: "100px" }}>
              <Form >


                <Form.Group className='F3' controlId="formBasicEmail">
                  <Form.Label style={{ color: 'black',fontWeight:'bolder' }}>Address</Form.Label>
                  <Form.Control type="text" placeholder={Address} value={Address} onChange={(e) => setAddress(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label style={{ color: 'black',fontWeight:'bolder' }}>Pincode</Form.Label>
                  <Form.Control type="Number" placeholder={Pincode} value={Pincode} onChange={(e) => setPincode(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label style={{ color: 'black' ,fontWeight:'bolder'}}>Mobile</Form.Label>
                  <Form.Control type="Number" placeholder={Mobile} value={Mobile} onChange={(e) => setMobile(e.target.value)} />
                </Form.Group>
              </Form>
            </div>
            <div>

            </div>

          </div>
        </div>
        <div className='TCar'>

          <Card style={{ width: '18rem', marginTop: '160px', }}>
            <Card.Body style={{boxShadow:'0px 0px 10px #ff6969',display:'flex',flexDirection:'column',alignItems:'center'}}>
              <Card.Title style={{color:'#ff6969'}}>Total Price</Card.Title>

              <Card.Text style={{fontWeight:'bolder'}}>
                Rs {Pri}
              </Card.Text>

              <Form.Check name='sk' style={{fontWeight:'bolder'}} type={'radio'} label={`Cash on Delivery`} onClick={() => handleRadioChange('Cash On Delivery')} />
              <Form.Check name='sk' style={{fontWeight:'bolder'}} type={'radio'} label={`Online Payment`} onClick={() => handleRadioChange('Online Payment')} />

              <div style={{ marginLeft: '10px', marginTop: '20px' }}>
                <Button variant="outline-success" disabled={!Rsel} onClick={Check} >CheckOut</Button>
                {/* onClick={(event) => Add2Cart(event,Pro,sSize,qua )} */}
              </div>

            </Card.Body>
          </Card>
        </div>
      </div>


    </div>
  )
}

export default DeliDet
