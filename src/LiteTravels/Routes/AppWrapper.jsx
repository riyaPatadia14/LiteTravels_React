import Index from "./Index";
import Drawers from "../Components/Drawers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hotels from "../Components/Hotels";
import Places from "../Components/Places";
import RentVehicles from "../Components/RentVehicles";

const AppWrapper = () => {
    return (
        <>
            <BrowserRouter>
                <main>
                    <Routes>
                        {/* <Route path={Index.Registrations} index element={<Registrations />} /> */}
                        <Route path={Index.Drawers} element={<Drawers />} >
                            <Route path={Index.Hotels} element={<Hotels />} />
                            <Route path={Index.Places} element={<Places />} />
                            <Route path={Index.RentVehicles} element={<RentVehicles />} />
                        </Route>
                    </Routes>
                </main>
            </BrowserRouter>
        </>
    );
}

export default AppWrapper;