import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../../../store/store';
import { CreateTreatmentPage } from './create.treatment.page';

describe('Given Create treatment page', () => {
    describe('When we render the page', () => {
        test('Then it should display "Crear tratamiento"', () => {
            render(
                <>
                    <Router>
                        <Provider store={appStore}>
                            <CreateTreatmentPage />
                        </Provider>
                    </Router>
                </>
            );
            const element = screen.getByText(/Crear tratamiento/i);
            expect(element).toBeInTheDocument();
        });
    });
});
