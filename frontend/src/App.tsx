
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import ChordProgressions from "./components/ChordProgressions";
import About from "./components/About";
import Navbar from "./components/Navbar"
import { RegisterForm } from "./components/RegisterForm";
import { LoginForm } from "./components/LoginForm";
import { ChordProgressionDetail } from "./components/ChordProgressionDetail";

import E_Major from "./assets/chords/E_Major.png"
import A_Major from "./assets/chords/A_Major.png"
import B_Major from "./assets/chords/B_Major.png"
import { ChordProgressionForm } from "./components/ChordProgressionForm";
import { ChordProgression } from "./components/ChordProgression";

function App() {
  return (
    <>
      <Navbar />
        <Container className="my-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chordprogressions" element={<ChordProgressions />} />
            <Route path="/chordprogressionadd" element={<ChordProgressionForm />} />
            <Route path="/chordprogressiondetail/:id" element={<ChordProgressionDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Container>
  </>
  )
}

export default App;
