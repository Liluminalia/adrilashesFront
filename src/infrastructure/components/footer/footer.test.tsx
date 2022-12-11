import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../store/store';
import { Footer } from './footer';

describe('Given Footer component', () => {
    describe('When we render the component', () => {
        test('Then it should display "Adriana Salles"', () => {
            render(
                <>
                    <Router>
                        <Provider store={appStore}>
                            <Footer />
                        </Provider>
                    </Router>
                </>
            );
            const element = screen.getByText(/Adriana Salles/i);
            expect(element).toBeInTheDocument();
        });
    });
});
