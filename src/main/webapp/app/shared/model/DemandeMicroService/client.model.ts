import { IDemande } from 'app/shared/model/DemandeMicroService/demande.model';

export interface IClient {
    id?: number;
    client_nom?: string;
    client_numero?: number;
    demandes?: IDemande[];
}

export class Client implements IClient {
    constructor(public id?: number, public client_nom?: string, public client_numero?: number, public demandes?: IDemande[]) {}
}
