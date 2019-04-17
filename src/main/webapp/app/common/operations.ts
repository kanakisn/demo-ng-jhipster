import { Action, ActionReducer, State } from '@ngrx/store';
import { Operation } from 'app/common/operation.model';

export const ADD_OPERATION = 'Add operation';
export const REMOVE_OPERATION = 'Remove operation';
export const INCREMENT_OPERATION = 'Increment an operation';
export const DECREMENT_OPERATION = 'Decrement an operation';

//the operationsReducer function: a pure function that is responsible for maintaining the
//financial operations state of your store

export const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_OPERATION:
            return [...state, action.payload.reason];
        default:
            return state;
    }
};
