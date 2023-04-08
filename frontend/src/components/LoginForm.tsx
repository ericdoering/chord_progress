import React, { useState } from 'react';
import { Form, Button, Stack } from 'react-bootstrap';
import { handleLogin } from '../api/login';


const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleLogin(email, password);
  };

  return (
    <Form onSubmit={handleSubmit}>
    <Stack direction="vertical" gap={1} className="justify-content-center">
      <Form.Group className="d-flex flex-column align-items-center mb-4" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          className="w-25"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="d-flex flex-column align-items-center mb-4" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          className="w-25"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Group>
      </Stack>
      <Stack direction="horizontal" gap={1} className="justify-content-center">
              <Button type="submit" variant="primary">Login</Button>
        </Stack>
    </Form>
  );
};

export default LoginForm;
