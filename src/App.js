import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Pages/Header";
import InBox from "./Pages/InBox";
import Spam from "./Pages/Spam";
import Trash from "./Pages/Trash";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<InBox />}></Route>
        <Route path="/spam" element={<Spam />}></Route>
        <Route path="/trash" element={<Trash />}></Route>
      </Routes>
    </div>
  );
}
