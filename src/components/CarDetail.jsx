import { useParams } from 'react-router-dom'
import CardDetailCarousel from './CardDetailCarousel';
import NavBar from './navBar'
import Separator from './Separator';

function CarDetail({ cars }) {
  const { carId } = useParams();
  const car = cars.find((car) => car._id === carId);
  const images = [
    "https://wearecurated.b-cdn.net/wp-content/uploads/AH2I1035-Edit-scaled.jpg",
    "https://wearecurated.com/wp-content/uploads/AH2I1091-2-scaled.jpeg",
    "https://wearecurated.com/wp-content/uploads/AH2I1043-scaled.jpeg",
    "https://wearecurated.com/wp-content/uploads/AH2I1083-scaled.jpeg",
    "https://wearecurated.com/wp-content/uploads/AH2I1075-Edit-scaled.jpeg",
    "https://wearecurated.com/wp-content/uploads/DSC09740-1-scaled.jpeg",
    "https://wearecurated.com/wp-content/uploads/DSC09743-1-scaled.jpeg"
    ]

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <>
      <NavBar />
      <Separator text={`${car.car_specs.year} ${car.car_info.make} ${car.car_info.model}`}/>
      <div className='car-detail-info'>
        <p>Year: {car.car_specs.year}</p>
        <p>Manufacturer: {car.car_info.make}</p>
        <p>Model: {car.car_info.model}</p>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <CardDetailCarousel images={images} />
      </div>
    </>
  );
}

export default CarDetail