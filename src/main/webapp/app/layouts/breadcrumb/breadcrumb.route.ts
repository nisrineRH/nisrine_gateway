import { Route } from '@angular/router';
import { BreadcrumbComponent } from 'app/layouts/breadcrumb';

export const breadcrumbRoute: Route = {
    path: '',
    component: BreadcrumbComponent,
    outlet: 'breadcrumb'
};
