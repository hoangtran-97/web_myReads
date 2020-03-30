import React from "react";

import {Book} from "./Book";

interface ShelfsProps {
    books: object[];
}
export const Shelfs = ({books}: ShelfsProps) => {
    const read = books.filter((book: any) => book.shelf === "read");
    const currentlyReading = books.filter((book: any) => book.shelf === "currentlyReading");
    const wantToRead = books.filter((book: any) => book.shelf === "wantToRead");
    console.log(read, currentlyReading, wantToRead);

    return (
        <div>
            <p>Read</p>
            {read.map((item: any, index) => (
                <Book bookName={item.title} key={index}></Book>
            ))}
            <p>currentlyReading</p>
            {currentlyReading.map((item: any, index) => (
                <Book bookName={item.title} key={index}></Book>
            ))}
            <p>wantToRead</p>
            {wantToRead.map((item: any, index) => (
                <Book bookName={item.title} key={index}></Book>
            ))}
        </div>
    );
};
