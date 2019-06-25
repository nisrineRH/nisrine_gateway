import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Client_document } from 'app/shared/model/DemandeMicroService/client-document.model';
import { Client_documentService } from './client-document.service';
import { Client_documentComponent } from './client-document.component';
import { Client_documentDetailComponent } from './client-document-detail.component';
import { Client_documentUpdateComponent } from './client-document-update.component';
import { Client_documentDeletePopupComponent } from './client-document-delete-dialog.component';
import { IClient_document } from 'app/shared/model/DemandeMicroService/client-document.model';

@Injectable({ providedIn: 'root' })
export class Client_documentResolve implements Resolve<IClient_document> {
    constructor(private service: Client_documentService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IClient_document> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<Client_document>) => response.ok),
                map((client_document: HttpResponse<Client_document>) => client_document.body)
            );
        }
        return of(new Client_document());
    }
}

export const client_documentRoute: Routes = [
    {
        path: '',
        component: Client_documentComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'nisrineGatewayApp.demandeMicroServiceClientDocument.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/view',
        component: Client_documentDetailComponent,
        resolve: {
            client_document: Client_documentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'nisrineGatewayApp.demandeMicroServiceClientDocument.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'new',
        component: Client_documentUpdateComponent,
        resolve: {
            client_document: Client_documentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'nisrineGatewayApp.demandeMicroServiceClientDocument.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/edit',
        component: Client_documentUpdateComponent,
        resolve: {
            client_document: Client_documentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'nisrineGatewayApp.demandeMicroServiceClientDocument.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const client_documentPopupRoute: Routes = [
    {
        path: ':id/delete',
        component: Client_documentDeletePopupComponent,
        resolve: {
            client_document: Client_documentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'nisrineGatewayApp.demandeMicroServiceClientDocument.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
