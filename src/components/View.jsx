import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from './Videocard'
import { getCategory, getVideoApi, updateCategory } from '../services/allApi'

function View({addStatus,setDragStatus}) {
  const [video,setVideo]= useState([])
  const [deleteVideo,setDeleteVideo]=useState([])
  const getvideo=async()=>{
    const result= await getVideoApi()
    setVideo(result.data)  
  }
  const dragOver=(e)=>{
    e.preventDefault()
  }
  const dropHandle=async(e)=>{
    const {videoId,categoryId}=JSON.parse(e.dataTransfer.getData("dataShared"))
    console.log("Videoid,catId",videoId,categoryId);
    const {data}= await getCategory()
    // console.log(data);
    const selectedCat=data?.find((item)=>item.id==categoryId)
    // console.log(selectedCat);
    const updatedResult=selectedCat?.allVideos?.filter((item)=>item.id!=videoId)
    console.log(updatedResult);
    const reqBody={
      categoryName:selectedCat.categoryName,
      allVideos:updatedResult,
      id:selectedCat.id
    }
    const result=await updateCategory(categoryId,reqBody)
    console.log(result);
    setDragStatus(true);
  }
  useEffect(()=>{
    getvideo()
  },[addStatus,deleteVideo])
  console.log(video);
  
  return (

      <Row className='w-100 justify-content-s-center' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>dropHandle(e)}>
        {video?.length>0?
          video?.map((item)=>(
            <Col xs={12} md={6} lg={4} xl={3} className='border d-flex justify-content-center align-items-center'>
            <Videocard dispVid={item} setDeleteVideo={setDeleteVideo}/>
          </Col>
          ))
          :
          <p className='text-warning fs-5 mt-4'>No Videos Uploaded Yet...</p>
          }
      </Row>
  )
}

export default View