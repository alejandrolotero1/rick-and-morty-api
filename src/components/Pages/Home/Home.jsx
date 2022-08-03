// import React, { useCallback } from "react"
// import { useEffect } from "react"
import { useState } from "react"

import React from 'react'
// import logo from '../../../Images/logo.png'
import { Navbar } from "../../layout/Navbar/Navbar"

export const Inicio = ()=>{
    const [apiRender, setApiRender] = useState([])
    const URL  ="https://rickandmortyapi.com/api/character?page"


    const fetchData = async (api) =>{
        const res = await fetch(api);
        const value = await res.json();
        return setApiRender(value.results)
    }

    function apiRenderF (apiRender){
        {apiRender.map(()=> (
            <div>
              <div className="card" style={{ minWidth: "200px" }}>
                <img className="card-img-top" src={apiRender.image} alt="character" />
                <div className="card-body">
                  <h5 className="card-title">{apiRender.name}</h5>
                  <hr />
                  <p className="card-text">Species: {apiRender.species}</p>
                  <p className="card-text">Location: {apiRender.location}</p>
                </div>
              </div>
            </div>
          ))}
    }


    
    const getAllCharacters = async()=>{
        const value = await fetchData(URL);
        // value.map(value => setApiRender())
    }

    return(
    <main onLoad={getAllCharacters}>
        <Navbar />
        <header className='headerImage'></header>
        <div className="renderCards"></div>
        {/* <button onClick={getAllCharacters}>render</button> */}
        <input type="text"/>
        {/* <h1>{apiRender.map(apiRender => apiRender.name)}</h1> */}
        {/* <button onClick={buttonTest}>dolor</button> */}
        {apiRender.map(()=> (
            <div>
              <div className="card" style={{ minWidth: "200px" }}>
                <img className="card-img-top" src={apiRender.image} alt="character" />
                <div className="card-body">
                  <h5 className="card-title">{apiRender.name}</h5>
                  <hr />
                  <p className="card-text">Species: {apiRender.species}</p>
                  <p className="card-text">Location: {apiRender.location}</p>
                </div>
              </div>
            </div>
          ))}
        
    </main>
    )
};




