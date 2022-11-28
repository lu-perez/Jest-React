
export const getUser = () => ({
  uid: '123',
  username: 'Aldo'
})

export const getUsuarioActivo = (nombre) => ({
  uid: 'ABC567',
  username: nombre.toUpperCase()
})
