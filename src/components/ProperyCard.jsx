import React from 'react'
import '../styles/PropertyCard.css'
import {RiHeartLine,RiHeartFill} from 'react-icons/ri'
import {BiArea,BiBed} from 'react-icons/bi';
import {GiBathtub} from 'react-icons/gi';

const ProperyCard = ({item,data,setData}) => {
    // const [favourite,setFavourite] = useState(item.favourite)
  return (
    <div className='property__card'>
    
        <img src={require(`../assets/${item.img}.jpg`)}/>
        <div className='property__card__bottom'>
            <div className='pricebar'>
                <h2>${item.price}<span>/month</span></h2>
                <div className='heart__div' onClick={()=>setData(item.id)}>
                {item.favourite?<RiHeartFill/>:<RiHeartLine/>}
                </div>
            </div>
            <div className='details'>
                <h2>{item.title}</h2>
                <p>{item.address}</p>
            </div>
            <div className='propertycard__footer'>
                <div>
                    <BiBed/>
                    <span>{item.beds} Beds</span>
                </div>
                <div>
                    <GiBathtub/>
                    <span>{item.bathrooms} Bathrooms</span>
                </div>
                <div>
                    <BiArea/>
                    <span>{item.area} m^2</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProperyCard