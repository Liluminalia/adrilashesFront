import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';
import { appStore } from '../../../../infrastructure/store/store';
import { TreatmentLoggedItem } from './treatment.logged.item';

describe('Given TreatmentLoggedItem component', () => {
    describe('When we render the component', () => {
        const mockTreatment = {
            id: 'f',
            title: 'string',
            img: 'string',
            description: 'string',
            price: 3,
            time: 3,
        };
        test('Then it should display the treatment title', () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <TreatmentLoggedItem item={mockTreatment} />
                    </Provider>
                </Router>
            );
            const element = screen.getByText(/string/i);
            expect(element).toBeInTheDocument();
            // falta cubrir esa linea
            // expect(screen.getByRole('button')).toBeInTheDocument();
        });
    });
});
