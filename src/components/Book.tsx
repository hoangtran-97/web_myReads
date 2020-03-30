import React from "react";
interface BookProps {
    bookName: string;
    key: number;
}
export const Book = ({bookName}: BookProps) => {
    return <div>{bookName}</div>;
};
