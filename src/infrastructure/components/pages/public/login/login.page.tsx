import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUsers } from '../../../../../features/users/hooks/users/useUsers';
import styles from './login.page.module.css';
type formData = {
    name: string;
    password: string;
};

export function LoginPage() {
    const { handleLogin } = useUsers();

    const initialLoginState: formData = {
        name: '',
        password: '',
    };
    const [formLoginState, setFormState] = useState(initialLoginState);

    const handleLoginInput = (ev: SyntheticEvent) => {
        const loginInfo = ev.target as HTMLFormElement;
        setFormState({ ...formLoginState, [loginInfo.name]: loginInfo.value });
    };

    const handleLoginSubmit = async (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleLogin(formLoginState);
    };

    return (
        <>
            <section className={styles.loginPage}>
                <form onSubmit={handleLoginSubmit}>
                    <input
                        type="name"
                        name="name"
                        placeholder="Usuario"
                        value={formLoginState.name}
                        onInput={handleLoginInput}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={formLoginState.password}
                        onInput={handleLoginInput}
                        required
                    />

                    <button type="submit">Continuar</button>
                </form>
                <p>
                    Inicia sesion para pedir cita. Si aun no tienes, para
                    registrarte
                    <Link to={'/Register'}>haz click aquí</Link>
                </p>
            </section>
        </>
    );
}
