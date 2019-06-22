import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Demande_document } from 'app/shared/model/DemandeMicroService/demande-document.model';
import { Demande_documentService } from './demande-document.service';
import { Demande_documentComponent } from './demande-document.component';
import { Demande_documentDetailComponent } from './demande-document-detail.component';
import { Demande_documentUpdateComponent } from './demande-document-update.component';
import { Demande_documentDeletePopupComponent } from './demande-document-delete-dialog.component';
import { IDemande_document } from 'app/shared/model/DemandeMicroService/demande-document.model';

@Injectable({ providedIn: 'root' })
export class Demande_documentResolve implements Resolve<IDemande_document> {
    constructor(private service: Demande_documentService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IDemande_document> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<Demande_document>) => response.ok),
                map((demande_document: HttpResponse<Demande_document>) => demande_document.body)
            );
        }
        return of(new Demande_document());
    }
}

export const demande_documentRoute: Routes = [
    {
        path: '',
        component: Demande_documentComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'nisrineGatewayApp.demandeMicroServiceDemandeDocument.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/view',
        component: Demande_documentDetailComponent,
        resolve: {
            demande_document: Demande_documentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'nisrineGatewayApp.demandeMicroServiceDemandeDocument.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'new',
        component: Demande_documentUpdateComponent,
        resolve: {
            demande_document: Demande_documentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'nisrineGatewayApp.demandeMicroServiceDemandeDocument.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/edit',
        component: Demande_documentUpdateComponent,
        resolve: {
            demande_document: Demande_documentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'nisrineGatewayApp.demandeMicroServiceDemandeDocument.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const demande_documentPopupRoute: Routes = [
    {
        path: ':id/delete',
        component: Demande_documentDeletePopupComponent,
        resolve: {
            demande_document: Demande_documentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'nisrineGatewayApp.demandeMicroServiceDemandeDocument.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
