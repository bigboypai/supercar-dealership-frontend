import { useParams } from 'react-router-dom'
import CardDetailCarousel from './CardDetailCarousel';
import NavBar from './navBar'
import Separator from './Separator';
import '../styles/CarDetail.css'

function CarDetail({ cars }) {
  const { carId } = useParams();
  const car = cars.find((car) => car._id === carId);
  const images = car.pictures

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <>
      <NavBar />
      <Separator text={`${car.car_info.make} ${car.car_info.model} ${car.car_info.year}`}/>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <CardDetailCarousel images={images} />
      </div>
      <div className='car-info'>
        <div className='car-detail-info'>
          <p>Marca: {car.car_info.make}</p>
          <p>Model: {car.car_info.model}</p>
          <p>Odómetro: {car.car_info.odometer} km</p>
          <p>Año: {car.car_info.year}</p>
          <p>Transmisión: {car.car_info.transmission}</p>
        </div>
        <div> { car.car_info.description ? <p>Descripción: {car.car_info.description}</p> : null } </div>
      </div>
    </>
  );
}

export default CarDetail