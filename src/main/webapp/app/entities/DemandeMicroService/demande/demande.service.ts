import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IDemande } from 'app/shared/model/DemandeMicroService/demande.model';

type EntityResponseType = HttpResponse<IDemande>;
type EntityArrayResponseType = HttpResponse<IDemande[]>;

@Injectable({ providedIn: 'root' })
export class DemandeService {
    public resourceUrl = SERVER_API_URL + 'demandemicroservice/api/demandes';

    constructor(protected http: HttpClient) {}

    create(demande: IDemande): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(demande);
        return this.http
            .post<IDemande>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    update(demande: IDemande): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(demande);
        return this.http
            .put<IDemande>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http
            .get<IDemande>(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<IDemande[]>(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    protected convertDateFromClient(demande: IDemande): IDemande {
        const copy: IDemande = Object.assign({}, demande, {
            dateLivraisonSouhaitee:
                demande.dateLivraisonSouhaitee != null && demande.dateLivraisonSouhaitee.isValid()
                    ? demande.dateLivraisonSouhaitee.format(DATE_FORMAT)
                    : null,
            dateAccordDevis:
                demande.dateAccordDevis != null && demande.dateAccordDevis.isValid() ? demande.dateAccordDevis.format(DATE_FORMAT) : null
        });
        return copy;
    }

    protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
        if (res.body) {
            res.body.dateLivraisonSouhaitee = res.body.dateLivraisonSouhaitee != null ? moment(res.body.dateLivraisonSouhaitee) : null;
            res.body.dateAccordDevis = res.body.dateAccordDevis != null ? moment(res.body.dateAccordDevis) : null;
        }
        return res;
    }

    protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
        if (res.body) {
            res.body.forEach((demande: IDemande) => {
                demande.dateLivraisonSouhaitee = demande.dateLivraisonSouhaitee != null ? moment(demande.dateLivraisonSouhaitee) : null;
                demande.dateAccordDevis = demande.dateAccordDevis != null ? moment(demande.dateAccordDevis) : null;
            });
        }
        return res;
    }
}
