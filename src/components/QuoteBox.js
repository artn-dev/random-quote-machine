import { useState, useEffect } from 'react'
import QuoteDisplay from './QuoteDisplay'
import QuoteButton from './QuoteButton'
import TwitterButton from './TwitterButton'


export const QuoteBox = () => {
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
    <>
        <div className=" card bg-light bg-gradient mt-auto rounded shadow" style={{ width: "80%" }}>
          <div id="quote-box" className="card-body p-5 text-center">
            <QuoteDisplay quote={quote} />
            <QuoteButton onClick={changeQuote} />
            <TwitterButton />
          </div>
        </div>
    </>
  )
}

export default QuoteBox 
