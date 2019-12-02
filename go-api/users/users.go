package users

import (
	"log"
	"net/http"

	"github.com/ApplyWITus/go-api/common"
	"github.com/gin-gonic/gin"
	"github.com/jmoiron/sqlx"
)

func Login(c *gin.Context, db *sqlx.DB) {
	var u UserLogin
	c.BindJSON(&u)

	c.JSON(http.StatusOK, gin.H{
		"email":    u.Email,
		"password": u.Password,
	})
}

func Register(c *gin.Context, db *sqlx.DB) {
	var user UserRegister
	c.BindJSON(&user)

	hashedPass := common.HashAndSalt(user.Password)
	err := common.Transact(db, func(tx *sqlx.Tx) error {
		_, err := tx.Exec(`INSERT INTO login (hash, email) VALUES ($1, $2)`, hashedPass, user.Email)
		if err != nil {
			return err
		}

		_, err = tx.Exec(`INSERT INTO users (fname, lname, email) VALUES ($1, $2, $3)`, user.Firstname, user.Lastname, user.Email)
		if err != nil {
			log.Println("1HERE", err)
			return err
		}

		return nil
	})

	if err != nil {
		c.JSON(404, gin.H{
			"FAILED": err,
		})
	} else {
		c.JSON(http.StatusOK, gin.H{
			"success": "User Registered",
		})
	}
}
