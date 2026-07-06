import type {BookType} from "../types/BookType.ts";

function Book(prop: {book: BookType})
{
    return (
        <div>
            <p>Title: {prop.book.title},
                <b>Author: {prop.book.name_and_surname}</b>
                <p>Janre: {prop.book.janre}</p>
                <p>Pages count: {prop.book.pages_count}</p>
            </p>
        </div>
    )
}

export {Book};