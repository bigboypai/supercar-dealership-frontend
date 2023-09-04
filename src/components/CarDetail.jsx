import { useParams } from 'react-router-dom'

function CarDetail({ cars }) {
  const { carId } = useParams();
  const car = cars.find((car) => car._id === carId);

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div>
      <h2>Car Details</h2>
      <p>Make: {car.car_info.make}</p>
      <p>Model: {car.car_info.model}</p>
    </div>
  );
}

export default CarDetail