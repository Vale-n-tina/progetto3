
import Slider from "react-slick";

function MyCarousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    centerMode: true,        
    centerPadding: '15%',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          centerMode: true,        
    centerPadding: '15%',
        }
      },
      
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,        
    centerPadding: '15%',
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div >
            <p className=" text-secondary m-0">Nuova stazione radio </p>
            <p className="text-light ">Rilassati, al resto ci pensiamo noi. <br /> Ascolta Apple Music chill</p>
          <img className="img-fluid rounded" src="/assets/images/1a.png" alt="" />
        </div>
        
        <div  className=" ms-3" >
        <img src="/assets/images/1b.png" className="img-fluid rounded" alt="" />
        </div>
        
      </Slider>
    </div>
  );
}

export default MyCarousel;