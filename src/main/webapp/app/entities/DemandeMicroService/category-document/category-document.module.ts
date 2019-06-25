import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { NisrineGatewaySharedModule } from 'app/shared';
import {
    Category_documentComponent,
    Category_documentDetailComponent,
    Category_documentUpdateComponent,
    Category_documentDeletePopupComponent,
    Category_documentDeleteDialogComponent,
    category_documentRoute,
    category_documentPopupRoute
} from './';

const ENTITY_STATES = [...category_documentRoute, ...category_documentPopupRoute];

@NgModule({
    imports: [NisrineGatewaySharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        Category_documentComponent,
        Category_documentDetailComponent,
        Category_documentUpdateComponent,
        Category_documentDeleteDialogComponent,
        Category_documentDeletePopupComponent
    ],
    entryComponents: [
        Category_documentComponent,
        Category_documentUpdateComponent,
        Category_documentDeleteDialogComponent,
        Category_documentDeletePopupComponent
    ],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DemandeMicroServiceCategory_documentModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
