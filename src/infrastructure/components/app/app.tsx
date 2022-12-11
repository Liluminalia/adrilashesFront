import { AppRoutes } from '../all.routes/routes/app.routes';
import { Layout } from '../layout/layout';
import './app.css';

export function App() {
    return (
        <div className="app">
            <Layout>
                <AppRoutes></AppRoutes>
            </Layout>
        </div>
    );
}
