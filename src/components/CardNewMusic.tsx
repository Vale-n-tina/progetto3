import Track from "../Types/Track";

import { Card } from "react-bootstrap";


interface SingoleCardProps{
    track:Track
}
const CardNewMusic = (props: SingoleCardProps) => {

  return (
    <>
    <Card>
      <Card.Img variant="top" src={props.track.album.cover_big} />
    </Card>
      <p className="text-light small m-0">{props.track.album.title}</p>
      <p className="text-secondary small m-0">{props.track.artist.name} </p>
      </>
  );
};

export default CardNewMusic;
