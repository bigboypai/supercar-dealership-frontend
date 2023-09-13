import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../styles/makes.css'

const Makes = () => {
    const makes = ["Pagani", "Lamborguini", "Ferrari", "Porsche", "Koenigsegg", "Bugatti", "Rolls-Royce", "Bentley", "Aston Martin", "Range Rover", "Jaguar"];
    return (
      <>
        <ul className='makes-ul'>
          {makes.map((make, index) => (
            <li key={index}>
              <Link className='makes-link'>{make}</Link>
            </li>
          ))}
        </ul>
        <hr />
      </>
    );
};

export default Makes;