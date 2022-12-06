import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './app';

test('renders probando link', () => {
    render(<App />);
    const linkElement = screen.getByText(/probando/i);
    expect(linkElement).toBeInTheDocument();
});