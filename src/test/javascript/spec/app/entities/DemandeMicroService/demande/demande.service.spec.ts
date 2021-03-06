/* tslint:disable max-line-length */
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { DemandeService } from 'app/entities/DemandeMicroService/demande/demande.service';
import { IDemande, Demande } from 'app/shared/model/DemandeMicroService/demande.model';

describe('Service Tests', () => {
    describe('Demande Service', () => {
        let injector: TestBed;
        let service: DemandeService;
        let httpMock: HttpTestingController;
        let elemDefault: IDemande;
        let currentDate: moment.Moment;
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule]
            });
            injector = getTestBed();
            service = injector.get(DemandeService);
            httpMock = injector.get(HttpTestingController);
            currentDate = moment();

            elemDefault = new Demande(
                0,
                0,
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                false,
                currentDate,
                currentDate,
                currentDate,
                currentDate,
                currentDate,
                currentDate
            );
        });

        describe('Service methods', async () => {
            it('should find an element', async () => {
                const returnedFromService = Object.assign(
                    {
                        dateLivraisonSouhaitee: currentDate.format(DATE_FORMAT),
                        dateAccordDevis: currentDate.format(DATE_FORMAT),
                        dateLivraisonPrevue: currentDate.format(DATE_FORMAT),
                        dateMiseEnRecette: currentDate.format(DATE_FORMAT),
                        dateValidationRecette: currentDate.format(DATE_FORMAT),
                        dateMiseEnProduction: currentDate.format(DATE_FORMAT)
                    },
                    elemDefault
                );
                service
                    .find(123)
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: elemDefault }));

                const req = httpMock.expectOne({ method: 'GET' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should create a Demande', async () => {
                const returnedFromService = Object.assign(
                    {
                        id: 0,
                        dateLivraisonSouhaitee: currentDate.format(DATE_FORMAT),
                        dateAccordDevis: currentDate.format(DATE_FORMAT),
                        dateLivraisonPrevue: currentDate.format(DATE_FORMAT),
                        dateMiseEnRecette: currentDate.format(DATE_FORMAT),
                        dateValidationRecette: currentDate.format(DATE_FORMAT),
                        dateMiseEnProduction: currentDate.format(DATE_FORMAT)
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        dateLivraisonSouhaitee: currentDate,
                        dateAccordDevis: currentDate,
                        dateLivraisonPrevue: currentDate,
                        dateMiseEnRecette: currentDate,
                        dateValidationRecette: currentDate,
                        dateMiseEnProduction: currentDate
                    },
                    returnedFromService
                );
                service
                    .create(new Demande(null))
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'POST' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should update a Demande', async () => {
                const returnedFromService = Object.assign(
                    {
                        dm_numero: 1,
                        dm_libelle: 'BBBBBB',
                        dm_statut: 'BBBBBB',
                        dm_type: 'BBBBBB',
                        dm_priorite: 'BBBBBB',
                        intervenant: 'BBBBBB',
                        description: 'BBBBBB',
                        visibleSurInternet: true,
                        dateLivraisonSouhaitee: currentDate.format(DATE_FORMAT),
                        dateAccordDevis: currentDate.format(DATE_FORMAT),
                        dateLivraisonPrevue: currentDate.format(DATE_FORMAT),
                        dateMiseEnRecette: currentDate.format(DATE_FORMAT),
                        dateValidationRecette: currentDate.format(DATE_FORMAT),
                        dateMiseEnProduction: currentDate.format(DATE_FORMAT)
                    },
                    elemDefault
                );

                const expected = Object.assign(
                    {
                        dateLivraisonSouhaitee: currentDate,
                        dateAccordDevis: currentDate,
                        dateLivraisonPrevue: currentDate,
                        dateMiseEnRecette: currentDate,
                        dateValidationRecette: currentDate,
                        dateMiseEnProduction: currentDate
                    },
                    returnedFromService
                );
                service
                    .update(expected)
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'PUT' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should return a list of Demande', async () => {
                const returnedFromService = Object.assign(
                    {
                        dm_numero: 1,
                        dm_libelle: 'BBBBBB',
                        dm_statut: 'BBBBBB',
                        dm_type: 'BBBBBB',
                        dm_priorite: 'BBBBBB',
                        intervenant: 'BBBBBB',
                        description: 'BBBBBB',
                        visibleSurInternet: true,
                        dateLivraisonSouhaitee: currentDate.format(DATE_FORMAT),
                        dateAccordDevis: currentDate.format(DATE_FORMAT),
                        dateLivraisonPrevue: currentDate.format(DATE_FORMAT),
                        dateMiseEnRecette: currentDate.format(DATE_FORMAT),
                        dateValidationRecette: currentDate.format(DATE_FORMAT),
                        dateMiseEnProduction: currentDate.format(DATE_FORMAT)
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        dateLivraisonSouhaitee: currentDate,
                        dateAccordDevis: currentDate,
                        dateLivraisonPrevue: currentDate,
                        dateMiseEnRecette: currentDate,
                        dateValidationRecette: currentDate,
                        dateMiseEnProduction: currentDate
                    },
                    returnedFromService
                );
                service
                    .query(expected)
                    .pipe(
                        take(1),
                        map(resp => resp.body)
                    )
                    .subscribe(body => expect(body).toContainEqual(expected));
                const req = httpMock.expectOne({ method: 'GET' });
                req.flush(JSON.stringify([returnedFromService]));
                httpMock.verify();
            });

            it('should delete a Demande', async () => {
                const rxPromise = service.delete(123).subscribe(resp => expect(resp.ok));

                const req = httpMock.expectOne({ method: 'DELETE' });
                req.flush({ status: 200 });
            });
        });

        afterEach(() => {
            httpMock.verify();
        });
    });
});
