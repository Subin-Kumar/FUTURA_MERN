import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Login from './Login';
import { useSelector } from 'react-redux';
import AdSignup from './AdSignup';
import Adnav from './Adnav';
import AdPro from './AdPro';
import AdList from './AdList';
import DressList from './DressList';
import AddDress from './AddDress';
import Pie1 from './Pie1';
import Bar1 from './Bar1';
import AdUpdate from './AdUpdate';
import UsOrd from './UsOrd';
import ViewOrd from './ViewOrd';


function App() {
  const Udata=useSelector(state=>state.AdData.Data[0])
  console.log("udata==",Udata);
  if(Udata){
    var token=Udata.accesstoken
  }

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
      path:'adsignup',
      element:<AdSignup/>
    },
    {
      path:'adnav',
      element:<Adnav/>
    },
    {
      path:'adpro',
      element:<AdPro/>
    },
    {
      path:'adlist',
      element:<AdList/>
    },
    {
      path:'DrList',
      element:<DressList/>
    },
    {
      path:'AddDr',
      element:<AddDress/>
    },
    {
      path:'Pie',
      element:<Pie1/>
    },
    {
      path:'Bar',
      element:<Bar1/>
    },
    {
      path:'ADu',
      element:<AdUpdate/>
    },
    {
      path:'UOr',
      element:<UsOrd/>
    },
    {
      path:'Vor',
      element:<ViewOrd/>
    },
   
    
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
