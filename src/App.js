import React,{useState,useEffect} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Buy from "./pages/Buy";
import Home from "./pages/Home";
import Sell from "./pages/Sell";
import {data} from './data/properties';
import Favourites from "./pages/Favourites";

function App() {
  const [data1,setData1]=useState(data)
  const [trigger,setTrigger]=useState(true)
  useEffect(()=>{
    
  },[trigger])
  const handleClick=(id)=>{
    let tempData = data1;
    tempData.forEach((item)=>{
        if(item.id===id){
            item.favourite=!item.favourite;
        }
    })
    setTrigger(!trigger)
    setData1(tempData)
  }
  return (
    <div className="App">
    <BrowserRouter basename="/properties">
      <Header/>
      <Routes>
        <Route path="/" exact element={<Home data={data1} setData={handleClick}/>}/>
        <Route path="/buy" exact element={<Buy/>}/>
        <Route path="/sell" exact element={<Sell/>}/>
        <Route path="/favourite" exact element={<Favourites  data={data1} setData={handleClick}/>} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;