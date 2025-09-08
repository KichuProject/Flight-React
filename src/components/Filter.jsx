import React from 'react'
import { Button, Card, CardFooter, Form } from 'react-bootstrap'

export const Filter = ({getdata,handlechanges,cabin_class,airline,min_price,resetfilter}) => {
  return (
    <div className='h-100'>
        <Card className='card-design mt-1 h-100'>
              <Card.Body>
                <div className='row'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h5>Filter</h5>
                        <Button variant="primary" size='sm' type="button" onClick={resetfilter}>
                Reset
              </Button>
                    </div>
                 <Form>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Cabin Class</Form.Label>
                        <select className="form-select" aria-label="Default select example" onChange={handlechanges} value={cabin_class} name='cabin_class'>
                            <option selected value="">Select Cabin Class</option>
                            <option value="Business">Business</option>
                            <option value="First Class">First Class</option>
                            <option value="Economy">Economy</option>
                        </select>
                    </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Enter Price"  name='price'/>
              </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Airline</Form.Label>
                        <select className="form-select" aria-label="Default select example" onChange={handlechanges} value={airline} name='airline'>
                            <option selected value="">Select Airline</option>
                            <option value="Air India">Air India</option>
                            <option value="IndiGo">IndiGo</option>
                            <option value="Vistara">Vistara</option>
                            <option value="SpiceJet">SpiceJet</option>
                            <option value="GoAir">GoAir</option>
                        </select>
                </Form.Group>
            </Form>
                    </div>
              </Card.Body>
              <CardFooter>
                <Button variant="success" className='w-100 btn-color my-4' type="submit" onClick={getdata}>
                Apply Filter
              </Button>
              </CardFooter>
            </Card>
    </div>
  )
}
