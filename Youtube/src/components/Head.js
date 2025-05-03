import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/NavSlice";
import { SEARCH_API } from "../Utils/constants";
import { cacheResults } from "../Utils/searchSlice";

const Head = () => {
  const [searchQuery,setsearchQuery]=useState("");
  const [suggestion,setsuggestion]=useState([]);
  const [showsuggestion,setshowsuggestion]=useState(false);
  const searchCaches=useSelector(store=>store.search);
  const dispatch=useDispatch();
  useEffect(()=>{
    const timer=setTimeout ( ()=> 
      {
        if(searchCaches[searchQuery]){
        setsuggestion(searchCaches[searchQuery])
      }
      else
        {
           getSearch()}}
          ,200)
      

    return ()=>{
      clearTimeout(timer)
    }
  },[searchQuery])


  const getSearch=async()=>{
    console.log(searchQuery)
    const data=await fetch(SEARCH_API+searchQuery);
    const json=await data.json();
    // console.log(json[1])
    setsuggestion(json[1]);
    dispatch(cacheResults({
      [searchQuery]:json[1]
    }))
  }
  // console.log(searchQuery)
    const togggleNav=()=>{
         dispatch(toggleMenu());
    }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        cursor:"pointer",
        
        padding: "3px 3px",
        backgroundColor: "white", // White header
        color: "black",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow
      }}
    >
      {/* Left - Logo */}
      <img
       onClick={()=>togggleNav()}
       src="https://thumbs.dreamstime.com/b/hamburger-menu-bar-icon-flat-black-round-button-vector-illustration-design-isolated-142986835.jpg"
        alt="Hamburger Logo"
        style={{ width: "66px", cursor: "pointer",marginLeft:"24px" }}
      />
      <img
    
        src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-650-80.jpg"
        alt="YouTube Logo"
        style={{ width: "120px", cursor: "pointer" ,marginLeft:"18px"}}
      />


      {/* Center - Search Bar */}
      <div
        style={{
            marginLeft:"68px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          border: "1px solid #ccc",
          padding: "8px",
          borderRadius: "30px",
          backgroundColor: "#f8f8f8",
        }}
      >
        <div>
        <input
        value={searchQuery}
        onKeyUpCapture={()=>setshowsuggestion(true)}
        onBlur={()=>setshowsuggestion(false)}
        onChange={(e)=>setsearchQuery(e.target.value)}
          type="text"
          placeholder="Search"
          style={{
            padding: "8px 15px",
            fontSize: "16px",
            border: "none",
            outline: "none",
            borderRadius: "20px",
            width: "400px",
            backgroundColor: "transparent",
            color: "black",
          }}
        />
        <button
          style={{
            backgroundColor: "#f8f8f8",
            color: "#606060",
            border: "none",
            padding: "10px 15px",
            borderRadius: "50%",
            cursor: "pointer",
            // marginRight:"100px"
          }}
        >
          🔍
        </button>
        {showsuggestion &&
        <div  style={{position:"fixed",width:"",
          background:"white"}}>
          <ul>
            {
              suggestion.map(s=><li>{s}</li>)
            }
            
            

          </ul>
        </div>
}

        </div>
      </div>

      {/* Right - User Icon */}
      <div>
        <img

          alt="User"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          style={{
            marginLeft:"600px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            cursor: "pointer",
            
          }}
        />
      </div>
    </div>
  );
};

export default Head;
