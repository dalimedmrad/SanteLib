import axios from "axios";

export const getToken = async () => {
  try {
    const data = await axios.post("/api/send/gettokensms");
    console.log(data.data.token.access_token);
    return data.data.token.access_token
  } catch (error) {
    console.log(error);
  }
};

export const sendSMS = async (address, message, token) => {
  // const data = await axios
  //   .post(
  //     `https://api.orange.com/smsmessaging/v1/outbound/tel%3A%2B21656813222/requests`,
  //     {
  //       headers: {
  //         'Authorization': `Bearer hH0DY1EQAvB3Rj11qkK4erKAlWGk`,
  //         "Content-Type": "application/json",
  //       },
  //       body:'{"outboundSMSMessageRequest":{"address": "tel:+21627914561","senderAddress":"tel:+21656813222","outboundSMSTextMessage":{"message": "Hellhhho!"}}}'
  //     }
  //   )
  //   .then((response) => response.json());
  //   console.log(data)
  // return data;
  const opt = {
    address,
    token,
    message
  }
  try{
    const res = await axios.post('/api/send/sms',opt);
    console.log(res)
  }catch(error){
    console.log(error)
  }
  
};

// export const getUsageStats= async(token) =>{
//   const stats = await fetch("https://api.orange.com/sms/admin/v1/statistics", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }).then((response) => response.json());

//   return stats;
// }

// export const showBalanceSMS=async(token) =>{
//   const balance = fetch("https://api.orange.com/sms/admin/v1/contracts", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }).then((response) => response.json());

//   return balance;
// }

// module.exports= {
//     sendSMS, showBalanceSMS, getToken, getUsageStats
// }
