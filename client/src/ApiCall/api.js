
import { publicRequest, userRequest } from '../Rqst/Request';
import { CldataAdd, CldataRemove, CldataUp } from '../Slice';

export const LoginF = async (dispatch, data) => {
    console.log('data Login--', data);
    try {

        const response = await publicRequest.post("/Soul2/Clverify", data)
        console.log("success", response);
        dispatch(CldataAdd(response.data))

    } catch (err) {
        console.log('error--', err);
    }
}
export const Signin = async (data) => {
    console.log('data--', data);
    try {

        const response = await publicRequest.post("/Soul2/sign", data)
        console.log("success", response);
    } catch (err) {
        console.log('error--', err);
    }
}

export const DelAcc = async (data,nav,dispatch) => {
    console.log("dataaaa---",data);
    try {
        await userRequest.delete(`/Soul/Udel/${data}`)
        dispatch(CldataRemove())
        nav('/')
    } catch (err) {
        console.log('error--', err);
    }
}

export const Updated=async (data,id,nav,disp)=>{
    console.log("Updated fn--",data,"id--",id);
    try{
        
const updat=await userRequest.post(`/Soul2/update/${id}`,data)
console.log("update data",updat);
disp(CldataUp(updat))
nav('/profile')

    }catch(err){
        console.log('error--', err);
    }
}

export const GetAllAData = async () => {

    try {
        const men = await userRequest.get(`/Soul/getMen`)
        const women = await userRequest.get(`/Soul/getWomen`)
        console.log("men==", men);
        console.log("women==", women);

        return [men, women]
    } catch (err) {
        console.log('error--', err);
    }
}
export const GetUserData = async (id) => {
console.log("id data--",id);
    try {
        const UserD = await userRequest.get(`/Soul/gett/${id}`)
        console.log("UserD",UserD);
        return UserD
    } catch (err) {
        console.log('error--', err);
    }
}
export const Cartadd = async (data, id) => {
    console.log("m=", data);
    try {

        const Cartt = await userRequest.put(`/Soul/AddCartData/${id}`, data)

        console.log("Cartttttt", Cartt);

    } catch (err) {
        console.log('error--', err);
    }
}

export const Cartrem1 = async (cd,uid) => {
        console.log("uid==",uid);
        console.log("cd===",cd);
    
    try {

        const Cart1 = await userRequest.put(`/Soul/CartR1/${uid}`,cd)
        // console.log("Cartttttt",Cart1);
    } catch (err) {
        console.log('error--', err);
    }
}

export const CartremAll = async (id) => {
    console.log("id==", id);
    try {
        const Crt = await userRequest.put(`/Soul/CartRA/${id}`)
        console.log("Cartttttt", Crt);
    } catch (err) {
        console.log('error--', err);
    }
}
export const CartQua = async (Usid,id,cd) => {
    console.log("Usid==",Usid);
    console.log("index==", id);
    console.log("cd==", cd);
    try {
        const CrtU = await userRequest.put(`/Soul/CartqU/${Usid}`,{id,cd})
        console.log("Cartttttt", CrtU);
    } catch (err) {
        console.log('error--', err);
    }
}
export const PlOrder = async (data,UsId) => {
    console.log('data--', data);
    console.log('USID--', UsId);
    try {

        const response = await userRequest.put(`/SoulO/AddOrder/${UsId}`,data)
        console.log("success", response);
        return response
    } catch (err) {
        console.log('error--', err);
    }
}
export const Orderrem1 = async (uid,u) => {
    console.log("uid==",uid);
    console.log("u===",u);

try {

     const Order1 = await userRequest.put(`/Soul/Ordrem/${uid}`,u)
    console.log("del order",Order1);
} catch (err) {
    console.log('error--', err);
}
}
export const genOId=async ()=>{
    try{
        const response = await publicRequest.get(`/SoulO/generateObjectId`)
        console.log("Generated Id", response);
        return response
    }catch(err){
        console.log('error--', err);

    }
}
export const  razorpayVerify= async(payment,order)=>{

    console.log('verifying',payment,order);
    try{
  const res=await publicRequest.post('/SoulO/verify',{payment,order})
  console.log('final result',res.data);
  if(res.data.status==true){
console.log("resdaaaaaata",res.data.status);
    window.location.href='/PSu'
  }
  
    }catch(err){
      console.log(err);
    }
  }
  export const OtpSnd=async(id)=>{
    console.log("FID==",id);
    try{
        const oSND=await userRequest.post(`/Soul/otpSnd`,id)
        console.log('oSND',oSND.data.otp);
        console.log('oSND',oSND.data);
        return oSND.data
    }
    catch(err){
        console.log('error--', err);
    }
   
}
  export const PassChangeUp=async(data)=>{
   console.log("data==",data);
    try{
        const PAsCh=await publicRequest.put(`/Soul/PassUp`,data)
        // console.log('Passch',PAsCh);
        // return oSND.data
    }
    catch(err){
        console.log('error--', err);
    }
   
}


