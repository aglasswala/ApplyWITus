package users

type UserLogin struct {
	Email    string `json: email`
	Password string `json: password`
}

type UserRegister struct {
	Firstname  string `json: firstname`
	Lastname   string `json: lastname`
	Email      string `json: email`
	Password   string `json: password`
	RePassword string `json: repassword`
}
