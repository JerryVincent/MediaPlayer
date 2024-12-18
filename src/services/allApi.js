import {commonAPI} from "./commonAPI"
import { serverURL } from "./serverURL"
// API to add videos
export const addVideoApi=async (reqBody)=>{
    return await commonAPI('POST',`${serverURL}/videos`,reqBody)
}
// API to get Videos
export const getVideoApi=async ()=>{
    return await commonAPI('GET',`${serverURL}/videos`,"")
}

//API to Delete Video
export const deleteVideoApi=async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}

//API to add video to watch history
export const addToHistoryApi=async(reqbody)=>{
    return await commonAPI('POST',`${serverURL}/history`,reqbody)
} 

//API to get data from history
export const getHist=async()=>{
    return await commonAPI('GET',`${serverURL}/history`,"")
}
export const delHist=async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}
//API to add category
export const addCategoryApi=async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/category`,reqBody)
}
//API to get Categories
export const getCategory=async()=>{
    return await commonAPI('GET',`${serverURL}/category`,"")
}
//API to delete a category
export const deleteCategory=async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
}
//API to get a particular video in category
export const Avideo=async(id)=>{
    return await commonAPI('GET',`${serverURL}/videos/${id}`,"")
}
//API to modify category
export const updateCategory=async(id,reqBody)=>{
    return await commonAPI('PUT',`${serverURL}/category/${id}`,reqBody)
}

