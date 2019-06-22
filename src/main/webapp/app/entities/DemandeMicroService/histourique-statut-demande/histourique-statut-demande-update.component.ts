import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { JhiAlertService } from 'ng-jhipster';
import { IHistouriqueStatutDemande } from 'app/shared/model/DemandeMicroService/histourique-statut-demande.model';
import { HistouriqueStatutDemandeService } from './histourique-statut-demande.service';
import { IDemande } from 'app/shared/model/DemandeMicroService/demande.model';
import { DemandeService } from 'app/entities/DemandeMicroService/demande';

@Component({
    selector: 'jhi-histourique-statut-demande-update',
    templateUrl: './histourique-statut-demande-update.component.html'
})
export class HistouriqueStatutDemandeUpdateComponent implements OnInit {
    histouriqueStatutDemande: IHistouriqueStatutDemande;
    isSaving: boolean;

    demandes: IDemande[];
    userModificationDp: any;

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected histouriqueStatutDemandeService: HistouriqueStatutDemandeService,
        protected demandeService: DemandeService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ histouriqueStatutDemande }) => {
            this.histouriqueStatutDemande = histouriqueStatutDemande;
        });
        this.demandeService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IDemande[]>) => mayBeOk.ok),
                map((response: HttpResponse<IDemande[]>) => response.body)
            )
            .subscribe((res: IDemande[]) => (this.demandes = res), (res: HttpErrorResponse) => this.onError(res.message));
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.histouriqueStatutDemande.id !== undefined) {
            this.subscribeToSaveResponse(this.histouriqueStatutDemandeService.update(this.histouriqueStatutDemande));
        } else {
            this.subscribeToSaveResponse(this.histouriqueStatutDemandeService.create(this.histouriqueStatutDemande));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IHistouriqueStatutDemande>>) {
        result.subscribe(
            (res: HttpResponse<IHistouriqueStatutDemande>) => this.onSaveSuccess(),
            (res: HttpErrorResponse) => this.onSaveError()
        );
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

    trackDemandeById(index: number, item: IDemande) {
        return item.id;
    }
}
