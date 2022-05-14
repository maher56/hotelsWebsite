import React , { useState , useEffect } from 'react'
import Title from './Title'
import Room from './Room'
const FeaturedRoom = () => {
    const [data , setData] = useState([]);
    useEffect(()=>{
        setData(require("../roomsData.json").rooms)
    }, [])
    return (
        <div className='featured-rooms'>
            <Title title="Featured Rooms"/>
            <div className='featured-rooms-center'>
                {data.length ? <Room key={data[0].id} img={data[0].img} price={data[0].price} prot={data[0].prot} type={data[0].type} link={data[0].link} id={data[0].id}/>: ""}
                {data.length ? <Room key={data[1].id} img={data[1].img} price={data[1].price} prot={data[1].prot} type={data[1].type} link={data[1].link} id={data[1].id}/>: ""}
                {data.length ? <Room key={data[2].id} img={data[2].img} price={data[2].price} prot={data[2].prot} type={data[2].type} link={data[2].link} id={data[2].id}/>: ""}
            </div>
        </div>
    )
}
export default FeaturedRoom
