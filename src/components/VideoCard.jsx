import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addVideoHistory, deleteVideoApi } from '../services/allApi';



function VideoCard({video,setdeleteVideoStatus,ispresent}) {
  
 const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
  
 const handleShow = async () => {
    setShow(true);
    const caption = video?.caption
  const url = video?.embedLink
  //video kanda time vekkuvn google ee siteil poyit Intl.DateTimeFormat
  const time = new Date()
  /* console.log(time) */
  const timestamp =new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',
    minute:'2-digit',second:'2-digit'}).format(time)
  console.log(timestamp);
  const reqBody={
    caption,url ,timestamp
  }
  
  const result =await addVideoHistory(reqBody)
  console.log(result);
}
  

const handleDelete = async(id) => {
       const result = await deleteVideoApi(id)
       setdeleteVideoStatus(result.data)
  }
  const videoDrag  = (e,video)=>{
  /*   console.log(typeof(id)); */
console.log(video);

 e.dataTransfer.setData("videoDetails",JSON.stringify(video)) 
 /* console.log(' video delails is' ,video); */
  }


  return (
    <>
     <Card style={{ width: '100%' }}draggable onDragStart={(e)=>videoDrag(e,video)}className='mt-4'>
     {!ispresent && <Card.Img variant="top" onClick={handleShow} src={ video?.imageUrl }height={'300px'} />}
      <Card.Body>
       
        <div className='d-flex justify-content-between'>
        <Card.Text>{ video?. caption  }</Card.Text>
        {!ispresent&&<Button variant="danger"onClick={()=>handleDelete(video?.id)}>
          <FontAwesomeIcon icon={faTrashCan} /></Button>
          }
        </div>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{ video?. caption  }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <iframe width="100%" height="439" src= {`${ video?. embedLink}?autoplay=1` }  title="Thathaka Theithare Video Song | Hridayam | Pranav | Vineeth | Prithviraj | Hesham |Visakh |Merryland" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default VideoCard