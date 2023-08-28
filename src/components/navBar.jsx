import '../styles/navbar.css'

const navBar = () => {
  return (
    <>
        <nav className='navbar-parent'>
            <ul className='navbar-container'>
                <li className="empty"></li>
                <li className='navbar-logo'>
                    <h2>SUPERCAR</h2>
                    <div className="logo-flags">
                        <span className="logo-flags--green"></span>
                        <span className="logo-flags--white"></span>
                        <span className="logo-flags--red"></span>
                    </div>
                </li>
                <li>
                    <img className='navbar-hamburguer-menu' src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/menu-512.png"/>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default navBar