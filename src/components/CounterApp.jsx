import { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ initValue }) => {
  const [value, setValue] = useState(initValue)

  const handleAdd = () => { setValue(prev => prev + 1) }
  const handleSubstract = () => { setValue(prev => prev - 1) }
  const reset = () => { setValue(initValue) }

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { value } </h2>
      <button onClick={handleAdd}> +1 </button>
      <button onClick={handleSubstract}> -1 </button>
      <button aria-label="reset" onClick={reset}> Reset </button>
    </>
  )
}

CounterApp.propTypes = {
  initValue: PropTypes.number.isRequired
}

export default CounterApp
