const knex = require('knex');

const { compareHash } = require('../utils/utils')

const db = knex({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
})

module.exports = {
	login: (email, password) => new Promise((resolve, reject) => {
		db.select("email", "hash")
		  .from("login")
		  .where("email", "=", email)
		  .then(user => {
		  	const isValid = compareHash(password, user[0].hash)

		  	if(isValid) {
		  		return db.select("*")
		  				 .from("users")
		  				 .where("email", "=", email)
		  				 .then(user => resolve(user[0]))
		  				 .catch(err => reject(err))
		  	}

		  	return reject("Incorrect email or password")
		  })

		  .catch(err => reject(new Error(err)))
	}),
	register: (email, password, firstName, lastName) => new Promise((resolve, reject) => {
		db.transaction((trx) => {
	      trx.insert({ hash: password, email: email })
	        .into('login')
	        .then(() => trx('users')
	          .returning('*')
	          .insert({ email: email, fname: firstName, lname: lastName }))
	        .then(data => {
				console.log(data)
				return resolve(data[0])
			})
	        .then(trx.commit)
	        .catch(trx.rollback);
	    })
	    
	      .catch(err => reject(new Error(err)));
	})
}