import React from "react";
interface BookProps {
    item: any;
    key: number;
}
export const Book = ({item}: BookProps) => {
    const {title, authors, publishedDate, imageLinks} = item;
    return (
        <div className="book">
            <div className="book-thumbnail-container">
                <img src={imageLinks.smallThumbnail} className="book-thumbnail" alt="book thumbnail"></img>
            </div>

            <p className="book-title">{`${title} ${publishedDate}`}</p>
            <div className="book-authors">
                {authors.map((author: string, index: number) => (
                    <p key={index}> {author}</p>
                ))}
            </div>
            <div className="book-selector">
                <select>
                    <option value="move" disabled>
                        Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        </div>
    );
};
