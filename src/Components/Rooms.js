import React , { useState } from 'react'
import Footer from './Footer'
import Hero from './Hero'
import RoomsList from './RoomsList'
import SearchRooms from './SearchRooms'
const Rooms = () => {
    const [showRooms , setShowRooms] = useState([]);
    return (
        <React.Fragment>
            <Hero heading={{title: "Our Rooms",link:"/",linkText:"return home"}}hero={"roomsHero"}/>
            <SearchRooms setShowRooms={setShowRooms}/>
            <RoomsList rooms={showRooms}/>
            <Footer />
        </React.Fragment>
    )
}

export default Rooms
