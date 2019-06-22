import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IDemande_document } from 'app/shared/model/DemandeMicroService/demande-document.model';

type EntityResponseType = HttpResponse<IDemande_document>;
type EntityArrayResponseType = HttpResponse<IDemande_document[]>;

@Injectable({ providedIn: 'root' })
export class Demande_documentService {
    public resourceUrl = SERVER_API_URL + 'demandemicroservice/api/demande-documents';

    constructor(protected http: HttpClient) {}

    create(demande_document: IDemande_document): Observable<EntityResponseType> {
        return this.http.post<IDemande_document>(this.resourceUrl, demande_document, { observe: 'response' });
    }

    update(demande_document: IDemande_document): Observable<EntityResponseType> {
        return this.http.put<IDemande_document>(this.resourceUrl, demande_document, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IDemande_document>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IDemande_document[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
