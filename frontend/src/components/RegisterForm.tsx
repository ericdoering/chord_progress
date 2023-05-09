import React, { useState } from "react";
import { Form, Button, Stack } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../api/constants";
import { useNavigate } from "react-router-dom";
import ".././App.css"

// Type checking that the user is inputting all 4 fields as strings
interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

// Passing setLogged in as a function  prop
interface RegisterFormProps {
  setLoggedIn: (loggedIn: boolean) => void
}

export const RegisterForm: React.FC<RegisterFormProps> = (props) => {
  const {setLoggedIn} = props
  // Setting path to send user to "About" page upon login
  let navigate = useNavigate(); 
  let path = `/about`; 
  // Setting user object in state with the 4 necessary input fields left blank
  const [user, setUser] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // Handles render cycle for changes in user information as they type 
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  // Will submit user information when submit button is clicked
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // The register payload will take in filled out fields that the user has provided and add them as a payload.
    const registerPayload = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    };

    // A try catch that will send the payload as a post request to the backend "register" route
    try {
      const response = await axios.post(`${API_URL}/register`, registerPayload);
      const data = response.data;
      const token = data["token"]
      localStorage.setItem('token', token)
      setLoggedIn(true)
      // If successful the user will have their jwt token added to local storage and setLoggedIn will be set as true
    } catch (error) {
      console.error(error);
    }
    navigate(path);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Stack direction="vertical" gap={1} className="justify-content-center">
      <Form.Group className="d-flex flex-column align-items-center mb-4" controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          className="w-25"
          type="text"
          name="firstName"
          value={user.firstName}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group className="d-flex flex-column align-items-center mb-4" controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          className="w-25"
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group className="d-flex flex-column align-items-center mb-4" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          className="w-25"
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group className="d-flex flex-column align-items-center mb-4" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          className="w-25"
          type="password"
          name="password"
          value={user.password}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      </Stack>
        <Stack direction="horizontal" gap={1} className="justify-content-center">
              <Button variant="success" size="lg" type="submit">Register</Button>
        </Stack>
    </Form>
  );
};

