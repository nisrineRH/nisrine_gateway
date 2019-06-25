import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ICategory_document } from 'app/shared/model/DemandeMicroService/category-document.model';
import { Category_documentService } from './category-document.service';

@Component({
    selector: 'jhi-category-document-update',
    templateUrl: './category-document-update.component.html'
})
export class Category_documentUpdateComponent implements OnInit {
    category_document: ICategory_document;
    isSaving: boolean;

    constructor(protected category_documentService: Category_documentService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ category_document }) => {
            this.category_document = category_document;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.category_document.id !== undefined) {
            this.subscribeToSaveResponse(this.category_documentService.update(this.category_document));
        } else {
            this.subscribeToSaveResponse(this.category_documentService.create(this.category_document));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<ICategory_document>>) {
        result.subscribe((res: HttpResponse<ICategory_document>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
