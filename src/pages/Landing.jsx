import React from 'react'
import VideocamIcon from '@mui/icons-material/VideoCameraBackOutlined';
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {Link} from 'react-router-dom'
import Myimage from './head-img.png'
import Card from 'react-bootstrap/Card';
function Landing() {
  return (
    <div className='container-fluid w-100' style={{overflowX:'hidden'}}>
    <div className="row mt-4 w-100">
      <div className="col-md-1"></div>
      <div className="col-md-5 ms-xs-3">
        <h4>Welcome to <span className='text-warning mb-2'>Media Player</span></h4>
        <p style={{textAlign:"justify"}}>
        This Interactive Video Player aloows you to add, watch and categorise your videos and view your watch history. It also allows you to manage the videos in your playlist. So why wait. Explore the MediaPlayer APP... 
        </p>
        <Link to={'/home'} style={{textDecoration:'none'}}><button className='btn btn-outline-warning mt-3'>Get Started</button></Link>
      </div>
      <div className="col-md-5 d-flex align-items-center justify-content-center">
        <img src={Myimage} alt="no image" className='w-50'/>
      </div>
      <div className="col-md-1"></div>
    </div>
    <div className="row mt-4 w-100">
      <h4 className='text-warning text-center mb-4'>Features</h4>
      <div className="col-md-1 me-md-5"></div>
      <div className="col-md-3 px-3 px-md-0">
      <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://media3.giphy.com/media/1zi3fJLeoWQqONvgs9/giphy.webp?cid=ecf05e47n7xxi5uukogq5kr6mfubpuor5f7qe1uqcgbn2fh8&ep=v1_gifs_search&rid=giphy.webp&ct=g" style={{height:'250px'}}/>
      <Card.Body>
        <Card.Title>Easily Manage your playlist</Card.Title>
        <Card.Text>
         Add or manage videos of your interest to your playlist. Watch at anytime you want.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className="col-md-3 px-3 px-s-4 mt-s-5">
      <Card style={{ width: '100%' }}>
      <Card.Img variant="top" className='w-100' src="https://media3.giphy.com/media/26FL6iik90Linhaec/giphy.webp?cid=790b7611zm583b8t8yb9e7y6lh4wresra57yk2akc3e41mv1&ep=v1_gifs_search&rid=giphy.webp&ct=g" style={{height:'250px'}}/>
      <Card.Body>
        <Card.Title>Categorise your Videos or Songs</Card.Title>
        <Card.Text>
          Add or remove categories of your own choice. You can categorise the songs and videos of your own choice.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className="col-md-3 px-3 px-s-4 mt-s-5">
      <Card style={{ width: '100%' }}>
      <Card.Img variant="top" style={{height:'250px'}} className='w-100' src="https://media2.giphy.com/media/K20uJQyNnchq0/giphy.webp?cid=ecf05e47dnp6u6e7r2cjhrly3cy3fo7oivq5ilsbtx3dufhi&ep=v1_gifs_search&rid=giphy.webp&ct=g" />
      <Card.Body>
        <Card.Title>View and manage your Watch History</Card.Title>
        <Card.Text>
          This MediaPlayer App allows you to view your history and manage your history based on your choice.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className="col-md-1"></div>
    </div>
    <div className="row mt-5 w-100 p-4 ms-1 ms-md-0 p-md-0">
      <div className="col-md-1"></div>
      <div className="col-md-10 p-5 border rounded mt-5">
        <div className="row w-100">
          <div className="col-md-6">
            <h4 className='text-warning'>Simple Fast and Powerful</h4>
            <p className='mt-3'><span className='fs-4'>Play Everything :</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, rerum deleniti illum natus culpa quibusdam ea fugit quis commodi eligendi quidem quia alias expedita, labore nostrum cumque reprehenderit officia maxime!</p>
            <p className='mt-3'><span className='fs-4'>Categorise Anything :</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, rerum deleniti illum natus culpa quibusdam ea fugit quis commodi eligendi quidem quia alias expedita, labore nostrum cumque reprehenderit officia maxime!</p>
            <p className='mt-3'><span className='fs-4'>Manage your Lists and Categories :</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, rerum deleniti illum natus culpa quibusdam ea fugit quis commodi eligendi quidem quia alias expedita, labore nostrum cumque reprehenderit officia maxime!</p>
          </div>
          <div className="col-md-6">
          <iframe width="100%" height="520" src="https://www.youtube.com/embed/tOM-nWPcR4U" title="Illuminati|Aavesham|Jithu Madhavan|Fahadh Faasil|Sushin Shyam,Dabzee,Vinayak| Nazriya|Anwar Rasheed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>
      </div>
      <div className="col-md-1"></div>
    </div>
    </div>
  )
}

export default Landing