import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Gulf from "@/pages/Gulf";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gulf" element={<Gulf />} />
          <Route path="/dubai" element={<Gulf />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
