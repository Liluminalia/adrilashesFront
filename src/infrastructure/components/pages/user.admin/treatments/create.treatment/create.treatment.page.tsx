import { SyntheticEvent, useState } from 'react';
import { useTreatments } from '../../../../../../features/treatments/hooks/useTreatments';
import { TreatmentI } from '../../../../../../features/treatments/models/treatments';
import styles from './create.treatment.module.css';
type formTreatmentData = {
    title: string;
    img: string;
    description: string;
    price: number;
    time: number;
};

export function CreateTreatmentPage() {
    const { handleAddTreatment } = useTreatments();

    const initialState: formTreatmentData = {
        title: '',
        img: '',
        description: '',
        price: 0,
        time: 0,
    };
    const [formState, setFormState] = useState(initialState);
    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormState({ ...formState, [element.name]: element.value });
    };
    const handleSubmit = async (ev: SyntheticEvent) => {
        ev.preventDefault();
        const newTreatment: Partial<TreatmentI> = {
            ...formState,
            title: formState.title,
            img: formState.img,
            description: formState.description,
            price: formState.price,
            time: formState.time,
        };
        handleAddTreatment(newTreatment);
    };
    return (
        <>
            <div className={styles.addTreatment}>
                <h2>Añadir tratamiento</h2>
                <form
                    className={styles.addTreatmentForm}
                    onSubmit={handleSubmit}
                >
                    <div className={styles.addTreatmentForm__title}>
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={formState.title}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className={styles.addTreatmentForm__img}>
                        <input
                            type="img"
                            name="img"
                            placeholder="Url de la imagen"
                            value={formState.img}
                            onInput={handleInput}
                        />
                    </div>
                    <div className={styles.addTreatmentForm__description}>
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={formState.description}
                            onInput={handleInput}
                        />
                    </div>
                    <div className={styles.addTreatmentForm__price}>
                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            value={formState.price}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className={styles.addTreatmentForm__time}>
                        <input
                            type="number"
                            name="time"
                            placeholder="Time"
                            value={formState.time}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className={styles.addTreatmentForm__button}
                    >
                        Crear tratamiento
                    </button>
                </form>
            </div>
        </>
    );
}
