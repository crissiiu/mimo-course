# 1.Api?

- Application programing interface
- Cách chương trình giao tiếp với nhau

# 2.Loại Api?

- Resful Api - 1 cách để để các app giao tiếp vs nhau
- Get: lấy dữ liệu
- Post: gửi dữ liệu
- Put: cập nhật toàn bộ
- Patch: cập nhật một phần
- Delete
- Head: giống get, chỉ trả về header, không trả nội dung
- Option: kiểm tra server có những http nào

# 3.Http protocol

- Hypertext text transfer protocol là giao thức truyền tải dữ liệu lên web, giống ngôn ngữ giao tiếp giữa trình duyệt và máy chủ

          ----->

  Client Server
  <-----

- Http status code là những con số mà server trả về sau khi nhận được yêu cầu từ client. Cho biết kết quả của request đó.
- 200: Ok - Thành công
- 201: Created - Tạo thành công
- 204: No content - Thường dùng cho delete
- 400: bad request - Yêu cầu sai
- 401: Unauthorized - chưa đăng nhập
- 403: Forbidden - không có quyền
- 404: Not found - không tìm thấy
- 405: method not allowed - sai phương thức http
- 500: Internal server error - Lỗi server
- 503: Server Available - Server tạm thời không hoạt động

# 4. JSON

- JavaScript Object Notation - định dạng dữ liệu nhẹ, dễ đọc. JSon sử dụng cặp key-value và có cấu trúc như ọbject hoặc array

# 5. net/http

net/http là package có sẵn trong thư viện chuẩn của Go, dùng để xây dựng HTTP server và gửi HTTP request. Bạn không cần cài thêm để sử dụng.


Khi xây dựng RESTful API, nó giúp bạn nhận request, xác định route, đọc dữ liệu người dùng gửi lên và trả response.
Có ba thành phần bạn sẽ gặp thường xuyên:
| Thành phần | Vai trò |
|---|---|
| `http.Request` | Chứa thông tin request: method, URL, header, body… |
| `http.ResponseWriter` | Dùng để ghi header, status code và body của response |
| Handler | Hàm xử lý request và tạo response |

```
package main

import (
	"encoding/json"
	"log"
	"net/http"
)

func getUser(w http.ResponseWriter, r *http.Request) {
	id := r.PathValue("id")

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	json.NewEncoder(w).Encode(map[string]string{
		"id":   id,
		"name": "An",
	})
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("GET /users/{id}", getUser)

	log.Println("Server chạy tại http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", mux))
}
```

Luồng xử lý của ví dụ là:
1. ListenAndServe mở server ở cổng 8080.
2. mux nhận request và tìm handler phù hợp với method cùng đường dẫn.
3. getUser lấy 123 từ URL bằng r.PathValue("id").
4. Handler đặt header, status code 200 và ghi JSON vào response.


# 6. log/fmt
Trong Go, khi muốn hiển thị thông tin, bạn thường gặp hai nhóm: fmt để in nội dung và log để ghi nhật ký chương trình.
```
name := "An"
age := 20

fmt.Print("Xin chào ", name)       // Không tự xuống dòng
fmt.Println("Xin chào", name)     // Tự xuống dòng
fmt.Printf("Tên: %s, tuổi: %d\n", name, age) // In theo định dạng
```
| Hàm | Đặc điểm |
|---|---|
| `fmt.Print` | In nội dung, không tự xuống dòng |
| `fmt.Println` | Thêm khoảng trắng giữa các giá trị và xuống dòng |
| `fmt.Printf` | Chèn giá trị vào chuỗi theo các ký hiệu định dạng |

Các ký hiệu thường dùng với Printf:
| Ký hiệu | Ý nghĩa | Ví dụ |
|---|---|---|
| `%s` | Chuỗi | `"An"` |
| `%d` | Số nguyên | `20` |
| `%f` | Số thực | `3.140000` |
| `%.2f` | Số thực với hai chữ số thập phân | `3.14` |
| `%t` | Boolean | `true` |
| `%v` | Giá trị theo định dạng mặc định | Struct, số, chuỗi… |
| `%+v` | Với struct, hiển thị thêm tên trường | `{Name:An Age:20}` |
| `%T` | Kiểu dữ liệu | `int`, `string`… |

Với log, bạn ghi lại thông tin về quá trình chạy chương trình:
```
log.Print("Server đang khởi động")
log.Println("Đã kết nối database")
log.Printf("Server chạy ở cổng %d", 8080)
```
Các hàm này giống cách dùng của fmt, nhưng mặc định thêm ngày giờ và ghi ra
| Hàm | Hành vi |
|---|---|
| `log.Fatal(...)` | Ghi log rồi kết thúc chương trình bằng `os.Exit(1)`; các hàm `defer` không chạy |
| `log.Panic(...)` | Ghi log rồi gọi `panic`; các hàm `defer` chạy khi tháo ngăn xếp |

