# Hướng dẫn chạy dự án EventFlow

Dự án này là một hệ thống microservices sử dụng **NestJS Monorepo**, **pnpm**, **Drizzle ORM**, và **Kafka**.

## 1. Yêu cầu hệ thống
- **Node.js**: Phiên bản 20 trở lên (khuyên dùng).
- **pnpm**: Trình quản lý gói chính của dự án.
- **Docker & Docker Compose**: Để chạy cơ sở dữ liệu (PostgreSQL) và Message Broker (Kafka).

## 2. Cấu trúc dự án
- `apps/api-gateway`: Cổng kết nối chính của hệ thống.
- `apps/auth-service`: Dịch vụ xác thực.
- `libs/`: Các thư viện dùng chung (database, kafka, common).

> [!WARNING]
> Hiện tại file `Dockerfile` đang bị thiếu trong thư mục gốc, và các dịch vụ `events-service`, `tickets-service`, `notifications-service` (có trong `docker-compose.yaml`) chưa thấy có mã nguồn trong thư mục `apps`. Bạn nên chạy các service đã có cục bộ.

## 3. Các bước thực hiện

### Bước 1: Cài đặt Dependencies
Mở terminal tại thư mục gốc và chạy:
```bash
pnpm install
```

### Bước 2: Cấu hình Môi trường
Cập nhật file `.env` để khớp với cấu hình trong `docker-compose.yaml`. Thay đổi nội dung `.env` thành:
```env
DATABASE_URL="postgresql://eventflowapp:eventflow_password@localhost:5432/eventflowapp"
```

### Bước 3: Chạy Hạ tầng (Infrastructure) qua Docker
Chỉ khởi động các dịch vụ cần thiết (Postgres, Kafka, Zookeeper, Redis, Mailhog) để tránh lỗi thiếu Dockerfile của các service khác:
```bash
docker-compose up -d postgres kafka zookeeper redis mailhog
```

### Bước 4: Thiết lập Cơ sở dữ liệu (Database Migration)
Sử dụng Drizzle để tạo và đẩy schema vào database:
```bash
# Tạo migration files từ schema
npx drizzle-kit generate

# Đẩy schema lên database
npx drizzle-kit push
```

### Bước 5: Chạy ứng dụng cục bộ
Bạn cần chạy ít nhất 2 service sau để hệ thống hoạt động:

1. **Khởi động Auth Service**:
   ```bash
   pnpm run start:dev auth-service
   ```

2. **Khởi động API Gateway (mở terminal mới)**:
   ```bash
   pnpm run start:dev api-gateway
   ```

## 4. Kiểm tra hoạt động
- **API Gateway**: Mặc định chạy tại cổng `3000`.
- **Kafka UI**: `http://localhost:8080` (để theo dõi tin nhắn giữa các microservices).
- **Mailhog**: `http://localhost:8025` (để kiểm tra email gửi đi).

---
**Lưu ý**: Nếu bạn gặp lỗi khi chạy `api-gateway` do thiếu các service khác (events, tickets), hãy kiểm tra phần cấu hình `environment` trong `docker-compose.yaml` hoặc mã nguồn của Gateway để tạm thời tắt các kết nối đó.
