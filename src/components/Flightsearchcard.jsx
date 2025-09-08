import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Lottie from "lottie-react";
import flightentry from "../../data/flightentry.json"


export const Flightsearchcard = ({getdata,handlechanges,from,to,date}) => {

 
  const handlesubmit=(e)=>{
    e.preventDefault();
    getdata()
  }

  return (
    <div>
        <Card className='card-design my-1'>
      <Card.Body>
        <div className='row'>
            <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                <Card.Subtitle className="mb-2 fs-7">Where would you want to go..</Card.Subtitle>
                <Card.Title className='fs-1'>Book a Flight</Card.Title>
                <Lottie animationData={flightentry} style={{height:"300px"}}/>
            </div>
            <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                <Form onSubmit={(e)=>handlesubmit(e)}>
      <Form.Group className="mb-2" >
        <Form.Label>From</Form.Label>
        <Form.Control type="text" placeholder="Chennai" onChange={handlechanges} value={from} name='from'/>
      </Form.Group>

      <Form.Group className="mb-2" >
        <Form.Label>To</Form.Label>
        <Form.Control type="text" placeholder="Coimbatore" onChange={handlechanges} value={to} name='to'/>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" onChange={handlechanges} value={date} name='date'/>
      </Form.Group>
      <Button variant="success" className='w-100 btn-color my-4' type="submit">
        Search
      </Button>
    </Form>
            </div>
        </div>
        
      </Card.Body>
    </Card>
    </div>
  )
}
