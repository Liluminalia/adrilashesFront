import { Link } from 'react-router-dom';
import { useTreatments } from '../../../treatments/hooks/useTreatments';
import { TreatmentI } from '../../../treatments/models/treatments';

export function TreatmentAdminItem({ item }: { item: TreatmentI }) {
    const { handleDeleteTreatment } = useTreatments();
    return (
        <>
            <li className="treatmentAdminlist__item">
                <div className="treatmentAdminlist__item--img">
                    <Link to={'/treatmentAdmins/' + item.id} key={item.id}>
                        <img src={item.img} alt={item.title} height="200" />
                    </Link>
                </div>
                <div className="treatmentAdminlist__item--info">
                    <ul className="treatmentAdminlist__item--infolist">
                        <li className="treatmentAdminlist__item--infolist infolist--name">
                            {item.title} Price: {item.price} Time:{item.time}
                        </li>
                    </ul>
                </div>
                <div>
                    <Link to={'/EditTreatment/' + item.id}>✏️</Link>
                </div>
                <button
                    onClick={() => {
                        handleDeleteTreatment(item);
                    }}
                >
                    Eliminar tratamiento
                </button>
            </li>
        </>
    );
}
