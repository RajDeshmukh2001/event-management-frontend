import { BrowserRouter, Route, Routes } from "react-router";
import { Paths } from "../constants/routes.const";
import Home from "../pages/Home";
import Layout from "../components/Layout";

const AppRoutes = (): React.JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path={Paths.HOME} element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;