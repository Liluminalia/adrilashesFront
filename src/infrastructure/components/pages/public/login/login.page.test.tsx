import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../../store/store';
import { LoginPage } from './login.page';

describe('Given Login page', () => {
    describe('When we render the page', () => {
        test('Then it should display "No tienes cuenta"', async () => {
            render(
                <>
                    <Router>
                        <Provider store={appStore}>
                            <LoginPage />
                        </Provider>
                    </Router>
                </>
            );
            const element = screen.getByText(/No tienes cuenta/i);
            expect(element).toBeInTheDocument();
            fireEvent.click(screen.getByRole('button'));
            fireEvent.click(screen.getByRole('link'));
            fireEvent.input(await screen.findByPlaceholderText(/Usuario/i));
        });
    });
});
