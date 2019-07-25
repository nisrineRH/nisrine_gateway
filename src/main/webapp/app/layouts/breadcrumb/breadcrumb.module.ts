import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { breadcrumbRoute } from 'app/layouts/breadcrumb/breadcrumb.route';
import { BreadcrumbComponent } from 'app/layouts/breadcrumb/breadcrumb.component';
import { NisrineGatewaySharedModule } from 'app/shared';

@NgModule({
    imports: [NisrineGatewaySharedModule],
    declarations: [BreadcrumbComponent],
    exports: [BreadcrumbComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BreadcrumbModule {}
