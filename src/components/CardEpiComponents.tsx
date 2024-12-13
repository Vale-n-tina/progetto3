interface CardSlideProps {
    imageSrc: string;
    text: string;
  }
const CardEpiComponent =(props:CardSlideProps)=>{

    return(
        <div className=" me-2">
        <img className="img-fluid rounded" src= {props.imageSrc}alt="" />
        <p className="text-light small">{props.text}</p>
        </div>
    )
}
export default CardEpiComponent