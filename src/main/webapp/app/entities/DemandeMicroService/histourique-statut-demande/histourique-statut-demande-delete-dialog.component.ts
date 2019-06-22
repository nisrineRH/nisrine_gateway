import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IHistouriqueStatutDemande } from 'app/shared/model/DemandeMicroService/histourique-statut-demande.model';
import { HistouriqueStatutDemandeService } from './histourique-statut-demande.service';

@Component({
    selector: 'jhi-histourique-statut-demande-delete-dialog',
    templateUrl: './histourique-statut-demande-delete-dialog.component.html'
})
export class HistouriqueStatutDemandeDeleteDialogComponent {
    histouriqueStatutDemande: IHistouriqueStatutDemande;

    constructor(
        protected histouriqueStatutDemandeService: HistouriqueStatutDemandeService,
        public activeModal: NgbActiveModal,
        protected eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.histouriqueStatutDemandeService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'histouriqueStatutDemandeListModification',
                content: 'Deleted an histouriqueStatutDemande'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-histourique-statut-demande-delete-popup',
    template: ''
})
export class HistouriqueStatutDemandeDeletePopupComponent implements OnInit, OnDestroy {
    protected ngbModalRef: NgbModalRef;

    constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ histouriqueStatutDemande }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(HistouriqueStatutDemandeDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.histouriqueStatutDemande = histouriqueStatutDemande;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate(['/histourique-statut-demande', { outlets: { popup: null } }]);
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate(['/histourique-statut-demande', { outlets: { popup: null } }]);
                        this.ngbModalRef = null;
                    }
                );
            }, 0);
        });
    }

    ngOnDestroy() {
        this.ngbModalRef = null;
    }
}
