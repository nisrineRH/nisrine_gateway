import { Moment } from 'moment';

export interface IClient_document {
    id?: number;
    doc_chemin?: string;
    doc_libelle?: string;
    doc_date?: Moment;
    clientId?: number;
    category_documentId?: number;
}

export class Client_document implements IClient_document {
    constructor(
        public id?: number,
        public doc_chemin?: string,
        public doc_libelle?: string,
        public doc_date?: Moment,
        public clientId?: number,
        public category_documentId?: number
    ) {}
}
