import { Link } from 'react-router-dom';
import { useTreatments } from '../../../treatments/hooks/useTreatments';
import { TreatmentI } from '../../../treatments/models/treatments';

export function TreatmentAdminItem({ item }: { item: TreatmentI }) {
    const { handleDeleteTreatment } = useTreatments();
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
                <div>
                    <a href={'http://localhost:3000/EditTreatment/' + item.id}>
                        ✏️
                    </a>
                </div>
                <div
                    onClick={() => {
                        handleDeleteTreatment(item);
                    }}
                ></div>
            </li>
        </>
    );
}
