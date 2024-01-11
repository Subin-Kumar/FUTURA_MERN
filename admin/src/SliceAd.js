import { createSlice } from '@reduxjs/toolkit'
const Admindata = createSlice({
    name: 'AdData',
    initialState: {
        Data: [],
        MenDr: [],
        WomenDr: [],
        idA:[],
        Orderlist:{}
    },
    reducers: {
        ADdataAdd: (state, action) => {
            console.log("Logdata--", action.payload);
            state.Data.push(action.payload)
        },
        ADdataUp:(state,action)=>{
            console.log("actionpay==",action.payload.data.username)
            state.Data[0].username=action.payload.data.username
            state.Data[0].email=action.payload.data.email
            state.Data[0].age=action.payload.data.age
            state.Data[0].address=action.payload.data.address
            state.Data[0].password=action.payload.data.password
            // state.Data[0].image=action.payload.data.image
        },
        ADdataRemove: (state) => {
            state.Data = []
        },
        DrdataAdd: (state, action) => {
            console.log('payload==', action.payload[0]);
            state.MenDr = [...action.payload[0]]
            state.WomenDr = [...action.payload[1]]
            console.log('drdataM--', state.MenDr);
            console.log('drdataW--', state.WomenDr);
        },
        DrdataRemove: (state) => {
            state.MenDr = []
            state.WomenDr = []
        },
        MdataAdd: (state,action) => {
            state.MenDr.push(action.payload)  
            console.log('drdataM--', state.MenDr);
        },
        MdataRem: (state,action) => {
            console.log("acpayid....",action.payload);
            const index = state.MenDr.findIndex(obj => obj._id === action.payload);
            console.log('MdelIn--', index);
            
                state.MenDr.splice(index, 1); // Removes one element at the specified index
            
        },
        WdataRem: (state,action) => {
            const index = state.WomenDr.findIndex(obj => obj._id === action.payload);
            console.log('WdelIn--', index);
            
                state.WomenDr.splice(index, 1); // Removes one element at the specified index
            
        },
        WdataAdd: (state,action) => {
            state.WomenDr.push(action.payload)
            console.log('drdataW--', state.WomenDr);
            
        },
        idadd: (state,action) => {
            state.idA=action.payload
            console.log("idA--",state.idA);
            
        },
        idrem: (state,action) => {
            state.idA=[]
            
            
        },
    }
})

export const {ADdataAdd,ADdataRemove,DrdataAdd,DrdataRemove,ADdataUp,MdataAdd,WdataAdd,idadd,idrem,MdataRem,WdataRem} = Admindata.actions
export default Admindata.reducer