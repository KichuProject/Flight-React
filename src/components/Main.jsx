// import React, { use, useState } from 'react'
// import { Flightsearchcard } from './Flightsearchcard'
// import { Flightslider } from './Flightslider'
// import axios from 'axios'
// import { Flightdetailcard } from './Flightdetailcard'
// import Lottie from "lottie-react";
// import flightloading from "../../data/flightloader.json"
// import notfoundflightloading from "../../data/flightnotfound.json"
// import flightredloading from '../../data/flightredloading.json'
// import { Filter } from './Filter'


// export const Main = () => {

//    const [userdata,setuserdata]=useState({
//     from:'',
//     to:'',
//     date:'',
//     cabin_class:'',
//     airline:'',
//     min_price:''
//   })

//   const handlechange=(e)=>{
//     const{name,value}=e.target;
//     setuserdata({...userdata,
//       [name]:value
//     })
//   }
//   const resetfilter=()=>{
//     setuserdata((prev)=>({
//       ... prev,
//       cabin_class:'',
//       airline:'',
//       min_price:''
//     }))
//     getapidata()
//   }

//   const [flights,setflight]=useState([])
//   const [singledata,setsingedata]=useState()
//   const[loading,setloading]=useState(true)
//   const [notfoundloading,setnotfoundloading]=useState(flightloading)

//   const getapidata=async()=>{
//     setnotfoundloading(flightloading)
//     const response=await axios.get(`http://localhost:3000/flights?departure.city=${userdata.from}&arrival.city=${userdata.to}&departure.date=${userdata.date}&cabin_class=${userdata.cabin_class}&airline=${userdata.airline}&min_price=${userdata.min_price}`)
//     if(response.data.length>0){
//       setflight(response.data)
//       setsingedata(response.data[0])
//       setloading(false)
//     }
//     else{
//       setloading(true)
//       setnotfoundloading(notfoundflightloading)
//     }
    
//   }


//   return (
//     <div className='row'>
//         <div className='col-md-8 col-lg-8 col-xl-8 col-sm-12'>
//             <Flightsearchcard getdata={getapidata} handlechanges={handlechange} from={userdata.from} to={userdata.to} date={userdata.date}/>
//             {
//               loading?<>
//                 <Lottie animationData={notfoundloading} style={{height:'280px'}}/>
//               </>:
            
//               <div className='my-3'>
//                 {
//                   loading?<h1>Loading...</h1>:<>
//                   <div className='d-flex align-items-center justify-content-between gap-3'>
//                     <div>
//                       <p className='mb-1'>From</p>
//                       <h4 className='mb-1'>{singledata.departure.city}</h4>
//                       <p className='mb-1'>{singledata.departure.airport}</p>
//                     </div>
//                     <Lottie animationData={flightredloading}/>
//                     <div className='text-end'>
//                         <p className='mb-1'>To</p>
//                         <h4 className='mb-1'>{singledata.arrival.city}</h4>
//                         <p className='mb-1'>{singledata.arrival.airport}</p>
//                     </div>
//                     </div>
//                   </>
                
//                 }
//                 <div>
//                   {
//                     loading?<h1>Loading...</h1>:
//                     <Flightslider>
//                     {
//                       flights.map((flight)=>{
//                       return(
//                         <Flightdetailcard key={flight.flight_id} flight={flight}/>
//                       )
//                     })
//                     }
//                     </Flightslider>
//                   }
//                 </div>
//               </div>
//             }
//         </div>
//         <div className='col-md-4 col-lg-4 col-xl-4 col-sm-12'>
//             <Filter getdata={getapidata} handlechanges={handlechange} min_price={userdata.min_price} airline={userdata.airline} cabin_class={userdata.cabin_class} resetfilter={resetfilter}/>
//         </div>
//     </div>
//   )
// }



import React, { useState, useEffect } from 'react'
import { Flightsearchcard } from './Flightsearchcard'
import { Flightslider } from './Flightslider'
import axios from 'axios'
import { Flightdetailcard } from './Flightdetailcard'
import Lottie from "lottie-react";
import flightloading from "../../data/flightloader.json"
import notfoundflightloading from "../../data/flightnotfound.json"
import flightredloading from '../../data/flightredloading.json'
import { Filter } from './Filter'

export const Main = () => {

  const [userdata, setuserdata] = useState({
    from: '',
    to: '',
    date: '',
    cabin_class: '',
    airline: '',
    min_price: ''
  })

  const handlechange = (e) => {
    const { name, value } = e.target;
    setuserdata({
      ...userdata,
      [name]: value
    })
  }

  const resetfilter = () => {
    setuserdata((prev) => ({
      ...prev,
      cabin_class: '',
      airline: '',
      min_price: ''
    }))
    getapidata()
  }

  const [flights, setflight] = useState([])
  const [singledata, setsingedata] = useState()
  const [loading, setloading] = useState(true)
  const [notfoundloading, setnotfoundloading] = useState(flightloading)

  // 🔹 Fetch + Client side filtering
  const getapidata = async () => {
    setnotfoundloading(flightloading)

    // fetch static json from GitHub Pages
    const response = await axios.get("https://kichuproject.github.io/Flight-React/flight.json")
    const allFlights = response.data.flights || response.data; // check if array wrapped

    // filter based on userdata
    const filteredFlights = allFlights.filter(flight =>
      (!userdata.from || flight.departure.city === userdata.from) &&
      (!userdata.to || flight.arrival.city === userdata.to) &&
      (!userdata.date || flight.departure.date === userdata.date) &&
      (!userdata.cabin_class || flight.cabin_class === userdata.cabin_class) &&
      (!userdata.airline || flight.airline === userdata.airline) &&
      (!userdata.min_price || flight.price >= userdata.min_price)
    )

    if (filteredFlights.length > 0) {
      setflight(filteredFlights)
      setsingedata(filteredFlights[0])
      setloading(false)
    } else {
      setloading(true)
      setnotfoundloading(notfoundflightloading)
    }
  }

  return (
    <div className='row'>
      <div className='col-md-8 col-lg-8 col-xl-8 col-sm-12'>
        <Flightsearchcard
          getdata={getapidata}
          handlechanges={handlechange}
          from={userdata.from}
          to={userdata.to}
          date={userdata.date}
        />

        {loading ? (
          <Lottie animationData={notfoundloading} style={{ height: '280px' }} />
        ) : (
          <div className='my-3'>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div>
                <p className='mb-1'>From</p>
                <h4 className='mb-1'>{singledata.departure.city}</h4>
                <p className='mb-1'>{singledata.departure.airport}</p>
              </div>
              <Lottie animationData={flightredloading} />
              <div className='text-end'>
                <p className='mb-1'>To</p>
                <h4 className='mb-1'>{singledata.arrival.city}</h4>
                <p className='mb-1'>{singledata.arrival.airport}</p>
              </div>
            </div>

            <div>
              <Flightslider>
                {flights.map((flight) => (
                  <Flightdetailcard key={flight.flight_id} flight={flight} />
                ))}
              </Flightslider>
            </div>
          </div>
        )}
      </div>

      <div className='col-md-4 col-lg-4 col-xl-4 col-sm-12'>
        <Filter
          getdata={getapidata}
          handlechanges={handlechange}
          min_price={userdata.min_price}
          airline={userdata.airline}
          cabin_class={userdata.cabin_class}
          resetfilter={resetfilter}
        />
      </div>
    </div>
  )
}
