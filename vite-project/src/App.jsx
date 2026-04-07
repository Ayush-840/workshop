import { useState } from 'react'
import './index.css'

function App() {
  const [playerChoice, setPlayerChoice] = useState(null)
  const [cpuChoice, setCpuChoice] = useState(null)
  const [result, setResult] = useState(null)
  const [wins, setWins] = useState(0)
  const [losses, setLosses] = useState(0)

  const emojis = { Rock: '🪨', Paper: '📄', Scissors: '✂️' }
  const choices = ['Rock', 'Paper', 'Scissors']

  function play(choice) {
    const cpuIndex = Math.floor(Math.random() * 3)
    const cpu = choices[cpuIndex]
    
    let outcome = ''
    if (choice === cpu) {
      outcome = 'draw'
    } else if (
      (choice === 'Rock' && cpu === 'Scissors') ||
      (choice === 'Paper' && cpu === 'Rock') ||
      (choice === 'Scissors' && cpu === 'Paper')
    ) {
      outcome = 'win'
      setWins(wins + 1)
    } else {
      outcome = 'lose'
      setLosses(losses + 1)
    }

    setPlayerChoice(choice)
    setCpuChoice(cpu)
    setResult(outcome)
  }

  function resetGame() {
    setPlayerChoice(null)
    setCpuChoice(null)
    setResult(null)
    setWins(0)
    setLosses(0)
  }

  return (
    <div className="container">
      <h1>Rock Paper Scissors</h1>
      
      <div className="scoreboard">
        <p>Your Wins: {wins}</p>
        <p>CPU Wins: {losses}</p>
      </div>

      <div className="game-area">
        <div className="choices">
          <p>Choose your move:</p>
          {choices.map((choice) => (
            <button key={choice} onClick={() => play(choice)}>
              {emojis[choice]} {choice}
            </button>
          ))}
        </div>

        {playerChoice && (
          <div className="results">
            <h2>Results:</h2>
            <p>You chose: {emojis[playerChoice]} {playerChoice}</p>
            <p>Computer chose: {emojis[cpuChoice]} {cpuChoice}</p>
            
            <h3 className={result}>
              {result === 'win' && 'You Win! 🎉'}
              {result === 'lose' && 'You Lose! 😢'}
              {result === 'draw' && "It's a Draw! 🤝"}
            </h3>
          </div>
        )}
      </div>

      <button className="reset-btn" onClick={resetGame}>Restart Game</button>
    </div>
  )
}

export default App
