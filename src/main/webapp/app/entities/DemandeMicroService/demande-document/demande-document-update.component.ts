import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IDemande_document } from 'app/shared/model/DemandeMicroService/demande-document.model';
import { Demande_documentService } from './demande-document.service';
import { IDemande } from 'app/shared/model/DemandeMicroService/demande.model';
import { DemandeService } from 'app/entities/DemandeMicroService/demande';

@Component({
    selector: 'jhi-demande-document-update',
    templateUrl: './demande-document-update.component.html'
})
export class Demande_documentUpdateComponent implements OnInit {
    demande_document: IDemande_document;
    isSaving: boolean;

    demandes: IDemande[];

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected demande_documentService: Demande_documentService,
        protected demandeService: DemandeService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ demande_document }) => {
            this.demande_document = demande_document;
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
        if (this.demande_document.id !== undefined) {
            this.subscribeToSaveResponse(this.demande_documentService.update(this.demande_document));
        } else {
            this.subscribeToSaveResponse(this.demande_documentService.create(this.demande_document));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IDemande_document>>) {
        result.subscribe((res: HttpResponse<IDemande_document>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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
