import React, { useEffect } from 'react'
import VideoCard from './VideoCard'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryApi, getAllCategoryApi, removeCategoryApi, updateCategoryApi } from '../services/allApi';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Category({dragOut,setDragOut}) {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("")
const[allCategory,setAllCategory]=useState([])
const [addStatus, setAddStatus] = useState(false)
const[updateStatus,setUpdateStatus]=useState(false)


const handleClose = () =>{setShow(false);
  setCategoryName("")}
  const handleShow = () => setShow(true);
   console.log(categoryName);

  
const handleCategoryAdd=async()=>{
    if(categoryName){
  const reqBody ={
  categoryName,
  allVideos:[ ]
}
const result= await addCategoryApi(reqBody)
console.log(result);
if (result.status>=200 && result.status<300){
  setCategoryName("")
  handleClose()
  alert('category added successfully')
  setAddStatus(true)
}
  }else{
    alert('please add a category name')
  }
}
const getCategory=async()=>{
  const result=await getAllCategoryApi()
  setAllCategory(result.data)
}
const handleDelete = async(id)=>{
await removeCategoryApi(id)
 setAddStatus(true)
}
const dragOver=(e)=>{
  e.preventDefault()
}


const videoDrop= async(e,selectedCategory)=>{
  //category kitty
  console.log('category id is :',selectedCategory);
  //videodetails kitty
  const vDetails= JSON.parse(e.dataTransfer.getData("videoDetails"))
  console.log(vDetails);
  //category -allvideo-videodetails
  if(selectedCategory.allVideos.find(item => item.id  == vDetails.id)){
    alert('video already in the  category')
  }
  else{
    selectedCategory.allVideos.push(vDetails)
  const result = await updateCategoryApi(selectedCategory.id ,selectedCategory)
   console.log(result);
  setUpdateStatus(true)
  }
 /* console.log(selectedCategory); */
}
const onDrag=(e,videoId,categoryDetails)=>{
  console.log(videoId,categoryDetails);
 const dataShare={videoId,categoryDetails}
  e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
}
useEffect(()=>{
  setAddStatus(false)
  setDragOut(false)
getCategory()
setUpdateStatus(false)
},[addStatus ,updateStatus,dragOut])
  return  (
    <>
<h5 className='mt-5 mt-md-0'>Category</h5>
<button className='btn btn-warning w-100 mt-4' onClick={handleShow}>Add Category</button>

 {allCategory?.length>0?
    allCategory?.map((item)=>(
<div className='p-3 border rounded mt-4'droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item)}>
  <div className='d-flex justify-content-between'>
  <p className='mb-4 '>{item.categoryName}</p>
   <button className='btn  btn-danger'onClick={()=>handleDelete(item.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
  </div>
 { item?.allVideos?.length>0? 
 item?.allVideos?.map((video)=>(<div draggable onDragStart={(e)=>onDrag(e,video.id,item)}> 
 <VideoCard video={video} ispresent={true}/>
 </div>)):null }
</div>
))
: 
<p className='text-danger-mt-5'>No Category added yet</p>
}

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className = "P-3 border rounded">
            <input type="text" className='form-control' placeholder='category name'onClick={(e)=> setCategoryName(e.target.value)}/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleCategoryAdd}>
      Add
          </Button>
        </Modal.Footer>
      </Modal>
     
    </>
   )
}

export default Category