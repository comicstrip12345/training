import React from 'react'
import { UserContext,StyleContext } from './UseContext'

const UseContextC = () => {
    return (
        <div>
            <UserContext.Consumer>
                {
                    name=>(
                        <StyleContext.Consumer>
                            {
                                style=>(
                                    <div>User Context C {name} {style}</div>
                                )
                            }
                        </StyleContext.Consumer>
                        
                    )
                }
            </UserContext.Consumer>
        </div>
    )
}

export default UseContextC