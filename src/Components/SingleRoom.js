import React from 'react'
import Footer from "./Footer"
import { Link } from 'react-router-dom';
const SingleRoom = (props) => {
    const room = require("../roomsData.json").rooms[props.data-1];
    const {img , type , details , price , maxCapacity , pets , breakfast} = room
    const style = {
        background: `url(${img}) center/cover no-repeat`,
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
    return (
        <React.Fragment>
            <div style={style}>
                <div className='heading'>
                    <h1>{type} Deluxe Doom</h1>
                    <div></div>
                    <Link to={"/rooms/"} className='btn-primary'>Back To Rooms</Link>
                </div>
            </div>
            <div className='single-room'>
                <div className='single-room-images'>
                    <img src='../images/details-1.jpeg' alt='derails'/>
                    <img src='../images/details-2.jpeg' alt='derails'/>
                    <img src='../images/details-3.jpeg' alt='derails'/>
                </div>
                <div className='single-room-info'>
                    <div className='desc'>
                        <h3>Details</h3>
                        <p>{details}</p>
                    </div>
                    <div className='info'>
                        <h3>Info</h3>
                        <h6>Price : {price}</h6>
                        <h6>max Capacity : {maxCapacity} People</h6>
                        <h6>pets : {pets ? "Allowed" : "not Allowed"}</h6>
                        <h6>breakfast : {breakfast ? "Allowed" : "not Allowed"}</h6>
                    </div>
                </div>
            </div>
            <div className='room-extras'>
                <h4>extras</h4>
                <div className='extras'>
                    <div>
                        <h6>- plush pillows and breathable bed lines</h6>
                        <h6>- comolimentary refreshments</h6>
                        <h6>- Comfortable beds</h6>
                    </div>
                    <div>
                        <h6>- soft, oversized bath towels</h6>
                        <h6>- adequate safety/security</h6>
                    </div>
                    <div>
                        <h6>- Full-Sized, pH-balanced toiletries</h6>
                        <h6>- internet</h6>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default SingleRoom