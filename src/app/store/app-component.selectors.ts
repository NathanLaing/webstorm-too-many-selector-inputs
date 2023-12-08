import { createSelector } from '@ngrx/store';
import {
    selectDob,
    selectId,
    selectId2,
    selectId3,
    selectId4,
    selectId5,
    selectId6,
    selectId7,
    selectId8,
    selectId9,
    selectMail,
    selectName,
} from './app.selectors';

export const selectAppComponentVm = createSelector(
    selectId,
    selectName,
    selectMail,
    selectDob,
    (id, name, mail, dob) => {
        return {
            id,
            name,
            mail,
            dob,
        };
    },
);

export const selectAppComponentVmLong = createSelector(
    selectId,
    selectId2,
    selectId3,
    selectId4,
    selectId5,
    selectId6,
    selectId7,
    selectId8,
    selectId9,
    (id, id2, id3, id4, id5, id6, id7, id8, id9) => {
        return {
            id,
            id2,
            id3,
            id4,
            id5,
            id6,
            id7,
            id8,
            id9,
        };
    },
);
