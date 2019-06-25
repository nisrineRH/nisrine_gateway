import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICategory_document } from 'app/shared/model/DemandeMicroService/category-document.model';

@Component({
    selector: 'jhi-category-document-detail',
    templateUrl: './category-document-detail.component.html'
})
export class Category_documentDetailComponent implements OnInit {
    category_document: ICategory_document;

    constructor(protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ category_document }) => {
            this.category_document = category_document;
        });
    }

    previousState() {
        window.history.back();
    }
}
