import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => {
  return(<h1>{text}</h1>)
}

const Button = ({onClick, text}) => {
  return(<button onClick={onClick}>{text}</button>)
}

const Statistic = ({text, value}) => {
  return(<tbody><tr><td>{text}</td><td>{value}</td></tr></tbody>)
}

const Statistics = ({good, bad, neutral}) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (<p>no feedback given</p>)
  }
  return(<table>
    <Statistic text='good' value={good}/>
    <Statistic text='neutral' value={neutral}/>
    <Statistic text='bad' value={bad}/>
    <Statistic text='all' value={good+neutral+bad}/>
    <Statistic text='average' value={good-bad/(good+neutral+bad)}/>
    <Statistic text='positive' value={good/(good+neutral+bad)*100+'%'} />
  </table>)
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => () => {
    setGood(good+1)
  }
  const addNeutral = () => () => {
    setNeutral(neutral+1)
  }
  const addBad = () => () => {
    setBad(bad+1)
  }




  return (
    <div>
      <Header text='give feedback'/>
      <Button onClick={addGood()} text='good'/>
      <Button onClick={addNeutral()} text='neutral'/>
      <Button onClick={addBad()} text='bad'/>
      <Header text='statistics'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)