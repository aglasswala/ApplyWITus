const axios = require('axios')

module.exports = {
    startSelenium: (data) => {
        return axios.post('http://localhost:3001/applyJob', data)
						.then(response => response)
						.catch(err => err)
    }
}