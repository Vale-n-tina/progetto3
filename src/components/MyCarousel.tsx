
import Slider from "react-slick";

function MyCarousel() {
  const settings = {
    dots: false,   
    infinite: true, 
    speed: 500,
    slidesToShow: 4,  
    slidesToScroll: 1, 
    initialSlide: 0,
    centerMode: true,        
    centerPadding: '15%',   
    responsive: [
      {
        breakpoint: 1524,
        settings: {
          slidesToShow: 2,  
          slidesToScroll: 1,
          infinite: true, 
          centerMode: false,
          centerPadding: '0%',
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,  
          slidesToScroll: 1,
          infinite: true, 
          centerMode: false,
          centerPadding: '0%',
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,  
          slidesToScroll: 1, 
            
          centerMode: true,
          centerPadding: '10%', 
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,  
          slidesToScroll: 1, 
          centerMode: true,
          centerPadding: '10%',
        }
      }
    ]
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div >
            <p className=" text-secondary m-0">Nuova stazione radio </p>
            <p className="text-light mb-1 ">Rilassati, al resto ci pensiamo noi. <br /> Ascolta Apple Music chill</p>
          <img className="img-fluid rounded" src="/assets/images/1a.png" alt="" />
        </div>
        
        <div  className=" ms-3" >
        <p className=" text-secondary m-0">Nuova stazione radio </p>
        <p className="text-light mb-1 ">Ecco la nuova casa della musica <br />latina</p>
        <img src="/assets/images/1b.png" className="img-fluid rounded" alt="" />
        </div>
        
      </Slider>
    </div>
  );
}

export default MyCarousel;