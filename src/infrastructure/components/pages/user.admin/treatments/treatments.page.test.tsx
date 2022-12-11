import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import TreatmentsPage from './treatments.page';

describe('Given treatments page', () => {
    describe('When we render the page', () => {
        test('Then it should display "Treatments page"', () => {
            render(
                <>
                    <Router>
                        <TreatmentsPage />
                    </Router>
                </>
            );
            const element = screen.getByText(/Treatments page/i);
            expect(element).toBeInTheDocument();
        });
    });
});
