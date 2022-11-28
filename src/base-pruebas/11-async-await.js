import axios from 'axios'

export const getImagen = async () => {
  try {
    const apiKey = 'bNPiBKnksLonYkmwpIKLBhJkzE7XuohJ'
    const headers = {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'application/json'
    }
    const { data } = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`, { headers })
    const { url } = data.data.images.original
    return url
  } catch (error) {
    console.error(error)
    return 'No se encontró la imagen'
  }
}
