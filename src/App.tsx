import React, {useEffect, useState} from "react";
import "./css/App.css";
import {Header} from "./components/Header";
import * as BooksAPI from "./BooksAPI";
import {Shelfs} from "./components/Shelfs";
const App = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
        console.log(books);
    }, [books]);
    const fetchData = async () => {
        const data = await BooksAPI.getAll();
        setBooks(data);
    };

    return (
        <div className="App">
            <Header></Header>
            <Shelfs books={books}></Shelfs>
        </div>
    );
};

export default App;
