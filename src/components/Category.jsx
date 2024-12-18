import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash, faPenFancy} from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import Videocard from './Videocard';
import Modal from 'react-bootstrap/Modal';
import { addCategoryApi, Avideo, deleteCategory, getCategory, updateCategory } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Row} from 'react-bootstrap';
import { Col } from 'react-bootstrap';
function Category({dragStatus,setDragStatus}) {
  const [categoryName, setCategoryName]= useState("")
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(false);
  const [allCategory,setAllcategory]=useState([])
  const handleClose = () => {
    setShow(false);
    setCategoryName("")
  }
  const getAllcategory=async()=>{
    const result= await getCategory()
    console.log(result);
    if(result.status>=200 && result.status<300){
      setAllcategory(result.data)
    }
  }
  const handleDelete=async(id)=>{
    const result=await deleteCategory(id)
    console.log(result);
    getAllcategory()
  }
  useEffect(()=>{
    getAllcategory();
    setStatus(false);
    setDragStatus(false);
  },[status,dragStatus])
  const handleShow = () => setShow(true);
  const addCategory=async()=>{
    if(categoryName){
      const reqBody={
        categoryName,
        allVideos:[]
      }
      const result=await addCategoryApi(reqBody)
      console.log(result);
      if(result.status>=200 && result.status<300){
        handleClose()
        setStatus(true)
        toast.success("Category Added Successfully")
      }
    }
    else{
      toast.info("Please give a Category Name!")
    }
  }
  const setDrag=(e)=>{
    e.preventDefault()
  }
  const dragStart=(e,videoId,categoryId)=>{
      console.log("VideoId,CategoryId",videoId,categoryId);
      let datashared={
        videoId,categoryId
      }
      e.dataTransfer.setData("dataShared",JSON.stringify(datashared))//stringify to convert object to string
  }
  //accessing video id from view component and category id
  const videoDrop=async(e,categoryId)=>{
    console.log("Category Id is",categoryId);
    const videoId=e.dataTransfer.getData("videoid")
    console.log("Video id is",videoId);
    const {data}=await Avideo(videoId)
    console.log(data);
    const selectedCategory=allCategory.find((item)=>item.id==categoryId)
    console.log(selectedCategory);
    if(selectedCategory.allVideos.find((item)=>item.id==data.id)){
      toast.warning("Video Already Exists in the category!")
    }
    else{
      selectedCategory.allVideos.push(data)
      const result=await updateCategory(categoryId,selectedCategory)
      getAllcategory()
    }
  }
  return (
    <>
      <div>
      <button className='btn btn-warning w-100 ms-3 ms-md-0' onClick={handleShow}><FontAwesomeIcon icon={faPlus} size="lg"/> Add new Category</button>
      </div>
      <div className='mt-3'>
       { allCategory.map((item)=>(
        <div className='mt-1' droppable onDragOver={(e)=>setDrag(e)} onDrop={(e)=>videoDrop(e,item.id)}>
         <div className='border rounded p-3 ms-4 ms-md-0'>
         <div className='d-flex justify-content-between align-items-center'>
           <p>{item?.categoryName}</p>
           <Button variant="primary"><FontAwesomeIcon icon={faTrash} className='text-danger' onClick={()=>handleDelete(item?.id)}/></Button>
         </div>
         <Row>
         {item?.allVideos?.length>0?
         item?.allVideos?.map((videoItem)=>(
          <Col sm={12} draggable onDragStart={(e)=>dragStart(e,videoItem?.id,item?.id)}>
               <Videocard dispVid={videoItem} isCategory={true}/>
          </Col>
         )):null
          }
          </Row>
       </div>
       </div>
       ))
         
      }
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faPenFancy} className='me-2'/>Category Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='border p-3 rounded border-info'>
            <input type="text" placeholder='Enter the Category Name' className='form-control border border-secondary text-secondary' onChange={(e)=>setCategoryName(e.target.value)}/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={addCategory}>
            Add 
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme='colored' autoClose={1500} position='top-center'/>
      </>
  )
}

export default Category