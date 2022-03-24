import React from 'react'
import { NavLink } from "react-router-dom";
import './NavBar.css'


export default function NavBar() {
    return (
        <>

            <br />
            <hr />
            <nav className='NavBar'>
                <NavLink className={({isActive})=> isActive ? 'active' : 'Button__Menu'} to={'/'}>Inicio</NavLink>
                <NavLink className={({isActive})=> isActive ? 'active' : 'Button__Menu'} to={'AboutUs'}>Sobre Nosotros</NavLink>
                <NavLink className={({isActive})=> isActive ? 'active' : 'Button__Menu'} to={'Profesionales'}>Profesionales</NavLink>
                <NavLink className={({isActive})=> isActive ? 'active' : 'Button__Menu'} to={'Servicios'}>Servicios</NavLink>
                <NavLink className={({isActive})=> isActive ? 'active' : 'Button__Menu'} to={'Location'}>Ubicación</NavLink>
                <NavLink className={({isActive})=> isActive ? 'active' : 'Button__Menu'} to={'Contact'}>Contacto</NavLink>
            </nav>
            <hr />
            <br />

        </>
    )
}