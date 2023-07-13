import Home from "./pages/Home";
import ESG from "./pages/ESG";
import Reports from "./pages/Reports";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BasePage from "./pages/BasePage";


export default function AppRouter() {
    return (
        <Router>
            <main>
                <Routes>
                    <Route path="/" element={<BasePage />}>
                        <Route index element={<Home />} />
                        <Route path="esg" element={<ESG />} />
                        <Route path="reports" element={<Reports />} />
                    </Route>
                </Routes>
            </main>
        </Router>
    );
}