## 1. Thiết lập ứng dụng

'''
npx create-next-app@latest notes-app

? Would you like to use the recommended Next.js defaults?
❯   Yes, use recommended defaults
''''

## 2. Cấu trúc

'''
├── AGENTS.md
├── app
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── CLAUDE.md
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts //Chứa cấu hình next.js
├── node_modules
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
├── README.md
└── tsconfig.json
'''

`next.config.ts` //Chứa cấu hình next.js
`AGENTS.md và CLAUDE.md`: lập trình và đưa ra cảnh báo cho agent
`app`: Nơi chứa mã nguồn của ứng dụng, các thành phần bên trong mặc định là `React Server Components`. Server Components được hiển thị trên máy chủ, chứ không phải trên trình duyệt

## 3. Bộ định tuyến ứng dụng (App Router)
Trong React điều này thực hiện bằng `React Router`, trong nextjs sử dụng `App Router`, một hệ thống định tuyến dựa trên hệ thống tập tin, trong đó các thư mục và tập tin bên trong thư mục app xác định cấu trúc định tuyến ứng dụng.

