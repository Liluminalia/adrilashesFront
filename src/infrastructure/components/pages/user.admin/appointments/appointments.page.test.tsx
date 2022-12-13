import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockStoreAdmin } from '../../../../mockStore/mockStore';
import AppointmentsPage from './appointments.page';

describe('Given Appointments page', () => {
    describe('When we render the page', () => {
        test('Then it should display "Citar"', () => {
            render(
                <>
                    <Router>
                        <Provider store={mockStoreAdmin}>
                            <AppointmentsPage />
                        </Provider>
                    </Router>
                </>
            );
            const element = screen.getByText(/Citar/i);
            expect(element).toBeInTheDocument();
        });
    });
});
