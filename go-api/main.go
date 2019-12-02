package main

import (
	"net/http"

	"github.com/ApplyWITus/go-api/common"
	"github.com/ApplyWITus/go-api/users"
	"github.com/gin-gonic/gin"
	"github.com/jmoiron/sqlx"
)

var db *sqlx.DB
var err error

func setupRouter() *gin.Engine {
	r := gin.Default()

	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "yes",
		})
	})

	r.POST("/login", func(c *gin.Context) {
		users.Login(c, db)
	})

	r.POST("/register", func(c *gin.Context) {
		users.Register(c, db)
	})

	return r
}

func main() {
	r := setupRouter()
	db, err = common.GetDB()
	if err != nil {
		panic(err)
	}

	_ = r.Run()
}
