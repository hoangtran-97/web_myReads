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
            <h2>Read</h2>
            {read.map((item: any, index) => (
                <Book item={item} key={index}></Book>
            ))}
            <h2>currentlyReading</h2>
            {currentlyReading.map((item: any, index) => (
                <Book item={item} key={index}></Book>
            ))}
            <h2>wantToRead</h2>
            {wantToRead.map((item: any, index) => (
                <Book item={item} key={index}></Book>
            ))}
        </div>
    );
};
