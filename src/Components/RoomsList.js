import React from 'react'
import Room from './Room'
const RoomsList = ({rooms}) => {
    if(!rooms.length) {
        return (
        <div className='empty-search'>
            <h3>unfortuntely no rooms matched your search parameters</h3>
        </div>)
    }else {
        return (
        <div className='roomslist'>
            <div className='roomslist-center'>
                {rooms.map((room)=>{
                    return  <Room key={room.id} img={room.img} price={room.price} prot={room.prot} type={room.type} link={room.link} id={room.id}/>
                })}
            </div>
        </div>

        )
    }
}

export default RoomsList
