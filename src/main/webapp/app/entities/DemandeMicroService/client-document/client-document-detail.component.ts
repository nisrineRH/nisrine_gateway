import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IClient_document } from 'app/shared/model/DemandeMicroService/client-document.model';

@Component({
    selector: 'jhi-client-document-detail',
    templateUrl: './client-document-detail.component.html'
})
export class Client_documentDetailComponent implements OnInit {
    client_document: IClient_document;

    constructor(protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ client_document }) => {
            this.client_document = client_document;
        });
    }

    previousState() {
        window.history.back();
    }
}
