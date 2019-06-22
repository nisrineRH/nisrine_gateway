import { Moment } from 'moment';

export interface IHistouriqueStatutDemande {
    id?: number;
    userModification?: Moment;
    msgMail?: string;
    desinataireDuMail?: string;
    dm_statut?: string;
    demandeId?: number;
}

export class HistouriqueStatutDemande implements IHistouriqueStatutDemande {
    constructor(
        public id?: number,
        public userModification?: Moment,
        public msgMail?: string,
        public desinataireDuMail?: string,
        public dm_statut?: string,
        public demandeId?: number
    ) {}
}
