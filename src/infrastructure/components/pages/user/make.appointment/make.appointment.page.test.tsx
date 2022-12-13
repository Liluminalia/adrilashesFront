import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../../store/store';
import MakeAppointmentPage from './make.appointment.page';

describe('Given Make Appointment page', () => {
    describe('When we render the page', () => {
        test('Then it should display "nos llegara una notificacion para darle cita!"', () => {
            render(
                <>
                    <Router>
                        <Provider store={appStore}>
                            <MakeAppointmentPage />
                        </Provider>
                    </Router>
                </>
            );
            const element = screen.getByText(
                /nos llegara una notificacion para darle cita!/i
            );
            expect(element).toBeInTheDocument();
        });
    });
});
