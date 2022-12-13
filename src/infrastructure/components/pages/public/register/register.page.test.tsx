import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockStoreAdmin } from '../../../../mockStore/mockStore';
import { mockStoreUnlogged } from '../../../../mockStore/mockStoreUnlogged';
import { appStore } from '../../../../store/store';
import { RegisterPage } from './register.page';
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: () => mockNavigate,
}));
describe('Given Register page', () => {
    describe('When we render the page', () => {
        test('Then it should display "Registrarse"', () => {
            render(
                <Provider store={appStore}>
                    <Router>
                        <RegisterPage />
                    </Router>
                </Provider>
            );
            const element = screen.getByText(/Registrarse/i);
            expect(element).toBeInTheDocument();
            fireEvent.input(screen.getByPlaceholderText('Name'));
            fireEvent.click(screen.getByRole('button'));
            expect(mockNavigate).toHaveBeenCalled();
        });
    });
});
