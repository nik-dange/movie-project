import { useContext } from "react";
import { ReviewContext } from "../contexts/ReviewContext";


export const useReviewContext = () => {
    const context = useContext(ReviewContext);

    if (!context) {
        throw Error('useReviewContext must be used inside a ReviewContextProvider')
    }

    return context;
}
