import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './app';

test('renders Home page link', () => {
    render(
        <Router>
            <App />
        </Router>
    );
    const linkElement = screen.getByText(/Home page/i);
    expect(linkElement).toBeInTheDocument();
});
