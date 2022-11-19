import {useEffect} from 'react'

const useDocTitle = (counter) => {
    useEffect(()=>{
        document.title = `Click ${counter} times`
    },[counter])
}

export default useDocTitle