import { Link } from 'react-router-dom';
import { useUsers } from '../../../users/hooks/users/useUsers';
import { TreatmentI } from '../../../treatments/models/treatments';

export function TreatmentLoggedItem({ item }: { item: TreatmentI }) {
    const { handleAddAppointment } = useUsers();
    return (
        <>
            <li className="treatmentlist__item">
                <div className="treatmentlist__item--img">
                    <Link to={'/treatments/' + item.id} key={item.id}>
                        <img src={item.img} alt={item.title} height="200" />
                    </Link>
                </div>
                <div className="treatmentlist__item--info">
                    <ul className="treatmentlist__item--infolist">
                        <li className="treatmentlist__item--infolist infolist--name">
                            {item.title} Price: {item.price} Time:{item.time}
                        </li>
                    </ul>
                </div>
                <div
                    onClick={() => {
                        handleAddAppointment(item.id);
                    }}
                ></div>
            </li>
        </>
    );
}
