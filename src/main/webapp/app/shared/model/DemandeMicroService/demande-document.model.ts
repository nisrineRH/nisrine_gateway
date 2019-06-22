export interface IDemande_document {
    id?: number;
    dm_doc_libelle?: string;
    dm_doc_type?: string;
    demandeId?: number;
}

export class Demande_document implements IDemande_document {
    constructor(public id?: number, public dm_doc_libelle?: string, public dm_doc_type?: string, public demandeId?: number) {}
}
