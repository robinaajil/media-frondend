import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
    <Row className='w-200 mt-5 d-flex justify-content-center align-items-center'>
      <Col md={1}></Col>
      <Col md={5}>
      <h3>Welcome to <span className='text-warning'>media player</span></h3>
      <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eveniet ipsum fugit animi iste suscipit doloremque eos aliquam nam dolores dolorum necessitatibus officia, officiis cum perspiciatis consequatur assumenda voluptatum quisquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laudantium odit adipisci ipsam, perferendis distinctio dolore cumque esse nulla exercitationem dolor optio voluptas unde necessitatibus sint doloremque veritatis? Ipsam, necessitatibus</p>
      <Link to={'/home'}><button className='btn btn-warning mt-5'>Get Started</button></Link>
      </Col>
      <Col md={1}></Col>
      <Col md={5}className='d-flex justify-content-center align-items-center'>
      <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="no image" className='w-60' />
      </Col>
    </Row>
    <div className='container'>
      <h3 className='text-center my-5'>Features</h3>
<Row>
  <Col md={1}></Col>
  <Col md={3}>
  <Card style={{ width:'100%' }}className='p-3 mt-3'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/43/b7/e9/43b7e94dac162ec1543b0a861d012564.gif"height={'250px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's .
        </Card.Text>
        
      </Card.Body>
    </Card>
  </Col>
  <Col  md={4}className='px-md-5'>
  <Card style={{ width:'100%' }}className='p-3 mt-3'>
      <Card.Img variant="top" src="https://media.licdn.com/dms/image/D4E22AQEbODrRsx8toQ/feedshare-shrink_2048_1536/0/1717152825514?e=2147483647&v=beta&t=qjsDX_rBTG7tjDWp23KzfdkU_lnn0Ofr677bgXRp7Ps"height={'250px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's .
        </Card.Text>
        
      </Card.Body>
    </Card>
  </Col>
  <Col  md={3}>
  <Card style={{ width:'100%' }}className='p-3 mt-3'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/6f/5f/f3/6f5ff36fd8ffefa40bf466df6c693ef1.gif"height={'250px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's .
        </Card.Text>
        
      </Card.Body>
    </Card>
  </Col>
  <Col  md={1}></Col>
</Row>
    </div>


<div className="container-fluid my-5">
  <div className="row">
    <div className="col-md-1"></div>
    <div className="col-md-10 border border-secondary p-3 my-5 border-2 rounded">
     <div className="row p-4">
      <div className="col-md-6 ">
      <h3 className='text-warning'>Simple fast and powerful</h3>
      <p className='mt-5'><span className='fs-5'>play everything</span>:amet consectetur adipisicing elite. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sint, voluptatum assumenda, ea accusamus.</p>
      <p className='mt-5'><span className='fs-5'>play everything</span>:amet consectetur adipisicing elite. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sint, voluptatum assumenda, ea accusamus.</p>
      <p className='mt-5'><span className='fs-5'> play everything</span>:amet consectetur adipisicing elite. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sint, voluptatum assumenda, ea accusamus.</p>
      </div>
      <div className="col-md-6">
      <iframe width="100%" height="400" src="https://www.youtube.com/embed/tOM-nWPcR4U" title="Illuminati|Aavesham|Jithu Madhavan|Fahadh Faasil|Sushin Shyam,Dabzee,Vinayak| Nazriya|Anwar Rasheed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
      </div>
      </div> 
    </div>
    <div className="col-md-1"></div>
  </div>
</div>


    </>
  )
}

export default Landing



