import { FormCheck, Button } from "react-bootstrap"
import { useState } from "react"
import Rating from "./Rating"


export default function Filters(){
    
  async function sortAscending(){
      try {
       const response = await fetch('https://fakestoreapi.com/products?sort=asc')
       const result = await response.json()
       console.log(result)
    } catch (error) {
        console.error(error)
      }
    const [rate, setRate] = useState()
   
    return (
        <>
        <div className="filters" >
            <span className="title" >Filter Products</span>
            <span>
            <FormCheck
            inline
            label="Ascending"
            name="group1"
            type="radio"
            id={`inline-3`}
            />
          </span>
            <span>
            <FormCheck
            inline
            label="Descending"
            name="group1"
            type="radio"
            id={`inline-4`}
            />
          </span>
          <span>
            <FormCheck
            inline
            label="PRICE-LOW TO HIGH"
            name="group1"
            type="radio"
            id={`inline-1`}
            />
          </span>
          <span>
            <FormCheck
            inline
            label="PRICE-HIGH TO LOW"
            name="group1"
            type="radio"
            id={`inline-2`}
            />

           <span>
                <label style={{ paddingRight: 10}}>RATING: </label>
                <Rating rating={rate} onClick={(i)=>setRate(i+1)} style={{ cursor: "pointer"}}/>
            </span>
          </span>
            <span>
         <Button variant="light">Clear Filters</Button>
            </span>

        </div>
        </>
    )
}
}