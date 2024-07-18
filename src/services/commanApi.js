
import axios from"axios"

//creating the api calling function

export const commonAPI = async(httpRequest , url , reqBody)=>{
  //api configuration data
 const reqConfig ={
    method:httpRequest,
    url:url,
    data: reqBody,
    headers:{"Content-Type":"application/json"}

 }
 return await axios(reqConfig).then ((result)=>{
   return result
 }).catch((err)=>{
   return err
 })



}