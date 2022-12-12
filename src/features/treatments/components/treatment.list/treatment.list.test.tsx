import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { RootState } from '../../../../infrastructure/store/store';
import { RoleI } from '../../../users/models/users';
import { userReducer } from '../../../users/reducers/user.reducers/reducer.users';
import { TreatmentI } from '../../models/treatments';
import { treatmentReducer } from '../../reducers/reducer.treatments';
import { TreatmentList } from './treatment.list';
describe('Given TreatmentAdminList component', () => {
    describe('When we render the component', () => {
        test('Then it should display the name of any in the list', () => {
            const appointmentMock = {
                _id: {
                    id: 'string',
                    title: 'string',
                    img: 'string',
                    description: 'string',
                    price: 33,
                    time: 33,
                } as TreatmentI,
                discount: 1,
            };
            const userMock = {
                name: 'david',
                password: '321',
                id: '2',
                phone: 'sdsd',
                isVip: false,
                email: '@gmail',
                role: 'user' as RoleI,
                appointments: [appointmentMock],
            };
            const preloadedState: Partial<RootState> = {
                users: {
                    user: userMock,
                    token: '',
                    role: 'user',
                    isLogged: true,
                    isLogging: false,
                },
                treatments: [{ title: 'tinte' } as TreatmentI],
            };
            const mockStore = configureStore({
                reducer: {
                    users: userReducer,
                    treatments: treatmentReducer,
                },
                preloadedState,
            });
            render(
                <Router>
                    <Provider store={mockStore}>
                        <TreatmentList />
                    </Provider>
                </Router>
            );
            const element = screen.getByText(/tratamientos disponibles/i);
            expect(element).toBeInTheDocument();
        });
    });
});
