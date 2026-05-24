# Hướng dẫn Toàn diện về HTML: Chi tiết Tag & Thuộc tính

Chào mừng bạn đến với bản hướng dẫn chi tiết nhất về HTML. Tài liệu này không chỉ liệt kê các thẻ mà còn đi sâu vào cách sử dụng, các thuộc tính đi kèm (attributes) và ví dụ thực tế để bạn có thể áp dụng ngay.

---

## 1. Lý thuyết Cơ bản & Cách hoạt động
HTML (HyperText Markup Language) hoạt động theo cơ chế **DOM (Document Object Model)**. Mỗi thẻ bạn viết sẽ trở thành một "nút" (node) trong sơ đồ hình cây của trang web.

### Quy cách viết Thuộc tính (Attributes)
Thuộc tính cung cấp thông tin bổ sung cho phần tử. Cấu trúc:
`<tag thuộc-tính="giá-trị"> nội dung </tag>`

---

## 2. Các Thuộc tính Toàn cầu (Global Attributes)
Đây là những thuộc tính bạn có thể dùng trong **bất kỳ** thẻ nào.

| Thuộc tính | Ý nghĩa | Cách sử dụng |
| :--- | :--- | :--- |
| `id` | Định danh duy nhất. | Dùng để trỏ CSS hoặc JavaScript cụ thể cho 1 phần tử. |
| `class` | Phân loại nhóm. | Một thẻ có thể có nhiều class (cách nhau bởi khoảng trắng). |
| `style` | Định dạng inline. | Viết code CSS trực tiếp (VD: `style="color: red;"`). |
| `title` | Chú thích công cụ. | Hiển thị văn bản khi di chuột vào phần tử đó. |
| `lang` | Ngôn ngữ. | Giúp trình duyệt và máy tìm kiếm biết ngôn ngữ của khối đó (VD: `lang="vi"`). |
| `hidden` | Ẩn phần tử. | Trình duyệt sẽ không hiển thị phần tử này. |
| `tabindex` | Thứ tự Tab. | Xác định thứ tự khi người dùng nhấn phím Tab để di chuyển. |

---

## 3. Chi tiết các Nhóm Thẻ & Thuộc tính Đặc thù

### A. Liên kết (Anchor Tag - `<a>`)
Dùng để tạo liên kết giữa các trang hoặc các phần trong trang.

| Thuộc tính | Giá trị phổ biến | Ý nghĩa |
| :--- | :--- | :--- |
| `href` | URL / #id | Địa chỉ đích của liên kết. |
| `target` | `_blank`, `_self` | `_blank`: Mở tab mới. `_self`: Mở tại tab hiện tại. |
| `download` | tên_file | Ép trình duyệt tải tệp về thay vì mở nó. |
| `rel` | `noopener`, `nofollow` | Bảo mật và SEO khi dùng liên kết ngoài. |

**Ví dụ:**
```html
<a href="https://google.com" target="_blank" title="Mở Google trong tab mới">Truy cập Google</a>
```

### B. Hình ảnh (`<img>`)
Lưu ý: Đây là thẻ đơn, không có thẻ đóng.

| Thuộc tính | Ý nghĩa | Lợi ích |
| :--- | :--- | :--- |
| `src` | Đường dẫn file ảnh. | Bắt buộc phải có để ảnh hiện ra. |
| `alt` | Văn bản thay thế. | Hiển thị khi ảnh lỗi, cực kỳ quan trọng cho người khiếm thị và SEO. |
| `width` / `height` | Chiều rộng / cao. | Giữ chỗ cho ảnh, giúp trang không bị giật (layout shift). |
| `loading` | `lazy`, `eager` | `lazy`: Chỉ tải khi người dùng cuộn tới (tăng tốc độ trang). |

**Ví dụ:**
```html
<img src="logo.png" alt="Logo Công ty" width="200" height="100" loading="lazy">
```

### C. Bảng (`<table>`)
Dùng để cấu trúc dữ liệu phức tạp.

| Thẻ con | Ý nghĩa | Thuộc tính đi kèm |
| :--- | :--- | :--- |
| `<table>` | Bao quát bảng. | `border` (cũ), thường dùng CSS để kẻ bảng. |
| `<tr>` | Hàng trong bảng. | Không có thuộc tính riêng đặc biệt. |
| `<th>` | Ô tiêu đề. | `scope="col"` (cột) hoặc `scope="row"` (hàng). |
| `<td>` | Ô dữ liệu. | `colspan` (gộp cột), `rowspan` (gộp hàng). |

**Ví dụ gộp ô:**
```html
<tr>
    <td colspan="2">Ô này chiếm diện tích của 2 cột</td>
</tr>
```

---

## 4. Hệ thống Form & Input (Chi tiết nhất)
Đây là nơi người dùng tương tác với website nhiều nhất.

### Thẻ `<form>`
| Thuộc tính | Ý nghĩa |
| :--- | :--- |
| `action` | Địa chỉ (URL) nơi dữ liệu sẽ được gửi tới. |
| `method` | `GET` (hiện dữ liệu lên URL) hoặc `POST` (gửi ngầm, bảo mật hơn). |
| `autocomplete` | `on` hoặc `off` để bật/tắt gợi ý nhập liệu. |

