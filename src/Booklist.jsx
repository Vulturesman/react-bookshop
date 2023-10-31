import { useEffect, useState } from "react";
import './Booklist.css'
import context from "./Context";
import { useContext } from "react";

export default function Booklist() {

    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(1);

     const { state, dispatch } = useContext(context);
   

    const loadBooks = async () => {

        const response = await fetch(`https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php?page=${page}`);
        const data = await response.json();
        setBooks(data);

    }

    const previousPage = () => {
    if (page > 1) {
        setPage(page - 1);
         }
    }

    const nextPage = () => {
        setPage(page + 1);
    }

    useEffect( () => {
        loadBooks()
    },[page])


    return (
        <>
            <h2>Booklist Component</h2>

            <button onClick={previousPage}>Previous Page</button>
                <span>--- Page {page} ---</span>
            <button onClick={nextPage}>Next Page</button>

            <table>
                <thead>
                    <tr>
                        <th>Illustration</th>
                        <th>Book name</th>
                        <th>Pages</th>
                        <th>Price</th>
                        <th>Exchange</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td><img src={book.image} alt="" /></td>
                            <td>{book.title}</td>
                            <td>{book.pages}</td>
                            <td>{book.price} EUR</td>
                            <td>{(book.price * state.exchangeRate).toFixed(1)} {state.cur}</td>
                        </tr>
                        ))}
                </tbody>

            </table>
        </>
    )
}