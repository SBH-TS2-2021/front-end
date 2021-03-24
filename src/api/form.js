import apiUrl from '../apiConfig'
import axios from 'axios'

export const formCreate = (form) => {
  return axios({
    url: apiUrl + '/form',
    method: 'POST',
    // send the haiku object as our data for creating a form rfesponse
    data: { form }
  })
}
