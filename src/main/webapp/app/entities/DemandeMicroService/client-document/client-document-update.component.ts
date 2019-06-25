import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { JhiAlertService } from 'ng-jhipster';
import { IClient_document } from 'app/shared/model/DemandeMicroService/client-document.model';
import { Client_documentService } from './client-document.service';
import { IClient } from 'app/shared/model/DemandeMicroService/client.model';
import { ClientService } from 'app/entities/DemandeMicroService/client';
import { ICategory_document } from 'app/shared/model/DemandeMicroService/category-document.model';
import { Category_documentService } from 'app/entities/DemandeMicroService/category-document';

@Component({
    selector: 'jhi-client-document-update',
    templateUrl: './client-document-update.component.html'
})
export class Client_documentUpdateComponent implements OnInit {
    client_document: IClient_document;
    isSaving: boolean;

    clients: IClient[];

    category_documents: ICategory_document[];
    doc_dateDp: any;

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected client_documentService: Client_documentService,
        protected clientService: ClientService,
        protected category_documentService: Category_documentService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ client_document }) => {
            this.client_document = client_document;
        });
        this.clientService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IClient[]>) => mayBeOk.ok),
                map((response: HttpResponse<IClient[]>) => response.body)
            )
            .subscribe((res: IClient[]) => (this.clients = res), (res: HttpErrorResponse) => this.onError(res.message));
        this.category_documentService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<ICategory_document[]>) => mayBeOk.ok),
                map((response: HttpResponse<ICategory_document[]>) => response.body)
            )
            .subscribe(
                (res: ICategory_document[]) => (this.category_documents = res),
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.client_document.id !== undefined) {
            this.subscribeToSaveResponse(this.client_documentService.update(this.client_document));
        } else {
            this.subscribeToSaveResponse(this.client_documentService.create(this.client_document));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IClient_document>>) {
        result.subscribe((res: HttpResponse<IClient_document>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackCategory_documentById(index: number, item: ICategory_document) {
        return item.id;
    }
}
