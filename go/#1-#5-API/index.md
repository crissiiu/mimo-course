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
Client          Server
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

