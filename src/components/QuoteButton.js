import { useContext } from 'react'
import { QuoteContext } from '../contexts/QuoteContext'


const QuoteButton = () => {
  const { changeQuote } = useContext(QuoteContext)

  return (
    <>
      <button
        id="new-quote"
        type="button"
        className="btn btn-outline-info btn-lg"
        onClick={changeQuote}
      >
        Get another
      </button>
    </>
  )
}

export default QuoteButton
