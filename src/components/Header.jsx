import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.css"
const Header = () => {
    return (
        <div>
            <span>React Context API</span>
            <ul className='nav'>
                <li className='prod'>
                    <Link to="/cart">Home Page</Link>
                </li>
                <li className='prod1'>
                    <Link to="/cart"> Cart</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
