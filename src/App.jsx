import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Components/LoginRegister/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;