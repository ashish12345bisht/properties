import React,{useState,useEffect} from 'react'
import {BsSearch} from 'react-icons/bs'
import ProperyCard from '../components/ProperyCard'
import '../styles/Home.css'


const Home = ({data,setData}) => {
  const [data1,setData1] = useState(data)
  const [filteredData,setFilteredData] = useState(data);
  const [finalData,setFinalData]=useState(data);
  const [search,setSearch]=useState("")
  const [values,setValues] = useState({
    location:"all",
    when:"all",
    price:"all",
    property:"all"
  })
  useEffect(()=>{
    searchHandler(filteredData);
  },[search])

  const searchHandler = (filteredData)=>{
    let tempData
    if(search===""){
      tempData=data1
    }else{
      tempData = data1.filter(item=>((item.title.toLowerCase().indexOf(search.toLowerCase()) > -1) || (item.address.toLowerCase().indexOf(search.toLowerCase()) > -1) ))
    }
    let tempData2 = filteredData.map((item)=>item.id);
    let final=[]
    tempData.forEach((item)=>{
      if(tempData2.includes(item.id)){
        final.push(item)
      }
    })
    setFinalData(final)
  }
  const handleLocation=(e)=>{
    setValues({...values,location:e.target.value})
    handleFilter({...values,location:e.target.value})
  }
  const handleTime=(e)=>{
    setValues({...values,when:e.target.value})
    handleFilter({...values,when:e.target.value})
  }
  const handlePrice=(e)=>{
    setValues({...values,price:e.target.value})
    handleFilter({...values,price:e.target.value})
  }
  const handleProperty=(e)=>{
    setValues({...values,property:e.target.value})
    handleFilter({...values,property:e.target.value})
  }
  const handleFilter = (values)=>{
    let tempData=data1
    if(values.location!=="all"){
      let tempdata1 = tempData.filter((item)=>item.address.toLowerCase()===values.location.toLowerCase());
      tempData=tempdata1
    }
    if(values.when!=="all"){
      let tempdata1 = tempData.filter((item)=>{
        let range = values.when.split('-');
        if(item.constructed>=parseInt(range[0]) && item.constructed<=parseInt(range[1])){
          return item
        }
        return
      });
      tempData=tempdata1
    }
    if(values.price!=="all"){
      let tempdata1 = tempData.filter((item)=>{
        let range = values.price.split('-');
        if(item.price>=parseInt(range[0]) && item.price<=parseInt(range[1])){
          return item
        }
        return
      });
      tempData=tempdata1
    }
    if(values.property!=="all"){
      let tempdata1 = tempData.filter((item)=>item.type.toLowerCase()===values.property.toLowerCase());
      tempData=tempdata1
    }
    setFilteredData(tempData)
    // setFinalData(tempData)
    searchHandler(tempData)
  }
  return (
    <div className='home__main__div'>
      <div>
        <div className='searchbar__div'>
          <h1>Search properties to rent</h1>
          <div className='input__div'>
            <input type="text" placeholder='Search with Search Bar' value={search} onChange={e=>setSearch(e.target.value)} />
            <BsSearch />
          </div>
        </div>
        <div className='drop__searchdiv'>
          <div>
            <p>Location</p>
            <select name="location" id="location" className='header__dropdown' onChange={(e)=>handleLocation(e)}>
                <option value="all">All</option>
                <option value="Delhi">Delhi</option>
                <option value="Gurgaon">Gurgaon</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Chennai">Chennai</option>
                <option value="Bangalore">Bangalore</option>
            </select>
          </div>
          <div>
            <p>When</p>
            <select name="when" id="when" className='header__dropdown' onChange={(e)=>handleTime(e)}>
                <option value="all">All</option>
                <option value="1990-2000">1990-2000</option>
                <option value="2000-2010">2000-2010</option>
                <option value="2010-2020">2010-2020</option>
                <option value="2020-2022">2020-2022</option>
            </select>
          </div>
          <div>
            <p>Price</p>
            <select name="price" id="price" className='header__dropdown' onChange={(e)=>handlePrice(e)}>
                <option value="all">All</option>
                <option value="1000-2000">1000-2000</option>
                <option value="2001-3000">2001-3000</option>
                <option value="3001-4000">3001-4000</option>
                <option value="4001-5000">4001-5000</option>
            </select>
          </div>
          <div>
            <p>Property Type</p>
            <select name="propertyType" id="propertyType" className='header__dropdown' onChange={(e)=>handleProperty(e)}>
                <option value="all">All</option>
                <option value="Living">Living</option>
                <option value="Rental">Rental</option>
                <option value="Office">Office</option>
                <option value="Movable">Movable</option>
                <option value="Bangalore">Bangalore</option>
            </select>
          </div>
          <div>
            <button onClick={()=>handleFilter(values)} className='dropdown__search__button'>Search</button>
          </div>
        </div>
      </div>

      <div className='cards__container'>
      {finalData.map((item,index)=>(
        <ProperyCard key={index} item={item} data={data} setData={setData} />
      ))}
      </div>
    </div>
  )
}

export default Home