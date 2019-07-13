import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'client',
                loadChildren: './DemandeMicroService/client/client.module#DemandeMicroServiceClientModule'
            },
            {
                path: 'demande',
                loadChildren: './DemandeMicroService/demande/demande.module#DemandeMicroServiceDemandeModule'
            },
            {
                path: 'histourique-statut-demande',
                loadChildren:
                    './DemandeMicroService/histourique-statut-demande/histourique-statut-demande.module#DemandeMicroServiceHistouriqueStatutDemandeModule'
            },
            {
                path: 'demande-document',
                loadChildren: './DemandeMicroService/demande-document/demande-document.module#DemandeMicroServiceDemande_documentModule'
            },
            {
                path: 'demande',
                loadChildren: './DemandeMicroService/demande/demande.module#DemandeMicroServiceDemandeModule'
            },
            {
                path: 'category-document',
                loadChildren: './DemandeMicroService/category-document/category-document.module#DemandeMicroServiceCategory_documentModule'
            },
            {
                path: 'client-document',
                loadChildren: './DemandeMicroService/client-document/client-document.module#DemandeMicroServiceClient_documentModule'
            },
            {
                path: 'category-document',
                loadChildren: './DemandeMicroService/category-document/category-document.module#DemandeMicroServiceCategory_documentModule'
            },
            {
                path: 'client-document',
                loadChildren: './DemandeMicroService/client-document/client-document.module#DemandeMicroServiceClient_documentModule'
            },
            {
                path: 'client',
                loadChildren: './DemandeMicroService/client/client.module#DemandeMicroServiceClientModule'
            },
            {
                path: 'demande',
                loadChildren: './DemandeMicroService/demande/demande.module#DemandeMicroServiceDemandeModule'
            },
            {
                path: 'demande',
                loadChildren: './DemandeMicroService/demande/demande.module#DemandeMicroServiceDemandeModule'
            },
            {
                path: 'demande',
                loadChildren: './DemandeMicroService/demande/demande.module#DemandeMicroServiceDemandeModule'
            },
            {
                path: 'client',
                loadChildren: './DemandeMicroService/client/client.module#DemandeMicroServiceClientModule'
            },
            {
                path: 'demande',
                loadChildren: './DemandeMicroService/demande/demande.module#DemandeMicroServiceDemandeModule'
            },
            {
                path: 'demande-document',
                loadChildren: './DemandeMicroService/demande-document/demande-document.module#DemandeMicroServiceDemande_documentModule'
            },
            {
                path: 'demande-document',
                loadChildren: './DemandeMicroService/demande-document/demande-document.module#DemandeMicroServiceDemande_documentModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NisrineGatewayEntityModule {}
