import React from "react";
import ReactDOM  from "react-dom";
import Title from "./Title";

it('without crashing',()=>{
    const div = document.createElement('div')
    ReactDOM.render(<Title></Title>,div)
})