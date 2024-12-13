import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const PageAccedi=()=>{
    const navigate=useNavigate()
    return(
        
        <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-light">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-light">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
       
        <Button variant="primary" type="submit">
          accedi
        </Button>
        <Button className="ms-2" variant="danger" type="submit" onClick={()=>{
            navigate("/")
        }}>
          torna in home
        </Button>
      </Form>
      
    )
}
export default PageAccedi