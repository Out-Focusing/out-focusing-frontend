import { Routes, Route } from "react-router-dom";
import { Login, Main, Register, RegisterSubmit } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/submit" element={<RegisterSubmit />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
