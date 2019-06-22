import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IDemande_document } from 'app/shared/model/DemandeMicroService/demande-document.model';

@Component({
    selector: 'jhi-demande-document-detail',
    templateUrl: './demande-document-detail.component.html'
})
export class Demande_documentDetailComponent implements OnInit {
    demande_document: IDemande_document;

    constructor(protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ demande_document }) => {
            this.demande_document = demande_document;
        });
    }

    previousState() {
        window.history.back();
    }
}
