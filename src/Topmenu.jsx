import React, { useState } from "react"
import './Topmenu.scss'

export default function Topmenu({currentItemMenu, setCurrentPage, currentPage}) {

    const [open, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen (!open);
    }

    const handlePage = (page) => {
        setCurrentPage(page);
        setOpen (!open); // if uncommented, burger menu stays open till next click
    }

    return (
        <>
        { open ?
            <nav className="menu">
                <a className={`link ${currentPage === '' ? 'link--highlighted' : ''}`} href="#" onClick={ () => handlePage('')}>Home</a>
                <a className={`link ${currentPage === 'about' ? 'link--highlighted' : ''}`} href="#about" onClick={ () => handlePage('about')} >About us</a>
                <a className={`link ${currentPage === 'contact' ? 'link--highlighted' : ''}`} href="#contact"
                onClick={ () => handlePage('contact')}>Contact</a>
                <a className={`link ${currentPage === 'login' ? 'link--highlighted' : ''}`} href="#login" onClick={ () => handlePage('login')}>Login</a>

            </nav>
            :
            ''
        
        }
        <div onClick={toggleMenu} className="hamburger-menu">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div> 
        </div>

        </>
    )

}