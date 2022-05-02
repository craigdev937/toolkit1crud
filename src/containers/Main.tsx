import React from "react";
import { useAppSelector, useAppDispatch } from "../global/Hooks";
import { API } from "../global/FetchAPI";
import { List } from "../components/List";

export const Main = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { books } = useAppSelector((state) => state.books);

    React.useEffect(() => {
        dispatch(API.fetchAll())
    }, [dispatch]);

    return (
        <React.Fragment>
            {books.map((book) => (
                <List key={book._id} book={book} />
            ))}
        </React.Fragment>
    );
};



