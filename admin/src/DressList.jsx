import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Adnav from './Adnav';
import Button from 'react-bootstrap/Button';
import { GetAllAData, MDel, MenDrem, WDel, WomenDrem } from './AdApiCall/api';
import { DrdataAdd } from './SliceAd';



function DressList() {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);
    const typ = searchParams.get('t');

    const Mdata = useSelector(state => state.AdData.MenDr);
    const Wdata = useSelector(state => state.AdData.WomenDr);
    // const [Data, setData] = useState([])

    const [tra, settra] = useState(0)


    useEffect(() => {

        const Adgdf = async () => {

            const gd = await GetAllAData()
            console.log("gd==0", gd[0], 'gd1--', gd[1]);
            dispatch(DrdataAdd([gd[0].data, gd[1].data]))
        }
        Adgdf()

        // const setter = () => {
        //     console.log("tra", tra);
        //     if (typ === 'men') {
        //         setData(Mdata)
        //         console.log("testM", Mdata);
        //     }
        //     else if (typ === 'women') {
        //         setData(Wdata)
        //         console.log("testW", Wdata);

        //     }
        // }
        // setter()
    }, [tra])


    console.log("T", typ);



    // useEffect(() => {
    //     const Display = async () => {

    //         console.log("Userdata**--", Udata);
    //         if (typ === 'men') {
    //             setData(Udata[0].data)
    //         }
    //         else if (typ === 'women') {
    //             setData(Udata[1].data)
    //         }

    //     }
    //     Display()
    // }, [])



    const dispatch = useDispatch()

    const remove = (mid, dispatch) => {


        if (typ === 'men') {
            MDel(mid, dispatch)
            console.log("Mid test", mid);
            settra(tra + 1)
            window.location.reload()
            console.log('Mdata', Mdata);

        }
        else if (typ === 'women') {
            WDel(mid, dispatch)
            console.log("Wid test", mid);
            settra(tra + 1)

            window.location.reload()
            console.log('Wdata', Wdata);



        }
    }

    return (
        <div>
            <div >
                <Adnav />
            </div>
            {
                typ === "men" ? (
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {
                        Mdata.map((m) => (
                            <div >
                                <Card className="crd" style={{ width: '18rem', backgroundColor: 'rgb(42, 41, 41)', color: 'white', margin: '15px' }} key={m._id}>
                                    <Card.Img style={{ height: '350px', overflow: 'clip', padding: '3px', borderRadius: '10px', objectFit: 'cover' }} variant="top" src={m.img} />
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Card.Text className="prc">Price :{m.price}</Card.Text>
                                        <Card.Text className="prc">Type :{m.productType}</Card.Text>
                                        <Card.Text style={{ whiteSpace: 'pre-line' }} className="prc">
                                            Size :
                                            {m.sizes.map((size, index) => (
                                                <span key={index}>{size} </span>
                                            ))} </Card.Text>
                                        <Card.Text style={{ whiteSpace: 'pre-line' }} className="prc">
                                            Colors :
                                            {m.colors.map((color, index) => (
                                                <span key={index}>{color} </span>
                                            ))} </Card.Text>
                                    </div>
                                    <div style={{marginLeft:'110px',marginTop:'10px',marginBottom:'10px'}}>
                                        <Button variant="warning" onClick={() => remove(m._id, dispatch)}>Remove</Button>
                                    </div>
                                </Card>
                            </div>
                        ))
                    }
                </div>
                ): (
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {
                        Wdata.map((m) => (
                            <div >
                                <Card className="crd" style={{ width: '18rem', backgroundColor: 'rgb(42, 41, 41)', color: 'white', margin: '15px' }} key={m._id}>
                                    <Card.Img style={{ height: '350px', overflow: 'clip', padding: '3px', borderRadius: '10px', objectFit: 'cover' }} variant="top" src={m.img} />
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Card.Text className="prc">Price :{m.price}</Card.Text>
                                        <Card.Text className="prc">Type :{m.productType}</Card.Text>
                                        <Card.Text style={{ whiteSpace: 'pre-line' }} className="prc">
                                            Size :
                                            {m.sizes.map((size, index) => (
                                                <span key={index}>{size} </span>
                                            ))} </Card.Text>
                                        <Card.Text style={{ whiteSpace: 'pre-line' }} className="prc">
                                            Colors :
                                            {m.colors.map((color, index) => (
                                                <span key={index}>{color} </span>
                                            ))} </Card.Text>
                                    </div>
                                    <div style={{marginLeft:'110px',marginTop:'10px',marginBottom:'10px'}}>
                                        <Button variant="warning" onClick={() => remove(m._id, dispatch)}>Remove</Button>
                                    </div>
                                </Card>
                            </div>
                        ))
                    }
                </div>
                )
            }













          
        </div>
    )
}

export default DressList
