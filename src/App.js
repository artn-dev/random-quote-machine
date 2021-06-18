import { QuoteContextProvider } from './contexts/QuoteContext'
import QuoteDisplay from './components/QuoteDisplay'
import QuoteButton from './components/QuoteButton'
import TwitterButton from './components/TwitterButton'


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

        <div className=" card bg-light bg-gradient mt-auto rounded shadow" style={{ width: 800 }}>
          <div id="quote-box" className="card-body p-5 text-center">
            <QuoteContextProvider>
                  <QuoteDisplay />
                  <QuoteButton />
                  <TwitterButton />
            </QuoteContextProvider>
          </div>
        </div>

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
