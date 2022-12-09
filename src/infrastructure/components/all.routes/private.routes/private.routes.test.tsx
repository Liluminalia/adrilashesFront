import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppRoutes } from '../routes/app.routes';

describe('Given AppRoutes component', () => {
    describe('When we render the component And the route is MakeAppointment', () => {
        render(
            <>
                <Router
                    initialEntries={['/', '/MakeAppointment']}
                    initialIndex={0}
                >
                    <AppRoutes />
                </Router>
            </>
        );
        test('Then it should display the Home page, because we are not authenticated', () => {
            const element = screen.getByText(/Home/i);
            expect(element).toBeInTheDocument();
        });
    });
});
