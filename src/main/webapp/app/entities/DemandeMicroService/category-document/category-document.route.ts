import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Category_document } from 'app/shared/model/DemandeMicroService/category-document.model';
import { Category_documentService } from './category-document.service';
import { Category_documentComponent } from './category-document.component';
import { Category_documentDetailComponent } from './category-document-detail.component';
import { Category_documentUpdateComponent } from './category-document-update.component';
import { Category_documentDeletePopupComponent } from './category-document-delete-dialog.component';
import { ICategory_document } from 'app/shared/model/DemandeMicroService/category-document.model';

@Injectable({ providedIn: 'root' })
export class Category_documentResolve implements Resolve<ICategory_document> {
    constructor(private service: Category_documentService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICategory_document> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<Category_document>) => response.ok),
                map((category_document: HttpResponse<Category_document>) => category_document.body)
            );
        }
        return of(new Category_document());
    }
}

export const category_documentRoute: Routes = [
    {
        path: '',
        component: Category_documentComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'nisrineGatewayApp.demandeMicroServiceCategoryDocument.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/view',
        component: Category_documentDetailComponent,
        resolve: {
            category_document: Category_documentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'nisrineGatewayApp.demandeMicroServiceCategoryDocument.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'new',
        component: Category_documentUpdateComponent,
        resolve: {
            category_document: Category_documentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'nisrineGatewayApp.demandeMicroServiceCategoryDocument.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/edit',
        component: Category_documentUpdateComponent,
        resolve: {
            category_document: Category_documentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'nisrineGatewayApp.demandeMicroServiceCategoryDocument.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const category_documentPopupRoute: Routes = [
    {
        path: ':id/delete',
        component: Category_documentDeletePopupComponent,
        resolve: {
            category_document: Category_documentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'nisrineGatewayApp.demandeMicroServiceCategoryDocument.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
