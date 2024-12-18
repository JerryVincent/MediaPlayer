import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { delHist, getHist } from '../services/allApi'
function Watchhistory() {
  const [vidHist,setVidHist]=useState([])
  const [change,setChange]= useState(0)
  useEffect(()=>{
    getHistory()
  },[change])
  const getHistory=async()=>{
    const result= await getHist()
    if(result.status>=200 && result.status<300){
      setVidHist(result?.data)
      console.log(vidHist);
    }
  }
  const handleDelte=async(id)=>{
      const result=delHist(id);
      setChange(change+1)
  }
  return (
    <>
      <div className='d-flex align-items-center justify-content-between mt-3'>
        <h5 className='ms-3 ms-md-0'>Watch History</h5>
        <Link style={{textDecoration:'none'}} to={'/home'}><FontAwesomeIcon icon={faArrowLeft} className='me-1'/>Back to home <FontAwesomeIcon icon={faHouse}/></Link>
      </div>
      <div className='row w-100 mt-2'>
        <div className="col-md-1"></div>
        <div className="col-md-10 ms-2 ms-md-0">
        {vidHist?.length>0?<Table striped responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Timestamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {vidHist?.map((item,index)=>(
         <tr>
         <td>{index+1}</td>
         <td>{item?.caption}</td>
         <td><Link to={item?.url} target='_blank'>{item?.url}</Link></td>
         <td>{item?.timeStamp}</td>
         <td><Button variant="danger"><FontAwesomeIcon icon={faTrash} className='text-danger' onClick={()=>handleDelte(item?.id)}/></Button></td>
       </tr>
       ))
        }
      </tbody>
    </Table>:
    <p className='text-center'>No History Yet</p>}
        </div>
        <div className="col-md-1"></div>
      </div>
    </>
  )
}

export default Watchhistory