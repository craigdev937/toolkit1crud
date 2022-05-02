import { RootState, AppDispatch } from "./RootReducer";
import { useSelector, useDispatch, 
    TypedUseSelectorHook } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> =
    useSelector;



    