import React from "react";
interface BookProps {
    item: any;
    key: number;
    handleShelfChange: Function;
}
export const Book = ({item, handleShelfChange}: BookProps) => {
    const {title, authors, publishedDate, imageLinks, shelf} = item;
    const handleChange = (e: any) => {
        const newShelf = e.target.value;
        const objectTitle = title;
        handleShelfChange(newShelf, objectTitle, item);
    };
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
                <select value={shelf} onChange={handleChange}>
                    <option value="move" disabled>
                        Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                </select>
            </div>
        </div>
    );
};
