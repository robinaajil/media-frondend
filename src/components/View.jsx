import React, { useEffect, useState } from 'react'
import VideoCard from'./VideoCard'
import { getAllVideoApi, updateCategoryApi } from '../services/allApi'

function View({AddVideoStatus,setDragOut}) {
const[allvideo,setAllVideo]= useState([])
const[deleteVideoStatus,setdeleteVideoStatus]= useState([])
 //function create 
 const getAllvideo = async()=>{
  const result =await getAllVideoApi()
   console.log(result); 
  setAllVideo(result.data)
 }
console.log(allvideo);

const dragOver=(e)=>{
  e.preventDefault()
}
const videoDrop= async(e)=>{
const result=JSON.parse (e.dataTransfer.getData("dataShare"))
console.log(result);

const selectedCategory =result.categoryDetails
const newDetails=selectedCategory.allVideos.filter((item)=>item.id!=result.videoId)
console.log(newDetails);


const  reqBody= {
  categoryName:selectedCategory.categoryName,
  allVideos:newDetails,
  id:selectedCategory.id
}
const response =await updateCategoryApi(selectedCategory.id,reqBody)
console.log(response);
if(response.status>=200&& response.status<300){
  setDragOut(true)
}
}











useEffect(()=>{
getAllvideo()
  },[AddVideoStatus,deleteVideoStatus])
  /* dependency
  1)no dependency-call useeffect everytime
  2)[]-EMPTY  ARRAY -call useeffect when the page render
  3) [state ,props]-call useeffect in the first render and also and also when the value of state and props changes
  */
  return (
    <>
    <div className="row w-100"droppable onDragOver={(e)=>dragOver(e)}onDrop={(e)=>videoDrop(e)}>
      <h4>All video</h4>
      {allvideo?
       allvideo?.map((item)=>(<div className="col-md-3 mt-4">
        < VideoCard video={item}setdeleteVideoStatus={setdeleteVideoStatus}/>
         </div>))
         :
    <p className='text-danger fs-5 mt-5'>nothing to display</p>
}
     </div>
    </>
  )
}

export default View