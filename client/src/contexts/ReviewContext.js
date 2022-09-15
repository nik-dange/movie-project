import { createContext, useReducer } from "react";

import React from 'react'

export const ReviewContext = createContext();

//state: previous state of something before we add to it
//action: what we pass into the dispatch as the type
export const reviewReducer = (state, action) => {
    switch (action.type) {
        case 'SET_REVIEWS':
            return {
                reviews: action.payload
            }
        case 'CREATE_REVIEW':
            debugger;
            return {
                reviews: [action.payload, ...state.reviews]
            }
        case 'DELETE_REVIEW':
            return {
                reviews: state.reviews.filter((w) => w._id !== action.payload._id)
            }
        default:
            return {
                state
            }
    }
}

export const ReviewContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reviewReducer, { reviews: null });

    return (
        <ReviewContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ReviewContext.Provider>
    )
}