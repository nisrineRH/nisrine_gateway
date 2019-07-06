import { IDemande } from 'app/shared/model/DemandeMicroService/demande.model';
import { IClient_document } from 'app/shared/model/DemandeMicroService/client-document.model';

export interface IClient {
    id?: number;
    client_nom?: string;
    client_numero?: number;
    faitSaMiseEnProduction?: boolean;
    demandes?: IDemande[];
    client_documents?: IClient_document[];
}

export class Client implements IClient {
    constructor(
        public id?: number,
        public client_nom?: string,
        public client_numero?: number,
        public faitSaMiseEnProduction?: boolean,
        public demandes?: IDemande[],
        public client_documents?: IClient_document[]
    ) {
        this.faitSaMiseEnProduction = this.faitSaMiseEnProduction || false;
    }
}
