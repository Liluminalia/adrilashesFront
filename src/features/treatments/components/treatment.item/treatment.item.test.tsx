import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';
import { appStore } from '../../../../infrastructure/store/store';
import { TreatmentItem } from './treatment.item';

describe('Given TreatmentAdminItem component', () => {
    describe('When we render the component', () => {
        const mockTreatment = {
            id: 'f',
            title: 'string',
            img: 'string',
            description: 'string',
            price: 3,
            time: 3,
        };
        test('Then it should display "Precio"', () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <TreatmentItem item={mockTreatment} />
                    </Provider>
                </Router>
            );
            const element = screen.getByText(/Precio/i);
            expect(element).toBeInTheDocument();
        });
    });
});
