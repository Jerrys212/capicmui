import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import PrivateLayout from "./components/PrivateLayout";
import Miembros from "./pages/Miembros";
// import NotFound from "./pages/NotFound";
import Grupos from "./pages/Grupos";
import Aportaciones from "./pages/Aportaciones";
import Prestamos from "./pages/Prestamos";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>

            <Routes>
                <Route path="/admin" element={<PrivateLayout />}>
                    <Route index element={<Miembros />} />
                    <Route path="miembros" element={<Miembros />} />
                    <Route path="grupos" element={<Grupos />} />
                    <Route path="aportaciones" element={<Aportaciones />} />
                    <Route path="prestamos" element={<Prestamos />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
