import { LoginButton } from '../login/login';

export function Header() {
    return (
        <>
            <header className="header">
                <img
                    className="header__background"
                    src=""
                    alt="fondo de acuarela azul"
                />
                <h1 className="header__title">adri lashes</h1>
                <div className="header__login">
                    <LoginButton></LoginButton>
                </div>
            </header>
        </>
    );
}
