import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserRepository } from '../../../../../features/users/services/user.repository';
import styles from './register.page.module.css';
type formData = {
    name: string;
    email: string;
    password: string;
    repeatPasswd: string;
    phone: string;
    role: 'admin' | 'user';
};

export function RegisterPage() {
    const userRepo = new UserRepository();
    const navigate = useNavigate();
    const initialState: formData = {
        name: '',
        email: '',
        password: '',
        repeatPasswd: '',
        phone: '',
        role: 'user',
    };
    const [formState, setFormState] = useState(initialState);
    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormState({ ...formState, [element.name]: element.value });
    };
    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        userRepo.register(formState);
        navigate('/Login');
    };
    return (
        <>
            <div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className="form__name">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formState.name}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="form__email">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formState.email}
                            onInput={handleInput}
                        />
                    </div>
                    <div className="form__password">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formState.password}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="form__phone">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={formState.phone}
                            onInput={handleInput}
                            required
                            minLength={9}
                            maxLength={9}
                        />
                    </div>
                    <button type="submit" className={styles.form__send}>
                        Registrarse
                    </button>
                </form>
            </div>
        </>
    );
}
