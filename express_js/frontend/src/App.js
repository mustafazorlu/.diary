import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import AddEdit from "./pages/addedit/AddEdit";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import View from "./pages/view/View";

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
                        <Route path="/update/:id" element={<AddEdit />} />
                        <Route path="/view/:id" element={<View />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
