import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  const [matches, setMatches] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newMatch, setNewMatch] = useState({team1: '', team2: '', league: '', venue: '', timer: '', category: ''});

  useEffect(() => {
    const storedMatches = JSON.parse(localStorage.getItem('matches'));
    if(storedMatches){
      setMatches(storedMatches);
    }

    const interval = setInterval(() => {
      setMatches((prevMatches) => {
        return prevMatches.map((match) => {
          if(match.isLive){
            return match;
          }
          if(match.timer > 0){
            match.timer -= 1;
          }else if(match.timer === 0 && !match.isLive){
            match.isLive = true;
            match.category = "Live Match";
            alert(`${match.team1} vs ${match.team2} is Live now`)
          }
          return match;
        });
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setNewMatch(prevMatch => ({
      ...prevMatch,
      [name]: value
    }));
  };

  const handleAddMatch = () => {
    const match = {
      id: Date.now,
      team1: newMatch.team1,
      team2: newMatch.team2,
      league: newMatch.league,
      venue: newMatch.venue,
      timer: parseInt(newMatch.timer, 10),
      category: "Upcoming Match",
      isLive: false
    };

    const updatedMatches = [...matches, match];
    setMatches(updatedMatches);
    localStorage.setItem('matches', JSON.stringify(updatedMatches));
    setShowModal(false);
    setNewMatch({team1: '', team2: '', league: '', venue: '', timer: ''});
  }

  return (
    <div>
  <button onClick={() => setShowModal(true)} style={{float:'right'}}>Add Match</button>
  {showModal && (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Matches</h2>
        <label>
          Team 1: <input type='text' name='team1' value={newMatch.team1} onChange={handleInputChange} required placeholder='Enter Team 1'/>
        </label>
        <label>
          Team 2: <input type='text' name='team2' value={newMatch.team2}  onChange={handleInputChange} required placeholder='Enter Team 2'/>
        </label>
        <label>
          League: <input type='text' name='league' value={newMatch.league} onChange={handleInputChange} required placeholder='Enter League'/>
        </label>
        <label>
          Venue: <input type='text' name='venue' value={newMatch.venue}  onChange={handleInputChange} required placeholder='Enter Venue'/>
        </label>
        <label>
          Timer (in seconds): <input type='text' name='timer' value={newMatch.timer} onChange={handleInputChange} required placeholder='Enter Timer (in seconds)'/>
        </label>
        <button onClick={handleAddMatch}>Add Match</button>
        <button className="cancel" onClick={() => setShowModal(false)}>Cancel</button>
      </div>
    </div>
  )}

  <div>
    <h2>Live Matches</h2>
    <div className="match-container">
      {matches.filter(match => match.category === "Live Match").map(match => (
        <div className={`match-card live-match`} key={match.id}>
          <h4>{match.team1} vs {match.team2}</h4>
          <p>League: {match.league}</p>
          <p>Venue: {match.venue}</p>
          <p>Match is Live now</p>
        </div>
      ))}
    </div>
  </div>

  <div>
    <h2>Upcoming Matches</h2>
    <div className="match-container">
      {matches.filter(match => match.category === "Upcoming Match").map(match => (
        <div className={`match-card upcoming-match`} key={match.id}>
          <h4>{match.team1} vs {match.team2}</h4>
          <p>League: {match.league}</p>
          <p>Venue: {match.venue}</p>
          <p>Time Left: {match.timer} seconds</p>
        </div>
      ))}
    </div>
  </div>
</div>

  );
}

export default App;
