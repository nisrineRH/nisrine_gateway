import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IClient_document } from 'app/shared/model/DemandeMicroService/client-document.model';
import { Client_documentService } from './client-document.service';

@Component({
    selector: 'jhi-client-document-delete-dialog',
    templateUrl: './client-document-delete-dialog.component.html'
})
export class Client_documentDeleteDialogComponent {
    client_document: IClient_document;

    constructor(
        protected client_documentService: Client_documentService,
        public activeModal: NgbActiveModal,
        protected eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.client_documentService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'client_documentListModification',
                content: 'Deleted an client_document'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-client-document-delete-popup',
    template: ''
})
export class Client_documentDeletePopupComponent implements OnInit, OnDestroy {
    protected ngbModalRef: NgbModalRef;

    constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ client_document }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(Client_documentDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.client_document = client_document;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate(['/client-document', { outlets: { popup: null } }]);
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate(['/client-document', { outlets: { popup: null } }]);
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
