import React, {useState, useEffect} from "react";
import {Book} from "./Book";
interface SearchProps {
    books: object[];
    setBooks: Function;
}
export const Search = ({books, setBooks}: SearchProps) => {
    const [query, setQuery] = useState("");
    const queryResult = books.filter((book: any) => book.title.toLowerCase().includes(query.toLowerCase()));
    useEffect(() => {}, [query]);
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
            <input
                type="text"
                placeholder="Search Book"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            ></input>
            <div className="search-result">
                {queryResult.map((item: any, index) => (
                    <Book item={item} key={index} handleShelfChange={handleShelfChange}></Book>
                ))}
            </div>
        </>
    );
};
