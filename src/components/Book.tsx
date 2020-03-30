import React from "react";
interface BookProps {
    item: any;
    key: number;
}
export const Book = ({item}: BookProps) => {
    const {title, authors} = item;
    return (
        <div>
            {title}
            {authors.map((author: string, index: number) => (
                <p key={index}>{author}</p>
            ))}
        </div>
    );
};
