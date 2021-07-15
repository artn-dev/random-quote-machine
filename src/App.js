import QuoteBox from './components/QuoteBox'


const App = () => {
  return (
	  <>
      <div
        className="container-fluid min-vh-100 d-flex flex-column align-items-center"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: "100%",
          backgroundAttachment: "fixed",
      }}>

        <QuoteBox />

        <p className="mt-auto mb-1">
          Inspirational quotes provided by <a
            className="link-warning text-decoration-none"
            href="https://github.com/lukePeavey/quotable"
            target="_blank"
          >
            Luke Peavey's quotable
          </a>
        </p>

      </div>
	  </>
  )
}

export default App
