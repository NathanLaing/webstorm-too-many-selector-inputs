import { Component } from '@angular/core';
import {
    selectAppComponentVm,
    selectAppComponentVmLong,
} from './store/app-component.selectors';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.reducer';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    vm$ = this.store.select(selectAppComponentVm);
    vmLong$ = this.store.select(selectAppComponentVmLong);

    constructor(private store: Store<AppState>) {}
}
