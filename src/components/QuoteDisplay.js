import { useContext } from 'react'
import { QuoteContext } from '../contexts/QuoteContext'


const Quote = ({ quote }) => (
    <>
        <blockquote className="fs-3 blockquote">
            <p id="text">"{quote.content}"</p>
        </blockquote>

        <figcaption id="author" className="fs-5 text-end blockquote-footer">
            {quote.author}
        </figcaption>
    </>
)

const LoadingSpinners = () => (
    <>
        <div className="spinner-grow text-info me-1" role="status"></div>
        <div className="spinner-grow text-info me-1" role="status"></div>
        <div className="spinner-grow text-info me-1" role="status"></div>
        <span className="visually-hidden">Loading...</span>
    </>
)

const QuoteDisplay = () => {
  const { quote } = useContext(QuoteContext)

  return (
    <>
      <figure>
        { quote
          ? <Quote quote={quote} />
          : <LoadingSpinners />
        }
      </figure>
    </>
  )
}

export default QuoteDisplay
