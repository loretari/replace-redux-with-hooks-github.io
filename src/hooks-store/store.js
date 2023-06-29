import { useState, useEffect } from 'react';


let globalState = {};
let listeners = [];
let actions = {};

export const useStore = () => {


        for (const listener of listeners) {
            listener(globalState);
        }
    }

    useEffect(() => {
        listeners.push(setState);

        return () => {
            listeners = listeners.filter(li => li !== setState);
        }
    }, [setState]);



};

export const initStore = (userActions, initialState) => {
    if (initialState) {
        globalState = {...globalState, ...initialState};
    }
    actions = {...actions, ...userActions};
}