const QuoteButton = ({ onClick }) => {
  return (
    <>
      <button
        id="new-quote"
        type="button"
        className="btn btn-outline-info btn-lg"
        onClick={onClick}
      >
        Get another
      </button>
    </>
  )
}

export default QuoteButton
