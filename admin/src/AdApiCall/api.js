

import { AdminRequest, publicRequest } from '../AdRqst/Adrequest';
import { ADdataAdd, ADdataRemove, ADdataUp, MdataRem, WdataRem, idadd } from '../SliceAd';


export const LoginAd = async (dispatch, data) => {
    console.log('data Login--', data);
    try {

        const response = await publicRequest.post("/Soul2/Adverify", data)
        console.log("success", response);
        dispatch(ADdataAdd(response.data))

    } catch (err) {
        console.log('error--', err);
    }
}
export const SigninAd = async (data) => {
    console.log('data--', data);
    try {

        const response = await publicRequest.post("/Soul2/Adsign", data)
        console.log("success", response);
    } catch (err) {
        console.log('error--', err);
    }
}
export const DrUp = async (data,Ctry,dispatch) => {

    console.log('data--', data);
    try {
        if(Ctry==='Men'){
            const response = await publicRequest.post("/Soul2/MdrUpload", data)
          
            console.log("success", response);
           
            dispatch(idadd(response.data))
            
        }
        else if(Ctry==='Women'){
            const response = await publicRequest.post("/Soul2/WdrUpload", data)
            console.log("success", response);
            dispatch(idadd(response.data))
        }
        
    } catch (err) {
        console.log('error--', err);
    }
}

export const AdDelAcc = async (data, nav, dispatch) => {
    console.log("dataaaa---", data);
    try {
        await AdminRequest.delete(`/Soul/ADdel/${data}`)
        dispatch(ADdataRemove())
        nav('/')
    } catch (err) {
        console.log('error--', err);
    }
}
export const AdDelOAcc = async (data) => {
    console.log("dataaaa---", data);
    try {
        await AdminRequest.delete(`/Soul/ADdel/${data}`)
       
    } catch (err) {
        console.log('error--', err);
    }
}
export const UsDelAcc = async (data, nav, dispatch) => {
    console.log("dataaaa---", data);
    try {
        await AdminRequest.delete(`/Soul/Udel/${data}`)
        // dispatch(ADdataRemove())
        // nav('/')
    } catch (err) {
        console.log('error--', err);
    }
}

export const GetAllAData = async () => {

    try {
        const men = await AdminRequest.get(`/Soul/getMen`)
        const women = await AdminRequest.get(`/Soul/getWomen`)
        console.log("men==", men);
        console.log("women==", women);

        return [men, women]
    } catch (err) {
        console.log('error--', err);
    }
}
export const GetUser = async () => {

    try {
        const users = await AdminRequest.get(`/Soul/getUser`)

        console.log("usrs==", users);


        return users
    } catch (err) {
        console.log('error--', err);
    }
}
export const GetAdmin = async () => {

    try {
        const Admins = await AdminRequest.get(`/Soul/getAdmin`)

        console.log("Admins==", Admins);

        return Admins
    } catch (err) {
        console.log('error--', err);
    }
}
export const MDel = async (id,dispatch) => {
    try {
        const M1 = await publicRequest.delete(`/Soul/Mdel/${id}`)
        dispatch(MdataRem(id))
        console.log("deleted",M1);


    } catch (err) {
        console.log('error--', err);
    }
    }
    export const WDel = async (id,dispatch) => {
    try {
        const W1 = await publicRequest.delete(`/Soul/Wdel/${id}`)
        dispatch(WdataRem(id))
        console.log("deleted",W1);

    } catch (err) {
        console.log('error--', err);
    }
    }

    export const AdUpdated=async (data,id,nav,disp)=>{
        console.log("Updated fn--",data,"id--",id);

        try{
            
    const updat=await publicRequest.post(`/Soul2/updateAd/${id}`,data)
    console.log("update data",updat);
    disp(ADdataUp(updat))
    nav('/adpro')
    // return updat
    
        }catch(err){
            console.log('error--', err);
        }
    }