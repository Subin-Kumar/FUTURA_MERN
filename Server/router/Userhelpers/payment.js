const Razorpay=require('razorpay')
var bcrypt =require('bcrypt')
const crypto = require ('crypto')

var instance = new Razorpay({
    key_id: 'rzp_test_6FPhitZ9tLf8nl',
    key_secret: 'QM1rhuuJjydwFmMSSmnrS6Jv',
  });

  module.exports = {
    generateRazorpay: (orderId, total) => {
      console.log("orderId,total",orderId,total);
      return new Promise((resolve, reject) => {
        var options = {
          amount: total*100,
          currency: "INR",
          receipt: "" + orderId,
        };
        instance.orders.create(options, function (err, order) {
          console.log("razorpay order", order);
          resolve(order);
        });
      });
    },


    
    verifyPayment:(details)=>{
      return new Promise((resolve,reject)=>{
  
      
      
        let hmac=crypto.createHmac('sha256','QM1rhuuJjydwFmMSSmnrS6Jv')
        hmac.update(details.payment.razorpay_order_id+'|'+details.payment.razorpay_payment_id)
       hmac= hmac.digest('hex')
  
       console.log('hmac********',hmac);
       console.log('details********',details.payment.razorpay_signature);
  
       if(hmac==details.payment.razorpay_signature){
        resolve()
       }else{
        reject()
       }      
        })
    },
  }