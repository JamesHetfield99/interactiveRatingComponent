import "./scoreElement.css"
const ScoreElement = ({ selectedScore, setSelectedScore, text }) => {

  const handleChange = (e) => {
    setSelectedScore(text)
  }

  return (
    <div className={`score-element ${selectedScore === text ? "selected-score" : ""}`} onClick={handleChange}>{text}</div>
  )
}

export default ScoreElement