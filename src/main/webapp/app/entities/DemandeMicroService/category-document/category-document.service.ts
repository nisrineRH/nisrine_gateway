import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ICategory_document } from 'app/shared/model/DemandeMicroService/category-document.model';

type EntityResponseType = HttpResponse<ICategory_document>;
type EntityArrayResponseType = HttpResponse<ICategory_document[]>;

@Injectable({ providedIn: 'root' })
export class Category_documentService {
    public resourceUrl = SERVER_API_URL + 'demandemicroservice/api/category-documents';

    constructor(protected http: HttpClient) {}

    create(category_document: ICategory_document): Observable<EntityResponseType> {
        return this.http.post<ICategory_document>(this.resourceUrl, category_document, { observe: 'response' });
    }

    update(category_document: ICategory_document): Observable<EntityResponseType> {
        return this.http.put<ICategory_document>(this.resourceUrl, category_document, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ICategory_document>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<ICategory_document[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
