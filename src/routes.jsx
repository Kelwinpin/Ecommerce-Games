import Inicio from "pages/Inicio";
import StartedPage from "pages/StartedPage";
import { BrowserRouter, Route, Routes } from "react-router-dom"


export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StartedPage />}>
                    <Route index element={<Inicio />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;