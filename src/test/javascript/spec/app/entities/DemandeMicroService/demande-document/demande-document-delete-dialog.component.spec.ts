/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { NisrineGatewayTestModule } from '../../../../test.module';
import { Demande_documentDeleteDialogComponent } from 'app/entities/DemandeMicroService/demande-document/demande-document-delete-dialog.component';
import { Demande_documentService } from 'app/entities/DemandeMicroService/demande-document/demande-document.service';

describe('Component Tests', () => {
    describe('Demande_document Management Delete Component', () => {
        let comp: Demande_documentDeleteDialogComponent;
        let fixture: ComponentFixture<Demande_documentDeleteDialogComponent>;
        let service: Demande_documentService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [NisrineGatewayTestModule],
                declarations: [Demande_documentDeleteDialogComponent]
            })
                .overrideTemplate(Demande_documentDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(Demande_documentDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(Demande_documentService);
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
