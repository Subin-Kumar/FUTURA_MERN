import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { CartdataAdd, clearAlert, setAlert } from './Slice';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Cartadd } from './ApiCall/api';
import Alert from 'react-bootstrap/Alert';
import Navbar1 from './Navbar1';

function SearchData() {

    const CtrN = []
    const PidA = []
    const Pt = []
    const Pr = []
    const Sz = []
    const Clr = []

    const MData = useSelector(state => state.ClData.MenDr)
    const WData = useSelector(state => state.ClData.WomenDr)
    const MWData = [...MData, ...WData]


    const location = useLocation();
    const searchQuery = location.state?.searchQuery
    console.log("SeachQuery", searchQuery);

    var sq = searchQuery.toLowerCase()
    var wordsArr = sq.split(' ')
    console.log("wordsArray", wordsArr);
    console.log('MW--', MWData);

    for (var i = 0; i < wordsArr.length; i++) {
        if (wordsArr[i] == 'men') {
            if (!CtrN.includes('men')) {
                CtrN.push('men')
            }
        }
        else if (wordsArr[i] == 'women') {
            if (!CtrN.includes('women')) {
                CtrN.push('women')
            }
        }
        else {
            MWData.map((p) => {
                if (wordsArr[i] === p.productType.toLowerCase()) {
                    if (!Pt.includes(p.productType)) {
                        Pt.push(p.productType)
                    }
                    console.log("Find Pushed-- pt");
                }
                else if (p.sizes.includes(wordsArr[i])) {
                    if (!Sz.includes(wordsArr[i])) {
                        Sz.push(wordsArr[i])
                    }
                    console.log("Find Pushed-- sz");
                }
                else if (wordsArr[i] === p.price) {
                    if (!Pr.includes(p.price)) {
                        Pr.push(p.price)
                    }
                    console.log("Find Pushed-- pr");
                }
                else if (p.colors.includes(wordsArr[i])) {
                    if (!Clr.includes(wordsArr[i])) {
                        Clr.push(wordsArr[i])
                    }
                    console.log("Find Pushed-- clr");
                }
            })
        }

    }

    console.log("Ctrn", CtrN);
    console.log("PidA", PidA);
    console.log("Pt", Pt);
    console.log("Pr", Pr);
    console.log("sz", Sz);
    console.log("Clr", Clr);

    CtrN.map((cN) => {
        console.log('cn=', cN);
        if (cN == 'men') {
            MData.map((p) => {
                PidA.push(p._id);
            })
        }
        else if (cN == 'women') {
            WData.map((p) => {
                PidA.push(p._id);
            })
        }
    })

    MWData.map((p) => {
        Pt.map((pt1) => {
            if (p.productType == pt1) {
                if (!PidA.includes(p._id)) {
                    PidA.push(p._id);
                }
            }
        })
        Pr.map((pr1) => {
            if (p.price == pr1) {
                if (!PidA.includes(p._id)) {
                    PidA.push(p._id);

                }
            }
        })
        Sz.map((sz1) => {
            if (p.sizes.includes(sz1)) {
                if (!PidA.includes(p._id)) {
                    PidA.push(p._id);

                }
            }
        })
        Clr.map((cl1) => {
            if (p.colors.includes(cl1)) {
                if (!PidA.includes(p._id)) {
                    PidA.push(p._id);

                }
            }
        })
    })

    console.log("PidA-- before empty check", PidA);
    if (PidA.length == 0) {
        console.log("PidA--empty check", PidA);

        MWData.map((pz) => {
            PidA.push(pz._id)
            console.log("PidA-inserted", PidA);
        })


    }

    console.log("PidA--", PidA);



    const dispatch = useDispatch()
    const Uid = useSelector(state => state.ClData.Data[0]._id && state.ClData.Data[0]._id)
    const CidL = useSelector(state => state.ClData.CartIdList && state.ClData.CartIdList)

 

    return (
        <div style={{padding:'1px'}}>
            <div className='nava' style={{ position: 'fixed', zIndex: 1000, width: '100%' }}>
                <Navbar1 />
            </div>
            <div className='Sdress' style={{ position: 'relative', zIndex: 999, marginTop: '101px' }}>
               
                {
                    MWData.map((p) => (
                        PidA.map((pa) => {
                            if (pa == p._id) {
                                return (
                                    <Card className="crd" style={{ width: '18rem' }} key={p._id}>
                                         <Link to='/PrDet' state={{ Pr: p }}>
                                        <Card.Img className='crdim' style={{ height: '350px', overflow: 'clip', borderRadius: '5px', objectFit: 'cover' }} variant="top" src={p.img} />
                                        </Link>
                                    
                                    </Card>
                                );
                            }
                        })
                    ))
                }
            </div>
        </div>
    )
}

export default SearchData
