import React,{useEffect,useState} from 'react'
import axios from 'axios'

const Parent = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            setData(res.data)
            setLoading(false)
        })
    },[])
    return (
        <div>
            {loading && <h1>Loading</h1>}
            {data.map((item,index)=>(
                <p key={index}>{item.name}</p>
            ))}
        </div>
    )
}

export default Parent