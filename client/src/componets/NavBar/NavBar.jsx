import { NavLink } from "react-router-dom";
import './NavBar.css'

export function NavBar() {
    return (
        <>
            <nav className='NavBar'>
                <div className='Button__Menu'>
                    <NavLink className={({ isActive }) => isActive ? 'active' : 'Button__Menu__Fire'} to={'/'}>
                        <p className="Text_Menu">Inicio</p>
                    </NavLink>
                    <div className='Button__Menu__Base'></div>
                </div>

                <div className='Button__Menu'>
                    <NavLink className={({ isActive }) => isActive ? 'active' : 'Button__Menu__Fire'} to={'AboutUs'}>
                        <p className="Text_Menu">Sobre Nosotros</p>
                    </NavLink>
                    <div className='Button__Menu__Base'></div>
                </div>

                <div className='Button__Menu'>
                    <NavLink className={({ isActive }) => isActive ? 'active' : 'Button__Menu__Fire'} to={'Products'}>
                        <p className="Text_Menu">Productos</p>
                    </NavLink>
                    <div className='Button__Menu__Base'></div>
                </div>

                <div className='Button__Menu'>
                    <div className='Logo__Menu'></div>
                    <div className='Logo__Image'></div>
                    <div className='Button__Menu__Base'></div>
                </div>

                <div className='Button__Menu'>
                    <NavLink className={({ isActive }) => isActive ? 'active' : 'Button__Menu__Fire'} to={'Jewels'}>
                        <p className="Text_Menu">Joyería</p>
                    </NavLink>
                    <div className='Button__Menu__Base'></div>
                </div>

                <div className='Button__Menu'>

                    <NavLink className={({ isActive }) => isActive ? 'active' : 'Button__Menu__Fire'} to={'Location'}>
                        <p className="Text_Menu">Ubicación</p>
                    </NavLink>
                    <div className='Button__Menu__Base'></div>
                </div>

                <div className='Button__Menu'>

                    <NavLink className={({ isActive }) => isActive ? 'active' : 'Button__Menu__Fire'} to={'Contact'}>
                        <p className="Text_Menu">Contacto</p>
                    </NavLink>
                    <div className='Button__Menu__Base'></div>
                </div>

            </nav>
        </>
    )
}