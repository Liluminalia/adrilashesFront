import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../../store/store';
import { TreatmentsAdminPage } from './treatments.admin.page';

describe('Given treatments page', () => {
    describe('When we render the page', () => {
        test('Then it should display "Tratamientos"', () => {
            render(
                <>
                    <Router>
                        <Provider store={appStore}>
                            <TreatmentsAdminPage />
                        </Provider>
                    </Router>
                </>
            );
            const element = screen.getByText(/Tratamientos/i);
            expect(element).toBeInTheDocument();
        });
    });
});
