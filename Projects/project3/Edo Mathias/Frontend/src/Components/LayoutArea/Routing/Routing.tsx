import { Navigate, Route, Routes } from 'react-router-dom';
import VacationsList from '../../VacationsArea/List/VacationsList';
import Page404 from '../page404/page404';
import './Routing.css';
import Register from '../../AuthArea/Register/Register';
import Login from '../../AuthArea/Login/Login';
import AddVacation from '../../VacationsArea/AddVacation/AddVacation';
import EditVacation from '../../VacationsArea/EditVacation/EditVacation';
import VacationsCharts from '../../VacationsArea/Charts/Charts';

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
        <Route path="/add" element={<AddVacation />} />

        {/* Edit: */}
        <Route path="/edit/:id" element={<EditVacation />} />

        {/* Chats: */}
        <Route path="/charts" element={<VacationsCharts />} />

        {/* Default Route: */}
        <Route path="/" element={<Navigate to="/list" />} />

        {/* Page not found route: */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default Routing;
