/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { NisrineGatewayTestModule } from '../../../../test.module';
import { Demande_documentUpdateComponent } from 'app/entities/DemandeMicroService/demande-document/demande-document-update.component';
import { Demande_documentService } from 'app/entities/DemandeMicroService/demande-document/demande-document.service';
import { Demande_document } from 'app/shared/model/DemandeMicroService/demande-document.model';

describe('Component Tests', () => {
    describe('Demande_document Management Update Component', () => {
        let comp: Demande_documentUpdateComponent;
        let fixture: ComponentFixture<Demande_documentUpdateComponent>;
        let service: Demande_documentService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [NisrineGatewayTestModule],
                declarations: [Demande_documentUpdateComponent]
            })
                .overrideTemplate(Demande_documentUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(Demande_documentUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(Demande_documentService);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity', fakeAsync(() => {
                // GIVEN
                const entity = new Demande_document(123);
                spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.demande_document = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));

            it('Should call create service on save for new entity', fakeAsync(() => {
                // GIVEN
                const entity = new Demande_document();
                spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.demande_document = entity;
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
