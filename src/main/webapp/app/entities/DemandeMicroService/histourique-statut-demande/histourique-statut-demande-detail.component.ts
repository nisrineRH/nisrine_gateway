import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IHistouriqueStatutDemande } from 'app/shared/model/DemandeMicroService/histourique-statut-demande.model';

@Component({
    selector: 'jhi-histourique-statut-demande-detail',
    templateUrl: './histourique-statut-demande-detail.component.html'
})
export class HistouriqueStatutDemandeDetailComponent implements OnInit {
    histouriqueStatutDemande: IHistouriqueStatutDemande;

    constructor(protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ histouriqueStatutDemande }) => {
            this.histouriqueStatutDemande = histouriqueStatutDemande;
        });
    }

    previousState() {
        window.history.back();
    }
}
