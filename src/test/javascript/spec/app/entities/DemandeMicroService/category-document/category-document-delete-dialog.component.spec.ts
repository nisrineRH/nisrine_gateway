/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { NisrineGatewayTestModule } from '../../../../test.module';
import { Category_documentDeleteDialogComponent } from 'app/entities/DemandeMicroService/category-document/category-document-delete-dialog.component';
import { Category_documentService } from 'app/entities/DemandeMicroService/category-document/category-document.service';

describe('Component Tests', () => {
    describe('Category_document Management Delete Component', () => {
        let comp: Category_documentDeleteDialogComponent;
        let fixture: ComponentFixture<Category_documentDeleteDialogComponent>;
        let service: Category_documentService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [NisrineGatewayTestModule],
                declarations: [Category_documentDeleteDialogComponent]
            })
                .overrideTemplate(Category_documentDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(Category_documentDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(Category_documentService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
