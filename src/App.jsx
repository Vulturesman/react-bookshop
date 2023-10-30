import { useState } from 'react'
import './App.scss'
import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent'


function App() {

  const [currentPage, setCurrentPage] = useState();
  const [user, setUser] = useState(null);

  const nameBookShop = "The Bookish Bonanza";
  const text = "This is the main content mate!"

  return (
    <>
      <Header user={user} currentPage={currentPage} setCurrentPage={setCurrentPage} title={nameBookShop} />
      <MainContent user={user} setUser={setUser} currentPage={currentPage} content={text}/>
      <Footer />
    </>
  )
}

export default App
