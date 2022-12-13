import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { mockStoreAdmin } from '../../../../infrastructure/mockStore/mockStore';
import { TreatmentAdminItem } from './treatment.admin.item';

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
        test('Then it should display the treatment title', () => {
            render(
                <Router>
                    <Provider store={mockStoreAdmin}>
                        <TreatmentAdminItem item={mockTreatment} />
                    </Provider>
                </Router>
            );
            const element = screen.getByText(/string/i);
            expect(element).toBeInTheDocument();
            fireEvent.click(screen.getByRole('button'));
        });
    });
});
