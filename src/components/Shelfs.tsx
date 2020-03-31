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
        <>
            <h2>Read</h2>
            <div className="read">
                {read.map((item: any, index) => (
                    <Book item={item} key={index}></Book>
                ))}
            </div>
            <h2>Currently Reading</h2>
            <div className="currentlyReading">
                {currentlyReading.map((item: any, index) => (
                    <Book item={item} key={index}></Book>
                ))}
            </div>
            <h2>Want To Read</h2>
            <div className="wantToRead">
                {wantToRead.map((item: any, index) => (
                    <Book item={item} key={index}></Book>
                ))}
            </div>
        </>
    );
};
