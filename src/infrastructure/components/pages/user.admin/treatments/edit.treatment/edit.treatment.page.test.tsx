import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../../../store/store';
import { EditTreatmentPage } from './edit.treatment.page';

describe('Given Edit treatment page', () => {
    describe('When we render the page', () => {
        test('Then it should display "Edita tu tratamiento"', () => {
            render(
                <>
                    <Router>
                        <Provider store={appStore}>
                            <EditTreatmentPage />
                        </Provider>
                    </Router>
                </>
            );
            const element = screen.getByText(/Edita tu tratamiento/i);
            expect(element).toBeInTheDocument();
            fireEvent.click(screen.getByRole('button'));
            fireEvent.input(screen.getByPlaceholderText('Title'));
        });
    });
});
