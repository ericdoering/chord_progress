import React, { useState } from 'react';
import { Form, Button, Stack } from 'react-bootstrap';
import { API_URL } from '../api/constants';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface User {
  email: string;
  password: string;
}

// Check loggedIn prop
interface LoginFormProps {
  setLoggedIn: (loggedIn: boolean) => void
}


export const LoginForm: React.FC<LoginFormProps> = (props: LoginFormProps) => {
  // state variable that creates a flash warning
  const [error, setError] = useState('');
  const {setLoggedIn} = props;
  let navigate = useNavigate(); 
  let path = `/chordprogressions`; 
  // Setting login information to just email and password
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const loginPayload = {
      email: user.email,
      password: user.password,
    };
    try {
      const response = await axios.post(`${API_URL}/login`, loginPayload);
      const data = response.data;
      const token = data["token"]
      localStorage.setItem('token', token)
      setLoggedIn(true)
      navigate(path);
    } catch (e: any) {
      if(e.response.status === 401){
        setError('Wrong Username or Password')
      }
      console.error(error);
    }
  };


  return (
    <Form onSubmit={handleSubmit}>
    {error && <div className="alert alert-danger d-flex flex-column align-items-center" role="alert">{error}</div>}
    <Stack direction="vertical" gap={1} className="justify-content-center">
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
              <Button type="submit" variant="success" size="lg">Login</Button>
        </Stack>
    </Form>
  );
};

