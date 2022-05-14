import React from 'react'
import { Context } from '../App'
import { Link } from 'react-router-dom'
const Room = (props) => {
    const {img , price , type , prot , link} = props;
    const setSingleRoom = React.useContext(Context)
    return (
        <div className='room'>
            <div className='img-container'>
                <img src={img} alt='hotel Room'/>
                <div className='price-top'><h6>{price}</h6><p>{prot}</p></div>
                <Link to={link} className='btn-primary room-link' onClick={()=>setSingleRoom(props.id)}>feature</Link>
            </div>
            <div className='room-info'>{type}</div>
        </div>
    )
}
export default Room