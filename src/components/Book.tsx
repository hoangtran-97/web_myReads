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
        </div>
    );
};
