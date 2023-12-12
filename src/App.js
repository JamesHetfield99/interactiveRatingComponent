import './App.css';

import RatingForm from './components/ratingForm/RatingForm';
import EndElement from './components/endElement/EndElement';
import { useState } from 'react';

function App() {
  const [submited,setSubmited] = useState(false)
  const [selectedScore,setSelectedScore] = useState()

  return (
    <div className="App">
        {submited 
          ? <EndElement selectedScore={selectedScore}  />
          : <RatingForm setSubmited={setSubmited} selectedScore={selectedScore} setSelectedScore={setSelectedScore} />
        }
    </div>
  );
}

export default App;
