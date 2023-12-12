import "./ratingForm.css"
import iconStar from "../../images/icon-star.svg"

import ScoreElement from "../ScoreElement/ScoreElement"

const scoreArray = [1,2,3,4,5]
const RatingForm = ( {selectedScore, setSelectedScore, setSubmited} ) => {

  const handleSubmit = () => {
    setSubmited(true)
  }

  return (
    <main>
      <div className="logo-container">
        <img src={iconStar} alt="star-icon" />
      </div>
      <section>
        <header className="rating-header">
          <h2>How did we do?</h2>
          <p>
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
          </p>
        </header>
        <div className="score-container">
          {scoreArray.map(item => <ScoreElement setSelectedScore={setSelectedScore} selectedScore={selectedScore} text = {item} key={`item-${item}`} /> )}
        </div>
        <button className="rating-button" onClick={handleSubmit}>Submit</button>
      </section>
    </main>
  )
}

export default RatingForm