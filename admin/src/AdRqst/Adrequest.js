import axios from 'axios'

const Base_Url="http://localhost:5000/api/"

var Token=JSON.parse(JSON.parse(localStorage.getItem('persist:SoulStore2Ad')).AdData).Data[0] &&
JSON.parse(JSON.parse(localStorage.getItem('persist:SoulStore2Ad')).AdData).Data[0].accesstoken
console.log("Token----",Token);

export const publicRequest=axios.create({baseURL:Base_Url})

export const AdminRequest=axios.create({
    baseURL:Base_Url,
    headers:{token:`Bearer ${Token}`}
})