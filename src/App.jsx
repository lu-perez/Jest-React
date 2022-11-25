import './App.css'
// import PropTypesComponent from './components/PropTypesComponent'
import CounterApp from './components/CounterApp'

function App () {
  return (
    <>
      <h1>Hello World</h1>
      { /* <PropTypesComponent title={'demo'} subtitle={2} /> */ }
      <CounterApp initValue={1} />
    </>
  )
}

export default App
