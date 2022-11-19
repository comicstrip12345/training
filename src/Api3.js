import axios from 'axios'
import React,{useState,useEffect} from 'react'

const Api3 = () => {
    const [arr,setArr] = useState([])
    const api = "https://fakestoreapi.com/products"
    useEffect(()=>{
        axios.get(api).then((res)=>{
            console.log(res.data);
            setArr(res.data)
        })
    },[api])
    return (
        <div>
            Api3
        </div>
    )
}

export default Api3