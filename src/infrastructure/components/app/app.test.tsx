import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './app';

test('renders Adri Lashes COMING SOON link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Adri Lashes COMING SOON/i);
    expect(linkElement).toBeInTheDocument();
});
