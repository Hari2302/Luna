import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StillLove from "./pages/StillLove";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/still-love" element={<StillLove />} />
      </Routes>
    </BrowserRouter>
  );
}
