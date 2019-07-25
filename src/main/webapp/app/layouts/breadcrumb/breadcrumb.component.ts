import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

@Component({
    selector: 'jhi-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styles: []
})
export class BreadcrumbComponent implements OnInit {
    myProfileActive: boolean;
    termsActive: boolean;
    displayActive: boolean;
    opActive: boolean;
    userCreateActive: boolean;

    constructor(private _location: Location) {}

    ngOnInit() {
        this.opActive = false;
        this.myProfileActive = false;
        this.termsActive = false;
        this.displayActive = true;
        this.userCreateActive = false;
        if (document.getElementById('profile-page') != null) {
            this.myProfileActive = true;
        }
        if (document.getElementById('terms-page') != null) {
            this.termsActive = true;
        }
        if (document.getElementById('opChoice') != null) {
            this.displayActive = false;
        }
        if (document.getElementById('user-create-page') != null) {
            this.userCreateActive = true;
        }
    }

    goToPrevious() {
        this._location.back();
    }
    goToChoixOperation() {}
    getOperationCode() {}
    getOperationName() {}
    goToDetailOperation() {}
    getUserName() {}
    isLevelTwo() {
        return true;
    }
}
