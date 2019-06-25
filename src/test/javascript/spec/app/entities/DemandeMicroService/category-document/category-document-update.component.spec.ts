/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { NisrineGatewayTestModule } from '../../../../test.module';
import { Category_documentUpdateComponent } from 'app/entities/DemandeMicroService/category-document/category-document-update.component';
import { Category_documentService } from 'app/entities/DemandeMicroService/category-document/category-document.service';
import { Category_document } from 'app/shared/model/DemandeMicroService/category-document.model';

describe('Component Tests', () => {
    describe('Category_document Management Update Component', () => {
        let comp: Category_documentUpdateComponent;
        let fixture: ComponentFixture<Category_documentUpdateComponent>;
        let service: Category_documentService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [NisrineGatewayTestModule],
                declarations: [Category_documentUpdateComponent]
            })
                .overrideTemplate(Category_documentUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(Category_documentUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(Category_documentService);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity', fakeAsync(() => {
                // GIVEN
                const entity = new Category_document(123);
                spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.category_document = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));

            it('Should call create service on save for new entity', fakeAsync(() => {
                // GIVEN
                const entity = new Category_document();
                spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.category_document = entity;
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
