import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Topic_dropdown from "./Topic_dropdown";
import { Button } from "react-bootstrap";
import { userContext } from "../contexts/userContext";
import { useContext } from 'react';
import LogoutButton from "./LogoutButton";

export default function Header() {
     const {isLoggedIn, username} = useContext(userContext);
        return (
          <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="/home">NC-news</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Topic_dropdown />
                </Nav>
                {isLoggedIn ? (
                  <>
                    <Navbar.Text>
                      Signed in as: <a href="/login">{username}</a>{" "}
                    </Navbar.Text>
                    <LogoutButton />
                  </>
                ) : (
                  <>
                    <Button href="/login"> Login</Button>
                  </>
                )}
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
}
