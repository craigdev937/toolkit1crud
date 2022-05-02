import React from "react";
import { IBook } from "../models/Interfaces";

type Props = {
    book: IBook
};

export const List = ({ book }: Props): JSX.Element => {
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


