import { useUsers } from '../../../users/hooks/users/useUsers';
import { TreatmentI } from '../../../treatments/models/treatments';

export function TreatmentLoggedItem({ item }: { item: TreatmentI }) {
    const { handleAddAppointment } = useUsers();
    return (
        <>
            <li
                className="treatmentLogged__item"
                onClick={() => {
                    handleAddAppointment(item.id);
                }}
            >
                <div className="treatmentLogged__item--img">
                    <img src={item.img} alt={item.title} height="200" />
                </div>
                <div className="treatmentLogged__item--info">
                    <ul className="treatmentLogged__item--infoLogged">
                        <li className="treatmentLogged__item--infoLogged infoLogged--name">
                            {item.title} Price: {item.price} Time:{item.time}
                        </li>
                    </ul>
                </div>
            </li>
        </>
    );
}
