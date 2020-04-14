import React, {useEffect, useState} from 'react';
import './css/App.css';
import {
    BrowserRouter as Router, Switch, Route, withRouter
} from 'react-router-dom';
import {Header} from './components/Header';
import * as BooksAPI from './BooksAPI';
import {Shelfs} from './components/Shelfs';
import {Search} from './components/Search';

const App = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await BooksAPI.getAll();
            setBooks(data);
        };
        fetchData();
    }, []);
    // useEffect(() => {}, [books]);

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Header />
                    <Shelfs books={books} setBooks={setBooks} />
                </Route>
                <Route path="/search">
                    <Search books={books} setBooks={setBooks} />
                </Route>
            </Switch>
        </Router>
    );
};

export default withRouter(App);
