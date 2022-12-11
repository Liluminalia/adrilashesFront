import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../store/store';
import HomePage from '../pages/public/home/home.page';
import { Layout } from './layout';

describe('Given Footer component', () => {
    describe('When we render the component', () => {
        test('Then it should display "Adriana Salles"', () => {
            render(
                <>
                    <Router>
                        <Provider store={appStore}>
                            <Layout>
                                <HomePage />
                            </Layout>
                        </Provider>
                    </Router>
                </>
            );
            const element = screen.getByText(/cuidado estetico facial/i);
            expect(element).toBeInTheDocument();
        });
    });
});
