/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { NisrineGatewayTestModule } from '../../../../test.module';
import { Client_documentDeleteDialogComponent } from 'app/entities/DemandeMicroService/client-document/client-document-delete-dialog.component';
import { Client_documentService } from 'app/entities/DemandeMicroService/client-document/client-document.service';

describe('Component Tests', () => {
    describe('Client_document Management Delete Component', () => {
        let comp: Client_documentDeleteDialogComponent;
        let fixture: ComponentFixture<Client_documentDeleteDialogComponent>;
        let service: Client_documentService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [NisrineGatewayTestModule],
                declarations: [Client_documentDeleteDialogComponent]
            })
                .overrideTemplate(Client_documentDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(Client_documentDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(Client_documentService);
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
