import { useContext } from "react";
import { userContext } from "../contexts/userContext";
import { Button, Nav } from "react-bootstrap";

export default function LogoutButton(){
    const {setIsLoggedIn, setUsername , setAvatar} = useContext(userContext);
    function handleLogoutSubmit (event) {
        event.preventDefault();
        setUsername('')
        setIsLoggedIn(false)
        setAvatar('')
    }
    return (
        <>
        <Nav>
            <Button className="mx-4" onClick={handleLogoutSubmit}>Logout</Button>
        </Nav>
        </>
    )

}