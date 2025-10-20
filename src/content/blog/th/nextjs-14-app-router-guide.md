---
title: 'คู่มือเริ่มต้นกับ Next.js 14 App Router'
date: '2024-01-15'
excerpt: 'เรียนรู้วิธีสร้างแอปพลิเคชันเว็บสมัยใหม่ด้วย Next.js 14 App Router และฟีเจอร์อันทรงพลัง'
category: 'Web Development'
tags: ['Next.js', 'React', 'App Router', 'Tutorial']
author: 'TechStudio Team'
readTime: '8 min read'
featured: true
---

# คู่มือเริ่มต้นกับ Next.js 14 App Router

Next.js 14 นำเสนอ App Router ที่ปฏิวัติวงการ เป็นระบบ routing ใหม่ที่ให้ประสิทธิภาพที่ดีขึ้น ประสบการณ์นักพัฒนาที่ดีขึ้น และความยืดหยุ่นที่เพิ่มขึ้น ในคู่มือนี้เราจะสำรวจฟีเจอร์หลักและประโยชน์ของ App Router

## App Router คืออะไร?

App Router เป็นระบบ routing ใหม่ของ Next.js ที่ใช้โครงสร้างโฟลเดอร์ `app` สร้างขึ้นบน React Server Components และให้วิธีที่ใช้งานง่ายในการจัดระเบียบ routes และ layouts ของแอปพลิเคชัน

### ประโยชน์หลัก

- **Server Components โดยค่าเริ่มต้น**: Components จะถูก render บน server โดยค่าเริ่มต้น เพื่อประสิทธิภาพที่ดีขึ้น
- **Nested Layouts**: สร้าง layouts ที่ใช้ซ้ำได้และคงอยู่ระหว่างการเปลี่ยน route
- **Streaming**: การโหลดหน้าแบบ progressive ด้วย React Suspense
- **ประสิทธิภาพที่ดีขึ้น**: ลดขนาด JavaScript bundle และโหลดหน้าเร็วขึ้น

## การตั้งค่าโปรเจค App Router แรก

มาสร้างโปรเจค Next.js ใหม่ด้วย App Router:

```bash
npx create-next-app@latest my-app --app
cd my-app
npm run dev
```

## เข้าใจโครงสร้าง App Directory

App Router ใช้ระบบ routing แบบ file-system:

```
app/
├── layout.tsx          # Root layout
├── page.tsx           # Home page
├── about/
│   └── page.tsx       # About page
├── blog/
│   ├── layout.tsx     # Blog layout
│   ├── page.tsx       # Blog listing
│   └── [slug]/
│       └── page.tsx   # Dynamic blog post
└── globals.css        # Global styles
```

## สร้าง Server Component แรก

Server Components รันบน server และสามารถเข้าถึง backend resources โดยตรง:

```tsx
// app/dashboard/page.tsx
import { db } from '@/lib/database';

export default async function Dashboard() {
  // รันบน server
  const data = await db.query('SELECT * FROM users');

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

## ทำงานกับ Client Components

เมื่อต้องการ interactivity ให้ใช้ directive `'use client'`:

```tsx
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

## Layouts และ Nested Routing

Layouts ช่วยให้คุณแชร์ UI ระหว่างหลายหน้า:

```tsx
// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='dashboard-layout'>
      <nav>Dashboard Navigation</nav>
      <main>{children}</main>
    </div>
  );
}
```

## รูปแบบการดึงข้อมูล

App Router นำเสนอรูปแบบการดึงข้อมูลใหม่:

### การโหลดข้อมูล

```tsx
// app/posts/page.tsx
async function getPosts() {
  const res = await fetch('https://api.example.com/posts');
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
```

### Loading States

```tsx
// app/posts/loading.tsx
export default function Loading() {
  return <div>Loading posts...</div>;
}
```

## การจัดการข้อผิดพลาด

สร้าง error boundaries ด้วยไฟล์ error.tsx:

```tsx
// app/posts/error.tsx
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

## Metadata และ SEO

App Router ทำให้ SEO ง่ายขึ้นด้วยการรองรับ metadata ในตัว:

```tsx
// app/blog/[slug]/page.tsx
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}
```

## แนวทางปฏิบัติที่ดี

1. **ใช้ Server Components โดยค่าเริ่มต้น**: ใช้ Client Components เฉพาะเมื่อต้องการ interactivity
2. **ปรับปรุงรูปภาพ**: ใช้ component `next/image` เพื่อประสิทธิภาพที่ดีขึ้น
3. **ใช้ Loading States ที่เหมาะสม**: ใช้ไฟล์ loading.tsx เพื่อ UX ที่ดีขึ้น
4. **จัดการข้อผิดพลาดอย่างเหมาะสม**: สร้าง error boundaries ด้วยไฟล์ error.tsx
5. **ใช้ TypeScript**: ใช้ประโยชน์จาก TypeScript เพื่อความปลอดภัยของ type

## การย้ายจาก Pages Router

หากคุณกำลังย้ายจาก Pages Router:

1. ย้าย pages จาก `pages/` ไป `app/`
2. อัปเดตรูปแบบ routing
3. แปลง API routes เป็น Route Handlers
4. อัปเดตรูปแบบการดึงข้อมูล
5. ทดสอบอย่างละเอียด

## สรุป

Next.js 14 App Router เป็นการพัฒนาที่สำคัญใน React application development ด้วยการมุ่งเน้นที่ประสิทธิภาพ ประสบการณ์นักพัฒนา และรูปแบบ React สมัยใหม่ มันคืออนาคตของการพัฒนา Next.js

เริ่มทดลองกับ App Router วันนี้และสัมผัสประโยชน์ของ server-side rendering ประสิทธิภาพที่ดีขึ้น และประสบการณ์นักพัฒนาที่ดีขึ้น

---

_พร้อมสร้างโปรเจคถัดไปด้วย Next.js 14 หรือยัง? ติดต่อ TechStudio สำหรับโซลูชันการพัฒนาเว็บตามความต้องการ_
