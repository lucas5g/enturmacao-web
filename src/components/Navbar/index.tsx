import React, { useState  } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [pathname, setPathname] = useState('/')

    

    const handleClick = () => {
        setPathname(window.location.pathname)
        // console.log(window.location.pathname)

    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <a className="navbar-brand" href="/">Enturmação</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
         
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto" onClick={ handleClick }>
                    <li className={`nav-item ${pathname === '/' && 'active'}`} >
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className={`nav-item ${pathname === '/cursos' && 'active'}`}>
                        <Link className="nav-link" to="/cursos">Cursos</Link>
                    </li>
                    <li className={`nav-item ${pathname === '/usuarios' && 'active'}`}  >
                        <Link className="nav-link" to="/usuarios">Usuários</Link>
                    </li>

                </ul>

            </div>
        </nav >
    )
 

}

export default Navbar