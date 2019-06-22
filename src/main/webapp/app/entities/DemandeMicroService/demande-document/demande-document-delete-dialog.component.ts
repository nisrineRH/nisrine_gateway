import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IDemande_document } from 'app/shared/model/DemandeMicroService/demande-document.model';
import { Demande_documentService } from './demande-document.service';

@Component({
    selector: 'jhi-demande-document-delete-dialog',
    templateUrl: './demande-document-delete-dialog.component.html'
})
export class Demande_documentDeleteDialogComponent {
    demande_document: IDemande_document;

    constructor(
        protected demande_documentService: Demande_documentService,
        public activeModal: NgbActiveModal,
        protected eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.demande_documentService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'demande_documentListModification',
                content: 'Deleted an demande_document'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-demande-document-delete-popup',
    template: ''
})
export class Demande_documentDeletePopupComponent implements OnInit, OnDestroy {
    protected ngbModalRef: NgbModalRef;

    constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ demande_document }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(Demande_documentDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.demande_document = demande_document;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate(['/demande-document', { outlets: { popup: null } }]);
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate(['/demande-document', { outlets: { popup: null } }]);
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
