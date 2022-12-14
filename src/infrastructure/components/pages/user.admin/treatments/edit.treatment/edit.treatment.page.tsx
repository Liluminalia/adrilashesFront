import { SyntheticEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTreatments } from '../../../../../../features/treatments/hooks/useTreatments';
import { TreatmentI } from '../../../../../../features/treatments/models/treatments';
import styles from './edit.treatment.module.css';
type formData = {
    title: string;
    img: string;
    description: string;
    price: number;
    time: number;
};

export function EditTreatmentPage() {
    const { id } = useParams();

    const navigate = useNavigate();

    const { handleUpdateTreatment, treatments } = useTreatments();
    const treatment = treatments.filter((item) => item.id === (id as string));
    const initialState: formData = {
        title: treatment[0].title,
        img: treatment[0].img,
        description: treatment[0].description,
        price: treatment[0].price,
        time: treatment[0].time,
    };
    const [formState, setFormState] = useState(initialState);
    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;

        setFormState({ ...formState, [element.name]: element.value });
    };
    const handleSubmit = async (ev: SyntheticEvent) => {
        ev.preventDefault();
        const editTreatment: TreatmentI = {
            ...formState,
            id: id as string,
            title: formState.title,
            img: formState.img,
            description: formState.description,
            price: formState.price,
            time: formState.time,
        };
        handleUpdateTreatment(editTreatment, id as string);
        navigate('/Treatments');
    };
    return (
        <>
            <div className={styles.editTreatment}>
                <h2 className={styles.editTreatmentTitle}>
                    Editar tratamiento
                </h2>
                <form
                    className={styles.editTreatmentForm}
                    onSubmit={handleSubmit}
                >
                    <div className={styles.editTreatmentForm__title}>
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={formState.title}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className={styles.editTreatmentForm__img}>
                        <input
                            type="img"
                            name="img"
                            value={formState.img}
                            onInput={handleInput}
                        />
                    </div>
                    <div className={styles.editTreatmentForm__description}>
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={formState.description}
                            onInput={handleInput}
                        />
                    </div>
                    <div className={styles.editTreatmentForm__price}>
                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            value={formState.price}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className={styles.editTreatmentForm__time}>
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
                        className={styles.editTreatmentForm__button}
                    >
                        Editar
                    </button>
                </form>
            </div>
        </>
    );
}
