import { createSlice } from '@reduxjs/toolkit'
const Clientdata = createSlice({
    name: 'ClData',
    initialState: {
        Data: [],
        MenDr: [],
        WomenDr: [],
        Cartlist: [],
        CartIdList: [],
        Alert: false,
        CartQuantity: 0,
        Totprc: 0,
        Orders:[],
        OrderInfo:[],
        passd:''
    },
    reducers: {
        CldataAdd: (state, action) => {
            console.log("Logdata--", action.payload);
            state.Data.push(action.payload)
            state.Cartlist = action.payload.cart
            state.Orders = action.payload.orders
            console.log("orders",state.Orders);
            state.CartQuantity = action.payload.cart.length
            action.payload.cart.map((p) => {
                state.CartIdList.push(p.m._id)
                state.Totprc+=p.m.price*p.q
            })
        },
        CldataUp:(state,action)=>{
            console.log("actionpay==",action.payload.data.image)
            state.Data[0].username=action.payload.data.username
            state.Data[0].email=action.payload.data.email
            state.Data[0].age=action.payload.data.age
            state.Data[0].address=action.payload.data.address
            state.Data[0].password=action.payload.data.password
            state.Data[0].image=action.payload.data.image
        },
        CldataRemove: (state, action) => {
            state.Data = []
            state.CartIdList = []
            state.Cartlist = []
            state.CartQuantity = 0
            state.Totprc = 0
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
        setAlert: (state) => {
            state.Alert = true
        },
        CartdataAdd: (state, action) => {
            console.log("Payload--", action.payload)
            console.log("Payload s--", action.payload.s)
            var pv = action.payload.m._id
            console.log("payload value--", pv, typeof (pv));
            state.CartQuantity += 1;
            state.Cartlist.push(action.payload)
            console.log(action.payload.m.price);
            state.Totprc = state.Totprc + action.payload.m.price*action.payload.q
            state.CartIdList.push(pv)
            console.log("Totprc", state.Totprc);
        },
        CartdataRemove: (state, action) => {
            console.log("payload",action.payload);
            const index = state.Cartlist.findIndex(obj => obj.m._id === action.payload.m._id&&obj.s===action.payload.s);
            console.log("index", index);
            console.log("check", state.Cartlist[index].m.price);
            console.log("qcheck",state.Cartlist[index].q);
            state.Totprc = state.Totprc - (state.Cartlist[index].m.price*state.Cartlist[index].q)
            console.log("rem", state.Totprc);
            state.Cartlist.splice(index, 1);
            state.CartQuantity -= 1
            const i2r = state.CartIdList.indexOf(action.payload.m._id);
            console.log("i2r",i2r);
            if (i2r !== -1) {
                state.CartIdList.splice(i2r, 1); // Removes one element at the specified index
            }
        },
        OrderAdd:(state,action)=>{
            console.log("Order payload",action.payload);
            // state.Orders=action.payload
            state.Orders.push(action.payload)

        },
        OrderRemove:(state,action)=>{
            console.log("Order id",action.payload);
            console.log("Order All",state.Orders[0]._id);
            const index = state.Orders.findIndex(obj => obj._id === action.payload);

            // const i2r = state.Orders._id.indexOf(action.payload);
            console.log("index del",index);
            if (index !== -1) {
                state.Orders.splice(index, 1); // Removes one element at the specified index
            }
            
        },
        OrdInfoAdd:(state,action)=>{
            console.log("OrderInfo payload",action.payload);
            state.OrderInfo=action.payload
        },
        QuantityChange: (state,action) => {
            console.log("qua",action.payload);
            const index = state.Cartlist.findIndex(obj => obj.m._id === action.payload.id);
            if(action.payload.a==='+'){
                
                state.Cartlist[index].q=state.Cartlist[index].q+1
                state.Totprc+=state.Cartlist[index].m.price
            }
            else if(state.Cartlist[index].q>1){
                state.Cartlist[index].q=state.Cartlist[index].q-1
                state.Totprc-=state.Cartlist[index].m.price

            }
            else{
                
            }
        },
        CartdataRemoveAll: (state) => {
            console.log("rall2");
            state.CartQuantity = 0;
            state.Cartlist = [];
            state.CartIdList = []
            state.Totprc = 0
        },
        clearAlert: (state) => {
            state.Alert = false
        },
        Passdetaail: (state,action) => {
            state.passd=action.payload
        },
    }
})

export const { CldataAdd, CldataRemove, DrdataAdd, DrdataRemove, CartdataAdd, CartdataRemove, CartdataRemoveAll, clearAlert, setAlert,CldataUp ,QuantityChange,OrderAdd,OrdInfoAdd,OrderRemove,Passdetaail} = Clientdata.actions
export default Clientdata.reducer