import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../../store/store';
import { LoginPage } from './login.page';

describe('Given Login page', () => {
    describe('When we render the page', () => {
        test('Then it should display "Inicia sesion para pedir cita."', () => {
            render(
                <>
                    <Router>
                        <Provider store={appStore}>
                            <LoginPage />
                        </Provider>
                    </Router>
                </>
            );
            const element = screen.getByText(/Inicia sesion para pedir cita./i);
            expect(element).toBeInTheDocument();
        });
    });
});
