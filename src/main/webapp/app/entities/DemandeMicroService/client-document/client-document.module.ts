import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { NisrineGatewaySharedModule } from 'app/shared';
import {
    Client_documentComponent,
    Client_documentDetailComponent,
    Client_documentUpdateComponent,
    Client_documentDeletePopupComponent,
    Client_documentDeleteDialogComponent,
    client_documentRoute,
    client_documentPopupRoute
} from './';

const ENTITY_STATES = [...client_documentRoute, ...client_documentPopupRoute];

@NgModule({
    imports: [NisrineGatewaySharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        Client_documentComponent,
        Client_documentDetailComponent,
        Client_documentUpdateComponent,
        Client_documentDeleteDialogComponent,
        Client_documentDeletePopupComponent
    ],
    entryComponents: [
        Client_documentComponent,
        Client_documentUpdateComponent,
        Client_documentDeleteDialogComponent,
        Client_documentDeletePopupComponent
    ],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DemandeMicroServiceClient_documentModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
