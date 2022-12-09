import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import EditTreatmentPage from './edit.treatment.page';

describe('Given Edit treatment page', () => {
    describe('When we render the page', () => {
        test('Then it should display "Edit treatment page"', () => {
            render(
                <>
                    <Router>
                        <EditTreatmentPage />
                    </Router>
                </>
            );
            const element = screen.getByText(/Edit treatment page/i);
            expect(element).toBeInTheDocument();
        });
    });
});
