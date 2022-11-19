import React,{createContext} from 'react'
import UseContextA from './UseContextA'

export const UserContext = createContext()
export const StyleContext = createContext()

const UseContext = () => {
    return (
        <div>
            <UserContext.Provider value={'Adriano'}>
                <StyleContext.Provider value={"Ugly"}>
                    <UseContextA/>
                </StyleContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default UseContext