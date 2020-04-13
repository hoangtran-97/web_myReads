import React from 'react';

interface imageLinksObj {
    smallThumbnail?: string;
    thumbnail?: string;
}
type ItemType = {
    title: string;
    subtitle: string;
    authors?: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: object[];
    readingModes: object;
    pageCount: number;
    printType: string;
    categories: string[];
    averageRating: number;
    ratingsCount: number;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: object;
    imageLinks: imageLinksObj;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
    id: string;
    shelf?: string;
};
interface BookProps {
    item: ItemType;
    key: number;
    handleShelfChange: Function;
}
export const Book = ({item, handleShelfChange}: BookProps) => {
    const {
        title, authors, imageLinks, shelf
    } = item;
    const handleChange = (e: any) => {
        const newShelf = e.target.value;
        const objectTitle = title;
        handleShelfChange(newShelf, objectTitle, item);
    };
    return (
        <div className="book">
            {imageLinks && (
                <div className="book-thumbnail-container">
                    <img src={imageLinks.smallThumbnail} className="book-thumbnail" alt="book thumbnail" />
                </div>
            )}
            <p className="book-title">{title}</p>
            {authors && (
                <div className="book-authors">
                    {authors.map((author: string, index: number) => (
                        <p key={index}> {author}</p>
                    ))}
                </div>
            )}
            <div className="book-selector">
                <select value={shelf || 'none'} onChange={handleChange}>
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
