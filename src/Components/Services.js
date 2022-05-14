import React from 'react'
import Title from './Title'
import Service from './Service'
import {Fa500Px , FaAccessibleIcon , FaAcquisitionsIncorporated , FaAdversal} from 'react-icons/fa'
const Services = () => {
    const icons = [Fa500Px , FaAccessibleIcon , FaAcquisitionsIncorporated , FaAdversal]
    const titles = ["Free Cockatails" , "Endless Hiking" , "Free Shuttle" , "Strongest Beer"]
    const texts = 
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eius!', 
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eius!',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eius!',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eius!']
    return (
        <div className='services'>
            <Title title="Services"/>
            <div className='services-center'>
                {titles.map((title , index)=> {
                    return <Service key={index} title={title} text={texts[index]} Icon={icons[index]}></Service>
                })}
            </div>
        </div>
    )
}

export default Services
