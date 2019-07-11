import { Moment } from 'moment';
import { IDemande_document } from 'app/shared/model/DemandeMicroService/demande-document.model';

export interface IDemande {
    id?: number;
    dm_numero?: number;
    dm_libelle?: string;
    dm_statut?: string;
    dm_type?: string;
    dm_priorite?: string;
    intervenant?: string;
    description?: string;
    visibleSurInternet?: boolean;
    dateLivraisonSouhaitee?: Moment;
    dateAccordDevis?: Moment;
    dateLivraisonPrevue?: Moment;
    dateMiseEnRecette?: Moment;
    dateValidationRecette?: Moment;
    dateMiseEnProduction?: Moment;
    clientId?: number;
    histouriqueStatutDemandeId?: number;
    demande_documents?: IDemande_document[];
}

export class Demande implements IDemande {
    constructor(
        public id?: number,
        public dm_numero?: number,
        public dm_libelle?: string,
        public dm_statut?: string,
        public dm_type?: string,
        public dm_priorite?: string,
        public intervenant?: string,
        public description?: string,
        public visibleSurInternet?: boolean,
        public dateLivraisonSouhaitee?: Moment,
        public dateAccordDevis?: Moment,
        public dateLivraisonPrevue?: Moment,
        public dateMiseEnRecette?: Moment,
        public dateValidationRecette?: Moment,
        public dateMiseEnProduction?: Moment,
        public clientId?: number,
        public histouriqueStatutDemandeId?: number,
        public demande_documents?: IDemande_document[]
    ) {
        this.visibleSurInternet = this.visibleSurInternet || false;
    }
}
