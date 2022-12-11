import { Navigate, Route, Routes } from 'react-router-dom';
import DetailsPage from '../../pages/public/details/details.page';
import HomePage from '../../pages/public/home/home.page';
import HomeAdminPage from '../../pages/user.admin/home.admin/home.admin.page';
import CreateTreatmentPage from '../../pages/user.admin/treatments/create.treatment/create.treatment.page';
import MakeAppointmentPage from '../../pages/user/make.appointment/make.appointment.page';
import AppointmentsPage from '../../pages/user.admin/appointments/appointments.page';
import { PrivateRoute } from '../private.routes/private.routes';
import { AdminRoute } from '../admin.route/admin.route';
import { LoginPage } from '../../pages/public/login/login.page';
import { RegisterPage } from '../../pages/public/register/register.page';
import { EditTreatmentPage } from '../../pages/user.admin/treatments/edit.treatment/edit.treatment.page';
import { TreatmentsPage } from '../../pages/user.admin/treatments/treatments.page';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="Home">
                <Route index element={<HomePage />}></Route>
            </Route>
            <Route path="Register" element={<RegisterPage />}></Route>
            <Route path="Details" element={<DetailsPage />}></Route>
            <Route path="Login" element={<LoginPage />}></Route>
            <Route
                path="MakeAppointment"
                element={
                    <PrivateRoute>
                        <MakeAppointmentPage />
                    </PrivateRoute>
                }
            ></Route>
            <Route
                path="HomeAdmin"
                element={
                    <AdminRoute>
                        <HomeAdminPage />
                    </AdminRoute>
                }
            ></Route>
            <Route
                path="Appointments"
                element={
                    <AdminRoute>
                        <AppointmentsPage />
                    </AdminRoute>
                }
            ></Route>
            <Route
                path="Treatments"
                element={
                    <AdminRoute>
                        <TreatmentsPage />
                    </AdminRoute>
                }
            ></Route>
            <Route
                path="CreateTreatment"
                element={
                    <AdminRoute>
                        <CreateTreatmentPage />
                    </AdminRoute>
                }
            ></Route>
            <Route
                path="EditTreatment/:id"
                element={
                    <AdminRoute>
                        <EditTreatmentPage />
                    </AdminRoute>
                }
            ></Route>
            <Route path="" element={<HomePage />}></Route>
            <Route path="*" element={<Navigate replace to="" />}></Route>
            <Route path="*" element={<h1>No se encontró la ruta</h1>}></Route>
        </Routes>
    );
}
