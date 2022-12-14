import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockStoreAdmin } from '../../../../infrastructure/mockStore/mockStore';
import { TreatmentLoggedList } from './treatment.logged.list';
describe('Given TreatmentLoggedList component', () => {
    describe('When we render the component', () => {
        const mockTreatment = {
            id: 'f',
            title: 'string',
            img: 'string',
            description: 'string',
            price: 3,
            time: 3,
        };
        test('Then it should display the name of any in the list', () => {
            render(
                <Router>
                    <Provider store={mockStoreAdmin}>
                        <TreatmentLoggedList item={[mockTreatment]} />
                    </Provider>
                </Router>
            );
            const element = screen.getByText(/quiero cita/i);
            expect(element).toBeInTheDocument();
        });
    });
});
