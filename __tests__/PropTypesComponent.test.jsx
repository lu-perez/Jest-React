import { render, screen } from '@testing-library/react'
import { PropTypesComponent } from '../src/components/PropTypesComponent'

describe('Pruebas en <PropTypesComponent />', () => {
  const title = 'Hola, soy Goku'

  test('debe de hacer match con el snapshot', () => {
    const { container } = render(<PropTypesComponent title={title}/>)
    expect(container).toMatchSnapshot()
  })

  test('debe mostrar el mensaje "Hola, soy Goku"', () => {
    render(<PropTypesComponent title={title}/>)
    expect(screen.getByText(title)).toBeTruthy()
    // screen.debug()
  })

  test('debe mostrar el título en un h1', () => {
    render(<PropTypesComponent title={title}/>)
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title)
  })
})
