import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HistouriqueStatutDemande } from 'app/shared/model/DemandeMicroService/histourique-statut-demande.model';
import { HistouriqueStatutDemandeService } from './histourique-statut-demande.service';
import { HistouriqueStatutDemandeComponent } from './histourique-statut-demande.component';
import { HistouriqueStatutDemandeDetailComponent } from './histourique-statut-demande-detail.component';
import { HistouriqueStatutDemandeUpdateComponent } from './histourique-statut-demande-update.component';
import { HistouriqueStatutDemandeDeletePopupComponent } from './histourique-statut-demande-delete-dialog.component';
import { IHistouriqueStatutDemande } from 'app/shared/model/DemandeMicroService/histourique-statut-demande.model';

@Injectable({ providedIn: 'root' })
export class HistouriqueStatutDemandeResolve implements Resolve<IHistouriqueStatutDemande> {
    constructor(private service: HistouriqueStatutDemandeService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IHistouriqueStatutDemande> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<HistouriqueStatutDemande>) => response.ok),
                map((histouriqueStatutDemande: HttpResponse<HistouriqueStatutDemande>) => histouriqueStatutDemande.body)
            );
        }
        return of(new HistouriqueStatutDemande());
    }
}

export const histouriqueStatutDemandeRoute: Routes = [
    {
        path: '',
        component: HistouriqueStatutDemandeComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'nisrineGatewayApp.demandeMicroServiceHistouriqueStatutDemande.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/view',
        component: HistouriqueStatutDemandeDetailComponent,
        resolve: {
            histouriqueStatutDemande: HistouriqueStatutDemandeResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'nisrineGatewayApp.demandeMicroServiceHistouriqueStatutDemande.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'new',
        component: HistouriqueStatutDemandeUpdateComponent,
        resolve: {
            histouriqueStatutDemande: HistouriqueStatutDemandeResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'nisrineGatewayApp.demandeMicroServiceHistouriqueStatutDemande.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/edit',
        component: HistouriqueStatutDemandeUpdateComponent,
        resolve: {
            histouriqueStatutDemande: HistouriqueStatutDemandeResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'nisrineGatewayApp.demandeMicroServiceHistouriqueStatutDemande.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const histouriqueStatutDemandePopupRoute: Routes = [
    {
        path: ':id/delete',
        component: HistouriqueStatutDemandeDeletePopupComponent,
        resolve: {
            histouriqueStatutDemande: HistouriqueStatutDemandeResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'nisrineGatewayApp.demandeMicroServiceHistouriqueStatutDemande.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
