import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { NisrineGatewaySharedModule } from 'app/shared';
import {
    Demande_documentComponent,
    Demande_documentDetailComponent,
    Demande_documentUpdateComponent,
    Demande_documentDeletePopupComponent,
    Demande_documentDeleteDialogComponent,
    demande_documentRoute,
    demande_documentPopupRoute
} from './';

const ENTITY_STATES = [...demande_documentRoute, ...demande_documentPopupRoute];

@NgModule({
    imports: [NisrineGatewaySharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        Demande_documentComponent,
        Demande_documentDetailComponent,
        Demande_documentUpdateComponent,
        Demande_documentDeleteDialogComponent,
        Demande_documentDeletePopupComponent
    ],
    entryComponents: [
        Demande_documentComponent,
        Demande_documentUpdateComponent,
        Demande_documentDeleteDialogComponent,
        Demande_documentDeletePopupComponent
    ],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DemandeMicroServiceDemande_documentModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
