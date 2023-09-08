import '../styles/CardDetailGallery.css';

const CardDetailGallery = ({ images }) => {
  return (
    <div className='gallery'>
      <div className='gallery-main-container'>
        <div><img src={images[0]}/></div>
      </div>
      <div className='gallery-secondary-container'>
          <div> <img src={images[1]}/> </div>
          <div> <img src={images[2]}/> </div>
          <div> <img src={images[3]}/> </div>
          <div> <img src={images[4]}/> </div>
        </div>
    </div>
  )
}

export default CardDetailGallery