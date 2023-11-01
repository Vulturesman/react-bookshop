import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function BookDetail() {

    // const allURLParams = useParams();
    // or

    const { id } = useParams();

    const [book, setBook] = useState(null);

    const loadBook = async () => {
        const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/book.php?id=' + id)
        const data = await response.json()

        setBook(data)
    }

    useEffect( () => {
        loadBook();
    }, [id])

    return (
        <div className="book-detail">
            <h2>Detail of the book</h2>

            {
                book ?
                ( 
                <>
                    <h2>{ book.title }</h2>
                    <p>{ book.price }</p>
                </>

                )
                : 'Loading...'
            }
        </div>

    )
}