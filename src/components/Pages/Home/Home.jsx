/* <div>
<div  className="card" style={{ minWidth: "200px" }}>
  <img className="cardImg" src={array.image} alt="character" />
  <div className="cardInfo">
    <h5 className="cardTitle">{array.name}</h5>
    <hr />
    <p className="cardText">Species: {array.species}</p>
    <p className="cardText">Location: {array.location}</p>
  </div>
</div>
</div> */


import { useEffect } from "react"
import { useState } from "react"

import React from 'react'
import { Navbar } from "../../layout/Navbar/Navbar"

export const Inicio = ()=>{
    const [apiRender, setApiRender] = useState([])
    const initialURL ="https://rickandmortyapi.com/api/character"
    const [apiSearch, setApiSearch] = useState(initialURL)
 

    const fetchData = async (api) =>{

        const res = await fetch(api);
        const value = await res.json();
        return setApiRender(value.results)  
    }

    /*    const fetchData = async (api) =>{
        apiRender
        .get(api)
        .then((data) => {
          setApiRender(data.data.results)
          setInfo(data.data.info);
          
        })
        .catch((error)=>{
          console.log(error)
        })
    }
*/
    


    const searchNames = (event) =>{
      if(event.target.value ===""){
        setApiSearch(initialURL)
      }

      else{
        setApiSearch(initialURL+"?name="+event.target.value)
      }
    }

    useEffect(()=>{
      console.log("useEfect");
      fetchData(apiSearch);
      },[apiSearch])



    return(
    <main>
        <Navbar />
        <header className='headerImage'></header>
      <nav className="navBarV2">
        <h2 className="titleNavbar">Busca tu personaje</h2>
        <input placeholder="Ingresa un nombre" type="text" onChange={searchNames}/>
      </nav>

      <div className="contentCards">
       {apiRender.map((Element,indice) => (
        
        <div key={indice} className="card">
          <h1 className="titleCards">{Element.name}</h1>
          <img src={Element.image} alt="Image not Found"/>
          <p>{Element.gender}</p>
        </div>
       ))}
       </div>
        
        
    </main>
    )
};




