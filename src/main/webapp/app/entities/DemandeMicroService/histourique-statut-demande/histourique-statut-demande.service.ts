import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IHistouriqueStatutDemande } from 'app/shared/model/DemandeMicroService/histourique-statut-demande.model';

type EntityResponseType = HttpResponse<IHistouriqueStatutDemande>;
type EntityArrayResponseType = HttpResponse<IHistouriqueStatutDemande[]>;

@Injectable({ providedIn: 'root' })
export class HistouriqueStatutDemandeService {
    public resourceUrl = SERVER_API_URL + 'demandemicroservice/api/histourique-statut-demandes';

    constructor(protected http: HttpClient) {}

    create(histouriqueStatutDemande: IHistouriqueStatutDemande): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(histouriqueStatutDemande);
        return this.http
            .post<IHistouriqueStatutDemande>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    update(histouriqueStatutDemande: IHistouriqueStatutDemande): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(histouriqueStatutDemande);
        return this.http
            .put<IHistouriqueStatutDemande>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http
            .get<IHistouriqueStatutDemande>(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<IHistouriqueStatutDemande[]>(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    protected convertDateFromClient(histouriqueStatutDemande: IHistouriqueStatutDemande): IHistouriqueStatutDemande {
        const copy: IHistouriqueStatutDemande = Object.assign({}, histouriqueStatutDemande, {
            userModification:
                histouriqueStatutDemande.userModification != null && histouriqueStatutDemande.userModification.isValid()
                    ? histouriqueStatutDemande.userModification.format(DATE_FORMAT)
                    : null
        });
        return copy;
    }

    protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
        if (res.body) {
            res.body.userModification = res.body.userModification != null ? moment(res.body.userModification) : null;
        }
        return res;
    }

    protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
        if (res.body) {
            res.body.forEach((histouriqueStatutDemande: IHistouriqueStatutDemande) => {
                histouriqueStatutDemande.userModification =
                    histouriqueStatutDemande.userModification != null ? moment(histouriqueStatutDemande.userModification) : null;
            });
        }
        return res;
    }
}
