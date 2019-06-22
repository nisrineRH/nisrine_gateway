/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { NisrineGatewayTestModule } from '../../../../test.module';
import { HistouriqueStatutDemandeUpdateComponent } from 'app/entities/DemandeMicroService/histourique-statut-demande/histourique-statut-demande-update.component';
import { HistouriqueStatutDemandeService } from 'app/entities/DemandeMicroService/histourique-statut-demande/histourique-statut-demande.service';
import { HistouriqueStatutDemande } from 'app/shared/model/DemandeMicroService/histourique-statut-demande.model';

describe('Component Tests', () => {
    describe('HistouriqueStatutDemande Management Update Component', () => {
        let comp: HistouriqueStatutDemandeUpdateComponent;
        let fixture: ComponentFixture<HistouriqueStatutDemandeUpdateComponent>;
        let service: HistouriqueStatutDemandeService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [NisrineGatewayTestModule],
                declarations: [HistouriqueStatutDemandeUpdateComponent]
            })
                .overrideTemplate(HistouriqueStatutDemandeUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(HistouriqueStatutDemandeUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(HistouriqueStatutDemandeService);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity', fakeAsync(() => {
                // GIVEN
                const entity = new HistouriqueStatutDemande(123);
                spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.histouriqueStatutDemande = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));

            it('Should call create service on save for new entity', fakeAsync(() => {
                // GIVEN
                const entity = new HistouriqueStatutDemande();
                spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.histouriqueStatutDemande = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.create).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));
        });
    });
});
