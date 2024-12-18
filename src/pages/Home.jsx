
import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import View from '../components/View'
import Category from '../components/Category'
function Home() {
  const [addStatus,setAddStatus]=useState([])
  const [dragStatus,setDragStatus]=useState(false)
  return (
    <div className='container-fluid'>
      <div className='d-flex w-100 justify-content-between mt-2'>
        <Add setAddStatus={setAddStatus}/>
        <h5 className='mt-2'><Link to={'/watch-history'} style={{textDecoration:'none'}}>Watch History <FontAwesomeIcon icon={faClockRotateLeft} style={{color:'white'}}/></Link></h5>
      </div>
      <div className="row w-100 p-4">
            <div className="col-md-9 ms-4 ms-md-0">
                <h4>All Videos</h4>
                <View addStatus={addStatus} setDragStatus={setDragStatus}/>
            </div>
            <div className="col-md-3 mt-4 mt-md-0">
              <Category dragStatus={dragStatus} setDragStatus={setDragStatus}/>
            </div>
        </div>
    </div>
  )
}

export default Home