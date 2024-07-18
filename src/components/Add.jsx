import {faCloudArrowUp,faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { allVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//destructure cheyuvn Add nta (uiil {akthi keyna paraji kodukkuka})
function Add({setAddVideoStatus}) {

  const [show, setShow] = useState(false);
const [videoDetails , setVideoDetails]= useState({
 caption :"",
 imageUrl :"",
 embedLink :""
})
console.log(videoDetails);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const getLink=(e)=>{
  const link =e.target.value
  console.log(link);
  if(link.startsWith('https://youtu.be/')){
   /* const emlink= link.slice(17,28)
   console.log(emlink); */
   setVideoDetails({...videoDetails,embedLink:`https://www.youtube.com/embed/${link.slice(17,28)}` })
  }
  else{
   const emlink= link.slice(-11)
   setVideoDetails({...videoDetails,embedLink:`https://www.youtube.com/embed/${link.slice(-11)}` })
  }
}
  const handleupload =async(e)=>{
    e.preventDefault()
  const result = await allVideoApi(videoDetails)
 if(result.status>200 && result.status<300){
  toast.success('video Added Successfully')
  handleClose()
  setAddVideoStatus(result.data)
 }else{
  toast.error('somthing went wrong')
  console.log(result);
 }
  }
  return (
    <>
    <div className="d-flex align-items-center">
    <h5 >Upload new video </h5>
    <button onClick={handleShow} className='btn fs-5'><FontAwesomeIcon icon={faCloudArrowUp} /></button>
    </div>



    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className='me-2'/> Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>please fill the following details</p>
          <form className='border p-3 border-2 rounded'>
<div className="mb-2">
  <input type='text' className='form-control' placeholder='video caption' onChange={(e)=>setVideoDetails({...videoDetails, caption :e.target.value})}/>
</div>
<div className="mb-2">
<input type='text' className='form-control' placeholder='video image'onChange={(e)=>setVideoDetails({...videoDetails,imageUrl:e.target.value})}/>
</div>
<div className="mb-2">
<input type='text' className='form-control' placeholder='video url'onChange={(e)=>getLink(e)}/>
</div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
         cancel
          </Button>
          <Button variant="warning" onClick={handleupload}>
           Upload
          </Button>
        </Modal.Footer>
      </Modal>


      <ToastContainer position="top-center"theme="dark"autoClose={5000}/>





    </>
  )
}

export default Add