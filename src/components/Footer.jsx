import { faInstagram,faTwitter, faFacebook, faLinkedin,faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
<div className="row w-100 p-5">
  <div className="col-md-4">
    <h4 className='text-warning mb-3'><FontAwesomeIcon icon={faVideo} className='me-2'/>Media Player</h4>
    <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, fugit ipsa voluptates sint facere, repellendus obcaecati veritatis sit  veritatis voluptatum perspiciatis, beatae molestiae Lorem, ipsum dolor sit amet consectetur adipisicing elit. veritatis sit  veritatis voluptatum perspiciatis</p>
  </div>
  <div className="col-md-2 d-md-flex justify-content-center ">
    
    <div>
    <h4 className='mb-4'>Links</h4>
    <div> 
    <Link to={'/'}><p>Landing Page</p></Link>
    <Link to={'/home'}> <p>Home</p></Link>
    <Link to={'/watchhistory'}><p>Watch History</p> </Link>
    </div>
    </div>
  </div>
  <div className="col-md-2 d-md-flex justify-content-center">
  <div>
  <h4 className='mb-4'>Guides</h4>
    <div> 
    <p>React</p>
    <p>React Bootstrap</p>
    <p> Bootstrap Watch </p>
    </div>
    </div>
  </div>
  <div className="col-md-3 d-md-flex justify-content-center">
   <div>
   <h4>contact us</h4>
    <div className="d-flex">
      <input type='text' className='form-control' placeholder='Email Id'/>
      <button className='btn btn-warning ms-4'>Subscribe</button>
    </div>
    <div className="d-flex justify-content-between mt-4">
     <FontAwesomeIcon icon={faInstagram}className='fa-2x' />
     <FontAwesomeIcon icon={faTwitter}className='fa-2x' />
     <FontAwesomeIcon icon={faFacebook}className='fa-2x' />
     <FontAwesomeIcon icon={faLinkedin}className='fa-2x' />
     <FontAwesomeIcon icon={faWhatsapp} className='fa-2x'/>
    </div>
   </div>
  </div>
  <div className="col-md-1">

  </div>
</div>
    </>
  )
}

export default Footer