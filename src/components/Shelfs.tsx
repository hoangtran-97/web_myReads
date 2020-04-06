import React from "react";

import {Book} from "./Book";

interface ShelfsProps {
    books: object[];
    setBooks: Function;
}
export const Shelfs = ({books, setBooks}: ShelfsProps) => {
    const read = books.filter((book: any) => book.shelf === "read");
    const currentlyReading = books.filter((book: any) => book.shelf === "currentlyReading");
    const wantToRead = books.filter((book: any) => book.shelf === "wantToRead");
    const handleShelfChange = (newValue: string, objectToMove: string) => {
        const newBooks = [...books];
        const obj: any = newBooks.find((book: any) => book.title === objectToMove);
        const index = newBooks.map((e: any) => e.title).indexOf(objectToMove);
        if (obj) {
            obj.shelf = newValue;
            newBooks[index] = obj;
            setBooks(newBooks);
        }
    };
    return (
        <>
            <h2>Read</h2>
            <div className="read">
                {read.map((item: any, index) => (
                    <Book item={item} key={index} handleShelfChange={handleShelfChange}></Book>
                ))}
            </div>
            <h2>Currently Reading</h2>
            <div className="currentlyReading">
                {currentlyReading.map((item: any, index) => (
                    <Book item={item} key={index} handleShelfChange={handleShelfChange}></Book>
                ))}
            </div>
            <h2>Want To Read</h2>
            <div className="wantToRead">
                {wantToRead.map((item: any, index) => (
                    <Book item={item} key={index} handleShelfChange={handleShelfChange}></Book>
                ))}
            </div>
        </>
    );
};
