import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Api = () => {
    const [datas,setDatas] = useState([])
    const api = "https://jsonplaceholder.typicode.com/users"
    useEffect(()=>{
      axios.get(api).then((res) => {
        setDatas(res.data)
      }).catch((err)=>{
        console.log(err)
      })
    },[api])
    console.log(datas);

    return (
      <div>{datas.map((item)=>(
        <p key={item.id}>Name: {item.name} <br/> 
        Username: {item.username} <br/>
        Email {item.email} <br/> 
        Adress: <br/>
        <ul>
          <li>Street: {item.address.street}</li>
          <li>Suite: {item.address.suite}</li>
          <li>city: {item.address.city}</li>
          <li>zipcode: {item.address.zipcode}</li>
          <li>Geo:
          <ul>
            <li>Lat: {item.address.geo.lat}</li>
            <li>Long: {item.address.geo.lng}</li>
          </ul>
          </li>
        </ul>
        <br/> <br/> 
        </p>
      ))}
      </div>

    )
}

export default Api