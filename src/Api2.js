import React, {useState,useEffect} from 'react'
import axios from 'axios'


const Api2 = () => {
    const [datas,setDatas] = useState([])
    const api2 = "https://reqres.in/api/articles"
    useEffect(()=>{
        axios.post(api2).then((res)=>{
          setDatas(res.data.id)
        })
      },[api2])
  return (
    <div>
        {datas}
      </div>
  )
}

export default Api2