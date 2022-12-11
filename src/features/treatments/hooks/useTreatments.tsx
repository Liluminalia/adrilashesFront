import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../infrastructure/store/store';
import { TreatmentI } from '../models/treatments';
import * as ac from '../reducers/action.creators';
import { TreatmentRepository } from '../services/treatment.repository';

export const useTreatments = () => {
    const treatments = useSelector((state: RootState) => state.treatments);
    const dispatcher = useDispatch();
    const repositoryTreatment = useMemo(() => new TreatmentRepository(), []);

    useEffect(() => {
        repositoryTreatment
            .getAllTreatments()
            .then((treatments) =>
                dispatcher(ac.getAllActionCreator(treatments.treatments))
            );
    }, [repositoryTreatment, dispatcher]);

    const handleAddTreatment = (newTreatment: Partial<TreatmentI>) => {
        repositoryTreatment
            .addTreatment(newTreatment)
            .then((treatment: TreatmentI) =>
                dispatcher(ac.addActionCreator(treatment))
            );
    };
    const handleUpdateTreatment = (
        updateTreatment: Partial<TreatmentI>,
        treatmentId: string
    ) => {
        repositoryTreatment
            .updateTreatment(updateTreatment, treatmentId)
            .then((treatment: TreatmentI) =>
                dispatcher(ac.updateActionCreator(treatment))
            );
    };

    const handleDeleteTreatment = (treatment: TreatmentI) => {
        repositoryTreatment
            .deleteTreatment(treatment.id)
            .then(() => dispatcher(ac.deleteActionCreator(treatment)));
    };

    return {
        treatments,
        handleAddTreatment,
        handleUpdateTreatment,
        handleDeleteTreatment,
    };
};
