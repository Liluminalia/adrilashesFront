import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import MakeAppointmentPage from './make.appointment.page';

describe('Given Make Appointment page', () => {
    describe('When we render the page', () => {
        test('Then it should display "Make Appointment page"', () => {
            render(
                <>
                    <Router>
                        <MakeAppointmentPage />
                    </Router>
                </>
            );
            const element = screen.getByText(/Make Appointment page/i);
            expect(element).toBeInTheDocument();
        });
    });
});
