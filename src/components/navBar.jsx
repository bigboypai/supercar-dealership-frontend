import '../styles/navbar.css'
import menu from '../assets/hamburguer-menu.png'

const navBar = () => {
  return (
    <>
        <section className='navbar-container'>
            <span className='center-content navbar-logo'>
                <span> <img className='hamburguer-menu' src={menu}/> </span>
                <span> <h2> Fuji Motors </h2> </span>
            </span>

            <input type='text' className='search-bar' placeholder={"Buscar vehículos"}>
            </input>

            <span className='log-in-btn'>
                <img src='https://cdn-icons-png.flaticon.com/512/5509/5509636.png'/>
                <p> Log In </p>
            </span>
        </section>
        <hr />
    </>
  )
}

export default navBar