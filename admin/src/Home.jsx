import React, { useEffect, useState } from 'react'
import Adnav from './Adnav'
import { GetAllAData, GetUser, UsDelAcc } from './AdApiCall/api'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useDispatch } from 'react-redux';
import { DrdataAdd, idrem } from './SliceAd';
import Pie1 from './Pie1';
import Bar1 from './Bar1';
import { Link} from 'react-router-dom';



function Home() {
  const [Uarr, setUarr] = useState([])
  const dispatch=useDispatch()
  useEffect(() => {
    const Display = async () => {
      const Udata = await GetUser()
      console.log("AlldataGet all------", Udata);
      setUarr(Udata.data)
   
    }
    Display()
    const Adgdf = async () => {
      const gd = await GetAllAData()
      console.log("gd==0", gd[0], 'gd1--', gd[1]);
      dispatch(DrdataAdd([gd[0].data, gd[1].data]))
  }
  Adgdf()
  }, [])

  const del = (id) => {
    console.log("id--", id);
    UsDelAcc(id)
    window.location.reload()
  }
  const disp=useDispatch()
  const idr=()=>{
    disp(idrem())
  }
  return (
    <div>
      <div>
        <Adnav />
      </div>
      <div style={{display:'flex'}}>
        <div style={{marginLeft:'100px'}}>
        <div style={{borderRadius:'10px',boxShadow: "0px 0px 10px #ff6969", margin:'40px',marginBottom:'15px',marginLeft:'150px',height:'400px'}} >
        <Pie1/>
      </div>
      <div style={{width:'300px',borderRadius:'10px',boxShadow: "0px 0px 10px #ff6969", marginTop:'25px',marginLeft:'150px'}}>
        <Bar1/>
      </div>
        </div>
     
      <div style={{borderRadius:'10px',boxShadow: "0px 0px 10px #ff6969",margin:'50px',marginLeft:'50px'}}>
        <div style={{width:'800px',margin:'10px'}}>
          {/* <h1 style={{ color: 'white' }}>User Data</h1> */}
          <Table striped  >
            <thead>
              <tr>
                <th>Username</th>
                <th>Email Id</th>
                <th>Age</th>
                <th>Address</th>
                <th>Orders</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                Uarr.map((ad) => (
                  <tr key={ad._id}>
                    <td style={{ color: "red",fontWeight:'bolder' }}>{ad.username}</td>
                    <td>{ad.email}</td>
                    <td>{ad.age}</td>
                    <td>{ad.address}</td>
                    <td>
                    <Link to='/UOr' state={{ data: ad }}> <Button variant='outline-info' >Orders</Button></Link>

                    </td>

                    <td> <Button variant='danger' onClick={() => del(ad._id)}>Delete</Button></td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
           {/* <Button variant='danger' onClick={idr}>Delete id</Button> */}
         

        </div>
      </div>
      
      </div>
     
     
    </div>
  )
}

export default Home