### Thẻ `<input>` và các kiểu dữ liệu
| Type | Thuộc tính đi kèm phổ biến | Cách dùng |
| :--- | :--- | :--- |
| `text` | `placeholder`, `minlength`, `maxlength` | Nhập văn bản ngắn. |
| `email` | `multiple` | Tự động kiểm tra định dạng email. |
| `password` | `required` | Ẩn ký tự khi nhập. |
| `number` | `min`, `max`, `step` | Nhập số, có nút tăng giảm. |
| `radio` | `name` (phải giống nhau để chọn 1), `checked` | Chọn 1 trong nhiều lựa chọn. |
| `checkbox` | `checked` | Chọn nhiều lựa chọn. |
| `file` | `accept` (VD: `.jpg, .png`), `multiple` | Chọn tệp từ máy tính. |

**Ví dụ Form đăng ký:**
```html
<form action="/login" method="POST">
    <label for="u">Tên:</label>
    <input type="text" id="u" name="username" placeholder="Nhập tên..." required>
    
    <label>Giới tính:</label>
    <input type="radio" name="gender" value="m"> Nam
    <input type="radio" name="gender" value="f"> Nữ
    
    <button type="submit">Gửi</button>
</form>
```

---

## 5. Phương tiện Truyền thông (Media)
Cách nhúng Video và Audio hiện đại không cần plugin.

### Thẻ `<video>` & `<audio>`
| Thuộc tính | Ý nghĩa |
| :--- | :--- |
| `controls` | Hiển thị bộ điều khiển (Play, Pause, Volume). |
| `autoplay` | Tự động phát khi tải trang (thường đi kèm `muted`). |
| `loop` | Phát đi phát lại. |
| `muted` | Tắt tiếng mặc định. |
| `poster` | Ảnh hiển thị trước khi video được phát (chỉ dành cho video). |

**Ví dụ Video:**
```html
<video width="640" controls poster="thumb.jpg">
    <source src="movie.mp4" type="video/mp4">
    Trình duyệt của bạn không hỗ trợ thẻ video.
</video>
```

---

## 6. Các Thẻ Semantic (Ngữ nghĩa) - Cách dùng đúng
Đừng lạm dụng thẻ `<div>`. Hãy sử dụng các thẻ sau để trang web chuyên nghiệp hơn:

- `<header>`: Dùng cho thanh menu, logo ở đầu trang.
- `<nav>`: Chỉ dùng cho các cụm liên kết điều hướng chính.
- `<main>`: Chứa nội dung chính yếu, độc nhất của trang.
- `<article>`: Dùng cho bài viết, tin tức (nội dung có thể đứng độc lập).
- `<section>`: Dùng để chia các phần lớn trong trang (như: "Giới thiệu", "Liên hệ").
- `<aside>`: Nội dung bổ trợ (quảng cáo, sidebar, bài viết liên quan).
- `<footer>`: Thông tin bản quyền, địa chỉ ở cuối trang.

---

## 7. Các Thẻ Metadata (Trong phần `<head>`)
Giúp Google hiểu và hiển thị trang của bạn tốt hơn.

| Thẻ | Thuộc tính | Ý nghĩa |
| :--- | :--- | :--- |
| `<meta>` | `charset="UTF-8"` | Hiển thị đúng tiếng Việt. |
| `<meta>` | `name="description" content="..."` | Đoạn mô tả ngắn xuất hiện trên kết quả tìm kiếm Google. |
| `<meta>` | `name="viewport" content="..."` | Làm trang web hiển thị đúng trên điện thoại. |
| `<link>` | `rel="icon" href="..."` | Thay đổi icon nhỏ trên tab trình duyệt (Favicon). |

---

## 8. Những Thẻ "Lạ" và Hữu ích
- `<details>` & `<summary>`: Tạo hiệu ứng đóng/mở nội dung mà không cần JavaScript.
- `<datalist>`: Tạo danh sách gợi ý khi người dùng gõ vào ô nhập liệu.
- `<abbr>`: Giải thích từ viết tắt khi di chuột qua.
- `<time>`: Giúp máy tính hiểu chính xác ngày tháng trong văn bản.

---

## 9. Mẹo thực hành & Ghi nhớ
1. **Nguyên tắc "Bao bọc":** Thẻ nào mở sau thì phải đóng trước (VD: `<strong><em>Nội dung</em></strong>`).
2. **Kebab-case:** Khi đặt tên cho `id` hoặc `class`, hãy sử dụng dấu gạch ngang (VD: `my-button-style`).
3. **Inspect Element:** Luôn nhấn F12 trong trình duyệt để xem cấu trúc HTML của các trang web lớn và học hỏi từ họ.

Tài liệu này sẽ được cập nhật thêm khi bạn tiến sâu hơn vào CSS và JavaScript! Chúc bạn học tốt!
