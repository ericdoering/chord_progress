import React, { useState } from "react";
import { Form, Button, Stack } from "react-bootstrap";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const RegisterForm: React.FC = () => {
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(user);
    // do something with user data (e.g. send to server)
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

export { RegisterForm };
