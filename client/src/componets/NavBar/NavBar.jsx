import { NavLink } from "react-router-dom";
import './NavBar.css'

export function NavBar() {
    return (
        <>
            <nav className='NavBar'>
                <div className='Button__Menu'>
                    <NavLink className={({ isActive }) => isActive ? 'active' : 'Button__Menu__Fire'} to={'/'}>Inicio</NavLink>
                    <div className='Button__Meno__Base'></div>
                </div>

                <div className='Button__Menu'>
                    <NavLink className={({ isActive }) => isActive ? 'active' : 'Button__Menu__Fire'} to={'AboutUs'}>Sobre Nosotros</NavLink>
                    <div className='Button__Meno__Base'></div>
                </div>

                <div className='Button__Menu'>
                    <NavLink className={({ isActive }) => isActive ? 'active' : 'Button__Menu__Fire'} to={'Products'}>Productos</NavLink>
                    <div className='Button__Meno__Base'></div>
                </div>

                <div className='Button__Menu'>
                    <div className='Logo__Menu'></div>
                    <div className='Button__Meno__Base'></div>
                </div>

                <div className='Button__Menu'>
                    <NavLink className={({ isActive }) => isActive ? 'active' : 'Button__Menu__Fire'} to={'Jewels'}>Joyas</NavLink>
                    <div className='Button__Meno__Base'></div>
                </div>

                <div className='Button__Menu'>

                    <NavLink className={({ isActive }) => isActive ? 'active' : 'Button__Menu__Fire'} to={'Location'}>Ubicación</NavLink>
                    <div className='Button__Meno__Base'></div>
                </div>

                <div className='Button__Menu'>

                    <NavLink className={({ isActive }) => isActive ? 'active' : 'Button__Menu__Fire'} to={'Contact'}>Contacto</NavLink>
                    <div className='Button__Meno__Base'></div>
                </div>

            </nav>
        </>
    )
}