# 7. Gin Framework
Gin là framework HTTP cho Go, giúp bạn viết API gọn hơn nhờ các công cụ có sẵn cho routing, JSON, kiểm tra dữ liệu và middleware. Nó hoạt động trên nền net/http

## 7.1. Gin giúp gì so với net/http?
| Công việc | Với `net/http` | Với Gin |
|---|---|---|
| Viết handler | Nhận `w` và `r` | Nhận `c *gin.Context` |
| Đăng ký route GET | `mux.HandleFunc("GET /users/{id}", handler)` | `router.GET("/users/:id", handler)` |
| Đọc ID trên URL | `r.PathValue("id")` | `c.Param("id")` |
| Đọc query string | `r.URL.Query().Get("name")` | `c.Query("name")` |
| Trả JSON | Đặt header, encode, ghi response | `c.JSON(status, data)` |
| Đọc JSON request | Dùng decoder | `c.ShouldBindJSON(&input)` |
| Nhóm route | Tự tổ chức | `router.Group("/api")` |


## 7.2. Cài và chạy một API đầu tiên
```
go mod init example.com/myapi
go get github.com/gin-gonic/gin
```

```
package main

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.GET("/welcome", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Welcome to Golang Course",
		})
	})
	log.Fatal(router.Run(":8080"))
}
```

gin.Default() tạo router kèm Logger để ghi thông tin request và Recovery để xử lý panic (Panic trong Go là một cơ chế dừng luồng thực thi thông thường của chương trình khi xảy ra lỗi nghiêm trọng.) trong chuỗi handler.
gin.New() tạo router không kèm hai middleware này.
router.Run khởi động server.

## 7.3. gin.Context và gin.H là gì?
c *gin.Context là đối tượng hỗ trợ xử lý request hiện tại: đọc đầu vào, ghi response và trao đổi dữ liệu giữa các middleware. Bạn vẫn truy cập request gốc qua c.Request và response writer qua c.Writer.
gin.H là kiểu map được Gin định nghĩa tương đương map[string]any. Vì vậy, nó chứa được nhiều kiểu giá trị.
c.JSON(200, data) đặt status, đặt Content-Type JSON và chuyển data thành JSON để gửi về. Bạn cũng có thể truyền struct thay vì gin.H

## 7.4.Routing và đọc dữ liệu
Gin cung cấp GET, POST, PUT, PATCH, DELETE để đăng ký handler theo HTTP method. Route /users/:id nhận ID bằng c.Param("id")

| Nguồn dữ liệu | Cách đọc |
|---|---|
| Path `/users/123` | `c.Param("id")` |
| Query `?page=2` | `c.Query("page")` |
| Query có giá trị mặc định | `c.DefaultQuery("page", "1")` |
| Header | `c.GetHeader("Authorization")` |
| Form | `c.PostForm("name")` |
| JSON body | `c.ShouldBindJSON(&input)` |

## 7.5. Binding và validation
Binding chuyển dữ liệu request vào struct; validation kiểm tra dữ liệu đó theo quy tắc:
```
type CreateUserInput struct {
	Name  string `json:"name" binding:"required"`
	Email string `json:"email" binding:"required,email"`
}
```

## 7.6. Middleware và nhóm route
Middleware thực hiện việc dùng chung như ghi log, xác thực hoặc đo thời gian. Đăng ký bằng router.Use(...), áp dụng cho nhóm bằng group.Use(...), hoặc truyền trực tiếp vào một route.
c.Next() chạy phần tiếp theo của chuỗi rồi quay lại. c.Abort() ngăn các handler tiếp theo, nhưng không kết thúc hàm hiện tại, nên thường cần thêm return.
api := router.Group("/api/v1") giúp các route như api.GET("/users", handler) có đường dẫn /api/v1/users, đồng thời dùng chung middleware.

## 7.6. Middleware và nhóm route
Database và tổ chức code: thường tách handler → service xử lý nghiệp vụ → repository truy cập database; Gin không bắt buộc cấu trúc này.
Xác thực: tích hợp kiểm tra token/session bằng middleware; tự xây dựng quy tắc phân quyền.
Tính năng khác: Gin hỗ trợ form, upload file, cookie, redirect, HTML và static files. Danh mục chức năng
Testing: dùng net/http/httptest để gửi request vào router và kiểm tra status/body. Testing
Triển khai: cấu hình timeout bằng http.Server, graceful shutdown và trusted proxies khi đứng sau reverse proxy.