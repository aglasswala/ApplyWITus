import axios from 'axios'

module.exports = {
	upload: (data, config) => {
		return axios.post("http://localhost:3001", data, config)
				.then(response => response)
				.catch(err => err)
	}
}