import { ListGroup } from "react-bootstrap"

const array=["Esplora per genere","Decenni", "Attività e stati d'animo", "Wordwide", "Classifiche", "Audio spaziale", "Video musicali", "Nuovi artisti", "Hit del passato"

]
console.log(array)


const MyExplorer=()=>{
    return(
        <ListGroup variant="flush " className="">
          {array.map((frase, i)=>{
            return(
                <ListGroup.Item as="li" key={i}  className="item mt-4 border border-0 rounded  py-3 d-flex justify-content-between">{frase} <i className="bi bi-arrow-right"></i></ListGroup.Item>
            )
          })}
      </ListGroup>
    )
}
export default MyExplorer