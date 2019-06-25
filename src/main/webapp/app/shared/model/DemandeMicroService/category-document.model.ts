import { IClient_document } from 'app/shared/model/DemandeMicroService/client-document.model';

export interface ICategory_document {
    id?: number;
    cat_numero?: number;
    cat_nom?: string;
    client_documents?: IClient_document[];
}

export class Category_document implements ICategory_document {
    constructor(public id?: number, public cat_numero?: number, public cat_nom?: string, public client_documents?: IClient_document[]) {}
}
