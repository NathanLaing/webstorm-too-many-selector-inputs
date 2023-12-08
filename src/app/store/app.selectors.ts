import { createSelector } from '@ngrx/store';
import { AppState } from './app.reducer';

export const selectProfile = (state: AppState) => state.profile;

export const selectId = createSelector(selectProfile, (profile) => {
    console.log(profile);
    return profile?.id;
});
export const selectId2 = createSelector(
    selectProfile,
    (profile) => profile?.id,
);
export const selectId3 = createSelector(
    selectProfile,
    (profile) => profile?.id,
);

export const selectId4 = createSelector(
    selectProfile,
    (profile) => profile?.id,
);

export const selectId5 = createSelector(
    selectProfile,
    (profile) => profile?.id,
);

export const selectId6 = createSelector(
    selectProfile,
    (profile) => profile?.id,
);

export const selectId7 = createSelector(
    selectProfile,
    (profile) => profile?.id,
);
export const selectId8 = createSelector(
    selectProfile,
    (profile) => profile?.id,
);
export const selectId9 = createSelector(
    selectProfile,
    (profile) => profile?.id,
);

export const selectName = createSelector(
    selectProfile,
    (profile) => profile?.name,
);

export const selectMail = createSelector(
    selectProfile,
    (profile) => profile?.mail,
);

export const selectDob = createSelector(
    selectProfile,
    (profile) => profile?.dateOfBirth,
);
