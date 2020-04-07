import React, {useState, useEffect} from "react";
import {Book} from "./Book";
import {FaAngleLeft, FaSearch} from "react-icons/fa";
import {Link} from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
interface SearchProps {
    books: object[];
    setBooks: Function;
}
export const Search = ({books, setBooks}: SearchProps) => {
    const [query, setQuery] = useState("");
    const queryResult = books.filter((book: any) => book.title.toLowerCase().includes(query.toLowerCase()));
    useEffect(() => {}, [query]);
    const handleShelfChange = (newValue: string, objectToMove: string, item: object) => {
        // const newBooks = [...books];
        // const obj: any = newBooks.find((book: any) => book.title === objectToMove);
        // const index = newBooks.map((e: any) => e.title).indexOf(objectToMove);
        // if (obj) {
        //     obj.shelf = newValue;
        //     newBooks[index] = obj;
        //     setBooks(newBooks);
        // }
    };
    return (
        <>
            <div className="search-header">
                <Link to="/" className="nav-link">
                    <FaAngleLeft className="icons"></FaAngleLeft>
                </Link>
                <div className="search-input-container">
                    <input
                        type="text"
                        placeholder="Search Book"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        className="search-input"
                    ></input>
                    <FaSearch className="icons"></FaSearch>
                </div>

                <div></div>
            </div>

            <div className="search-result">
                {queryResult.map((item: any, index) => (
                    <Book item={item} key={index} handleShelfChange={handleShelfChange}></Book>
                ))}
            </div>
        </>
    );
};
