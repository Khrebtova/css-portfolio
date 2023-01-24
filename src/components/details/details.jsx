import React from 'react'
import './details.scss'
import {RiCodepenLine} from 'react-icons/ri';

const Details = ({title='day', linkURL='https://codepen.io/Khrebtova/', action=""}) => {
  return (
    <div className='details'>
        <p>{title}</p>
        {action ? <p className='action'>{action}</p> : null }
        <a href={linkURL} target='_blank' rel='noopener noreferrer'><RiCodepenLine className='CodePenIcon'/></a>
    </div>
  )
}

export default Details