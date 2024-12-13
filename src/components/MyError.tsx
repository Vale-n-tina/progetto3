import { useNavigate } from "react-router-dom"

const MyError=()=>{
    const navigate=useNavigate()
    return(
        <div className="error-page" >
        <h1 className="text-light">404</h1>
        <p className="text-light" >Oops! La pagina che stai cercando non esiste.</p>
        <button onClick={()=>{
            navigate("/")
        }} >Torna alla Home</button>
      </div>
    )
}

export default MyError