This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



          
ผมจะช่วยสร้างไฟล์ README.md สำหรับโปรเจค Next.js + Prisma + PostgreSQL ของคุณครับ

```markdown:/Users/thanathorn.yu/Developer/leaning/nextjs-prisma/README.md
# Next.js + Prisma + PostgreSQL โปรเจค

โปรเจคนี้เป็นแอพพลิเคชันที่พัฒนาด้วย Next.js, Prisma ORM และใช้ PostgreSQL เป็นฐานข้อมูล

## เทคโนโลยีที่ใช้

- [Next.js](https://nextjs.org/) - React Framework
- [Prisma](https://www.prisma.io/) - ORM สำหรับ TypeScript และ Node.js
- [PostgreSQL](https://www.postgresql.org/) - ฐานข้อมูล
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## การติดตั้ง

1. โคลนโปรเจค:
```bash
git clone <your-repository-url>
cd <your-project-name>
```

2. ติดตั้ง dependencies:
```bash
bun install
```

3. ตั้งค่าไฟล์ environment:
   - คัดลอกไฟล์ `.env.example` เป็น `.env`
   - แก้ไขค่า DATABASE_URL ให้ตรงกับการตั้งค่าของคุณ

4. รัน Docker containers:
```bash
docker-compose up -d
```

5. รัน Prisma migrations:
```bash
bun run prisma:dbpush
bun run prisma:generate 
```

6. รันแอพพลิเคชัน:
```bash
bun run dev
```

## โครงสร้างโปรเจค

```
.
├── src/
│   ├── app/          # Next.js App Router
│   ├── components/   # React Components
│   └── lib/         # Utility functions
├── prisma/
│   └── schema.prisma # Prisma schema
├── docker-compose.yml
└── README.md
```

## การใช้งาน Docker

โปรเจคนี้ใช้ Docker Compose สำหรับจัดการ containers:

- PostgreSQL database: `docker-compose up -d db`
- (ตัวเลือก) รันทั้งแอพใน Docker: `docker-compose up -d`

## Environment Variables

สร้างไฟล์ `.env` ในโฟลเดอร์หลักของโปรเจคและกำหนดค่าต่อไปนี้:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/nextjs_prisma_db"
```

## การพัฒนา

1. รันฐานข้อมูล:
```bash
podman-compose up -d db
```

2. รัน development server:
```bash
npm run dev
```

เข้าถึงแอพพลิเคชันได้ที่ [http://localhost:3000](http://localhost:3000)

## การ Deploy

1. สร้าง production build:
```bash
npm run build
```

2. รัน production server:
```bash
npm start
```

## License

MIT
```

README นี้ประกอบด้วยข้อมูลสำคัญสำหรับการเริ่มต้นใช้งานโปรเจค รวมถึง:
- รายละเอียดเทคโนโลยีที่ใช้
- ขั้นตอนการติดตั้ง
- การตั้งค่า Docker
- โครงสร้างโปรเจค
- การตั้งค่า Environment Variables
- คำแนะนำสำหรับการพัฒนาและ Deploy

คุณสามารถปรับแต่ง README นี้ให้เหมาะสมกับความต้องการเพิ่มเติมของโปรเจคได้ครับ มีอะไรให้ช่วยเพิ่มเติมไหมครับ?

        