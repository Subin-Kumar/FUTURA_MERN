import React, { useEffect, useState } from 'react'
import Navbar1 from './Navbar1'
import { GetAllAData } from './ApiCall/api'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Style.css'
import { useDispatch, useSelector } from 'react-redux';
import { CldataUp, DrdataAdd, clearAlert } from './Slice';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer';



function Home() {



  const [MPTA, setMPTA] = useState([])
  const [WPTA, setWPTA] = useState([])
  const [UserD, setUserD] = useState([])
  const MData = useSelector(state => state.ClData.MenDr)
  const WData = useSelector(state => state.ClData.WomenDr)
  const Data = useSelector(state => state.ClData.Data)
  const dispatch = useDispatch()
  useEffect(() => {



    const uPT = () => {
      var uMPT = [...new Set(MData.map(obj => obj.productType))]
      var uWPT = [...new Set(WData.map(obj => obj.productType))]
      console.log("uMpt---", uMPT, 'uWpt--', uWPT);
      var MpTA = uMPT.map(m => MData.find(obj => obj.productType === m))
      setMPTA(MpTA)
      var WpTA = uWPT.map(w => WData.find(obj => obj.productType === w))
      setWPTA(WpTA)



    }
    uPT()
    setUserD(Data)
    console.log("Userd--", UserD);
  }, [])





  console.log("*/*mpta", MPTA);

  return (
    <div style={{padding:'10px' }}>

      <div className='nava' style={{ position: 'fixed', zIndex: 1000, width: '100%' }}>
        <Navbar1 />
      </div>
      <div style={{ position: 'relative', zIndex: 999,overflow: 'clip', boxShadow: "0px 0px 10px #ff6969", marginTop: '110px', borderRadius: '15px',marginLeft:'40px',marginRight:'40px'}}>
        <Carousel data-bs-theme="dark">
          <Carousel.Item style={{ borderRadius: '15px' }}>
            <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/8359520231128002244.jpg?format=webp&w=1500&dpr=1.3" alt="" />
            {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item style={{ borderRadius: '15px' }}>
            <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/category/catban-020231214072653.jpg?format=webp&w=1500&dpr=1.3" alt="" />
            {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item style={{ borderRadius: '15px' }}>
            <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/category/catban-320231205113133.jpg?format=webp&w=1500&dpr=1.3" alt="" />
            {/* <Carousel.Caption>
          <h3>First slide label</h3>
         
        </Carousel.Caption> */}
          </Carousel.Item>


          <Carousel.Item style={{ borderRadius: '15px' }}>
            <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/category/catban-020231129172907.jpg?format=webp&w=1500&dpr=1.3" alt="" />
            {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </div>
      <div style={{ position: 'relative', zIndex: 999, marginTop: '40px', boxShadow: "0px 0px 10px #ff6969",borderRadius:'30px',marginBottom:'20px',backdropFilter:'blur(10px)'}}>
        <div style={{color:'#ff6969',fontFamily:'Trebuchet MS',textShadow:'1px 1px 2px white',display:'flex',justifyContent:'center',margin:'20px'}}><h1>Men</h1></div>
        <div className='Sdress'>
          {
            MPTA.map((m) => (
              <Link to='Ptd' state={{ PType: m.productType, PCat: 'Men' }} style={{ textDecoration: 'none' }} key={m._id}>
                <Card className="crd" style={{ width: '18rem' }} >
                  <Card.Img className='crdim' style={{ height: '350px', overflow: 'clip', borderRadius: '5px', objectFit: 'cover' }} variant="top" src={m.img} />
                  <div style={{ position: 'absolute', top: '94%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%', color: 'white', fontSize: '25px', fontFamily: 'Trebuchet MS', fontWeight: 'bolder', textShadow: '3px 3px 2px black' }}>
                    <Card.Text className="prc">{m.productType}</Card.Text>

                  </div>

                </Card>
              </Link>

            ))
          }
        </div>

        <div style={{color:'#ff6969',fontFamily:'Trebuchet MS',textShadow:'1px 1px 2px white',display:'flex',justifyContent:'center',margin:'20px'}}><h1>Women</h1></div>
        <div className='Sdress'>
          {
            WPTA.map((m) => (
              <Link to='Ptd' state={{ PType: m.productType, PCat: 'Women' }} style={{ textDecoration: 'none' }} key={m._id}>
                <Card className="crd" style={{ width: '18rem' }} >
                  <Card.Img className='crdim' style={{ height: '350px', overflow: 'clip',  borderRadius: '5px', objectFit: 'cover' }} variant="top" src={m.img} />
                  <div style={{ position: 'absolute', top: '94%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%', color: 'white', fontSize: '25px', fontFamily: 'Trebuchet MS', fontWeight: 'bolder', textShadow: '3px 3px 2px black' }}>
                    <Card.Text className="prc" >{m.productType}</Card.Text>
                  </div>
                </Card>
              </Link>
            ))
          }
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
