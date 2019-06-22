import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { NisrineGatewaySharedModule } from 'app/shared';
import {
    HistouriqueStatutDemandeComponent,
    HistouriqueStatutDemandeDetailComponent,
    HistouriqueStatutDemandeUpdateComponent,
    HistouriqueStatutDemandeDeletePopupComponent,
    HistouriqueStatutDemandeDeleteDialogComponent,
    histouriqueStatutDemandeRoute,
    histouriqueStatutDemandePopupRoute
} from './';

const ENTITY_STATES = [...histouriqueStatutDemandeRoute, ...histouriqueStatutDemandePopupRoute];

@NgModule({
    imports: [NisrineGatewaySharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        HistouriqueStatutDemandeComponent,
        HistouriqueStatutDemandeDetailComponent,
        HistouriqueStatutDemandeUpdateComponent,
        HistouriqueStatutDemandeDeleteDialogComponent,
        HistouriqueStatutDemandeDeletePopupComponent
    ],
    entryComponents: [
        HistouriqueStatutDemandeComponent,
        HistouriqueStatutDemandeUpdateComponent,
        HistouriqueStatutDemandeDeleteDialogComponent,
        HistouriqueStatutDemandeDeletePopupComponent
    ],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DemandeMicroServiceHistouriqueStatutDemandeModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
