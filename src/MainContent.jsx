import './MainContent.scss'
import LoginForm from './LoginForm'
import Homepage from './Homepage'
import About from './About'
import { Routes, Route } from 'react-router-dom'
import BookDetail from './BookDetail'

export default function MainContent({content, currentPage, user, setUser}) {
    return (
        <main className="main">
            <h1 className="app__headline">{content}</h1>

       
         {
            currentPage === '' &&
            <> 
                <Homepage />  
            </>
        }

        {
            currentPage === 'about' && 
            <>
                <About />
            </>
        }
       

        {
            currentPage === 'contact' && 
            <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"></link>
            <h2>Contact Form</h2>
            <form action="">
                <label htmlFor="area">Say something beautiful!</label>
                <textarea name="area" id="area" cols="40" rows="10"></textarea>
            </form>
            </>
        }

          {
            currentPage === 'login' && <LoginForm user={user} setUser={setUser} />
        }


        </main>
    )
}


/*

            <Routes>
                <Route path="/" element={ <Homepage /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/book/:id" element= { <BookDetail /> } />
            </Routes>

            */