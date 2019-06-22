/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { NisrineGatewayTestModule } from '../../../../test.module';
import { HistouriqueStatutDemandeDetailComponent } from 'app/entities/DemandeMicroService/histourique-statut-demande/histourique-statut-demande-detail.component';
import { HistouriqueStatutDemande } from 'app/shared/model/DemandeMicroService/histourique-statut-demande.model';

describe('Component Tests', () => {
    describe('HistouriqueStatutDemande Management Detail Component', () => {
        let comp: HistouriqueStatutDemandeDetailComponent;
        let fixture: ComponentFixture<HistouriqueStatutDemandeDetailComponent>;
        const route = ({ data: of({ histouriqueStatutDemande: new HistouriqueStatutDemande(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [NisrineGatewayTestModule],
                declarations: [HistouriqueStatutDemandeDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(HistouriqueStatutDemandeDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(HistouriqueStatutDemandeDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.histouriqueStatutDemande).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
