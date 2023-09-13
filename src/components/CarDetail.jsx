import { useParams } from 'react-router-dom'
import CardDetailGallery from './CardDetailGallery';
import NavBar from './navBar'
import Separator from './Separator';
import CarInfo from './CarInfo';
import ContactForm from './ContactForm';
import '../styles/CarDetail.css'

function CarDetail({ cars }) {
  const { carId } = useParams();
  const car = cars.find((car) => car._id === carId);
  const images = car.pictures

  if (!car) {
    return <div>Car not found</div>;
  }

   else return (
    <>
      <NavBar />
      <Separator text={`${car.car_info.make} ${car.car_info.model} ${car.car_info.year}`}/>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <CardDetailGallery images={images} />
      </div>
      <div className='car-info-contact-form-panel'>
        <CarInfo info={car} />
        <ContactForm />
      </div>
    </>
  );
}

export default CarDetail