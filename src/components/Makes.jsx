import { Link } from 'react-router-dom'
import '../styles/makes.css'

const Makes = () => {
    const makes = ["Maserati", "Isuzu", "BMW", "Mercedes-Benz", "Toyota", "Hyundai", "Nissan", "Mitsubishi"];
  
    return (
      <>
      <ul className='makes-ul'>
        {makes.map((make, index) => (
                <li>
                    <Link className='makes-link' key={index}>{make}</Link>
                </li>
            ))}
      </ul>
      <hr/>
      </>
    );
  };
  
export default Makes; 