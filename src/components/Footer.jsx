import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className="container-fluid mt-4 border border-info" style={{ overflowX: 'hidden' }}>
      <div className="row">
        <div className="col-lg-1"></div>
        
        <div className="col-lg-3 p-3">
          <h4>
            <FontAwesomeIcon icon={faVideo} size="lg" className="me-2 text-warning" />
            Media Player
          </h4>
          <p style={{ textAlign: 'justify' }}>
          This Interactive Video Player aloows you to add, watch and categorise your videos and view your watch history. It also allows you to manage the videos in your playlist. So why wait. Explore the MediaPlayer APP...
          </p>
        </div>

        <div className="col-lg-2 p-3">
          <h4>Links</h4>
          <div className="mt-3">
            <p><Link to={'/'} style={{textDecoration:'none'}}>Landing Page</Link></p>
            <p><Link to={'/home'} style={{textDecoration:'none'}}>Home Page</Link></p>
            <p><Link to={'/watch-history'} style={{textDecoration:'none'}}>Watch History</Link></p>
          </div>
        </div>

        <div className="col-lg-2 p-3">
          <h4>Guides</h4>
          <div className="mt-3">
            <p>React</p>
            <p>React Bootstrap</p>
            <p>Bootswatch</p>
          </div>
        </div>

        <div className="col-lg-3 p-3">
            <h4>Contact Us</h4>
            <div className='d-flex mt-4'>
                <input type="text" className='form-control border border-warning' placeholder='Email ID'/>
                <button className='btn btn-outline-warning ms-3'>Subscribe</button>
            </div>
            <div className='d-flex mt-4 justify-content-between'>
            <FontAwesomeIcon icon={faInstagram} size='2xl'/>
            <FontAwesomeIcon icon={faFacebook} size='2xl'/>
            <FontAwesomeIcon icon={faTwitter} size='2xl'/>
            <FontAwesomeIcon icon={faLinkedin} size='2xl'/>
            </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
}

export default Footer;
