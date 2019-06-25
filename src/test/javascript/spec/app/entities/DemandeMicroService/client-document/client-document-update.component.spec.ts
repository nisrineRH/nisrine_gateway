/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { NisrineGatewayTestModule } from '../../../../test.module';
import { Client_documentUpdateComponent } from 'app/entities/DemandeMicroService/client-document/client-document-update.component';
import { Client_documentService } from 'app/entities/DemandeMicroService/client-document/client-document.service';
import { Client_document } from 'app/shared/model/DemandeMicroService/client-document.model';

describe('Component Tests', () => {
    describe('Client_document Management Update Component', () => {
        let comp: Client_documentUpdateComponent;
        let fixture: ComponentFixture<Client_documentUpdateComponent>;
        let service: Client_documentService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [NisrineGatewayTestModule],
                declarations: [Client_documentUpdateComponent]
            })
                .overrideTemplate(Client_documentUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(Client_documentUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(Client_documentService);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity', fakeAsync(() => {
                // GIVEN
                const entity = new Client_document(123);
                spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.client_document = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));

            it('Should call create service on save for new entity', fakeAsync(() => {
                // GIVEN
                const entity = new Client_document();
                spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.client_document = entity;
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
