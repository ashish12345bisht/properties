import React,{useEffect, useState} from 'react';
import ProperyCard from '../components/ProperyCard';
import '../styles/Home.css'

const Favourites = ({data,setData}) => {
    const [fav,setFav]=useState(data);
    useEffect(()=>{
        let tempData = fav.filter(item=>item.favourite);
        console.log(tempData)
        setFav(tempData)
    },[])
  return (
    <div className='home__main__div'>
        <div className='cards__container'>
            {fav.map((item,index)=>(
                <ProperyCard key={index} item={item} data={data} setData={setData} />
            ))}
      </div>
    </div>
  )
}

export default Favourites