import { Link } from 'react-router-dom';

function HomeAdminPage() {
    return (
        <div className="main">
            <h2>Buenos dias Adriana, ¿que deseas hacer?</h2>
            <div>
                <Link to={'/Users'}>gestionar citas</Link>
            </div>
            <div>
                <Link to={'/Treatments'}>gestionar tratamientos</Link>
            </div>
        </div>
    );
}

export default HomeAdminPage;
