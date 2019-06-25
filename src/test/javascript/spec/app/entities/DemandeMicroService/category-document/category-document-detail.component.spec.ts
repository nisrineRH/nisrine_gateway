/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { NisrineGatewayTestModule } from '../../../../test.module';
import { Category_documentDetailComponent } from 'app/entities/DemandeMicroService/category-document/category-document-detail.component';
import { Category_document } from 'app/shared/model/DemandeMicroService/category-document.model';

describe('Component Tests', () => {
    describe('Category_document Management Detail Component', () => {
        let comp: Category_documentDetailComponent;
        let fixture: ComponentFixture<Category_documentDetailComponent>;
        const route = ({ data: of({ category_document: new Category_document(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [NisrineGatewayTestModule],
                declarations: [Category_documentDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(Category_documentDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(Category_documentDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.category_document).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
