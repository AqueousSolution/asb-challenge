import React, { useRef } from 'react';


const NavigationBar = () => {

    const searchInput = useRef(null)

    const handleClick =() =>{
        searchInput.current.style.display = 'none'
    }

    const handleFocus =() =>{
        searchInput.current.style.display = 'block'
    }

    return ( 
        <nav className='navbar'>
            <div className='left-nav'>
                
                <div className='flex'>
                    <img src='./images/logo.svg' className='logo' alt='logo'/>
                    <p className='logo'>FE Engineer Test 1</p>
                    <img src='./images/menu.svg' className='hamburger' alt='hamburger'/>
                </div>

                <ul className='left-nav_items'>
                    <li className='flex left-nav_item'>
                        
                        <img src='./images/home.svg' className='nav-icon' alt='nav icon'/>
                        <a href='#'> Home</a>
                       
                    </li>

                    <li className='flex left-nav_item'>
                        <img src='./images/entries.svg' className='nav-icon' alt='nav icon'/>
                        <a href='#'>Entries</a>
                    </li>

                    <li className='flex left-nav_item selected'>
                        <img src='./images/divisions.svg' className='nav-icon' alt='nav icon'/>
                        <a href='#'>Divisions</a>
                    </li>
                </ul>
               
            </div>
            <div className='right-nav'>
                <div className='search-box'>
                    <input type='text'  className='search' onFocus={handleClick} onBlur={handleFocus}/>
                    <img src='./images/search.svg' ref={searchInput} className='search-icon' alt='search'/>
                </div>
                
                <img src='./images/notification.svg' className='notification-icon' alt='logo'/>
                <img src='./images/avatar.svg' className='avatar-icon' alt='logo'/>
            </div>

            <pre className='sub-nav'>Divisions &gt; Module  </pre>
        </nav>
     );
}
 
export default NavigationBar;