import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload} from '@fortawesome/free-solid-svg-icons'
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Add({setAddStatus}) {
  // create a state to hold data from input
    const [video,setVideo] = useState(
      {caption:"",
        image:"",
        url:""
      }
    )
    const validateurl=(e)=>{
      const link=e.target.value 
      if(link.startsWith('https://youtu.be/')){
        const key=link.slice(17,28)
        let embedlink=`https://www.youtube.com/embed/${key}`
        console.log(embedlink)
        setVideo({...video,url:embedlink})
      }
      else if(link.endsWith('?feature=shared')){
        const key=link.slice(-26,-15)
      
        let embedlink=`https://www.youtube.com/embed/${key}`
        console.log(embedlink)
        setVideo({...video,url:embedlink})
      }
      else{
        const key=link.slice(-11)
      
        let embedlink=`https://www.youtube.com/embed/${key}`
        setVideo({...video,url: embedlink})
        console.log(embedlink)
      }
    }
    const handleUpload=async(e)=>{
      e.preventDefault()//to prevent loss of data

      const {caption,image,url}=video
      if(!caption || !image || !url){
        toast.info("Please fill the form completely!")
      }
       else{
        const result= await addVideoApi(video)
        console.log(result);
        if(result.status>=200 && result.status<300){
            toast.success("Video Uploaded Successfully")
            setAddStatus(result.data)
            handleClose()
        }
        else{
          toast.error("Something went wrong!")
          handleClose()
        }
       }   
    }
    
    const [show, setShow] = useState(false);
    const handleClose = () => {
      setShow(false);
      setVideo({
        caption:"",
        image:"",
        url:""
      })  
    }
    console.log(video)
    const handleShow = () => setShow(true);
  return (
    <>
       <div className='d-flex align-items-center'>
        <h5 id='h'>Upload new Video</h5>
        <button className='btn mb-2' onClick={handleShow}><FontAwesomeIcon icon={faUpload} size='xl'/></button>
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className='me-2'/>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Please fill the following details
          </p>
          <form className='border p-3 rounded border-info'>
            <input type="text" placeholder='Video Caption' className='form-control border border-secondary text-secondary' onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
            <input type="text" placeholder='Video Image' className='form-control mt-3 border border-secondary text-secondary'  onChange={(e)=>setVideo({...video,image:e.target.value})}/>
            <input type="text" placeholder='Video url' className='form-control mt-3 border border-secondary text-secondary' onChange={(e)=>validateurl(e)}/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme='colored' autoClose={3000} position='top-center'/>
    </>
  )
}

export default Add