let apiUrl
const apiUrls = {
  production: '<herokuurl>',
  development: 'http://localhost:5000/'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
