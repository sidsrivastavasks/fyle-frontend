import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import UserDetails from "./components/UserDetails";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:username" element={<UserDetails />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
