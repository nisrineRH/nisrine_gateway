/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { NisrineGatewayTestModule } from '../../../../test.module';
import { Client_documentDetailComponent } from 'app/entities/DemandeMicroService/client-document/client-document-detail.component';
import { Client_document } from 'app/shared/model/DemandeMicroService/client-document.model';

describe('Component Tests', () => {
    describe('Client_document Management Detail Component', () => {
        let comp: Client_documentDetailComponent;
        let fixture: ComponentFixture<Client_documentDetailComponent>;
        const route = ({ data: of({ client_document: new Client_document(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [NisrineGatewayTestModule],
                declarations: [Client_documentDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(Client_documentDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(Client_documentDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.client_document).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
