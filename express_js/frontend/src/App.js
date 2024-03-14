import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import AddEdit from "./pages/addedit/AddEdit";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <ToastContainer />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/add" element={<AddEdit />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
