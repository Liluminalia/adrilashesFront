import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../store/store';
import { Footer } from './footer';

describe('Given Footer component', () => {
    describe('When we render the component', () => {
        test('Then it should display "cuidado estetico facial"', () => {
            render(
                <>
                    <Router>
                        <Provider store={appStore}>
                            <Footer />
                        </Provider>
                    </Router>
                </>
            );
            const element = screen.getByText(/cuidado estetico facial/i);
            expect(element).toBeInTheDocument();
        });
    });
});
