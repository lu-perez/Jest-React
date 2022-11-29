import { fireEvent, render, screen } from '@testing-library/react'
import CounterApp from '../src/components/CounterApp'

describe('Pruebas en el <CounterApp />', () => {
  const initialValue = 100

  test('debe hacer match con el snapshot', () => {
    const { container } = render(<CounterApp initValue={initialValue}/>)
    expect(container).toMatchSnapshot()
  })

  test('debe mostrar el valor inicial de 100', () => {
    render(<CounterApp initValue={initialValue}/>)
    expect(screen.getByText(100)).toBeTruthy() // 100 is on screen
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('100') // 100 is inside a h2
  })

  test('debe incrementar con el boton +1', () => {
    render(<CounterApp initValue={initialValue}/>)
    fireEvent.click(screen.getByText('+1'))
    expect(screen.getByText('101')).toBeTruthy()
  })

  test('debe decrementar con el boton -1', () => {
    render(<CounterApp initValue={initialValue}/>)
    fireEvent.click(screen.getByText('-1'))
    expect(screen.getByText('99')).toBeTruthy()
  })

  test('debe funcionar el boton de reset', () => {
    render(<CounterApp initValue={300}/>)
    fireEvent.click(screen.getByText('+1'))
    fireEvent.click(screen.getByText('+1'))
    fireEvent.click(screen.getByText('+1'))
    // screen.debug()
    fireEvent.click(screen.getByRole('button', { name: 'reset' }))
    expect(screen.getByText(300)).toBeTruthy()
  })
})
