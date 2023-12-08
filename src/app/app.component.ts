import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
    selectAppComponentVm,
    selectAppComponentVmDestructuredObject,
    selectAppComponentVmLong,
} from './store/app-component.selectors';
import { AppState } from './store/app.reducer';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    vm$ = this.store.select(selectAppComponentVm);
    vmLong$ = this.store.select(selectAppComponentVmLong);
    vmDestructured$ = this.store.select(selectAppComponentVmDestructuredObject);

    constructor(private store: Store<AppState>) {}
}
