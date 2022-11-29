import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones'

describe('Pruebas en 05-funciones', () => {
  test('getUser debe retornar un objeto', () => {
    const testUser = {
      uid: '123',
      username: 'Aldo'
    }
    const user = getUser()
    expect(testUser).toEqual(user)
  })

  test('getUsuarioActivo debe retornar un objeto', () => {
    const name = 'Fernando'
    const user = getUsuarioActivo(name)
    expect(user).toStrictEqual({
      uid: 'ABC567',
      username: name
    })
  })
})
