import { SyntheticEvent, useState } from 'react';
import { useTreatments } from '../../../../../../features/treatments/hooks/useTreatments';
import { TreatmentI } from '../../../../../../features/treatments/models/treatments';

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
            <div className="addTreatmentForm">
                <h2>Añade un tratamiento</h2>
                <form onSubmit={handleSubmit}>
                    <div className="addTreatmentForm__title">
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={formState.title}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="addTreatmentForm__img">
                        <input
                            type="img"
                            name="img"
                            placeholder="Url de la imagen"
                            value={formState.img}
                            onInput={handleInput}
                        />
                    </div>
                    <div className="addTreatmentForm__description">
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={formState.description}
                            onInput={handleInput}
                        />
                    </div>
                    <div className="addTreatmentForm__price">
                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            value={formState.price}
                            onInput={handleInput}
                            required
                        />
                        precio
                    </div>
                    <div className="addTreatmentForm__time">
                        <input
                            type="number"
                            name="time"
                            placeholder="Time"
                            value={formState.time}
                            onInput={handleInput}
                            required
                        />
                        duracion
                    </div>
                    <button type="submit" className="addTreatmentForm__button">
                        Crear tratamiento
                    </button>
                </form>
            </div>
        </>
    );
}
