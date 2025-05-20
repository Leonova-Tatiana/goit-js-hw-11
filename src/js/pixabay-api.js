import axios from 'axios';

export default function getImagesByQuery(query) {
  axios.defaults.baseURL = 'https://pixabay.com/api/';
  return axios
    .get('', {
      params: {
        key: '50399513-0102622743a29b0122ce40bab',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 9,
      },
    })
    .then(function (response) {
      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}
