import { NavLink } from "react-router-dom";
import './NavBar.css'

export function NavBar() {
    return (
        <>
            <nav className='NavBar'>
                <div className='Button__Menu'>
                    <NavLink className={({ isActive }) => isActive ? 'active' : 'Button__Menu__Fire'} to={'/'}>
                        <h1 className="Text_Menu">Inicio</h1>
                    </NavLink>
                    <div className='Button__Meno__Base'></div>
                </div>

                <div className='Button__Menu'>
                    <NavLink className={({ isActive }) => isActive ? 'active' : 'Button__Menu__Fire'} to={'AboutUs'}>
                        <h1 className="Text_Menu">Sobre Nosotros</h1>
                    </NavLink>
                    <div className='Button__Meno__Base'></div>
                </div>

                <div className='Button__Menu'>
                    <NavLink className={({ isActive }) => isActive ? 'active' : 'Button__Menu__Fire'} to={'Products'}>
                        <h1 className="Text_Menu">Productos</h1>
                    </NavLink>
                    <div className='Button__Meno__Base'></div>
                </div>

                <div className='Button__Menu'>
                    <div className='Logo__Menu'></div>
                    <div className='Button__Meno__Base'></div>
                </div>

                <div className='Button__Menu'>
                    <NavLink className={({ isActive }) => isActive ? 'active' : 'Button__Menu__Fire'} to={'Jewels'}>
                        <h1 className="Text_Menu">Joyería</h1>
                    </NavLink>
                    <div className='Button__Meno__Base'></div>
                </div>

                <div className='Button__Menu'>

                    <NavLink className={({ isActive }) => isActive ? 'active' : 'Button__Menu__Fire'} to={'Location'}>
                        <h1 className="Text_Menu">Ubicación</h1>
                    </NavLink>
                    <div className='Button__Meno__Base'></div>
                </div>

                <div className='Button__Menu'>

                    <NavLink className={({ isActive }) => isActive ? 'active' : 'Button__Menu__Fire'} to={'Contact'}>
                        <h1 className="Text_Menu">Contacto</h1>
                    </NavLink>
                    <div className='Button__Meno__Base'></div>
                </div>

            </nav>
        </>
    )
}