
import Slider from "react-slick";
import CardEpiComponent from "./CardEpiComponents";

function EpisodiCarousel() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1524,
            settings: {
              slidesToShow: 5,  
              slidesToScroll: 1,
              infinite: true, 
              
            }
          },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
        <CardEpiComponent imageSrc="/assets/images/2a.png" text="Pròlogo con Abuelo"/>
        </div>
        <div>
        <CardEpiComponent imageSrc="/assets/images/2b.png" text="The Wanderer"/>
        </div>
        <div>
        <CardEpiComponent imageSrc="/assets/images/2c.png" text="Micheal Bublè & Carly Pearce"/>
        </div>
        <div>
        <CardEpiComponent imageSrc="/assets/images/2d.png" text="Stephan Moccio: the Zane Lowe Interwiew"/>
        </div>
        <div>
        <CardEpiComponent imageSrc="/assets/images/2e.png" text="Chart Spotlight: Julia Michaels"/>
        </div>
        
      </Slider>
    </div>
  );
}

export default EpisodiCarousel;