import React, {useState, useEffect} from 'react';
import {FaAngleLeft, FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {Book} from './Book';
import * as BooksAPI from '../BooksAPI';

interface SearchProps {
    books: object[];
    setBooks: Function;
}
export const Search = ({books, setBooks}: SearchProps) => {
    const [query, setQuery] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    // const queryResult = searchResult.filter((book: any) => book.title.toLowerCase().includes(query.toLowerCase()));
    useEffect(() => {
        fetchData();
    }, [query]);
    const fetchData = async () => {
        const data = await BooksAPI.search(query);
        data !== undefined && setSearchResult(data);
        console.log('search result', searchResult);
        console.log(typeof searchResult);
    };
    const handleShelfChange = (newValue: string, objectToMove: string, item: object) => {
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
            <div className="search-header">
                <Link to="/" className="nav-link">
                    <FaAngleLeft className="icons" />
                </Link>
                <div className="search-input-container">
                    <input type="text" placeholder="Search Book" value={query} onChange={(event) => setQuery(event.target.value)} className="search-input" />
                    <FaSearch className="icons" />
                </div>

                <div />
            </div>
            {/* <div className="search-result">
                {searchResult ? (
                    <div style={{color: 'white'}}>
                        {searchResult.map((item: any, index) => (
                            <Book item={item} key={index} handleShelfChange={handleShelfChange} />
                        ))}
                    </div>
                ) : (
                    <div style={{color: 'white'}}>No Result</div>
                )}
            </div> */}
        </>
    );
};
