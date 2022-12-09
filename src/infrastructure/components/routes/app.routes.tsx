import { Navigate, Route, Routes } from 'react-router-dom';
import DetailsPage from '../pages/public/details/details.page';
import HomePage from '../pages/public/home/home.page';
import RegisterPage from '../pages/public/register/register.page';
import HomeAdminPage from '../pages/user.admin/home.admin/home.admin.page';
import CreateTreatmentPage from '../pages/user.admin/treatments/create.treatment/create.treatment.page';
import EditTreatmentPage from '../pages/user.admin/treatments/edit.treatment/edit.treatment.page';
import LoginPage from '../pages/user/login/login.page';
import MakeAppointmentPage from '../pages/user/make.appointment/make.appointment.page';
import AppointmentsPage from '../pages/user/make.appointment/make.appointment.page';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="Home">
                <Route index element={<HomePage></HomePage>}></Route>
            </Route>
            <Route
                path="Register"
                element={<RegisterPage></RegisterPage>}
            ></Route>
            <Route path="Details" element={<DetailsPage></DetailsPage>}></Route>
            <Route path="Login" element={<LoginPage></LoginPage>}></Route>
            <Route
                path="MakeAppointment"
                element={<MakeAppointmentPage></MakeAppointmentPage>}
            ></Route>
            <Route
                path="Appointments"
                element={<AppointmentsPage></AppointmentsPage>}
            ></Route>
            <Route
                path="HomeAdmin"
                element={<HomeAdminPage></HomeAdminPage>}
            ></Route>
            <Route
                path="CreateTreatment"
                element={<CreateTreatmentPage></CreateTreatmentPage>}
            ></Route>
            <Route
                path="EditTreatment"
                element={<EditTreatmentPage></EditTreatmentPage>}
            ></Route>
            <Route path="" element={<HomePage></HomePage>}></Route>
            <Route path="*" element={<Navigate replace to="" />}></Route>
            <Route path="*" element={<h1>No se encontró la ruta</h1>}></Route>
        </Routes>
    );
}
