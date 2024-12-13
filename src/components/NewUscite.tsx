import { useEffect, useState } from "react"
import Track from "../Types/Track";
import CardNewMusic from "./CardNewMusic";
import { Col } from "react-bootstrap";


const NewUscite=()=>{


    interface ApiResponse {
        data: Track[];
      }

const [musics, setmusics]=useState<ApiResponse>()
 console.log( "musicaaa",musics)

    const GetMusic=()=>{
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=fedez")
    .then((response)=>{
        if(response.ok){
            return response.json()
        }else{
            throw new Error("errore nel recupero dei dati")
        }
    })
    .then((arrayOfSong)=>{
        
        setmusics(arrayOfSong)
    })
    .catch((err)=>{
        console.log("errore", err)
    })}

useEffect(()=>{
    GetMusic()
}, [])

    return(
        <>
        {
            musics?.data?.slice(0,10 ).map((track)=>{
                return(
                    <Col  >
                      <CardNewMusic track={track}/>   
                      </Col>
                )
            })
        }
        
        </>
    )
}
export default NewUscite