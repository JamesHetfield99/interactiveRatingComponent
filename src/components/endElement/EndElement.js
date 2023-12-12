import "./endElement.css"
import endImage from "../../images/illustration-thank-you.svg"

const EndElement = ( { selectedScore }) => {
  return (
    <main className="appear">
      <header className="end-header">
        <img src={endImage} alt="illustration" />
        <h3>You selected {selectedScore} out of 5</h3>
      </header>
      <section className="end-section">
        <h3>Thank you!</h3>
        <p>
          We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
        </p>
      </section>
    </main>
  )
}

export default EndElement
