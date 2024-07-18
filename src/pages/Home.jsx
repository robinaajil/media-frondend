import React, { useState } from 'react'
import Add from'../components/Add'
import { faClockRotateLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import View from'../components/View'
import Category from'../components/Category'
import { Link } from 'react-router-dom'

function Home() {
  //create a state
  //const [statenta name(istam ulla name kodukam),statena change cheyuvn ulla function]=usestate()
  const [AddVideoStatus ,setAddVideoStatus]=useState([])
  const[drogOut,setDragOut]=useState(false)
  return (
    <>
    <div className="d-flex p-5">
   <Add setAddVideoStatus={setAddVideoStatus}/>
   <h6 className='ms-auto'><Link to={'/Watchhistory'}style={{textDecoration:'none',color:"white"}}>
   <span className='hide'>Watch History </span><FontAwesomeIcon icon={faClockRotateLeft} /></Link></h6>
   </div>


<div className="row w-100 p-4">
<div className="col-md-9">
<View AddVideoStatus={AddVideoStatus}setDragOut={ setDragOut}/>
</div>
<div className="col-md-3 p-4">
<Category setDragOut={setDragOut} drogOut={drogOut}/>
</div>
</div>



    </>
  )
}

export default Home
