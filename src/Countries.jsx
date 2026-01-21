import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import "./countries.css"

export default function Countries(){

    const [countryFlag, setCountryFlag] = useState([]);
    const [search, setSearch] = useState('');

    
   useEffect(()=>{
    const upi = async()=>{
        try{
          const url = await fetch(" https://countries-search-data-prod-812920491762.asia-south1.run.app/countries")
            let urlCountry = await url.json();
            setCountryFlag(urlCountry);
        }
        catch(error){
            console.error("Error to fetching the countryFlags");
        } 
    }
    upi();
   },[])


    return(
        <div>
            <input type="text" value={search} placeholder="search for countries" onChange={(e)=> setSearch(e.target.value)} />
            <div className="flag">
            {countryFlag.filter((item)=> item.common.toLowerCase().includes(search.toLocaleLowerCase())).map((item)=>(
                <div key={item.common}>
                    <Cart image={item.png} name={item.common} />
                </div>
            ))}
        </div>
        </div>
        
    )
}