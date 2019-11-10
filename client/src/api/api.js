import axios from 'axios'


const upload = (data, config) => {
		return axios.post("http://localhost:3001/apply", data, config)
				.then(response => response)
				.catch(err => err)
}

export default upload
