import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchAppBar from "./component/SearchAppBar";
import Tour from "./component/Tour";
function App() {
  return (
    <BrowserRouter>
    <SearchAppBar />

    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:id" element={<Tour />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
