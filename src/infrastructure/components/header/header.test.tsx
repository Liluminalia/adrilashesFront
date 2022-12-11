import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../store/store';
import { Header } from './header';

describe('Given Header component', () => {
    describe('When we render the component', () => {
        test('Then it should display "adri lashes"', () => {
            render(
                <>
                    <Router>
                        <Provider store={appStore}>
                            <Header />
                        </Provider>
                    </Router>
                </>
            );
            const element = screen.getByText(/adri lashes/i);
            const element2 = screen.getAllByAltText(/logo adri lashes/i);

            expect(element).toBeInTheDocument();
            expect(element2[0]).toBeInTheDocument();
        });
    });
});
