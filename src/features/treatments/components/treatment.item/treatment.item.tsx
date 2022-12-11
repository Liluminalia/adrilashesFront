import { Link } from 'react-router-dom';
import { TreatmentI } from '../../models/treatments';

export function TreatmentItem({ item }: { item: TreatmentI }) {
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
            </li>
        </>
    );
}
