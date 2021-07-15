import { useState, useEffect } from 'react'
import QuoteDisplay from './QuoteDisplay'
import QuoteButton from './QuoteButton'
import TwitterButton from './TwitterButton'


export const QuoteBox = () => {
  const [quote, setQuote] = useState()

  const getRandomQuote = () => {
    fetch('https://api.quotable.io/random/')
    .then((response) => (response.json()))
    .then((data) => {
      setQuote({ content: data.content, author: data.author})
    })
  }

  useEffect(getRandomQuote, [setQuote])

  return (
    <>
        <div className=" card bg-light bg-gradient mt-auto rounded shadow" style={{ width: "80%" }}>
          <div id="quote-box" className="card-body p-5 text-center">
            <QuoteDisplay quote={quote} />
            <QuoteButton onClick={getRandomQuote} />
            <TwitterButton />
          </div>
        </div>
    </>
  )
}

export default QuoteBox 
