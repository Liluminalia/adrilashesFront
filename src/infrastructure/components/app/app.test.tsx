import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { appStore } from '../../store/store';
import { App } from './app';

test('renders Home page link', () => {
    render(
        <Router>
            <Provider store={appStore}>
                <App />
            </Provider>
        </Router>
    );
    const linkElement = screen.getByText(/Adriana Salles/i);
    expect(linkElement).toBeInTheDocument();
});
