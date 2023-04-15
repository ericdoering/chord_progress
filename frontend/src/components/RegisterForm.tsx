import React, { useState } from "react";
import { Form, Button, Stack } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../api/constants";
import { useNavigate } from "react-router-dom";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const RegisterForm: React.FC = () => {
  let navigate = useNavigate(); 
  let path = `/about`; 
  const [user, setUser] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const registerPayload = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    };
    try {
      const response = await axios.post(`${API_URL}/register`, registerPayload);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    navigate(path);
  };

  return (
    <Form className="square border" onSubmit={handleSubmit}>
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
              <Button type="submit" variant="primary">Register</Button>
        </Stack>
    </Form>
  );
};

