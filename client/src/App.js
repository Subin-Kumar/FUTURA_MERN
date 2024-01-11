import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Home from './Home';
import Signup from './Signup';
import { useSelector } from 'react-redux';
import PtypeD from './PtypeD';
import CartCom from './CartCom';
import SearchData from './SearchData';
import Profile from './Profile';
import Update from './Update';
import PtypeDetails from './PtypeDetails';
import DeliDet from './DeliDet';
import PaySucS from './PaySucS';
import ViewOrder from './ViewOrder';
import OrderList from './OrderList';
import Footer from './Footer';
import ForgotPass from './ForgotPass';
import PassChange from './PassChange';


function App() {
  const Udata=useSelector(state=>state.ClData.Data)
  const UCdata=useSelector(state=>state.ClData.Cartlist)
  console.log("udata--",Udata[0]);
  if(Udata[0]){
    var token=Udata[0].accesstoken
  }
  console.log("ucartl==",UCdata.length);
  
  const router=createBrowserRouter([
{
  path:'/',
  element:token?<Home/>:<Login/>
},
{
  path:'home',
  element:<Home/>
},

{
  path:'signup',
  element:<Signup/>
},
{
  path:'Ptd',
  element:<PtypeD/>
},
{
  path:'Crt',
  element:<CartCom/>
},
{
  path:'search',
  element:<SearchData/>
},
{
  path:'profile',
  element:<Profile/>
},
{
  path:'update',
  element:<Update/>
},
{
  path:'PrDet',
  element:<PtypeDetails/>
},
{
  path:'DelD',
  element:<DeliDet/>
},
{
  path:'PSu',
  element:<PaySucS/>
},
{
  path:'ViewOrd',
  element:<ViewOrder/>
},
{
  path:'OrdL',
  element:<OrderList/>
},
{
  path:'foot',
  element:<Footer/>
},
{
  path:'Fpass',
  element:<ForgotPass/>
},
{
  path:'PCh',
  element:<PassChange/>
},
   ])
  return (
<RouterProvider router={router}></RouterProvider>
  );
}

export default App;
