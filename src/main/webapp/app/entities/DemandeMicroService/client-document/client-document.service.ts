import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IClient_document } from 'app/shared/model/DemandeMicroService/client-document.model';

type EntityResponseType = HttpResponse<IClient_document>;
type EntityArrayResponseType = HttpResponse<IClient_document[]>;

@Injectable({ providedIn: 'root' })
export class Client_documentService {
    public resourceUrl = SERVER_API_URL + 'demandemicroservice/api/client-documents';

    constructor(protected http: HttpClient) {}

    create(client_document: IClient_document): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(client_document);
        return this.http
            .post<IClient_document>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    update(client_document: IClient_document): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(client_document);
        return this.http
            .put<IClient_document>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http
            .get<IClient_document>(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<IClient_document[]>(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    protected convertDateFromClient(client_document: IClient_document): IClient_document {
        const copy: IClient_document = Object.assign({}, client_document, {
            doc_date:
                client_document.doc_date != null && client_document.doc_date.isValid() ? client_document.doc_date.format(DATE_FORMAT) : null
        });
        return copy;
    }

    protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
        if (res.body) {
            res.body.doc_date = res.body.doc_date != null ? moment(res.body.doc_date) : null;
        }
        return res;
    }

    protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
        if (res.body) {
            res.body.forEach((client_document: IClient_document) => {
                client_document.doc_date = client_document.doc_date != null ? moment(client_document.doc_date) : null;
            });
        }
        return res;
    }
}
