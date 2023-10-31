import { useEffect, useState } from "react"

export default function CurrencySelection() {

    const [currencies, setCurrencies] = useState([]);
    const [currency, setCurrency] = useState(localStorage.getItem('currency') || 'EUR');
    const [exchangeRate, setExchangeRate] = useState(1);

    const loadCurrencies = async () => {
        const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/currencies.php')
        const data = await response.json()


        setCurrencies(data)
    }

    const loadExchangeRates = async (currency) => {
        const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/exchange-rate.php?currency=' + currency)
        const data = await response.json()

        setExchangeRate(data)
    }

    useEffect(() => {
        loadExchangeRates(currency)
        console.log('Currency changed: ', currency);
        }, [localStorage.setItem('currency', currency)]
    )


    useEffect( () => {
       loadCurrencies();
    }, 
    []
    )

    const handleSelect = (event) => {
        setCurrency(event.target.value);
    };

    return (

        <>
            <h4>Choose your currency:</h4>

            <select value={currency} onChange={handleSelect} >
                    <optgroup label="--SELECT RATE--">
                        {currencies.map((currency) => (
                            <option key={currency} value={ currency }>{currency}</option>
                        ))}
                    </optgroup>
            </select>

            <p><strong>1 EUR is:</strong> {exchangeRate.rate} {currency}</p>
        </>
    )
}