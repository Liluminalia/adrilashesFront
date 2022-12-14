import { SyntheticEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTreatments } from '../../../../../../features/treatments/hooks/useTreatments';
import { TreatmentI } from '../../../../../../features/treatments/models/treatments';

type formData = {
    title: string;
    img: string;
    description: string;
    price: number;
    time: number;
};

export function EditTreatmentPage() {
    const { id } = useParams();

    console.log(id);
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
            <div className="editTreatmentForm">
                <h2>Edita tu tratamiento</h2>
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
