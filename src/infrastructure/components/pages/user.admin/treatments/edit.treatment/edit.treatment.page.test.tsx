import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import {
    mockStoreEdit,
    mockTreatment,
} from '../../../../../mockStore/mockStoreEdit';
import { EditTreatmentPage } from './edit.treatment.page';
import { useTreatments } from '../../../../../../features/treatments/hooks/useTreatments';
import userEvent from '@testing-library/user-event';
//jest.fn().mockResolvedValue(
const mockParams = { id: '241354' };
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => mockParams,
}));
jest.mock('../../../../../../features/treatments/hooks/useTreatments');

describe('Given Edit treatment page', () => {
    describe('When we render the page', () => {
        test('Then it should display "Editar tratamiento"', () => {
            (useTreatments as jest.Mock).mockReturnValue({
                handleUpdateTreatment: jest.fn(),
                treatments: [mockTreatment],
            });

            render(
                <>
                    <Router>
                        <Provider store={mockStoreEdit}>
                            <EditTreatmentPage />
                        </Provider>
                    </Router>
                </>
            );
            const element = screen.getByText(/Editar tratamiento/i);
            expect(element).toBeInTheDocument();
            const input = screen.getByPlaceholderText('Time');
            const button = screen.getByRole('button');
            userEvent.type(input, 'Pepe');
            userEvent.click(button);
            expect(useTreatments().handleUpdateTreatment).toHaveBeenCalled();
        });
    });
});
