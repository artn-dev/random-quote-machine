const Quote = ({ text, author }) => (
    <>
        <blockquote className="fs-3 blockquote">
            <p id="text">"{text}"</p>
        </blockquote>

        <figcaption id="author" className="fs-5 text-end blockquote-footer">
            {author}
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

const QuoteDisplay = ({ quote }) => {
  return (
    <>
      <figure>
        { quote
          ? <Quote author={quote.author} text={quote.content} />
          : <LoadingSpinners />
        }
      </figure>
    </>
  )
}

export default QuoteDisplay
