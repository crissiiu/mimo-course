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