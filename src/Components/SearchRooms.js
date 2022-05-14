import React , { useState , useEffect } from 'react'
import Title from './Title'
import Options from "./Options"
const SearchRooms = ({setShowRooms}) => {
    const data = require("../roomsData.json");
    const allRooms = data.rooms;
    const maxPrice = data.maxPrice;
    const [type , setType] = useState("all");
    const [guests , setGuests] = useState("3");
    const [price , setPrice] = useState(maxPrice);
    const [breakfast , setBreakfast] = useState(false);
    const [pets , setPets] = useState(false);
    useEffect(()=>{
        setShowRooms(allRooms.filter(room=> {
            return ((room.type === type || type === 'all')&&
            (room.maxCapacity >= guests)&&
            ((room.price.substring(1) - 0) <= price)&&
            (room.breakfast === true || room.breakfast === breakfast)&&
            (room.pets === true || room.pets === pets))
        }))
    } , [type , guests , price , breakfast , pets])
    return (
        <div className='filter-container'>
            <Title title="Search Rooms"/>
            <form className='filter-form'>
                <div className='form-group'>
                    <label htmlFor='type'>room type</label>
                    <select onChange={(e)=>setType(e.target.value)} name='type' id='type'className='form-control' value={type}>
                        <Options from="types"> </Options>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='guests'>Guests</label>
                    <select onChange={(e)=>setGuests(e.target.value)} name='guests' id='guests' className='form-control' value={guests}>
                        <Options from="guests"> </Options>setGuests
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='price'>room Price ${price}</label>
                    <input onChange={(e)=>setPrice(e.target.value)} value={price} max={maxPrice} type="range" name='price' id='price' className='form-control'></input>
                </div>
                <div className='form-group'>
                    <div className='single-extra'>
                        <input onChange={()=>setBreakfast(p=>!p)} type="checkbox" name='breakfast' id="breakfast" checked={breakfast}/>
                        <label htmlFor='breakfast'>breakfast</label>
                    </div>
                    <div className='single-extra'>
                        <input onChange={()=>setPets(p=>!p)} type="checkbox" name='pets' id="pets" checked={pets}/>
                        <label htmlFor='pets'>pets</label>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchRooms
