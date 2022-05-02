import React from "react";
import { useAppDispatch } from "../global/Hooks";
import { API } from "../global/FetchAPI";
import { IBook } from "../models/Interfaces";

type Props = {
    book: IBook
};

export const List = ({ book }: Props): JSX.Element => {
    const dispatch = useAppDispatch();

    const handleDelete = () => {
        dispatch(API.delete(book._id));
    };

    const handleUpdate = () => {
        dispatch(API.update(book._id))
    };

    return (
        <React.Fragment>
            <main key={book._id}>
                <h2>{book.title}</h2>
                <p>Name: {book.first} {book.last}</p>
                <p>Age: {book.age}</p>
                <p>Info: {book.info}</p>
            </main>
        </React.Fragment>
    );
};


