/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { NisrineGatewayTestModule } from '../../../../test.module';
import { Demande_documentDetailComponent } from 'app/entities/DemandeMicroService/demande-document/demande-document-detail.component';
import { Demande_document } from 'app/shared/model/DemandeMicroService/demande-document.model';

describe('Component Tests', () => {
    describe('Demande_document Management Detail Component', () => {
        let comp: Demande_documentDetailComponent;
        let fixture: ComponentFixture<Demande_documentDetailComponent>;
        const route = ({ data: of({ demande_document: new Demande_document(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [NisrineGatewayTestModule],
                declarations: [Demande_documentDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(Demande_documentDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(Demande_documentDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.demande_document).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
