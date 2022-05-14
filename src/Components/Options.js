import React from 'react'

const Options = ({from}) => {
    const types = require("../roomsData.json")[from]
    return (
        <React.Fragment>{types.map((type , i)=><option key={i}>{type}</option>)}</React.Fragment>)}
export default Options
