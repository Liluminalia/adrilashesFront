import { SyntheticEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TreatmentRepository } from '../../../../../../features/treatments/services/treatment.repository';

type formData = {
    title: string;
    img: string;
    description: string;
    price: number;
    time: number;
};

export function EditTreatmentPage() {
    const { id } = useParams();
    const treatmentRepo = new TreatmentRepository();

    const initialState: formData = {
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
        await treatmentRepo.updateTreatment(formState, id as string);
    };
    return (
        <>
            <div className="editTreatmentForm">
                <h2>Editar</h2>
                <form onSubmit={handleSubmit}>
                    <div className="editTreatmentForm__title">
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={formState.title}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="editTreatmentForm__img">
                        <input
                            type="img"
                            name="img"
                            value={formState.img}
                            onInput={handleInput}
                        />
                    </div>
                    <div className="editTreatmentForm__description">
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={formState.description}
                            onInput={handleInput}
                        />
                    </div>
                    <div className="editTreatmentForm__price">
                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            value={formState.price}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="editTreatmentForm__time">
                        <input
                            type="number"
                            name="time"
                            placeholder="Time"
                            value={formState.time}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <button type="submit" className="editTreatmentForm__button">
                        Editar tratamiento
                    </button>
                </form>
            </div>
        </>
    );
}
