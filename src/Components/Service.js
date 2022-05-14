import React from 'react'
const Service = ({title , text , Icon}) => {
    return (
        <div className='service'>
            <span><Icon/></span>
            <h6>{title}</h6>
            <p>{text}</p>
        </div>
    )
}

export default Service
