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
        Array.isArray(data) ? newResult(data) : setSearchResult(Array());
    };
    const newResult = (data: any) => {
        const filteredShelf = books.filter((book: any) => book.title.toLowerCase().includes(query.toLowerCase()));
        let filteredQuery = data;
        if (filteredShelf.length >= 1) {
            filteredQuery = data.filter((item: any) => !item.title.toLowerCase().includes(query.toLowerCase()));
            console.log('data', data);
            console.log('shelf', filteredShelf);

            console.log('filtered', filteredQuery);
        }
        const combinedResult = [...filteredShelf, ...filteredQuery];
        setSearchResult(combinedResult);
        console.log(combinedResult);
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
            console.log('new', obj);
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
                    searchResult.map((item: any, index) => <Book item={item} key={index} handleShelfChange={handleShelfChange} />)
                ) : (
                    <div style={{color: 'white'}}>No Result</div>
                )}
            </div>
        </>
    );
};
