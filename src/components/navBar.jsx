import '../styles/navbar.css'
import menu from '../assets/hamburguer-menu.png'
import key from '../assets/key.png'

const navBar = () => {
  return (
    <>
        <section className='navbar-container'>
            <a href='/' className='center-content navbar-logo'>
                <span> <img className='key-menu' src={key}/> </span>
                <span className='nav-fuji-motors'> <h2> Fuji Motors </h2> </span>
            </a>

            <input type='text' className='search-bar' placeholder={"Buscar vehículos"}>
            </input>

            <span className='log-in-btn'>
                <img src={menu}/>
            </span>
        </section>
        <hr />
    </>
  )
}

export default navBar