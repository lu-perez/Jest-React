import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp'
import { heroes as heroesData } from '../../src/data/heroes'

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroeById debe retornar un héroe por ID', () => {
    const id = 1
    const hero = getHeroeById(id)
    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
  })

  test('getHeroeById debe retornar un valor falsy si no existe', () => {
    const id = 100
    const hero = getHeroeById(id)
    expect(hero).toBeFalsy()
  })

  test('getHeroesByOwner debe regresar heroes de DC', () => {
    const owner = 'DC'
    const heroes = getHeroesByOwner(owner)
    expect(heroes.length).toBe(3)
    expect(heroes).toEqual(heroesData.filter((heroe) => heroe.owner === owner))
  })
})
