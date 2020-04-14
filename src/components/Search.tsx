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
    // eslint-disable-next-line
    const [searchResult, setSearchResult] = useState(Array());
    /* eslint-disable */
    useEffect(() => {
        fetchData();
    }, [query]);
    /* eslint-enable */
    const fetchData = async () => {
        const data = await BooksAPI.search(query);
        // eslint-disable-next-line
        Array.isArray(data) ? setSearchResult(data) : setSearchResult(Array());
        console.log('search result', searchResult);
        console.log(typeof searchResult);
    };
    const handleShelfChange = async (newShelf: string, objectTitle: string, item: object) => {
        BooksAPI.update(item, newShelf);
        const newBooks = [...books];
        const obj: any = newBooks.find((book: any) => book.title === objectTitle);
        const index = newBooks.map((e: any) => e.title).indexOf(objectTitle);
        if (obj) {
            obj.shelf = newShelf;
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
            <div className="search-result">
                {searchResult.length >= 1 ? (
                    <div style={{color: 'white'}}>
                        {searchResult.map((item: any, index) => (
                            <Book item={item} key={index} handleShelfChange={handleShelfChange} />
                        ))}
                    </div>
                ) : (
                    <div style={{color: 'white'}}>No Result</div>
                )}
            </div>
        </>
    );
};
