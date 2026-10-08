package main

import (
	"encoding/json"
	"log"
	"net/http"
)

func main() {

	//Tao enpoint
	http.HandleFunc("/demo", demoHandler)

	log.Println("Server is starting ....") //Có thời gian, có thông tin
	//fmt.Println("Abc")

	err := http.ListenAndServe(":8080", nil) //Tao server voi locahost:8080

	if err != nil {
		log.Fatal("Server Error: ", err)
	}
}

func demoHandler(w http.ResponseWriter, r *http.Request) {
	log.Printf("%+v", r)

	if r.Method != http.MethodGet {
		http.Error(w, "Method not Allow", http.StatusMethodNotAllowed)
		return
	}

	res := map[string]string{
		"message": "Welcome to Golang Course",
		"teacher": "Lee Chong Wee",
	}

	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("X-Course", "GoLang Programing")

	// data, err := json.Marshal(res)
	// if err != nil {
	// 	http.Error(w, "Server Error: ", http.StatusInternalServerError)
	// 	return
	// }

	// w.Write(data) //In ra response

	json.NewEncoder(w).Encode(res)
}
