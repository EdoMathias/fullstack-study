import { Navigate, Route, Routes } from "react-router-dom";
import Add from "../../VacationsArea/AddVacation/AddVacation";
import VacationsList from "../../VacationsArea/List/VacationsList";
import Page404 from "../page404/page404";
import "./Routing.css";
import Register from "../../AuthArea/Register/Register";
import Login from "../../AuthArea/Login/Login";

function Routing(): JSX.Element {
    return (
        <div className="Routing">

            <Routes>

                {/* Register: */}
                <Route path="/register" element={<Register />} />

                {/* Login: */}
                <Route path="/login" element={<Login />} />

                {/* List: */}
                <Route path="/list" element={<VacationsList />} />

                {/* Add: */}
                <Route path="/new" element={<Add />} />

                {/* Default Route: */}
                <Route path="/" element={<Navigate to="/list" />} />

                {/* Page not found route: */}
                <Route path="*" element={<Page404 />} />

            </Routes>

        </div>
    );
}

export default Routing;
