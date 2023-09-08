import '../styles/CarInfo.css'

const CarInfo = ( {info} ) => {
  return (
    <div className='car-main-container'>
        <section className='car-main-info'>
            <div className='car-make-model-year'>
                <p>{info.car_info.make}</p>
                <p>{info.car_info.model}</p>
                <p>{info.car_info.year}</p>
            </div>
            <div>
                {"$" + info.car_info.price}
            </div>
        </section>
        <hr className='separator-line'/>
        <section className='car-specs-container'>
            <div className='car-specs'>
                <p className='car-specs-up'>{info.car_info.year}</p>
                <p className='car-specs-down'>Año</p>
            </div>
            <div className='car-specs'>
                <p className='car-specs-up'>{info.car_info.odometer}</p>
                <p className='car-specs-down'>Odómetro</p>
            </div>
            <div className='car-specs'>
                <p className='car-specs-up'>{info.car_info.fuel}</p>
                <p className='car-specs-down'>Combustuble</p>
            </div>
            <div className='car-specs'>
                <p className='car-specs-up'>{info.car_info.transmission}</p>
                <p className='car-specs-down'>Transmisión</p>
            </div>
        </section>
        <hr className='separator-line'/>
        
        <section className='car-details-container'>
            <div className='car-details-div'>
                Detalles
            </div>
            <div className='car-details-subcontainer'>
                <div className='car-details-line'>
                    <p className='car-specs-down'>Marca</p>
                    <p> {info.car_info.make} </p>
                </div>
                <div className='car-details-line'>
                    <p className='car-specs-down'>Modelo</p>
                    <p> {info.car_info.model} </p>
                </div>
                <div className='car-details-line'>
                    <p className='car-specs-down'>Categoría</p>
                    <p> {info.car_info.category} </p>
                </div>
                <div className='car-details-line'>
                    <p className='car-specs-down'>Combustble</p>
                    <p> {info.car_info.fuel} </p>
                </div>
                <div className='car-details-line'>
                    <p className='car-specs-down'>Número de puertas</p>
                    <p> {info.car_info.doors} </p>
                </div>
                <div className='car-details-line'>
                    <p className='car-specs-down'>Kilometraje</p>
                    <p> {info.car_info.odometer} </p>
                </div>
                <div className='car-details-line'>
                    <p className='car-specs-down'>Transmisión</p>
                    <p> {info.car_info.transmission} </p>
                </div>
                <div className='car-details-line'>
                    <p className='car-specs-down'>Color exterior</p>
                    <p> {info.car_info.exterior_color} </p>
                </div>
                <div className='car-details-line'>
                    <p className='car-specs-down'>Color Interior</p>
                    <p> {info.car_info.interior_color} </p>
                </div>
            </div>
        </section>
        <hr className='separator-line'/>
    </div>
  )
}

export default CarInfo