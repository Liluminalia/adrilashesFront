import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import {
    mockStoreAdmin,
    treatmentMock,
} from '../../../../infrastructure/mockStore/mockStore';
import { TreatmentAdminList } from './treatment.admin.list';
describe('Given TreatmentAdminList component', () => {
    describe('When we render the component', () => {
        test('Then it should display the name of any in the list', async () => {
            render(
                <Router>
                    <Provider store={mockStoreAdmin}>
                        <TreatmentAdminList item={[treatmentMock]} />
                    </Provider>
                </Router>
            );
            const element = await screen.findByText(/patata/i);
            expect(element).toBeInTheDocument();
        });
    });
});
