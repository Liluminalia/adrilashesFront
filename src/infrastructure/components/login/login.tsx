import { Link } from 'react-router-dom';

export function LoginButton() {
    return (
        <>
            <section>
                <Link to={'/Login'}>
                    <img
                        src="./assets/logo.jpg"
                        alt="logo adri lashes"
                        width={75}
                    />
                </Link>
            </section>
        </>
    );
}
