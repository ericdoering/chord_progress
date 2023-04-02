
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import ChordProgressions from "./components/ChordProgressions";
import About from "./components/About";

function App() {
  return (
    <Container className="my-4">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chordprogressions" element={<ChordProgressions />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Container>
  )
}

export default App;
