import { useParams } from 'react-router-dom';
import CardDetailGallery from './CardDetailGallery';
import NavBar from './NavBar';
import Separator from './Separator';
import CarInfo from './CarInfo';
import ContactForm from './ContactForm';
import '../styles/CarDetail.css';

function CarDetail({ cars }) {
  const { carId } = useParams();
  const car = cars.find((car) => car._id === carId);

  if (!car) {
    // Handle the case where the car is not found more gracefully.
    return (
      <>
        <NavBar />
        <div> Loading . . . </div>
      </>
    );
  }

  const images = car.pictures;

  return (
    <>
      <NavBar />
      <Separator text={`${car.car_info.make} ${car.car_info.model} ${car.car_info.year}`} />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CardDetailGallery images={images} />
      </div>
      <div className='car-info-contact-form-panel'>
        <CarInfo info={car} />
        <ContactForm />
      </div>
    </>
  );
}

export default CarDetail;
