import './App.css'
// import PropTypesComponent from './components/PropTypesComponent'
import CounterApp from './components/CounterApp'

function App () {
  return (
    <>
      <h1>Hello World</h1>
      {/* { <PropTypesComponent title={'Hola, soy Goku'} subtitle={2} /> } */}
      <CounterApp initValue={100} />
    </>
  )
}

export default App
