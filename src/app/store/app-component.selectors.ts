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
    selectObject,
} from './app.selectors';

// working - under 8 selector inputs
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

// broken - over 8 selector inputs
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

// working - 1 selector input (over 8 inputs, but destructured)
export const selectAppComponentVmDestructuredObject = createSelector(
    selectObject,
    ({ id, id2, id3, id4, id5, id6, id7, id8, id9 }) => {
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
