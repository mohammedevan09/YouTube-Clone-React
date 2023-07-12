import axios from 'axios'

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: 30,
  },
  headers: {
    'X-RapidAPI-Key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
}

export const FetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    console.log(data)
    return data
  } catch (error) {
    console.log('Too many request')
  }
}
