import { SyntheticEvent, useState } from 'react';
import { redirect } from 'react-router-dom';
import { useUsers } from '../../../../../features/users/hooks/users/useUsers';

type formData = {
    name: string;
    password: string;
};

export function LoginPage() {
    const { handleLogin, user } = useUsers();

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
        if (user.token) localStorage.setItem('token', user.token);
        redirect('http://localhost:3000/MakeAppointment');
    };

    return (
        <>
            <section>
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
                    <a href="http://localhost:3000/Register">haz click aqui</a>
                </p>
            </section>
        </>
    );
}
