import React, {useEffect, useState} from "react";
import "./css/App.css";
import {Header} from "./components/Header";
import * as BooksAPI from "./BooksAPI";
import {Shelfs} from "./components/Shelfs";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Search} from "./components/Search";
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
        <Router>
            <Switch>
                <Route exact path="/">
                    <Header></Header>
                    <Shelfs books={books} setBooks={setBooks}></Shelfs>
                </Route>
                <Route path="/search">
                    <Search books={books} setBooks={setBooks}></Search>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
