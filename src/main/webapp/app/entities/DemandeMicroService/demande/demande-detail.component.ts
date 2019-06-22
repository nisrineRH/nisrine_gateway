import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IDemande } from 'app/shared/model/DemandeMicroService/demande.model';

@Component({
    selector: 'jhi-demande-detail',
    templateUrl: './demande-detail.component.html'
})
export class DemandeDetailComponent implements OnInit {
    demande: IDemande;

    constructor(protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ demande }) => {
            this.demande = demande;
        });
    }

    previousState() {
        window.history.back();
    }
}
