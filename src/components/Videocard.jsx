import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addToHistoryApi, deleteVideoApi, getVideoApi } from '../services/allApi';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-bootstrap';
function Videocard({dispVid,setDeleteVideo,isCategory}){
    const [show, setShow] = useState(false);
    const handleDelete=async(id)=>{
      const result=await deleteVideoApi(id);
      if(result.status>=200 && result.status<300){
        setDeleteVideo(result.data)
        toast.success("Video Deleted SuccessFully")
      }
      console.log(result);
      
    }
    const handleClose = () => setShow(false);
    const handleShow = async() => {
      setShow(true);
      let caption=dispVid?.caption;
      let url=dispVid?.url;
      let time=new Date()
      let timeStamp= new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)
      console.log(timeStamp);
      const reqBody={
        caption,url,timeStamp
      }
      const result=await addToHistoryApi(reqBody);
    }
    const setDrag=(e,id)=>{
        console.log("Dragged video is",id);
        e.dataTransfer.setData("videoid",id)
    }
  return (
    <>
        <Card style={{ width: '100%'}} className='mt-1' draggable onDragStart={(e)=>setDrag(e,dispVid?.id)}>
        {!isCategory && <Card.Img variant="top" onClick={handleShow} src={dispVid?.image} style={{height:'250px'}}/>}
        <Card.Body>
            <div className='d-flex align-items-center justify-content-between'>
                <p>{dispVid?.caption}</p>
                {!isCategory && <Button variant="primary"><FontAwesomeIcon icon={faTrash} className='text-danger' onClick={()=>handleDelete(dispVid?.id)}/></Button>}
            </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{dispVid?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="360" src={`${dispVid?.url}?autoplay=1`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy='strict-origin-when-cross-origin'></iframe></Modal.Body>
      </Modal>
      <ToastContainer theme='colored' autoClose={1500} position='top-center'/>
    </>
  )
}

export default Videocard