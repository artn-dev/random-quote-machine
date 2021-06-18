import { useState, useEffect, createContext } from 'react'


export const QuoteContext = createContext({})

export const QuoteContextProvider = ({ children }) => {
  const [quoteList, setQuoteList] = useState([])
  const [quoteIndex, setQuoteIndex] = useState(0)
  const [quote, setQuote] = useState()

  const getRandomIndex = () => {
    let offset = Math.floor( Math.random() * (quoteList.length - 1) )
    let newIndex = (quoteIndex + offset) % quoteList.length
    return newIndex
  }

  const changeQuote = () => {
    let newIndex = getRandomIndex()
    setQuoteIndex(newIndex)
  }

  const getQuoteList = () => {
    fetch('https://api.quotable.io/quotes')
    .then((response) => (response.json()))
    .then((data) => {
      setQuoteList(data.results)
    })
  }

  const getInitialQuote = () => {
    fetch('https://api.quotable.io/random/')
    .then((response) => (response.json()))
    .then((data) => {
      setQuote({ content: data.content, author: data.author})
    })
  }

  useEffect(() => {
    getQuoteList()
    getInitialQuote()

  }, [setQuoteList])

  useEffect(() => {
    setQuote(quoteList[quoteIndex])
  }, [quoteIndex])

  return (
    <QuoteContext.Provider
      value={{
        quote,
        changeQuote
    }}>
      {children}
    </QuoteContext.Provider>
  )
}
