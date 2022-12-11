import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import CreateTreatmentPage from './create.treatment.page';

describe('Given Create treatment page', () => {
    describe('When we render the page', () => {
        test('Then it should display "Create treatment page"', () => {
            render(
                <>
                    <Router>
                        <CreateTreatmentPage />
                    </Router>
                </>
            );
            const element = screen.getByText(/Create treatment page/i);
            expect(element).toBeInTheDocument();
        });
    });
});
