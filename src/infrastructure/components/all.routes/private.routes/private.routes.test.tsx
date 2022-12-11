import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import MakeAppointmentPage from '../../pages/user/make.appointment/make.appointment.page';
import { PrivateRoute } from './private.routes';

describe('Given AppRoutes component', () => {
    describe('When we render the component And the route is MakeAppointment', () => {
        // const userMock:Partial<UserI> = {
        //     id: 'string',
        //     name: 'string',
        //     email: 'string',
        //     phone: 'string',
        //     isVip: true,
        //     appointments: [],
        // };
        // const preloadedState: Partial<RootState> = {
        //     users: {
        //         user: userMock,
        //         token: '',
        //         isLogged: true,
        //         isLogging: false,
        //     },
        // };
        // const mockStore = configureStore({
        //     reducer: {
        //         users: userReducer,
        //         products: treatmentReducer,
        //     },
        //     preloadedState,
        // });
        // let user = useUsers()
        // user= jest.fn().mockResolvedValue({
        //     user:{
        //         user: {
        //             id: 'string',
        //     name: 'string',
        //     email: 'string',
        //     phone: 'string',
        //     isVip: true,
        //     appointments: [],
        //         },
        // isLogged: true,
        // isLogging: false,
        // token: 's',
        // role:  "user"

        //     },
        //     handleLogin:()=> [],
        //     handleAddAppointment:()=>[]

        // });
        // user;

        // useUsers().user = {
        //     user: {
        //         id: 'string',
        //         name: 'string',
        //         email: 'string',
        //         phone: 'string',
        //         isVip: true,
        //         appointments: [],
        //     },
        //     isLogged: true,
        //     isLogging: false,
        //     token: 'string',
        //     role: 'user',
        // };
        render(
            <>
                <Router>
                    <Route
                        path="MakeAppointment"
                        element={
                            <PrivateRoute>
                                <MakeAppointmentPage />
                            </PrivateRoute>
                        }
                    ></Route>
                </Router>
            </>
        );
        test('Then it should display the Make Appointment page', () => {
            const element = screen.getByText(/Make Appointment page/i);
            expect(element).toBeInTheDocument();
        });
    });
});
