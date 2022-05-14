import React from 'react'
import {Link} from 'react-router-dom'
const Hero = ({heading , hero}) => {
    const {title , subTitle , link , linkText} = heading;
    return (
        <div className={hero}>
            <div className='heading'>
                <h1>{title}</h1>
                <div></div>
                <p>{subTitle}</p>
                <Link to={link} className='btn-primary'>{linkText}</Link>
            </div>
        </div>
    )
}
export default Hero
