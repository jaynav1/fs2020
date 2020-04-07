import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({value}) => <div>{value}</div>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = (props) => {
    const [ value, setValue ] = useState(0)

    const setToValue = (newValue) => () => {
      setValue(newValue)
    }
  
    return (
      <div>
        <Display value={value}/>
        <Button
          onClick={setToValue(value + 1)}
          text='plus'
        />
        <Button
          onClick={setToValue(0)}
          text='zero'
        />     
        <Button
          onClick={setToValue(value - 1)}
          text='minus'
        />           
      </div>
    )
  }

  ReactDOM.render(<App />, document.getElementById('root'))