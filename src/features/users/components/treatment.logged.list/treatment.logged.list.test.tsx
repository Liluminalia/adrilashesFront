import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../../infrastructure/store/store';
import { TreatmentLoggedList } from './treatment.logged.list';
describe('Given TreatmentLoggedList component', () => {
    describe('When we render the component', () => {
        test('Then it should display the name of any in the list', () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <TreatmentLoggedList />
                    </Provider>
                </Router>
            );
            const element = screen.getByText(/cita/i);
            expect(element).toBeInTheDocument();
        });
    });
});
