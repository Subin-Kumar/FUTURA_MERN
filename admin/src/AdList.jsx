import React, { useEffect, useState } from 'react'
import { AdDelOAcc, GetAdmin } from './AdApiCall/api'
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

function AdList() {
  const [Aarr, setAarr] = useState([])
  const curId = useSelector(state => state.AdData.Data[0]._id)
  console.log("curre id", curId);
  useEffect(() => {
    const Display = async () => {
      const Adata = await GetAdmin()
      console.log("AlldataGet all------", Adata.data);
      setAarr(Adata.data)
      console.log("Arr==", Aarr);
    }
    Display()

  }, [])

  const delA = (id) => {
    console.log("id--", id);
    AdDelOAcc(id)
    window.location.reload()
  }

  const shouldRenderData = Aarr.some((add) => add._id !== curId);


  return (
    <div>
      <div>
        <div style={{ display: 'flex', position: 'fixed', marginLeft: '1620px', justifyContent: 'end', zIndex: 1000, }}>
          <Link to={'/'} > <Button style={{ marginTop: '15px', marginRight: '15px', boxShadow: '0px 0px 10px #ff6969' }} variant='warning'>Back</Button></Link>
        </div>
        {
          shouldRenderData && (
            <div style={{ width: '800px', borderRadius: '10px', boxShadow: "0px 0px 10px #ff6969", marginLeft: '450px',color:'#ff6969' }}>

              <Table striped variant='dark'>
                <thead>
                  <tr>
                    <th>AdminName</th>
                    <th>AdminEmail Id</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    Aarr.map((add) => {
                      if (add._id !== curId) {
                        return (
                          <tr key={add._id}>
                            <td style={{ color: "red" }}>{add.username}</td>
                            <td>{add.email}</td>
                            <td>{add.age}</td>
                            <td>{add.address}</td>
                            <td> <Button variant='danger' onClick={() => delA(add._id)}>Delete</Button></td>

                          </tr>
                        )

                      }

                    })
                  }


                </tbody>
              </Table>
            </div>
          )}
        {!shouldRenderData && (<div className='emp' style={{ height: '772px', backgroundImage: `url('/Images/01Adlist.jpg')` }}>

        </div>)}


      </div>
    </div>
  )
}

export default AdList
