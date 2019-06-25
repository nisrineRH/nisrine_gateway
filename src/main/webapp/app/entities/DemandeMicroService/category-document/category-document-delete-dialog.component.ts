import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ICategory_document } from 'app/shared/model/DemandeMicroService/category-document.model';
import { Category_documentService } from './category-document.service';

@Component({
    selector: 'jhi-category-document-delete-dialog',
    templateUrl: './category-document-delete-dialog.component.html'
})
export class Category_documentDeleteDialogComponent {
    category_document: ICategory_document;

    constructor(
        protected category_documentService: Category_documentService,
        public activeModal: NgbActiveModal,
        protected eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.category_documentService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'category_documentListModification',
                content: 'Deleted an category_document'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-category-document-delete-popup',
    template: ''
})
export class Category_documentDeletePopupComponent implements OnInit, OnDestroy {
    protected ngbModalRef: NgbModalRef;

    constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ category_document }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(Category_documentDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.category_document = category_document;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate(['/category-document', { outlets: { popup: null } }]);
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate(['/category-document', { outlets: { popup: null } }]);
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
