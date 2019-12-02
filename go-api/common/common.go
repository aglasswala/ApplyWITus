package common

import (
	"log"

	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
	"golang.org/x/crypto/bcrypt"
)

func GetDB() (*sqlx.DB, error) {
	db, err := sqlx.Connect("postgres", "user=postgres dbname=postgres sslmode=disable")
	if err != nil {
		return nil, err
	}
	return db, nil
}

func Transact(db *sqlx.DB, fn func(*sqlx.Tx) error) error {
	tx, err := db.Beginx()
	if err != nil {
		return err
	}

	err = fn(tx)
	if err != nil {
		tx.Rollback()
		return err
	}

	return tx.Commit()
}

func HashAndSalt(pwd string) string {
	hash, err := bcrypt.GenerateFromPassword([]byte(pwd), 10)
	if err != nil {
		log.Println(err)
	}

	return string(hash)
}
