import axios from "axios"
//sample format available in google(type npm axios and goto Axios API)
export const commonAPI=async (httpRequest,url,reqBody)=>{
    let requestconfig={
        method: httpRequest,
        url,
        data:reqBody,
        headers:{"Content-Type":'application/json'}
    }
    return await axios(requestconfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })
}