import React , {useState} from 'react'
import Details from '../details/details'
import './day-7.scss'

const Day7 = () => {
    const [showPopup, setShowPopup] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    const handleMenuClick = () => {
        setShowPopup(!showPopup)
    }

    const handleSearchClick = () => {
        setShowSearch(!showSearch)
    }

  return (
    <div>
        <div className='day-7-frame'>            
            <p>Work in progress</p>
            <div className={showPopup ? 'day-7-center active' : 'day-7-center'}>
                <div className='day-7-header'>
                    <div className='day-7-menu-icon' onClick={handleMenuClick}>
                        <div className='top-dash'></div>
                        <div className='bottom-dash'></div>
                        <div className='menu-dot'></div>
                    </div>
                    <div className='day-7-title'>Notifications</div>
                    <div className='day-7-search-btn' onClick={handleSearchClick}>
                        <div className='search-circle'></div>
                        <div className='search-pip'></div>
                    </div>                    
                    <input className={  showSearch ? 'day-7-input-search active' : 'day-7-input-search'} placeholder='Search ...'/>  
                </div>
                <div className='day-7-content'>
                </div>
            </div>
            <div className={showPopup ? 'day-7-popup active' : 'day-7-popup'}></div>
        </div>
        <Details title='Day 7' linkURL='https://codepen.io/Khrebtova/pen/LYBrJdG'/>
    </div>
  )
}

export default Day7