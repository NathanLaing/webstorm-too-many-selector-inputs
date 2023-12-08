import { Action, createReducer } from '@ngrx/store';

export interface AppState {
    profile: Profile;
}

export interface Profile {
    id: string;
    name: string;
    mail: string;
    dateOfBirth: Date;
}

const initialState: AppState = {
    profile: {
        id: 'some-very-long-id',
        name: 'Nathan',
        mail: 'my-real-mail@mail.com',
        dateOfBirth: new Date(),
    },
};

const reducer = createReducer(initialState);

export const appReducer = (
    state: AppState | undefined,
    action: Action,
): AppState => reducer(state, action);
