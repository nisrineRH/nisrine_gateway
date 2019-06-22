/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { NisrineGatewayTestModule } from '../../../../test.module';
import { HistouriqueStatutDemandeDeleteDialogComponent } from 'app/entities/DemandeMicroService/histourique-statut-demande/histourique-statut-demande-delete-dialog.component';
import { HistouriqueStatutDemandeService } from 'app/entities/DemandeMicroService/histourique-statut-demande/histourique-statut-demande.service';

describe('Component Tests', () => {
    describe('HistouriqueStatutDemande Management Delete Component', () => {
        let comp: HistouriqueStatutDemandeDeleteDialogComponent;
        let fixture: ComponentFixture<HistouriqueStatutDemandeDeleteDialogComponent>;
        let service: HistouriqueStatutDemandeService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [NisrineGatewayTestModule],
                declarations: [HistouriqueStatutDemandeDeleteDialogComponent]
            })
                .overrideTemplate(HistouriqueStatutDemandeDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(HistouriqueStatutDemandeDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(HistouriqueStatutDemandeService);
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
