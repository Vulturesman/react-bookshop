import { useState } from 'react'
import './App.scss'
import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent'
import CurrencyContext from './CurrencyContext'
import Context from './Context'


function App() {

  const [currency, setCurrency] = useState(localStorage.getItem('currency') || 'EUR');

  const [currentPage, setCurrentPage] = useState();
  const [user, setUser] = useState(null);

  const nameBookShop = "The Bookish Bonanza";
  const text = "This is the main content mate!"

  const [contextValue, setContextValue] = useState({ exchangeRate: 1 });

  return (

    <Context.Provider value={{ state: contextValue, dispatch: setContextValue }}>
      <CurrencyContext.Provider value={{currency, setCurrency}}>
        
          <Header user={user} currentPage={currentPage} setCurrentPage={setCurrentPage} title={nameBookShop} />
          <MainContent user={user} setUser={setUser} currentPage={currentPage} content={text}/>
          <Footer />
        
      </CurrencyContext.Provider>
    </Context.Provider>
  )
}

export default App
