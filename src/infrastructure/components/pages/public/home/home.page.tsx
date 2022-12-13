import React from 'react';
import { TreatmentList } from '../../../../../features/treatments/components/treatment.list/treatment.list';
import styles from './home.page.module.css';
function HomePage() {
    return (
        <div className={styles.main}>
            <TreatmentList></TreatmentList>
        </div>
    );
}
export default HomePage;
