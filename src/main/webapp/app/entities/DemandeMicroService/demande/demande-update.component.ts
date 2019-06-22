import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { JhiAlertService } from 'ng-jhipster';
import { IDemande } from 'app/shared/model/DemandeMicroService/demande.model';
import { DemandeService } from './demande.service';
import { IClient } from 'app/shared/model/DemandeMicroService/client.model';
import { ClientService } from 'app/entities/DemandeMicroService/client';
import { IHistouriqueStatutDemande } from 'app/shared/model/DemandeMicroService/histourique-statut-demande.model';
import { HistouriqueStatutDemandeService } from 'app/entities/DemandeMicroService/histourique-statut-demande';

@Component({
    selector: 'jhi-demande-update',
    templateUrl: './demande-update.component.html'
})
export class DemandeUpdateComponent implements OnInit {
    demande: IDemande;
    isSaving: boolean;

    clients: IClient[];

    histouriquestatutdemandes: IHistouriqueStatutDemande[];
    dateLivraisonSouhaiteeDp: any;

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected demandeService: DemandeService,
        protected clientService: ClientService,
        protected histouriqueStatutDemandeService: HistouriqueStatutDemandeService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ demande }) => {
            this.demande = demande;
        });
        this.clientService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IClient[]>) => mayBeOk.ok),
                map((response: HttpResponse<IClient[]>) => response.body)
            )
            .subscribe((res: IClient[]) => (this.clients = res), (res: HttpErrorResponse) => this.onError(res.message));
        this.histouriqueStatutDemandeService
            .query({ filter: 'demande-is-null' })
            .pipe(
                filter((mayBeOk: HttpResponse<IHistouriqueStatutDemande[]>) => mayBeOk.ok),
                map((response: HttpResponse<IHistouriqueStatutDemande[]>) => response.body)
            )
            .subscribe(
                (res: IHistouriqueStatutDemande[]) => {
                    if (!this.demande.histouriqueStatutDemandeId) {
                        this.histouriquestatutdemandes = res;
                    } else {
                        this.histouriqueStatutDemandeService
                            .find(this.demande.histouriqueStatutDemandeId)
                            .pipe(
                                filter((subResMayBeOk: HttpResponse<IHistouriqueStatutDemande>) => subResMayBeOk.ok),
                                map((subResponse: HttpResponse<IHistouriqueStatutDemande>) => subResponse.body)
                            )
                            .subscribe(
                                (subRes: IHistouriqueStatutDemande) => (this.histouriquestatutdemandes = [subRes].concat(res)),
                                (subRes: HttpErrorResponse) => this.onError(subRes.message)
                            );
                    }
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.demande.id !== undefined) {
            this.subscribeToSaveResponse(this.demandeService.update(this.demande));
        } else {
            this.subscribeToSaveResponse(this.demandeService.create(this.demande));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IDemande>>) {
        result.subscribe((res: HttpResponse<IDemande>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackClientById(index: number, item: IClient) {
        return item.id;
    }

    trackHistouriqueStatutDemandeById(index: number, item: IHistouriqueStatutDemande) {
        return item.id;
    }
}
