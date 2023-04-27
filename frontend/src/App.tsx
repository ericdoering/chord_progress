
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap";
import { Routes, Route, Navigate, useNavigate, useMatch} from "react-router-dom";
import Home from "./components/Home";
import ChordProgressions from "./components/ChordProgressions";
import About from "./components/About";
import Navbar from "./components/Navbar"
import { RegisterForm } from "./components/RegisterForm";
import { LoginForm } from "./components/LoginForm";
import { ChordProgressionDetail } from "./components/ChordProgressionDetail";
import "../../frontend/src/App.css"
import axios from "axios";

import { ChordProgressionForm } from "./components/ChordProgressionForm";
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { useState, createContext, useEffect } from "react";
import { API_URL } from "./api/constants";

const UserContext = createContext(undefined);

function App() {
  const navigate = useNavigate()
  const homeMatch = useMatch('/')
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'))
  const [user, setUser] = useState(undefined)
  const logout = () => {
    localStorage.removeItem('token')
    setLoggedIn(false)
}
  async function getUser() {
    try {
      const token = localStorage.getItem('token')
      if(!token) {
        return
      }
      const decodedToken = jwt_decode<JwtPayload>(token)

      // @ts-ignore
      const id = decodedToken["id"]
      const response = await axios.get(`${API_URL}/user/${id}`);
      if (response.status == 200) {
        setUser(response.data)
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if(!loggedIn && !homeMatch) {
      navigate('/')
    }
    else if(loggedIn && !user) {
      getUser()
    }
  }, [loggedIn, user])

  return (
    <>
    <UserContext.Provider value={user}>
    <div className="app">
      <Navbar loggedIn={loggedIn} logout={logout}/>
        <Container className="my-4">
          <Routes>
            <Route path="/" element={<Home loggedIn={loggedIn}/>} />
            <Route path="/chordprogressions" element={<ChordProgressions user={user}/>} />
            <Route path="/chordprogressionadd" element={<ChordProgressionForm />} />
            <Route path="/chordprogressiondetail/:id" element={<ChordProgressionDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<RegisterForm setLoggedIn={setLoggedIn}/>} />
            <Route path="/login" element={<LoginForm setLoggedIn={setLoggedIn}/>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Container>
    </div>
    </UserContext.Provider>
  </>
  )
}

export default App;
