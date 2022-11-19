import React,{useContext} from 'react'
import UseContextC from './UseContextC'
import { UserContext,StyleContext } from './UseContext'

const UseContextB = () => {
  const user = useContext(UserContext)
  const style = useContext(StyleContext)
  return (
    <div>
        <div>
          Hi {user}. I'm {style}
          {/* <UseContextC/> */}
        </div>
    </div>
  )
}

export default UseContextB